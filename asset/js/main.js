//chiedere all'utente la sua mail
var mail = prompt ("Scrivi la tua Mail");

//lista delle mail che possono accedere
var lista = ["vale@jsmail","fili@jsmail","marco@jsmail","lori@jsmail"];

var mail_trovata=false

//verifica accesso mail
for (i = 0; i < lista.length; i++) {
    if (mail == lista[i]){
        mail_trovata=true;
    }
}

if (mail_trovata == true) {
    document.getElementById("accesso").innerHTML = "la tua mail e stata verificata correttamente!";
}else{
    document.getElementById("accesso").innerHTML = " la tua mail non e in elenco!";
}

//scelta utente
var numeroUtente = Math.round( Math.random()*5)+1;
document.getElementById("utente").innerHTML = "IL tiro utente da: " + numeroUtente;

//scelta computer
var numeroComputer = Math.round( Math.random()*5)+1;
document.getElementById("pc").innerHTML = "Il tiro pc da: " + numeroComputer;

//esito
if (numeroUtente > numeroComputer){
    document.getElementById("vincitore").innerHTML = "L'utente ha vinto!..";
}else{
    document.getElementById("vincitore").innerHTML = "Il computer ha vinto!..";
}