var express = require("express");
var router = express.Router();


router.get('/getData', (req, res, next) => {
    res.send("getData secondApi Called");
});

router.post('/postData', (req, res, next) => {
   // console.log("*****rrreeqq ***",req);
   //res.setHeader('Content-Type', 'application/json');
    
    console.log("*****rrreeqq ***",req);
    console.log("*****rrreeqq body***",req.body);
    console.log("*****rrreeqq param***",req.params);
    console.log("*****rrreeqq query***",req.query);
    res.send("postData secondApi Called");

});


router.delete('/:deleteData', (req, res, next) => {
    res.send("deleteData secondApi Called");
});

router.put('/:putData', (req, res, next) => {
    res.send("putData secondApi Called");
});



module.exports = router;