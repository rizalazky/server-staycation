const Category=require('../models/Category');
const Item=require('../models/Item');
const Bank=require('../models/Bank');

module.exports={
    //  Category
    category :async (req,res)=>{
        let categories=await Category.find();

        let alert = {
            message : req.flash('alertMessage'),
            status  : req.flash('alertStatus')
        }
        let data ={
            page  : 'category/index',
            title : 'Categories',
            categories : categories,
            scriptCustom : 'category',
            alert : alert
        }

        res.render('index', data);
    },
    saveCategory :async (req,res)=>{
        const { name,id } = req.body;
        let alertMessage = '';
        let alertStatus = '';
        try {
            if(id){
                let category=await Category.findById(id);
                category.name = name;
                await category.save();
                alertMessage = `Success Update Category`
            }else{
                await Category.create({name});
                alertMessage = `Success Add Category`
            }
            alertStatus = `success`
        } catch (error) {
            alertMessage = `Error, ${ error.message }`
            alertStatus = `danger`
        }

        req.flash('alertMessage',alertMessage);
        req.flash('alertStatus',alertStatus);
        
        res.redirect('/admin/categories');
    },
    deleteCategories : async (req,res)=>{
        const { id }=req.params;
        console.log(id);
        try {
            await Category.deleteOne({ _id : id });
            req.flash('alertMessage','Success Delete Category');
            req.flash('alertStatus', 'success');
        } catch (error) {
            req.flash('alertMessage','Failed Delete Category');
            req.flash('alertStatus', 'danger');
        }
        res.redirect('/admin/categories');
    },
    // End Category

    // Bank
    bank : async(req,res)=>{
        let bank=await Bank.find();

        let alert = {
            message : req.flash('alertMessage'),
            status  : req.flash('alertStatus')
        }
        let data ={
            page  : 'bank/index',
            title : 'Bank',
            banks : bank,
            scriptCustom : 'bank',
            alert : alert
        }

        res.render('index', data);
    },
    addBank : async (req,res)=>{
        let { nameBank,nomerRekening,name } = req.body;

        try {
            await Bank.create({nameBank,nomerRekening,name});
            req.flash('alertMessage', 'Success Add Bank');
            req.flash('alertStatus', 'success');
        } catch (error) {
            req.flash('alertMessage', 'Failed Add Bank');
            req.flash('alertStatus', 'danger');
        }

        res.redirect('/admin/banks')
    },
    editBank : async (req,res)=>{
        let { nameBank,nomerRekening,name,id } = req.body;
    
        try {
            let bank=await Bank.findById(id);
            bank.name = name;
            bank.nameBank = nameBank;
            bank.nomerRekening = nomerRekening;
            await bank.save();
            req.flash('alertMessage', 'Success Update Bank');
            req.flash('alertStatus', 'success');
        } catch (error) {
            req.flash('alertMessage', 'Failed Update Bank'+ error.message);
            req.flash('alertStatus', 'danger');
        }
    
        res.redirect('/admin/banks')
        
    },
    deleteBank : async (req,res)=>{
        const { id }=req.params;
        console.log(id);
        try {
            await Bank.deleteOne({ _id : id });
            req.flash('alertMessage','Success Delete Bank');
            req.flash('alertStatus', 'success');
        } catch (error) {
            req.flash('alertMessage','Failed Delete Bank');
            req.flash('alertStatus', 'danger');
        }
        res.redirect('/admin/banks');
    },
    //  End Bank
    // Item
    item :async (req,res)=>{
        let items=await Item.find();

        let alert = {
            message : req.flash('alertMessage'),
            status  : req.flash('alertStatus')
        }
        let data ={
            page  : 'bank/index',
            title : 'Items',
            banks : items,
            scriptCustom : 'bank',
            alert : alert
        }

        res.render('index', data);
    },
    addItem :async (req,res)=>{
        const { name,id } = req.body;
        if(id){
            let category=await Category.findById(id);
            category.name = name;
            await category.save();
        }else{
            await Category.create({name});
        }
        console.log(name);
        res.redirect('/admin/categories');
    },
    deleteItem : async (req,res)=>{
        const { id }=req.params;
        console.log(id);
        await Category.deleteOne({ _id : id });
        res.redirect('/admin/categories');
    }
}