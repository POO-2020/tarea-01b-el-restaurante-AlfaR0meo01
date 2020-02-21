"use strict";
export default class Time {
    constructor(hora, minutos) {
        this.hora = hora;
        this.minutos = minutos;
        this.ampm = this.hora >= 12 ? 'pm' : 'am';
    }
    
    getFormato12() {
        this.hora = this.hora % 12;
        this.hora = this.hora ? this.hora : 12;
        return ` ${this.hora}:${this.minutos} ${this.ampm}`;
    }

    getFormato24() {
        return `${this.hora}:${this.minutos} ${this.ampm} `;
    }
}

/*var time = new Time(10, 50,'am');
var time2 = new Time(15,50,'pm');
console.log(`la hora es ${time.getFormato12()}`);
console.log(`la hora es ${time2.getFormato24()}`);*/