//Chiedere km da percorrere
let km = prompt('Inserire km da percorrere');

//Chiedere l'età dell'utente
let age = prompt('Inserire la tua età');

//Calcolare il prezzo del biglietto base tramite la forumla 0.21 * km
let prezzo = 0.21 * km;

//SE l'età è minore di 18...
if(age < 18){
    //Calcolare il prezzo scontato  
    prezzo = prezzo * 0.8;
    console.log(prezzo);
}