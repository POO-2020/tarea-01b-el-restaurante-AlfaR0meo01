'use strict';

export default class Product{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;//new Price(precio);     
    }
    getDescription(){
        return `${this.nombre} , ${this.precio.getPrice()}`;      
    }
}

