const axios = require('axios');
const fs = require("fs");
axios.get('https://http.cat/431', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat.jpg", response.data)
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.then(function () {
});