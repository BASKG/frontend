// just in case we're doing fetch
const router = require('express').Router();
const controller = require('./controller'); // it's sibling file

// I think it's gonna be a router.get

// router.get('/show', controller.fetchInfo);

// don't uncomment anything at all until we're sure that using Fetch is how we will access the DSI's students' API, and render a new page with the results that they give us.
// on the front end, the data will be handled with mustache-express

module.exports = router;
