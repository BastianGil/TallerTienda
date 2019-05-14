

window.addEventListener("load" , function(){
    feather.replace();
    

    var listaProductos=[];
    if(localStorage.getItem("listaProductos")!=null){
    listaProductos=JSON.parse(localStorage.getItem
    ("listaProductos"));
    }
    //Agregar productos desde la tienda
    var tienda_agregar = document.querySelectorAll(".producto__mas");
    var detalle_agregar = document.querySelector(".producto__mas");
    var num__productos = document.querySelector(".app__NoProducto");


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
            console.log(listaProductos);

        });
    }

    if(tienda_agregar!=null){
    tienda_agregar.forEach(tiendaBotones);
    }
});