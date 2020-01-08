// Dependencies
var express = require("express");

var app = express();

// Set our port to 8080
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
  res.send('Welcome to my API');
})

app.get('/bbq', (req, res) =>{
  res.json({
    name: "bbq",
    bestFood: true
  });
})

app.listen(PORT,function(){
  console.log('listening on port' + PORT);
  
})