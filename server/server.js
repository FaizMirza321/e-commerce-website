import express from 'express'
import cors from 'cors'
import db from './db.js'
const port = 9000
const app = express()

app.use(cors())
app.use(express.json())
async function dropTables(){
  try {
    await db.query("DROP TABLE IF EXISTS products")
    console.log("dropped tables")
  } catch (err) {
    console.error("Error creating table:", err)
  }
}
async function createTable() {
  try {
    await db.query(
      `CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      brand TEXT,
      category TEXT,
      price NUMERIC(10,2) NOT NULL,
      stock INTEGER DEFAULT 0,
      description TEXT)`)

    console.log("Products table created")
  } catch (err) {
    console.error("Error creating table:", err)
  }
}

async function seedProducts() {
    try {
        await db.query(`
          INSERT INTO products (title, brand, category, price, stock, description)
          VALUES
          ('MacBook Air M2','Apple','Laptop',1199.99,12,'Lightweight Apple laptop'),
          ('Dell XPS 13','Dell','Laptop',999.99,8,'Premium Dell ultrabook'),
          ('Sony WH-1000XM5','Sony','Headphones',349.99,20,'Noise cancelling headphones')
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
    const result = await db.query(`SELECT * FROM products;`)
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database products error")
  }
})

app.post("/create-listing", async (req, res) => {
  try {
    const { title, brand, category, price, stock, description } = req.body;
    const result = await db.query(`
      INSERT INTO products (title, brand, category, price, stock, description)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`, // get the data back
      [title, brand, category, price, stock, description]) // insert params for listing
    console.log("listing made")
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database create listing error")
  }
})

app.get("/products", async (req, res) => {
  try {
    const { title } = req.query;
    const result = await db.query(
      `SELECT * FROM products WHERE title ILIKE $1`, //search for rows that contain the substring anywhere for title (case insensitive) 
      [`%${title}%`])
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database product search error")
  }
})

app.get("/listings", async (req, res) => {
  try {
    const { user_id } = req.query;
    const result = await db.query(
      `SELECT * FROM products WHERE user_id = $1`, //search for product listings created by the user 
      [user_id])
    res.json(result.rows)
  } catch (err) {
    res.status(500).send("Database listings search error")
  }
})

// main objective
app.get("/products/filter-by-value", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

app.get("/products/filter-by-performance", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

app.get("/products/filter-by-sustainability", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
})

async function waitForDB(retries = 6, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await db.query("SELECT 1");
      console.log("Database connected:", res.rows[0].current_database);
      return;
    } catch (err) {
      console.log(`Waiting for database... (${i + 1}/${retries})`);
      await new Promise(res => setTimeout(res, delay));
    }
  }

  throw new Error("Could not connect to database after retries");
}

async function startServer() {
  try {
    await dropTables();
    await waitForDB();
    await createTable();
    await seedProducts();

    app.listen(9000, "0.0.0.0", () => {
      console.log("Server running on port", port);
    });

  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
}

startServer();