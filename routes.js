const router = require('express').Router();

// router.use('/airbnb', require('./controllers/airbnb'));

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/show', (req, res) => {
  res.render('show.html');
});

// router.use('/api', require('./controllers/api'));

module.exports = router;
