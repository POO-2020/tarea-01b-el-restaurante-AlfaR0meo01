'use strict';
/*import Fecha from './fecha.js';
import Time from './time.js';
import Price from './price.js'
import Product from './producto.js';
import Cliente from './cliente.js';
import Direccion from './direccion.js';
import elementPedido from './elementpedido.js'*/
export default class Pedidos{
    constructor(fecha, hora, cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementpedido = [];
    }
    getNumElementos(){
        return `${this.elementpedido.length}`;
    }
    getResumen(){
        return `${this.fecha.getFecha()}  ${this.hora.getFormato12()}\n-${this.getNumElementos()} elementos con ${this.getProductos()} productos-\ntotal: ${this.getCostoTotal()}`;
    }
    getProductos(){
        var product = 0;
        this.elementpedido.forEach(element => {
            product += element.cantidad
        });
        return product;
    }
    getCostoTotal(){
        var costo = 0;
        this.elementpedido.forEach(elemento => {
            costo += elemento.cantidad * elemento.producto.nombre.precio;
        });
        return new Price(costo).getPrice();
    }
    agregarElementos(elemento){
        return this.elementpedido.push(elemento)
    }
    listarElemetos(){
        this.elementpedido.forEach(elemento => {
            console.log(elemento.getDescripcion(),'\n');  
        });
    }
}
