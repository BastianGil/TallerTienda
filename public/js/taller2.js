

window.addEventListener("load" , function(){
    feather.replace();
    

    var listaProductos=[];
    if(localStorage.getItem("listaProductos")!=null){
    listaProductos=JSON.parse(localStorage.getItem
    ("listaProductos"));
    }
    //Agregar productos desde la tienda
    var tienda_agregar = document.querySelectorAll(".producto__mas");

    //Funcion que recorre los botones
    function tiendaBotones (btn){
        



        btn.addEventListener("click" , function(){ 
            var padre = btn.parentNode.parentNode;
            var nombre=  padre.querySelector(".nombre").innertext;
            var precio=  padre.querySelector(".precio").innertext;
            var categoria=  padre.querySelector(".categoria").value;
            var imagen=  padre.querySelector(".producto__img").style.backgroundImage;
            var imagenUrl = imagen.replace('url(','').replace(')','');

            var producto ={
                nombre:nombre,
                precio:precio,
                categoria:categoria,
                imagen:imagenUrl,
            };

        });
    }

    if(tienda_agregar!=null){
    tienda_agregar.forEach(tiendaBotones);
    }
});