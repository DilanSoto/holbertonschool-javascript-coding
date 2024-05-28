#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const id = '18';
const request = require('request');
request(url, function (error, response, body) {
  if (error === null) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes(id)) {
          count++;
        }
      }
    }
    console.log(count);
  } else {
    console.log(error);
  }
});
