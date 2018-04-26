const Space = require('../models/spaces');

const async = require('async');

exports.find_all_spaces = function (req, res) {
  async.parallel({
    spaces: function (callback) {
      Space.find({}, callback);
    }
  },
    function (err, results) {
      res.render('spaces', { spaces: results.spaces });
    });
};

exports.create_space = function (req, res) {
  Space.create({ spacename: req.body.spacename, spaceaddress: req.body.spaceaddress, spacedescription: req.body.spacedescription, from: req.body.from, to: req.body.to, spaceprice: req.body.spaceprice });
  res.redirect('/spaces');
}