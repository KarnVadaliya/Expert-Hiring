const router = require('express').Router();
const Professional = require('../../models/professionals.model');

router.route('/').get((req,res)=>{
    Professional.find()
        .then(professionals=>res.json(professionals))
        .catch(error=>res.status(400).json('Error: '+error));
});


router.route('/category').post((req,res)=>{
    Professional.find({category: req.body.category, serviceInCity: req.body.city})
        .then(professionals=>res.json(professionals))
        .catch(error=>res.status(400).json('Error: '+error));
});

router.route('/city').post((req,res)=>{
    Professional.find({serviceInCity: req.body.city})
        .then(professionals=>res.json(professionals))
        .catch(error=>res.status(400).json('Error: '+error));
});

router.route('/review/:id').post((req,res)=>{
    Professional.findById(req.params.id)
        .then(professionals=>{
            const tempReview = {
                name: req.body.name,
                starsGiven: req.body.starsGiven,
                comment: req.body.comment,
                date: new Date()
            }

            Professional.updateOne({_id: req.params.id}, {
                $push: { reviews: tempReview }
            })
                .then(data=> res.status(200).send(data))
                .catch(error => res.status(400).send(error.message));
        })
        .catch(err=>{
            res.status(400).send(err.message);
        })
        

});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const ratings = req.body.ratings;
    const numberOfRatings = req.body.numberOfRatings;
    const rated5Stars = req.body.rated5Stars;
    const reviews = req.body.reviews;
    const category = req.body.category;
    const serviceInCity = req.body.serviceInCity;
    
    const newProfessional = new Professional({
        name,
        address,
        ratings,
        numberOfRatings,
        rated5Stars,
        reviews,
        category,
        serviceInCity
    });
    newProfessional.save()
        .then(()=>res.json('Professional created'))
        .catch(error=>res.status(400).json('Error: '+error));
});

//delete

//put

module.exports = router;