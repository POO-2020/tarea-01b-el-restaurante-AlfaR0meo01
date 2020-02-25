'use strict';
/*import Fecha from './fecha.js';
import Time from './time.js';*/
import Price from './price.js';
/*import Product from './producto.js';
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
        return `${this.fecha.getFecha()}  ${this.hora.getFormato12()} ${this.getNumElementos()} elementos con ${this.getProductos()} productos total: ${this.getCostoTotal()}`;
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
            costo += parseFloat(elemento.cantidad) * parseFloat(elemento.producto.precio.precio);     
        });
        return new Price(costo.toFixed(2)).getPrice();
    }
    agregarElementos(elemento){
        return this.elementpedido.push(elemento);
    }
    listarElemetos(){
        this.elementpedido.forEach(elemento => {
            console.log(elemento.getDescripcion());
               
        });
    }
}
/*var hola = new Pedidos(new Fecha(11,2,2006),new Time(11,56));
hola.listarElemetos();*/
 