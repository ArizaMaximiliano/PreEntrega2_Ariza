/*
    Carro de compra simple sobre: Discos de música!

*/
console.log("Arrancando la página");

/*--------Variables-------*/
const discos = [
    { id: "01", nombre: "La Grasa de las Capitales", costo: 100 },
    { id: "02", nombre: "Cancion Animal", costo: 100 },
    { id: "03", nombre: "Clic Modernos", costo: 75 },
    { id: "04", nombre: "Almendra", costo: 150 },
    { id: "05", nombre: "Artaud", costo: 200 },
];

let carroCompra = [];

/*--------INICIO-------*/
//Validación

alert("Bienvenido a nuestra tienda sobre discos de música!");

let opcion = prompt("¿Desea ver nuestra lista de discos de música? (SI/NO)");

while (opcion != "SI" && opcion != "NO") {
    opcion = prompt("Error! Ingrese un valor válido. (SI/NO)");
}

if (opcion == "SI") {
    alert("A continuación nuestro catálogo");
} else if (opcion == "NO") {
    alert("Gracias por visitar. Saludos!");
}

/*--------Carro de compras-------*/
//Agregar objetos y sumar monto

while (opcion != "NO") {
    let lista = discos.map(
        (disco) => " | ID: " + disco.id + " | " + disco.nombre + " | Precio: " + disco.costo + " $ \n "
    );
    
    let precio = 0;
    let nombre = "";

    let producto = prompt("Ingrese ID del disco que desea agregar al carrito \n\n" + lista.join("\n"));
    
    for (const objeto of discos) {
        if (producto == objeto.id) {
            precio = objeto.costo;
            nombre = objeto.nombre;

            let cantidad = parseInt(prompt("Disco " + nombre + " - Costo: " + precio + " $ \n" + "Ingrese la cantidad que quiere llevar"));

            carroCompra.push({ producto, nombre, cantidad, precio });
        }
    }
    
    if(precio == 0){
        alert("No tenemos ese producto")
    }

    opcion = prompt("¿Quiere seguir comprando? (SI/NO)")

    while(opcion == "NO"){
        let final = carroCompra.map(
            (final) => " | ID: " + final.producto + " | " + final.nombre + " | Precio: " + final.precio + " $ | Cantidad: " + final.cantidad + " | Total : " + (final.cantidad * final.precio) + "\n "
        );

        alert(final.join("\n"));
        console.log(final.join("\n"));
        break;
    }
}

/*--------Total-------*/
const total = carroCompra.reduce((acc,el) => acc + el.precio * el.cantidad, 0)
alert("El monto total de la compra es: " + total + " $")
console.log("El monto total de la compra es: " + total + " $")