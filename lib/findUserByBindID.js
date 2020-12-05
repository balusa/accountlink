const apiCall = require('./api');

const findUserByBindID = bindid =>
  apiCall({
    path: 'users',
    qs: { q: 'user_metadata.bindid: "' + bindid + '"' }
  });

module.exports = findUserByBindID;
