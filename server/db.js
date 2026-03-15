import pkg from "pg"
const { Pool } = pkg

const db = new Pool({
  host: "db",
  user: "postgres",
  password: "password123",
  database: "db123",
  port: 5432
})

export default db