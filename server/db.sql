CREATE DATABASE e-commerce;

CREATE TABLE IF NOT EXISTS products (
    item_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    brand varChar(255),
    category varChar(255),
    price NUMERIC(5,2) NOT NULL,
    stock INTEGER DEFAULT 1,
    description TEXT,
    image VARBINARY(MAX),
    user_id FOREIGN KEY
    
)

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user(user_id),
    item_id INT REFERENCES products(item_id)
)

CREATE TABLE IF NOT EXISTS cart (
    cart_id SERIAL PRIMARY KEY    
    user_id INT NOT NULL REFERENCES user(user_id),
    item_id INT NOT NULL REFERENCES products(item_id),
    quantity INTEGER DEFAULT 1

)    