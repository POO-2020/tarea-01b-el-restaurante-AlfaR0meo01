"use strict";

export default class Paciente{
    constructor (nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getPerfil(){
        return `${this.nombre.getNombreCompleto()}, ${this.fecha.getFormatoCorto()}, ${this.telefono}`;
    }
}



