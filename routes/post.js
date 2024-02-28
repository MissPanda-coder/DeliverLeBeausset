const express = require('express');
const router = express.Router();
const db = require('../server');

// Add a shop
router.post('/postshop', (req, res) => {
    const shopspostal = "83330";
    const shopscountry = "Le Beausset";
    const { shopsName, shopsstreetnb, shopsstreetname,  shopsimg, shopslogo, shopstype_idshopstype } = req.body;
    const query = 'INSERT INTO `shops` (`shopsName`, `shopsstreetnb`, `shopsstreetname`, `shopspostal`, `shopscountry`, `shopsimg`, `shopslogo`, `shopstype_idshopstype`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [shopsName, shopsstreetnb, shopsstreetname, shopspostal,shopscountry, shopsimg, shopslogo, shopstype_idshopstype], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding the shop: ' + err.message });
        } else {
            res.status(201).json({ message: "Shop successfully added", id: results.insertId });
        }
    });
});

// Add a shopstype
router.post('/postshopstype', (req, res) => {
    const { shopstype } = req.body;
    const query = 'INSERT INTO `shopstype` (`shopstype`) VALUES (?)';

    db.query(query, [shopstype ], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding the type oh shops : ' + err.message });
        } else {
            res.status(201).json({ message: "Type of shops successfully added", id: results.insertId });
        }
    });
});

// Add a department
router.post('/postdepartment', (req, res) => {
    const { departmentname } = req.body;
    const query = 'INSERT INTO `department` (`departmentname`) VALUES (?)';

    db.query(query, [departmentname], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding the department: ' + err.message });
        } else {
            res.status(201).json({ message: "Department successfully added", id: results.insertId });
        }
    });
});

// Add a product
router.post('/postproduct', (req, res) => {
    const { productsname, productsdescription, productsprice, productsweight, units_idunits, department_iddepartment } = req.body;
    const query = 'INSERT INTO `products` (`productsname`, `productsdescription`, `productsprice`, `productsweight`,`units_idunits`, `department_iddepartment`) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(query, [productsname, productsdescription, productsprice, productsweight, units_idunits,department_iddepartment], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding the product: ' + err.message });
        } else {
            res.status(201).json({ message: "Product successfully added", id: results.insertId });
        }
    });
});


// Add a unit
router.post('/postunit', (req, res) => {
    const { unitsname } = req.body;
    const query = 'INSERT INTO `units` (`unitsname`) VALUES (?)';

    db.query(query, [unitsname], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding the unit: ' + err.message });
        } else {
            res.status(201).json({ message: "Unit successfully added", id: results.insertId });
        }
    });
});


// Add a shops_has_department
router.post('/postshops_has_department', (req, res) => {
    const { shops_idshops, department_iddepartment,products_idproducts } = req.body;
    const query = 'INSERT INTO `shops_has_department` (`shops_idshops`, `department_iddepartment`,`products_idproducts`) VALUES (?, ?, ?)';

    db.query(query, [shops_idshops, department_iddepartment,products_idproducts], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error adding : ' + err.message });
        } else {
            res.status(201).json({ message: "Successfully added", id: results.insertId });
        }
    });
});


module.exports = router;
