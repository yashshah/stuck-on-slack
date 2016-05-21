var appbaseRef = require('../helper/appbase').appbaseRef;

module.exports = function(req, res) {
  res.json({ text: 'Your status has been updated! Keep working!' });
  var jsonObject = {
    "status": req.query.text,
    "user_name": req.query.user_name
  }
  console.log(jsonObject)
  appbaseRef.index({
    type: 'statuses',
    body: jsonObject
  }).on('data', function(response) {
    console.log(response);
  }).on('error', function(error) {
    console.log(error);
  });

}