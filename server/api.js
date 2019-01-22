const express = require("express");
const router = express.Router();
const Details = require("./models/userData");
const mongoose = require("mongoose");

router.get('/getData', (req, res, next) => {
  
    Details.find({}).exec((err,result) =>
    {
        if(err){
        console.log("error get", err);
            return next(err);
        }
        else{
            console.log("result get", result);
            res.status(200).json(result);
        }
        
    });
    //res.send("getData Called");
});

router.post('/submitDetails', (req, res, next) => {
   
   try{
       req.body = JSON.parse(Object.keys(req.body)[0])
       console.log("*****rrreeqq body in try***",req.body);

       /*const details = {
           fname : req.body.first,
           lname : req.body.last
       }*/
       //mongo data
       const details = new Details({
        _id: new mongoose.Types.ObjectId(),
            fname : req.body.first,
           lname : req.body.last,
           email : req.body.mail
       });
       //it store is db
       details.save().then(result => {
           console.log("**result**", result);
       }).catch(err => console.log("***error***",err));

       res.status(200).json({
           message : "details are : ",
           userDetails : details
       });

    }catch(err){
        req.body = req.body
        console.log("*****rrreeqq body in err***",req.body);
    } 

    //res.send("submitDetails called");
});


router.delete('/:deleteData', (req, res, next) => {
    const id =  req.params.deleteData;
    Details.findById({_id:id})
    .remove()
    .then(doc => {
        console.log("gremoving from Database",doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log("error in removing",err);
        res.status(500).json({error:err});
    });
});

router.put('/:updateData', (req, res, next) => {
    req.body = JSON.parse(Object.keys(req.body)[0]);
    console.log("next req", req.body);
    const id =  req.params.updateData;
    const updateDetails = {
        fname : req.body.first,
           lname : req.body.last,
           email : req.body.mail
    }
    /*const updateDetails = {};
    for(const details of req.body){
        updateDetails[details.propName] = details.value;
    }
    console.log("update details",updateDetails);*/
    Details.update({_id: id}, {$set:updateDetails})
    .exec()
    .then(result => {
        console.log("result", result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log("error in updating", err);
        res.status(500).json({
            error : err
        });
    });

});

router.get('/:ID', (req, res, next) => {
    
    const id =  req.params.ID;
     Details.findById({_id: id})
     .exec()
     .then(doc => {
         console.log("getting from Database",doc);
         res.status(200).json(doc);
     })
     .catch(err => {
         console.log("error in gettiing",err);
         res.status(500).json({error:err});
     });
  });


module.exports = router;
