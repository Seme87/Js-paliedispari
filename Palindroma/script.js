

// PRENDO INPUT DALL'UTENTE
const string = prompt('Inserisci una parola');
  
  
// FUNZIONA CHE VERIFICA SE LA PAROLA INSERITA è PALINDROMA O MENO

function checkPalindrome(string) {

    // SALVO LUNGHEZZA DELLA STRINGA IN UNA VARIABILE
    const len = string.length;

    // CICLO FOR CHE ATTRAVERSA META' DELLA PAROLA
    for (let i = 0; i < len / 2; i++) {

        // CONDIZIONE CHE CONFRONTA SE IL PRIMO E L'ULTIMO CARATTERE DELLA STRINGA SIANO DIVERSI
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}



// SALVO LA FUNZIONE NELLA VARIABILE
const value = checkPalindrome(string);

console.log(value);
     
  

  

