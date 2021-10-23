CREATE DATABASE herbshop_db;

--\c into products

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_img text,
    product_name varchar(255),
    product_detail text,
    product_price float,
    quantity integer
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_order_id varchar(255) NOT NULL,
    customer_name varchar(255) NOT NULL,
    customer_phone varchar(255) NOT NULL,
    customer_email varchar(255) NOT NULL,
    customer_address text NOT NULL,
    customer_zipcode varchar(255) NOT NULL,
    customer_order_products jsonb NOT NULL,
    order_total_price float NOT NULL,
    order_date_time TIMESTAMPTZ DEFAULT NOW()
);

-- ALTER SEQUENCE orders_order_id_seq RESTART WITH 1;