#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const fileName = argv[3];
const fs = require('fs');
const request = require('request');
request(url, function (error, response, body) {
  if (error === null) {
    fs.writeFile(fileName, body, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  } else {
    console.log(error);
  }
});
