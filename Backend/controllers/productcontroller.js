const db = require("../config/db");

exports.addProduct = (req, res) => {

  const { name, sku, category, price, stock } = req.body;

  const sql = `
    INSERT INTO products (name, sku, category, price, stock)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, sku, category, price, stock], (err, result) => {

    if (err) {
      return res.status(500).json({
        message: "Error adding product",
        error: err
      });
    }

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertId
    });

  });

};


exports.getProducts = (req, res) => {

  const sql = "SELECT * FROM products";

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Error fetching products"
      });
    }

    res.json(results);

  });

};