const multer  = require('multer')
const upload = multer({ dest: 'public/images/' })

const uploadSingle = upload.single('images')


const uploadMulti = upload.array('images')


module.exports = {uploadSingle,uploadMulti}