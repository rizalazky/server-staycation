const mongoose=require('mongoose');
const { ObjectId } = mongoose.Schema;

const activitySchema=new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    qty:{
        type:Number,
        required : true
    },
    imageUrl:{
        type:String,
        required : true
    },
    isPopular:{
        type:Boolean
    },
    idItem :{
        type : ObjectId,
        ref  : 'Item'
    }
})


module.exports =mongoose.model('Activity',activitySchema)