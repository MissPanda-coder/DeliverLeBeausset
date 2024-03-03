const express = require("express");
const router = express.Router();
const db = require("../server");

//fetch la page admin
// app.get('/dashboard', function(req, res) {
//   if (req.session && req.session.isAdmin) {
//       res.render('dashboard', { isAdmin: true });
//   } else {
//       res.redirect('/login');
//   }
// });

// Fetch tous les magasins
router.get("/shops", (req, res) =>
  db.query("SELECT * FROM shops", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error fetching shops: " + err.message });
    } else {
      res.json(results);
    }
  })
);

// Fetch magasins par type
router.get("/shopstype/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT shopsName, shopsstreetnb, shopsstreetname FROM shops JOIN shopstype ON idshopstype = shopstype_idshopstype WHERE idshopstype = ?",
    [id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error fetching shops by type: " + err.message });
      } else {
        res.json(results);
      }
    }
  );
});

// Fetch rayons d'un magasin
router.get("/departmentbyshop/:shopId", (req, res) => {
  const shopId = req.params.shopId;

  db.query(
    `SELECT DISTINCT department.departmentname, shops.shopsName FROM department
        JOIN shops_has_department ON shops_has_department.department_iddepartment = department.iddepartment
        JOIN shops ON shops_has_department.shops_idshops = shops.idshops
        WHERE shops.idshops = ?`,
    [shopId],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error fetching departments: " + err.message });
      } else {
        res.json(results);
      }
    }
  );
});

// Fetch tous les rayons existants
router.get("/department/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT departmentname FROM department
        WHERE iddepartment = ?`,
    [id],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error fetching departments: " + err.message });
      } else {
        res.json(results);
      }
    }
  );
});

// Fetch produits d'un magasin par rayon
router.get("/productsbydepartment/:shopId/:departmentId", (req, res) => {
  const shopId = req.params.shopId;
  const departmentId = req.params.departmentId;
  db.query(
    `SELECT products.productsname, products.productsdescription, products.productsprice, products.productsweight, units.unitsname FROM products
    JOIN units ON products.units_idunits = units.idunits
        JOIN shops_has_department ON shops_has_department.products_idproducts = products.idproducts
        JOIN shops ON shops_has_department.shops_idshops = shops.idshops
        WHERE shops.idshops = ? AND shops_has_department.department_iddepartment = ?`,
    [shopId, departmentId],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error fetching products: " + err.message });
      } else {
        res.json(results);
      }
    }
  );
});

// Fetch produits par rayon
router.get("/products/:departmentId", (req, res) => {
  const departmentId = req.params.departmentId;
  db.query(
    `SELECT products.idproducts,products.productsname,products.productsimg, shops.shopsName, products.productsweight,units.unitsname, products.productsdescription, products.productsprice, products.euros FROM products
    JOIN units ON products.units_idunits = units.idunits
        JOIN shops_has_department ON shops_has_department.products_idproducts = products.idproducts
        JOIN shops ON shops_has_department.shops_idshops = shops.idshops
        WHERE shops_has_department.department_iddepartment = ?`,
    [departmentId],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Error fetching products: " + err.message });
      } else {
        res.json(results);
      }
    }
  );
});
// Fetch prix d'un produit d'un magasin par rayon
router.get("/productprice/:shopId/:departmentId", (req, res) => {
  const shopId = req.params.shopId;
  const departmentId = req.params.departmentId;
  db.query(
    `SELECT products.productsname, products.productsprice FROM products
        JOIN shops_has_department ON shops_has_department.products_idproducts = products.idproducts
        JOIN shops ON shops_has_department.shops_idshops = shops.idshops
        WHERE shops.idshops = ? AND shops_has_department.department_iddepartment = ?`,
    [shopId, departmentId],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({
            error: "Error fetching products name and price: " + err.message,
          });
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
