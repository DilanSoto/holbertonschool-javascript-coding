#!/usr/bin/node
const fs = require('fs');
const fdPath = process.argv[2];

fs.readFile(fdPath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
