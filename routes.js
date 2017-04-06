const router = require('express').Router();

// router.use('/airbnb', require('./controllers/airbnb'));

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
