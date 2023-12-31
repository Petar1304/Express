const express = require('express');

const app = express();
app.use(express.json());

app.use('/todos', require('./routes/todos'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

