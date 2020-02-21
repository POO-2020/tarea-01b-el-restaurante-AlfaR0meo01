'use strict';

export default class Direccion{
    constructor(calle, num_exterior, num_interior, colonia, codigo_postal, ciudad, municipio){
        this.calle = calle;
        this.num_exterior = num_exterior;
        this.num_interior = num_interior;
        this.colonia = colonia;
        this.codigo_postal = codigo_postal;
        this.ciudad = ciudad;
        this.municipio = municipio;
        
    }
    getFormatoCorto(){
        return `Direccion: ${this.calle}, numero: ${this.num_exterior},`;
    }
    getFormatLargo(){
        return `Direccion: ${this.calle}, numero exterior: ${this.num_exterior}, numero interior: ${this.num_interior},
         colonia: ${this.colonia}, CP: ${this.codigo_postal}, ciudad: ${this.ciudad}, municipio: ${this.municipio}`;
    }
}