let productos = [
    { id: 1, nombre: "Polera color gris", precio: 40, stock: 100, categoria: "poleras", color: "gris" },
    { id: 2, nombre: "Polera color negro ", precio: 60, stock: 100, categoria: "poleras", color: "negro" },
    { id: 3, nombre: "Polera color blanca", precio: 30, stock: 100, categoria: "poleras", color: "blanco" },
    { id: 4, nombre: "Shorts color gris", precio: 65, stock: 100, categoria: "shorts", color: "gris" },
    { id: 5, nombre: "Shorts color negro", precio: 45, stock: 100, categoria: "shorts", color: "negro" },
    { id: 6, nombre: "Shorts color blanco", precio: 75, stock: 100, categoria: "shorts", color: "blanco" }
];

let carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos(productos) {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id} - ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`);
    });
}

// Función para filtrar productos según categoría
function filtrarProductos(categoria) {
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    if (productosFiltrados.length > 0) {
        mostrarProductos(productosFiltrados);
    } else {
        console.log(`No se encontraron productos en la categoría: ${categoria}`);
    }
}

// Función para mostrar el carrito
function mostrarCarrito(carrito) {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Carrito de compras:");
        carrito.forEach(item => {
            console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Precio Total: $${item.precio * item.cantidad}`);
        });
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId, cantidad) {
    let producto = productos.find(productos => productos.id === productoId);

    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }

    if (producto.stock < cantidad) {
        console.log("No hay suficiente stock.");
        return;
    }

    let productoEnCarrito = carrito.find(item => item.id === productoId);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad: cantidad });
    }

    producto.stock -= cantidad;
    console.log(`${producto.nombre} ha sido agregado al carrito.`);
}

// Menú interactivo
let opcionesDentroPagina = prompt("Bienvenido a la tienda de Mati!\n1. Ver productos\n2. Ver carrito\n3. Agregar producto al carrito\n4. Salir");

while (opcionesDentroPagina !== "4") {
    if (opcionesDentroPagina === "1") {
        let categoriaProducto = prompt("Ingrese 1 para ver todos los productos\nIngrese 2 para filtrar por categoría");

        if (categoriaProducto === "1") {
            mostrarProductos(productos);
        } else if (categoriaProducto === "2") {
            let categoriaProductoFiltrado = prompt("Ingrese 'poleras' para filtrar por poleras\nIngrese 'shorts' para filtrar por shorts");
            filtrarProductos(categoriaProductoFiltrado);
        } else {
            console.log("Opción no válida. Intente nuevamente.");
        }

    } else if (opcionesDentroPagina === "2") {
        mostrarCarrito(carrito);
    } else if (opcionesDentroPagina === "3") {
        let productoId = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        agregarAlCarrito(productoId, cantidad);
    } else {
        console.log("Opción no válida. Intente nuevamente.");
    }

    opcionesDentroPagina = prompt("Bienvenido a la tienda de Mati!\n1. Ver productos\n2. Ver carrito\n3. Agregar producto al carrito\n4. Salir");
}

console.log("Gracias por visitar la tienda de Mati.");
