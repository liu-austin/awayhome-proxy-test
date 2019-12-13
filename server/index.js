const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));