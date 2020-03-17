var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Webserver versione 5 con PIPELINE')
})

app.listen(port, function(){
  console.log('Server listening on ', port);
})
