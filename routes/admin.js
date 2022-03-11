var express = require('express');
const adminController = require('../controllers/adminController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data ={
        page  : 'admin/index',
        title : 'Admin'
    }
    res.render('index', data);
});

router.get('/categories', adminController.category);
router.post('/categories',adminController.saveCategory);
router.delete('/categories/:id',adminController.deleteCategories);

module.exports = router;
