
const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// //////////////////////////////// ADD PHOTO

router.get('/add-photo', function(req, res) { 

res.render('add-photo');

}); 


router.post('/add-photo', function (req, res) { 

res.redirect('check-photo');

});


// //////////////////////////////// CHECK PHOTO

router.get('/check-photo', function(req, res) { 

res.render('check-photo');

}); 


router.post('/check-photo', function (req, res) { 

res.redirect('photos');

});


// //////////////////////////////// PHOTOS

router.get('/photos', function(req, res) { 

res.render('photos');

}); 


router.post('/photos', function (req, res) { 

res.redirect('/');

});




module.exports = router
