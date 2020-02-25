'use strict';
export default class Price{
    constructor(precio){
        this.precio = precio;//parseFloat(precio);/*toFixed(2)*/
        
    }
    getPrice(){
        return this.precio;
    }
}

