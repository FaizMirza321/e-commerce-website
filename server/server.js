import express from 'express'
import cors from 'cors'
import db from './db.js'
const port = 9000
const app = express()

app.use(cors())
app.use(express.json())

async function createTable() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        brand TEXT,
        category TEXT,
        price NUMERIC(10,2) NOT NULL,
        stock INTEGER DEFAULT 0,
        description TEXT,
        image_url TEXT
      )
    `)

    console.log("Products table created")
  } catch (err) {
    console.error("Error creating table:", err)
  }
}

async function seedProducts() {
    try {
        await db.query(`
            INSERT INTO products (title, brand, category, price, stock, description, image)
            VALUES
            ('MacBook Air M2','Apple','Laptop',1199.99,12,'Lightweight Apple laptop','/images/macbook.jpg'),
            ('Dell XPS 13','Dell','Laptop',999.99,8,'Premium Dell ultrabook','/images/dellxps.jpg'),
            ('Sony WH-1000XM5','Sony','Headphones',349.99,20,'Noise cancelling headphones','/images/sony.jpg')
            ON CONFLICT DO NOTHING
            `)
        console.log("Products inserted")
    } catch (err) {
    console.error("Error creating table:", err)
    }
}

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    res.sendStatus(200)
})

app.get("/api/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products ")
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database products error")
  }
})

app.post("/create-listing", async (req, res) => {
  try {
    const { title, brand, category, price, stock, description, image_url } = req.body;
    await db.query(`INSERT INTO products (title, brand, category, price, stock, description, image)
                    VALUES $1 $2 $3 $4 $5 $6 $7`,
                  [title, brand, category, price, stock, description, image_url])
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database create listing error")
  }
})

app.post("/products", async (req, res) => {
  try {
    const { title } = req.query;
    const result = await db.query(
      "SELECT * FROM products WHERE title ILIKE $1", //search for rows that contain the substring anywhere for title (case insensitive) 
      [`%${title}%`])
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database product search error")
  }
})

async function waitForDB() {
  let connected = false

  while (!connected) {
    try {
      await db.query("SELECT 1")
      connected = true
      console.log("Database connected")
    } catch (err) {
      console.log("Waiting for database...")
      await new Promise(res => setTimeout(res, 2000))
    }
  }
}

async function startServer() {
  try {
    await waitForDB()
    await createTable()
    
  } catch (err) {
    console.error(err)
  }
}

startServer()
app.listen(9000, "0.0.0.0", () => {
      console.log("Server running on port ", port)
    })