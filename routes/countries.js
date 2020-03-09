const router = require('express').Router();
let Country = require('../data_access_layer/country.model');

router.route('/').get((req, res) => {
  Country.find()
  .then(countries => res.json(countries))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const countryCity = req.body.countryCity;
  const lengthOfStay = Number(req.body.lengthOfStay);
  const wouldVisitAgain = Boolean(req.body.wouldVisitAgain);
  const date = Date.parse(req.body.date);

  const newCountry = new Country({
    username,
    countryCity,
    lengthOfStay,
    wouldVisitAgain,
    date
  });
  //console.log("new country : " newCountry)
  newCountry.save()
    .then(() => res.json('Country Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res) => {
  Country.findById(req.params.id)
  .then(country => res.json(country))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Country.findByIdAndDelete(req.params.id)
  .then(() => res.json('Country has been deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Country.findById(req.params.id)
  .then(country => {
    //this route needs to receive json object
    country.username = req.body.userName;
    country.countryCity = req.body.countryCity;
    country.lengthOfStay = Number(req.body.lengthOfStay);
    country.wouldVisitAgain = Boolean(req.body.wouldVisitAgain);
    country.date = Date.parse(req.body.date);

    country.save()
      .then(() => res.json('Country updated!'))
      .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;
