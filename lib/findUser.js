const apiCall = require('./api');

const findUser = user_id =>
  apiCall({
    path: 'users/' + user_id,
    qs: { method: 'GET' }
  });

module.exports = findUser;
