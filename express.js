//1. Importar librerias
var express = require('express');
var exphbs = require('express-handlebars'); 

//1. Crear app de express
var app = express();

//1. Registro de handlebars
app.engine('handlebars',exphbs());
//1.Establecer handlebars como el motor de render
app.set('view engine','handlebars');

//1. Establecer la carpeta public como estatica
app.use(express.static('public'));

// 2. Crear la ruta inicial (Home, Taller 1)
app.get('/',function(req,res){
res.sendFile(__dirname+'/public/home.html');
});

//3. Decirle por que puerto ecuchar  
app.listen(3000, function(){
console.log('Holi servidor');
});