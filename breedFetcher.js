const request = require ('request');
const searchWord = process.argv[2];
const fs = require('fs');

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchWord}`, (error, response, body) => {
  if (error) {
    console.log("Error", error);
    return;
  }
const data = JSON.parse(body);
let breed = data[0];
if (breed) {
  console.log(breed.description);
}
else {
  console.log('Breed not found!')
}
});

