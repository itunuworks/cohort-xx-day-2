'use strict';

var request = require('request');
var key = 'AIzaSyDAHnquUK1gDOTDWE8TZDn9YM6CEP6WSrM';
var shortUrl = 'http://goo.gl/fbsS';
request("https://www.googleapis.com/urlshortener/v1/url?key=" + key + "&shortUrl=" + shortUrl, function(error, response, body) {
  //console.log(body);
  var bodyObject = JSON.parse(body);
  if (bodyObject.error === undefined){
	console.log(bodyObject.longUrl);
	}
  else{
    console.log(bodyObject.error.code);
    console.log(bodyObject.error.message);
	}
});