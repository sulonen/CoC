'use strict';

const zeroBuffer = require('./zero_buffer');

module.exports = exports = (req, res, next) => {
  try {
    let authString = req.headers.authorization;
    let base64String = authString.split(' ')[1];
    let authBuf = new Buffer(base64String, 'base64');
    let utf8AuthString = authBuf.toString();
    let authArr = utf8AuthString.split(':');
    zeroBuffer(authBuf);
    if (authArr[0].length && authArr[1].length) {
      req.basicHTTP = {
        email: authArr[0],
        password: authArr[1]
      };
      return next();
    }
  } catch(e) {
    return console.log(e);
  }
  res.status(401).json({msg: 'Authentication failed'});
};