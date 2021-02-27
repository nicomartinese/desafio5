function bienvenida(){
    alert("Sistema de reservas de turnos");
}
function fechaDia(){
    var dia = parseInt(prompt("Ingrese día: ", dia));
    return dia;
}
function validaDia(){
    while (dia < 1 || dia > 31){
        alert("Ingrese un día valido.(Valor entre 1 y 31)");
        dia = fechaDia();
    }
}
function fechaMes(){
    var mes = parseInt(prompt("Ingrese mes: ", mes));
    return mes;
}
function validaMes(){
    while (mes < 1 || mes > 12){
        alert("Ingrese un mes valido. (Valor entre 1 y 12)");
        mes = fechaMes();
    }
}
function ingresaTurno(){
    var turno = parseInt(prompt("Elija una opcion: 1. 18:30 a 20:30 || 2. 20:30 a 22:30 || 3. 22:30 a 02:00", turno));
    return turno;
}
function validaTurno(){
    while (turno < 1 || turno > 3){
        alert("Ingrese un turno valido. (Valor entre 1 y 3)");
        turno = ingresaTurno();
    }
}
function confirmacion(){
    switch (turno){
        case 1:
            alert("Turno reservado para el día " + dia + "/" + mes + " en el turno de 18:30 a 20:30");
            break;
        case 2:
            alert("Turno reservado para el día " + dia + "/" + mes + " en el turno de 20:30 a 22:30");
            break;
        case 3:
            alert("Turno reservado para el día " + dia + "/" + mes + " en el turno de 22:30 a 02:00");
            break;
    }
    
}

class Turno{
    constructor(dia, mes, turno){
        this.dia = dia;
        this.mes = mes;
        this.turno = turno;
    }

    
    
}

bienvenida();
var dia = fechaDia();
validaDia();
var mes = fechaMes();
validaMes();
var turno = ingresaTurno();
validaTurno();
confirmacion();

var turno1 = new Turno (dia, mes, turno);

