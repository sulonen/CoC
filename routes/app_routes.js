'use strict';

let parser = require('body-parser');
let packageInfo = require(__dirname + '/../package.json');
const service = {
  name: packageInfo.name,
  version: packageInfo.version,
  status: 'OK'
};

module.exports = (router) => {
  router.use(parser.json());

  router.route('/status')
      .get((req, res) => {
        res.json(service);
      });
};
