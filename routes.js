const router = require('express').Router();

// router.use('/airbnb', require('./controllers/airbnb'));

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/show', (req, res) => {
  res.render('show.html');
});


module.exports = router;
