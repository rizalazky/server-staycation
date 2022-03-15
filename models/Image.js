const mongoose=require('mongoose');
const { ObjectId } = mongoose.Schema;

const imageSchema=new mongoose.Schema({
    imageUrl:{
        type:String,
        required : true
    },
    idItem :{
        type : ObjectId,
        ref  : 'Item'
    }
})


module.exports =mongoose.model('Image',imageSchema)