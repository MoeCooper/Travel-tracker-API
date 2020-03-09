const router = require('express').Router(); //need this because we are creating a route
let User = require('../data_access_layer/user.model'); //require the mongoose model we created

//GET request (/users/)
router.route('/').get((req, res) => {
  User.find() //mongoose method. gets list of all users from mongodb db, return promose
  .then(users => res.json(users)) //return users from db
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username; 

  const newUser = new User({username: username});

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;