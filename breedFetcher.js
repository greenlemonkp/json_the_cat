const request = require ('request');
const fs = require('fs');

const fetchBreedDescription = (searchWord, callback) => {
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchWord}`, (error, response, body) => {
  if (error) {
    return callback(error, null)
  } 
const data = JSON.parse(body);
let breed = data[0];
if (breed) {
  callback(null, breed.description);
}
else {
  callback('Breed not found!', null)
}
});
}

module.exports = { fetchBreedDescription };
