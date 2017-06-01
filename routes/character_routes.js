'use strict';

let parser = require('body-parser');
let Character = require('../models/character_model');
let jwtAuth = require(__dirname + '/../lib/jwt_auth');
let seed = require('../lib/seed.json');

module.exports = (router) => {
  router.use(parser.json());

  router.route('/seed')
      .get((req, res) => {
        res.json(seed);
      });

  router.route('/characters')
      .get(jwtAuth, (req, res) => {
        if (req.params.user === req.user._id || req.user.admin) {
          Character.find({}, (err, characters) => {
            if (err) return console.log(err);
            res.json({data: characters});
          });
        } else {
          return res.json({msg: 'Access denied'});
        }
      })

      .post(jwtAuth, (req, res) => {
        if (req.params.user === req.user._id || req.user.admin) {
          let newCharacter = new Character(req.body);
          newCharacter.save((err, character) => {
            if (err) return console.log(err);
            res.json(character);
          });
        } else {
          res.json({msg: 'Access denied'});
        }
      });

  router.route('/characters/:id')
      .get(jwtAuth, (req, res) => {
        if (req.params.user === req.user._id || req.user.admin) {
          Character.findById(req.params.id, (err, character) => {
            if (err) return console.log(err);
            res.json(character);
          });
        } else {
          res.json({msg: 'Access denied'});
        }
      })

      .put(jwtAuth, (req, res) => {
        if (req.params.user === req.user._id || req.user.admin) {
          Character.findByIdandUpdate(req.params.id, req.body, (err) => {
            if (err) return console.log(err);
            res.json({msg: 'success'});
          });
        } else {
          res.json({msg: 'Access denied'});
        }
      })

      .delete(jwtAuth, (req, res) => {
        if (req.params.user === req.user._id || req.user.admin) {
          Character.findById(req.params.id, (err, character) => {
            Character.remove((err) => {
              if (err) return console.log(err);
              res.json({msg: 'character removed'});
            });
          });
        } else {
          res.json({msg: 'Access denied'});
        }
      });
};
