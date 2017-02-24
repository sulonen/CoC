'use strict';

let parser = require('body-parser');
let Character = require('../models/character_model');
let seed = require('../lib/seed.json');

module.exports = (router) => {
  router.use(parser.json());

  router.route('/seed')
    .get((req, res) => {
      res.json(seed);
    });

  router.route('/characters')
    .get((req, res) => {
      Character.find({}, (err, Characters) => {
        if (err) return console.log(err);
        res.json({data: Characters});
      });
    })

    .post((req, res) => {
      let newCharacter = new Character(req.body);
      newCharacter.save((err, Character) => {
        if (err) return console.log(err);
        res.json(Character);
      });
    });

  router.route('/characters/:id')
    .get((req, res) => {
      Character.findById(req.params.id, (err, Character) => {
        if (err) return console.log(err);
        res.json(Character);
      });
    })

    .put((req, res) => {
      Character.findByIdandUpdate(req.params.id, req.body, (err) => {
        if (err) return console.log(err);
        res.json({msg: 'success'});
      });
    })

    .delete((req, res) => {
      Character.findById(req.params.id, (err, Character) => {
        Character.remove((err) => {
          if (err) return console.log(err);
          res.json({msg: 'character removed'});
        });
      });
    });
};
