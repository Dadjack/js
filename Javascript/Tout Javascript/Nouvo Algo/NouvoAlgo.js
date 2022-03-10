console.log(123);

//Je crée une machine qui s'appelle direBonjour, et dont le but est d'afficher "Bonjour" dans la console 
function direBonjour(){
    console.log("Bonjour");
}

//J'appelle (j'utilise/je démarre) la fonction que je viens de créer
direBonjour();

//Reprise de l'exercice de lecture de boucles
function pikachu(a,b){
    //a et b seront deux variables qui vont stocker les informations données lors de l'appel de la fonction.
    let result = 0;
    for (let i = 0; i < a; i++){
        result += b;
    }
    return result;
    
}

//pikachu(4,10) = ?
pikachu(4,10); //N'affiche rien
console.log(pikachu(4,10));

