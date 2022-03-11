const Category=require('../models/Category');

module.exports={
    category :async (req,res)=>{
        let categories=await Category.find();
        console.log(categories);
        let data ={
            page  : 'category/index',
            title : 'Categories',
            categories : categories,
            scriptCustom : 'category'
        }

        res.render('index', data);
    },
    saveCategory :async (req,res)=>{
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
    deleteCategories : async (req,res)=>{
        const { id }=req.params;
        console.log(id);
        await Category.deleteOne({ _id : id });
        res.redirect('/admin/categories');
    }
}