'use strict';

let parser = require('body-parser');
let Character = require('../models/character_model');
let seed = require('../lib/seed.json');


//TODO add jwtAuth
module.exports = (router) => {
  router.use(parser.json());

  router.route('/seed')
      .get((req, res) => {
        res.json(seed);
      });

  router.route('/characters')
      .get((req, res) => {
        Character.find({}, (err, characters) => {
          if (err) return console.log(err);
          res.json({data: characters});
        });
      })

      .post((req, res) => {
        let newCharacter = new Character(req.body);
        newCharacter.save((err, character) => {
          if (err) return console.log(err);
          res.json(character);
        });
      });

  router.route('/characters/:id')
      .get((req, res) => {
        Character.findById(req.params.id, (err, character) => {
          if (err) return console.log(err);
          res.json(character);
        });
      })

      .put((req, res) => {
        Character.findByIdandUpdate(req.params.id, req.body, (err) => {
          if (err) return console.log(err);
          res.json({msg: 'success'});
        });
      })

      .delete((req, res) => {
        Character.findById(req.params.id, (err, character) => {
          Character.remove((err) => {
            if (err) return console.log(err);
            res.json({msg: 'character removed'});
          });
        });
      });
};