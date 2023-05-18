//Chiedere km da percorrere
let km = prompt('Inserire km da percorrere');

//Chiedere l'età dell'utente
let age = prompt('Inserire la tua età');

//Calcolare il prezzo del biglietto base tramite la forumla 0.21 * km
let prezzo = 0.21 * km;

let message;

//SE l'età è minore di 18...
if(age < 18){
    //Calcolare il prezzo scontato  
    prezzo = prezzo * 0.8;
    console.log(prezzo);
    message = ` Hai diritto al prezzo scontato del 20%. Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`;
} else if(age > 65){
    //Calcolare il prezzo scontato
    prezzo = prezzo * 0.6;
    console.log(prezzo);
    message = ` Hai diritto al prezzo scontato del 40%. Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`;
} else{
    message = `Il prezzo del biglietto è di: ${prezzo.toFixed(2)}€`;
}

//Mostrare il prezzo
document.getElementById(`message`).innerHTML = message;