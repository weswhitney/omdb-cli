var request = require('request');

var omdbId = process.argv[2];

request.get('http://www.omdbapi.com/?' + 'i=' + omdbId, function (error, response, body) {
  if (error) {
    console.log('an error has occured ' + error);
  }
  var body = JSON.parse(body);
  console.log(body.Title, body.Year, body.Actors, body.Genre, body.Runtime);
});
