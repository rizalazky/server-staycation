var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();
const { uploadOne,uploadMulti }= require('../middlewares/multer');

/* GET home page. */
router.get('/', function(req, res, next) {
    let data ={
        page  : 'admin/index',
        title : 'Admin'
    }
    res.render('index', data);
});
//  Categories
router.get('/categories', adminController.category);
router.post('/categories',adminController.saveCategory);
router.delete('/categories/:id',adminController.deleteCategories);
//  End Categories

// Bank
router.get('/banks', adminController.bank);
router.post('/banks',adminController.addBank);
router.put('/banks',adminController.editBank);
router.delete('/banks/:id',adminController.deleteBank);
// End Bank

// Item
router.get('/items', adminController.item);
router.post('/items', uploadMulti ,adminController.addItem);
// router.put('/items',adminController.editItem);
router.delete('/items/:id',adminController.deleteItem);
// End Item

module.exports = router;
