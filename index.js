console.log("Hello world!");

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);