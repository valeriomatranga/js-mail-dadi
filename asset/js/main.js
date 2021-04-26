//chiedere all'utente la sua mail
var mail = prompt ("Scrivi la tua Mail");
console.log(mail);

//lista delle mail che possono accedere
var lista = ["vale@jsmail","fili@jsmail","marco@jsmail","lori@jsmail"];

mail=false

//verifica accesso mail
for (i = 0; i < lista.length; i++) {
    if (mail == lista[i]);
    mail=true
    console.log(mail);
}

if (mail == lista[i]) {
    document.getElementById("accesso").innerHTML = "la tua mail e stata verificata correttamente!";
}else{
    document.getElementById("accesso").innerHTML = " la tua mail non e in elenco!";
}


