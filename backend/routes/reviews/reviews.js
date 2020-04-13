const router = require('express').Router();
const Review = require('../../models/userReviews.model');

router.route('/').get((req,res)=>{
    Review.find()
        .then(professionals=>res.json(professionals))
        .catch(error=>res.status(400).json('Error: '+error));
});


router.route('/category').post((req,res)=>{
    Review.find({category: req.body.category})
        .then(reviews=>res.json(reviews))
        .catch(error=>res.status(400).json('Error: '+error));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const comment = req.body.comment;
    const ratings = req.body.ratings;
    const category = req.body.category;
    
    
    const newReview = new Review({
        name,
        comment,
        ratings,
        category
    });
    newReview.save()
        .then(()=>res.json('Review created'))
        .catch(error=>res.status(400).json('Error: '+error));
});

//delete

//put

module.exports = router;