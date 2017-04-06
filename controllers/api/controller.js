// in case we're doing fetch
const fetch = require('node-fetch');

const controller = {};


controller.fetchInfo = (req, res) => {
  const url = req.body.url;
  // const url = req.params.input;

  // fetch('localhost:4000/' + url)
  fetch('localhost:4000', url)
    .then(data => {
      res.render('show', data);
    })
    .catch( err => {
      console.log('error getting data: ', err);
    });
};

module.exports = controller;
