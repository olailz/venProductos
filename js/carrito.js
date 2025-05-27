class Producto{
    //Inicializamos las propiedades
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro método
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos = [];
    }
    //Método para agregar producto
    agregarProducto(producto){
        this.productos.push(producto)
    }

    //Método para calcular el total
    calcularTotal(){
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    //Método para mostrar en lista los productos
    listarProductos(){
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productosDisponibles = [
    new Producto(1, "Cámara H6SL Bullet", 2150.00),
    new Producto(2, "Cámara Domo H6A", 1980.00),
    new Producto(3, "Cámara H5A Multisensor", 6500.00),
    new Producto(4, "Cámara H5A IR PTZ", 8200.00),
    new Producto(5, "Cámara modular H5A", 3750.00),
    new Producto(6, "AI NVR 2 ", 9950.0)
];

const carrito = new Carrito();

//Crear función
function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}