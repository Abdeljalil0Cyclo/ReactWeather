var express = require('express');
var app = express();

//app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));

app.listen(3000,function(){
console.log('express server is up');
});


