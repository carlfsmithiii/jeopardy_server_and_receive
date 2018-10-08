const express = require('express');
const categories = require('./categories.json');
const app = express();
app.use(express.static('public'));


app.get('/api/category/:id', (request, response) => {
    const requestedCategory = categories.find(category => category.id == request.params.id);
    response.send(requestedCategory);
});
