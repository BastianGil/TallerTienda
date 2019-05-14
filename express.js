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

//7. conectar base de datos de mongo
//Mongo: crear variables (Paso 1)
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'tienda';
const client = new MongoClient(url, { useNewUrlParser: true });
var clientdb=null;

//Mongo: conectar (Paso 2)
client.connect(function(err) {
   assert.equal(null, err);
   console.log("Connected successfully to server");
   clientdb = client.db(dbName);
  // client.close();
 });


//________________________________________

// 2. Crear la ruta inicial (Home, Taller 1)
app.get('/',function(req,res){
res.sendFile(__dirname+'/public/home.html');
});

//5.Arreglo de productos
var productos = [];
productos.push({

    ref: 'p1',
    nombre: 'Mario Bros',
    imagen: 'Jueg-arms.jpg',
    descripcion: 'lorem jrvrvjr',
    precio: '300'

});


//4. Ruta de la tienda

app.get('/tienda/', function(req, res) {

    //8. buscar documentos mongo
    var juegos = clientdb.collection('juegos');
    console.log(juegos.nombre);
    juegos.find().toArray(function(err, docs) {
              
        var contexto = {
            listaProductos: docs,
            
           
        };
        res.render('tienda',contexto);
    });
 
 });

 
 //Ruta filtros1
app.get('/tienda/:tipo?', function(req, res) {


    console.log(req.params.tipo);

    var query={};
    if(req.params.tipo){
        query.tipo= req.params.tipo;
    }

    if(req.query.clasificacion){
        query.clasificacion= req.query.clasificacion;
    }

    if(req.query.categoria){
        query.categoria= req.query.categoria;
    }


    var juegos = clientdb.collection('juegos');

    juegos.find(query)
    
             .toArray(function(err, docs) {
        
                var contexto = {
            listaProductos: docs,
            tipo: req.params.tipo,
            esJuegos: req.params.tipo == "Juegos",
          
        };
       // console.log(docs);
       
       console.log(contexto.esJuegos);

        res.render('tienda',contexto);
    });
 
});




//6. Ruta dinamica del producto
app.get('/tienda/detalles/:detalles',function(req,res){

  
    var contexto=null;
    

    var juegos = clientdb.collection('juegos');
    juegos.find({}).toArray(function(err,docs){
        assert.equal(null,err);
     
        docs.forEach(function(prod){
            if(prod.ref == req.params.detalles){
                contexto=prod;
            }
        });
 

    if(contexto == null){
        res.send('Page not found');
    }else{
        res.render('detalles',contexto);
    }

   

});

});

app.get('/carrito/', function(req, res) {
             
        var contexto = {
                 
        };
        res.render('carrito',contexto);

 });

 app.get('/checkout/', function(req, res) {
             
    var contexto = {
             
    };
    res.render('check',contexto);
    
});

//3. Decirle por que puerto ecuchar  
app.listen(3000, function(){
console.log('Holi servidor');
});