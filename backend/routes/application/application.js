const router = require('express').Router();
const Application = require('../../models/applications.model');

router.route('/').get((req,res)=>{
    Application.find()
        .then(applications=>res.json(applications))
        .catch(error=>res.status(400).json('Error: '+error));
});


router.route('/add').post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const skills = req.body.skills;
    const location = req.body.location;
    const position = req.body.position;
    
    
    const newSubmission = new Application({
        name,
        email,
        phone,
        skills,
        location,
        position
    });
    newSubmission.save()
        .then(()=>res.json('Application Submitted'))
        .catch(error=>res.status(400).json('Error: '+error));
});




//delete

//put

module.exports = router;