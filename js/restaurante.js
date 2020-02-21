'use strict';
import Direccion from './direccion.js';
export default class Restaurante{
    constructor(nombre, telefono, direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.producto = [];
        this.pedido = [];
    }
    registrarProduct(){
        this.producto.push(this.producto);
    }
    listarProducto(){
        this.producto.forEach(element => {
            console.log(element.getDescription()); 
        });
    }
    registarPedido(){
        this.pedido.push(this.pedido)
    }
    lsitarPedido(){
        this.pedido.forEach(element => {
            console.log(element.getresumen());
        });
    }
}