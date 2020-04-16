const router = require('express').Router();
const Product = require('../../models/homeservice/productsElectrician.model');

router.route('/').get((req,res)=>{
    Product.find()
        .then(products=>res.json(products))
        .catch(error=>res.status(400).json('Error: '+error));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const inCart = req.body.inCart;
    const category = req.body.category;
    const id = req.body.id;
    
    const newProduct = new Product({
        name,
        price,
        description,
        quantity,
        inCart,
        category,
        id
    });
    newProduct.save()
        .then(()=>res.json('Product created'))
        .catch(error=>res.status(400).json('Error: '+error));
});

//delete

//put

module.exports = router;