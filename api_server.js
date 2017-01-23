'use strict';

let express = require('express');
let morgan = require('morgan');
const PORT = process.env.port || 3000;

let apiRouter = express.Router();
require('./routes/api_routes')(apiRouter);

let app = module.exports = exports = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin',
             'http://localhost:8080');
  res.header('Access-Control-Allow-Headers',
             'Content-Type, Authorization, token');
  res.header('Access-Control-Allow-Methods',
             'GET, POST, PUT, DELETE');
  next();
});
app.use(express.static('./dist'));
app.use('/', apiRouter);
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
