const express = require('express');
const moongose = require('mongoose');
const session = require('express-session');
const ejs = express("ejs");
const port = 3000;
const app = express();
app.set('view engine', 'ejs');
app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});