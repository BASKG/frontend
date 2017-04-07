// in case we're doing fetch
const fetch = require('node-fetch');

const controller = {};


controller.fetchInfo = (req, res) => {
  const url = req.body.url;

 fetch('localhost:4000', {method: 'POST', body: url})
    .then(data => {
      res.render('show', data);
    })
    .catch( err => {
      console.log('error getting data: ', err);
    });
};

module.exports = controller;
