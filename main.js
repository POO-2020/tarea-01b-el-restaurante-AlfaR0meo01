'use strict';
import Cliente from "./js/cliente.js";
import Direccion from "./js/direccion.js";
import elementPedido from "./js/elementpedido.js";
import Fecha from "./js/fecha.js";
import Pedido from "./js/pedido.js";
import Price from "./js/price.js";
import Product from "./js/producto.js";
import Restaurante from "./js/restaurante.js";
import Time from "./js/time.js";

var time = new Time(14, 56);
var fecha = new Fecha(10, 2, 2001);
var fechaentrega = new Fecha(9, 1, 2020)
var precio = new Price(201.025)
var direccion = new Direccion('mercedes zamora', 834, undefined, 'el diezmo', '28010', 'colima', 'colima');
var cliente = new Cliente('felipe', direccion, 3121775682);
var product1 = new Product('pizza',precio);
var product2 = new Product('hamburgesa', new Price(562.087));
var elementpedido1 = new elementPedido(product1, 4)
var elementpedido2 = new elementPedido(product2, 3)
var pedido = new Pedido(fechaentrega, time, cliente);
var restaurante = new Restaurante('doña bacteria', 3121775682, direccion)

console.log(
    time.getFormato12(),
    time.getFormato24()
);

console.log(
    fecha.getAno(),
    fecha.getMeses(),
    fecha.getSemanas(),
    fecha.getDias(),
    fecha.getFecha(),
    fecha.getDiaFecha(),
);
console.log(
    direccion.getFormatoCorto(),
    direccion.getFormatLargo()
);
console.log(
    cliente.getPerfil()
);
console.log(
    precio.getPrice()
);
console.log(
    product1.getDescription()
);
console.log(
    elementpedido1.getDescripcion()
);
console.log(
    pedido.agregarElementos(elementpedido1),
    pedido.agregarElementos(elementpedido2),
    pedido.getResumen(),
    pedido.listarElemetos()
);
/*console.log(
    restaurante.registrarProduct(product1),
    restaurante.registrarProduct(product2),
    restaurante.registarPedido(pedido),
   // restaurante.listarProducto(),
    //restaurante.lsitarPedido()
);
*/



