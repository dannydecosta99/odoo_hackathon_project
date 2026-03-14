const db = require("../config/db");

exports.stockIn = (req, res) => {

  const { product_id, quantity } = req.body;

  const movementSQL = `
    INSERT INTO inventory_movements (product_id, type, quantity)
    VALUES (?, 'IN', ?)
  `;

  const updateSQL = `
    UPDATE products
    SET stock = stock + ?
    WHERE id = ?
  `;

  db.query(movementSQL, [product_id, quantity], (err) => {

    if (err) {
      return res.status(500).json({ message: "Error recording stock IN" });
    }

    db.query(updateSQL, [quantity, product_id], (err) => {

      if (err) {
        return res.status(500).json({ message: "Error updating stock" });
      }

      res.json({ message: "Stock added successfully" });

    });

  });

};



exports.stockOut = (req, res) => {

  const { product_id, quantity } = req.body;

  const movementSQL = `
    INSERT INTO inventory_movements (product_id, type, quantity)
    VALUES (?, 'OUT', ?)
  `;

  const updateSQL = `
    UPDATE products
    SET stock = stock - ?
    WHERE id = ?
  `;

  db.query(movementSQL, [product_id, quantity], (err) => {

    if (err) {
      return res.status(500).json({ message: "Error recording stock OUT" });
    }

    db.query(updateSQL, [quantity, product_id], (err) => {

      if (err) {
        return res.status(500).json({ message: "Error updating stock" });
      }

      res.json({ message: "Stock removed successfully" });

    });

  });

};



exports.getMovements = (req, res) => {

  const sql = `
    SELECT inventory_movements.*, products.name
    FROM inventory_movements
    JOIN products ON inventory_movements.product_id = products.id
  `;

  db.query(sql, (err, results) => {

    if (err) {
      return res.status(500).json({ message: "Error fetching movements" });
    }

    res.json(results);

  });

};