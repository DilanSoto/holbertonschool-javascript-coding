#!/usr/bin/node
const argv = process.argv;
const fs = require('fs');
const filePath = argv[2];
const string = argv[3];
fs.writeFile(filePath, string, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});
