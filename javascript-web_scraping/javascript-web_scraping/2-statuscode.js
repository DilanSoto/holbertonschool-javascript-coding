#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');
request(url, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log('code:', response.statusCode);
  }
});
