const express = require('express');
const fs = require('fs');
const jserviceInit = require('./jservice-init');
const categoriesFilePath = './categories.json';

const app = express();
app.use(express.static('public'));
app.use(express.json());


// const categoriesArray = [67, 780, 277, 223, 184, 680, 21, 309, 582, 267, 136, 249, 105, 770, 508, 561, 420, 37, 1195, 25, 897];
// async function doit() {
//     await jserviceInit.writeToDisk();

//     app.get('/api/category/:id', (request, response) => {
//         const json = fs.readFileSync('data/categories.json');
//         const categories = JSON.parse(json);
//         const requestedCategory = categories.find(category => category.id == request.params.id);
//         response.send(requestedCategory);
//     });
// }
// doit();
jserviceInit.writeToDisk();

app.get('/api/category/:id', (request, response) => {
    const json = fs.readFileSync('data/categories.json');
    const categories = JSON.parse(json);
    const requestedCategory = categories.find(category => category.id == request.params.id);
    response.send(requestedCategory);
});

app.listen(3000, () => console.log("My Jeopardy backend server is running at port 3000"))