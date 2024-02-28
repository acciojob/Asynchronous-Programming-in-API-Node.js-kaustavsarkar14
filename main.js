const fs = require('fs');
const http = require('http');

function fetchFromAPI(url) {
  // TODO: Return a promise that resolves to the response from the API
  return new Promise(async(res, rej)=>{
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      res(data)
    }
    catch(err){
      rej(err)
    }
  })
}

function saveToFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = function fetchFromAPI(url, filePath){ };

// TODO: Call fetchFromAPI and saveToFile with the command-line arguments
const [,, url, filePath] = process.argv;

fetchFromAPI(url)
  .then((data) => saveToFile(filePath, data))
  .then(() => console.log('Data saved to file successfully'))
  .catch((err) => console.error('Error:', err));