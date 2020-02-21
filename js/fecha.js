"use strict";
export default class Fecha {
    constructor(dia, mes, ano) {
        this.fecha = new Date(ano,mes,dia);
        this.diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }
    getMscos() {
        return new Date() - this.fecha;
    }

    getAno = _ => Math.trunc(this.getMscos() / (31536000000)).toString()+ ' años';

    getMeses = _ => Math.trunc(this.getMscos() / (2628000000)).toString()+ ' meses';
    
    getSemanas = _ => Math.trunc(this.getMscos() / (604800000)).toString()+ ' semanas';
    
    getDias = _ => Math.trunc(this.getMscos() / (86400000)).toString()+ ' semanas';

    getFecha() {
        return `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha() {
        return this.diasSemana[this.fecha.getDay()];
    }
}

