const express = require("express");
const app = express();
const port = 3000;

app.get()


// template using hbs

app.set('view engine', 'html');
app.engine('html', require('hbs')._express);

app.get("/",(req,res))