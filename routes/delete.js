const express = require("express");
const router = express.Router();
const db = require("../server");

// Delete a shop by its ID
router.delete("shops/:id", (req, res) => {
  const id = shops.req.params.id;
  db.query("DELETE FROM shops WHERE idshops= ?", [id], (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ error: "Error deleting the shop : " + err.message });
    } else {
      res.json({ message: "Shop successfully deleted", id: id });
    }
  });
});

// Delete a shoptype by its ID
router.delete("shopstype/:id", (req, res) => {
  const id = shopstype.req.params.id;
  db.query(
    "DELETE FROM shopstype WHERE idshopstype= ?",
    [id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error deleting the shoptype : " + err.message });
      } else {
        res.json({ message: "Shoptype successfully deleted", id: id });
      }
    }
  );
});

// Delete a department by its ID
router.delete("department/:id", (req, res) => {
  const id = department.req.params.id;
  db.query(
    "DELETE FROM department WHERE iddepartment= ?",
    [id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error deleting department : " + err.message });
      } else {
        res.json({ message: "Department successfully deleted", id: id });
      }
    }
  );
});

// Delete a product by its ID
router.delete("products/:id", (req, res) => {
  const id = products.req.params.id;
  db.query(
    "DELETE FROM products WHERE idproducts = ?",
    [id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error deleting product : " + err.message });
      } else {
        res.json({ message: "Product successfully deleted", id: id });
      }
    }
  );
});

module.exports = router;
