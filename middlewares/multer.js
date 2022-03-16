const multer  = require('multer')
const path = require('path')
const diskStorage=multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'public/images');
    },
    filename : function(req,file,cb){
        cb(
            null,file.fieldname +'_' + Date.now() + path.extname(file.originalname)
        );
    }
})

const uploadSingle = multer({
    storage : diskStorage
}).single('images')


const uploadMulti = multer({
    storage : diskStorage
}).array('images')


module.exports = {uploadSingle,uploadMulti}