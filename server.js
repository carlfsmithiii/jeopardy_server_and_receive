const express = require('express');
const fs = require('fs');
const categories = require('./data/categories.json');
// const categories = require('./categories.json');

const app = express();
app.use(express.static('public'));
app.use(express.json());


app.get('/api/category/:id', (request, response) => {
    const requestedCategory = categories.find(category => category.id == request.params.id);
    response.send(requestedCategory);
});

app.listen(3000, () => console.log("My Jeopardy backend server is running at port 3000"))