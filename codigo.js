//Calculadora de descuento
alert ('Hola Cliente, Bienvenido a su calculadora de Pago')
//Para Saludar
    let nombre = prompt ('Ingrese su nombre')
    alert ('Muy bien,' + nombre + ', calculemos el precio de tu compra!!!')

//funcion para calcular descuento del producto
const preciocompra = parseFloat(prompt('Ingrese el monto de la compra'))
const porcentajedescuento = parseFloat(prompt('Ingrese % a descontar'))

function calcularDescuento(preciocompra, porcentajedescuento) {
    const descuento = preciocompra / 100  * porcentajedescuento
    const preciofinal = preciocompra - descuento
    alert('El total de su compra con descuento es:' + preciofinal)
}
calcularDescuento(preciocompra, porcentajedescuento);


