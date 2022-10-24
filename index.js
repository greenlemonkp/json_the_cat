const searchWord = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(searchWord, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});