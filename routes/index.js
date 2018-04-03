var express = require('express');
var router = express.Router();
var Data = require("../models/data");
var url = require("url");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Smart Store' });
});
router.get('/add', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);
    res.render('add', { title: 'Add new items' });
});
//getting all the data
router.get('/view', function(req, res, next) {

    Data.find(function(err, docs) {
        if (err) {
            console.log(err);
            res.render("error", { error: err });
        } else {
            console.log(docs);
            res.render('view', { title: 'view all items', items: docs });
        }
    });


});

//add the item

router.post('/addItem', function(req, res, next) {

    var posted = new Data({
        _id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        qunatity: req.body.avb
    });

    posted.save(function(err, callback) {
        if (err) {
            console.log(err);
            res.render("error", { error: err });
        } else {
            console.log("saved successfull");
            res.render("/", { title: "Smart Store" });
        }


    });
});

router.get('/upd', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);
    var q = url.parse(fullUrl, true);
    var qdata = q.query;
    console.log(qdata);

    // invoking the mongoose for updation of data
    var query;
    var no;
    Data.findById(qdata.id, function(err, docs) {
        if (err) {
            console.log(err);
            res.render("error", { error: err });
        } else {
            query = docs;
            no = query;
            no.qunatity = docs.qunatity - 1;
            console.log(no);
            Data.findByIdAndUpdate(qdata.id, no, { new: true }, function(err) {
                if (err) {
                    console.log(err);
                    res.render("end/fail", { error: err });
                } else {
                    console.log("done");
                    res.render("end/succ", { title: 'Succeeded' })
                }
            })

        }
    });


});



module.exports = router;