const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const pool = require('./db');
const { v4: uuidv4 } = require('uuid');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');
app.use(express.json()); // => req.body

// ROUTES //

// GET ALL PRODUCTS

app.get('/getAllProducts', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products');
    res.json(products.rows);
  } catch (err) {
    console.log(err);
  }
});

// SUBMIT ORDER INFORMATION

app.post('/submitOrder', async (req, res) => {
  console.log(req.body);
  try {
    const {
      name,
      phone,
      email,
      address,
      zipcode,
      customer_order_products,
      order_total_price,
    } = req.body;
    const customer_order_id = uuidv4();
    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !zipcode ||
      customer_order_products === [] ||
      !order_total_price
    ) {
      return res.status(400).json({ error: 'INVALID INFORMATION' });
    }
    // console.log();
    const newOrder = await pool.query(
      'INSERT INTO orders(customer_order_id,customer_name,customer_phone,customer_email,customer_address,customer_zipcode,customer_order_products,order_total_price) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [
        customer_order_id,
        name,
        phone,
        email,
        address,
        zipcode,
        JSON.stringify(customer_order_products),
        order_total_price,
      ]
    );
    // res.status(200).json(newOrder);
    console.log(req.body);
    res.json({
      message: 'We have received your order and information',
      status: 'SUCCESS',
    });
  } catch (err) {
    res.json({ error: err, status: 'ERROR' });
    console.log(err);
  }
});

// GET ALL ORDERS

app.get('/getOrders', async (req, res) => {
  try {
    const orders = await pool.query('SELECT * FROM orders');
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log('SERVER IS LISTENING ON PORT 5000');
});
