'use strict';

var request = require('request');
var key = 'AIzaSyDAHnquUK1gDOTDWE8TZDn9YM6CEP6WSrM';

function getLongUrl(shortUrl){

	request("https://www.googleapis.com/urlshortener/v1/url?key=" + key + "&shortUrl=" + shortUrl, function(error, response, body) {
	  	//console.log(body);
		var bodyObject = JSON.parse(body);
		if (bodyObject.error === undefined){
			console.log(bodyObject.longUrl);
		}
	   	else{
	    	console.log(bodyObject.error.code + '\n' + bodyObject.error.message);
		}

	})
}

getLongUrl('http://goo.gl/BzpZ54');
