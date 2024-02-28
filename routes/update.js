const express = require('express');
const router = express.Router();
const db = require('../server');



// Update a shop by its ID (mettre put car le patch change automatiquement l'ID, cf https://github.com/api-platform/core/issues/4293)
router.put('/:id/shops', (req, res) => {
    const idshops = req.params.id;
    const shopspostal = "83330";
    const shopscountry = "Le Beausset";
    const {shopsName, shopsstreetnb, shopsstreetname,  shopsimg, shopslogo, shopstype_idshopstype} = req.body;
    const query = 'UPDATE shops SET `shopsName` = ?, `shopsstreetnb` = ?, `shopsstreetname` = ?, `shopspostal` = ?, `shopscountry` = ?, `shopsimg` = ?, `shopslogo` = ?, `shopstype_idshopstype` = ? WHERE `idshops` = ?';


    db.query(query, [shopsName, shopsstreetnb, shopsstreetname, shopspostal,shopscountry, shopsimg, shopslogo, shopstype_idshopstype,idshops], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying the shop: ' + err.message });
        } else {
            res.status(201).json({ message: "Shop successfully modified"});
        }
    });
});

// Update a type by its ID 
router.put('/:id/type', (req, res) => {
    const idshopstype = req.params.id;
    const {shopstype} = req.body;
    const query = 'UPDATE shopstype SET `shopstype` = ?  WHERE `idshopstype` = ?';


    db.query(query, [shopstype,idshopstype], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying the type : ' + err.message });
        } else {
            res.status(201).json({ message: "Type successfully modified"});
        }
    });
});

// Update a department by its ID 
router.put('/:id/department', (req, res) => {
    const iddepartment = req.params.id;
    const {departmentname} = req.body;
    const query = 'UPDATE department SET `departmentname` = ?  WHERE `iddepartment` = ?';


    db.query(query, [departmentname,iddepartment], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying the department : ' + err.message });
        } else {
            res.status(201).json({ message: "Department successfully modified"});
        }
    });
});

// Update a unit by its ID 
router.put('/:id/units', (req, res) => {
    const idunits = req.params.id;
    const {unitsname} = req.body;
    const query = 'UPDATE units SET `unitsname` = ?  WHERE `idunits` = ?';


    db.query(query, [unitsname,idunits], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying the unit: ' + err.message });
        } else {
            res.status(201).json({ message: "Unit successfully modified"});
        }
    });
});

// Update a product by its ID 
router.put('/:id/products', (req, res) => {
    const idproducts = req.params.id;
    const {productsname, productsdescription, productsprice, productsimg, productsweight, units_idunits, department_iddepartment} = req.body;
    const query = 'UPDATE products SET `productsname` = ?, `productsdescription` = ?, `productsprice` = ?, `productsimg` = ?,`productsweight` = ?, `units_idunits` = ?, `department_iddepartment` = ? WHERE `idproducts` = ?';


    db.query(query, [productsname, productsdescription, productsprice,productsimg, productsweight, units_idunits, department_iddepartment,idproducts], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying the product : ' + err.message });
        } else {
            res.status(201).json({ message: "Product successfully modified"});
        }
    });
});

   
// Update a shops_has_department by shop
router.put('/:id/shd', (req, res) => {
    const idshops = req.params.id;
    const {department_iddepartment,products_idproducts} = req.body;
    const query = 'UPDATE shops_has_department SET `department_iddepartment` = ?, `products_idproducts` = ?  WHERE `shops_idshops` = ?';


    db.query(query, [department_iddepartment,products_idproducts, idshops], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error modifying : ' + err.message });
        } else {
            res.status(201).json({ message: "Successfully modified"});
        }
    });
});

module.exports = router;

