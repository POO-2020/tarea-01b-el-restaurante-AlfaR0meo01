'use strict';
export default class elementPedido{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;     
    }
    getDescripcion(){
        return `${this.producto.getDescription()}, cantidad: ${this.cantidad}`;
    }
}
