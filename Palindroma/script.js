// Chiedere all’utente di inserire una parola
const word= prompt("inserisci una parola!")

let result=false;
// Creare una funzione per capire se la parola inserita è palindroma

  for(let i = word.length-1; i >= 0; i--){

    console.log(word[i], word);

    
    const wordCont =`${word[i]}`
    console.log(wordCont);


    /* if(word[i]===word){
        result=true;
    } */


  }  
