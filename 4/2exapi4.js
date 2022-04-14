const axios = require('axios');
const fs = require("fs");
axios.get('https://http.cat/423', {responseType: 'arraybuffer'})
.then(function (response)
{
fs.writeFileSync("cat423to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/424', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat424to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/425', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat425to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/426', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat426to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/429', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat429to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/431', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat431to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/444', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat444to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/450', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat450to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/451', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat451to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/497', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat497to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/498', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat498to.jpg", response.data)
console.log(response);
})
axios.get('https://http.cat/499', {responseType: 'arraybuffer'})
.then(function (response) 
{
fs.writeFileSync("cat499to.jpg", response.data)
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.then(function () {});