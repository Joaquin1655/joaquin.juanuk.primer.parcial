let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const tablaCarrito = document.getElementById("tabla-carrito")
const contenedorTotal = document.getElementById("valor-final")
const botonLimpiar = document.querySelector(".btn-limpiar-carrito")

function obtenerCarrito() 
{
    return carrito;
}

function cargarProductosCarrito() 
{
    let prductosEnCarrito = obtenerCarrito();
    let htmlContenido = `
                <tr class="fila-header-carrito">
                    <td class="celda-header-tabla-carrito">Nombre del producto</td>
                    <td class="celda-header-tabla-carrito">Cantidad</td>
                    <td class="celda-header-tabla-carrito">Precio unitario</td>
                </tr>
    `

    productosEnCarrito.forEach(function(producto) {
        htmlContenido +=`
            <tr class="fila-producto-carrito">
            <td>${producto.nombre}</td>
            </tr>
        `
    });


    //if(productosEnCarrito.lenght === 0){

    //}

    tablaCarrito.innerHTML = htmlContenido;
}

prod
function limpiarCarrito() 
{
    localStorage.removeItem("carrito");

    carrito = []

    alert("Carrito limpiado correctamente")
}

cargarProductosCarrito();