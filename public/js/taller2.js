

window.addEventListener("load" , function(){
    feather.replace();
    

    var listaProductos=[];
    if(localStorage.getItem("listaProductos")!=null){
    listaProductos=JSON.parse(localStorage.getItem
    ("listaProductos"));
    }
    //Agregar productos desde la tienda
    var tienda_agregar = document.querySelectorAll(".mas-tienda");
    var detalles_agregar = document.querySelectorAll(".mas-detalles");
    var num__productos = document.querySelector(".app__NoProducto");
    var listaCarrito=document.querySelector(".carrito__izquierda");

    function actualizarCarrito(){
        if(num__productos!=null){
            num__productos.innerHTML=listaProductos.length;
        }
        localStorage.setItem("listaProductos",JSON.stringify(listaProductos));
    }

    actualizarCarrito();
    //Funcion que recorre los botones
    function tiendaBotones (btn){
        
        btn.addEventListener("click" , function(){ 
            var padre = btn.parentNode.parentNode;
            var nombre=  padre.querySelector(".nombre").value;
            var precio=  padre.querySelector(".precio").value;
            var categoria=  padre.querySelector(".categoria").value;
            var imagen=  padre.querySelector(".producto__img").style.backgroundImage;
            var imagenUrl = imagen.replace('url(','').replace(')','');

            var producto ={
                nombre:nombre,
                precio:precio,
                categoria:categoria,
                imagen:imagenUrl,
            };

            listaProductos.push(producto);
            actualizarCarrito();
           

        });
    }

    if(tienda_agregar!=null){
    tienda_agregar.forEach(tiendaBotones);
    }

    //Botones detalles
    function detallesBotones (btn){
        

        btn.addEventListener("click" , function(){ 
            var nombre=  document.querySelector(".detalles__nombre").innerHTML;
            var precio=  document.querySelector(".detalles__precio").innerHTML;
            var categoria=  document.querySelector(".detalles__categoria").value;
            var imagen=  document.querySelector(".descripcion__imagen").style.backgroundImage;
            var imagenUrl = imagen.replace('url(','').replace(')','');

            var producto ={
                nombre:nombre,
                precio:precio,
                categoria:categoria,
                imagen:imagenUrl,
            };

            listaProductos.push(producto);
            actualizarCarrito();
            console.log(listaProductos);

        });
    }

    if(detalles_agregar!=null){
    detalles_agregar.forEach(detallesBotones);
    }
});