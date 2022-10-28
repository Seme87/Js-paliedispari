// Chiedere all’utente di inserire una parola
const word= prompt("inserisci una parola!")

let result=false;


let newString = "";
// Creare una funzione per capire se la parola inserita è palindroma

  for(let i = word.length-1; i >= 0; i--){

     newString += word[i]


    if(newString ===word[i]){
        result=true;
    }


  }  

  console.log(result)