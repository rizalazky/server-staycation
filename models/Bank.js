const mongoose=require('mongoose');


const bankSchema=new mongoose.Schema({
    nameBank:{
        type:String,
        required : true
    },
    nomerRekening:{
        type:String,
        required : true
    },
    name:{
        type:String,
        required : true
    },
    imageUrl : {
        type : String,
    }
})


module.exports =mongoose.model('Bank',bankSchema)