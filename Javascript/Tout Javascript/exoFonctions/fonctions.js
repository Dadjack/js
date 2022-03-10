// // Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
// function f1(){
//     console.log(17);
// };
// f1();

// // Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
// function f2(){
//     return 17;
// };

// // Utiliser la fonction f1 pour afficher 17 dans la console.

// f1();

// // Utiliser la fonction f2 pour afficher 17 dans la console.

// console.log(f2());

// // La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// //f2 est plus générique que f1. On peut faire autre chose que de l'affichage.


// // Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

// function f3(a){
//     console.log(a*2);
// }

// // f3(20);

// // Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

// function f4(a){
//     return a*2;
// }

// // console.log(f4(20));
// // Utiliser la fonction f3 pour écrire dans la console le double de 99.

// // function f3(a){
// //     console.log(a*2);
// // }

// f3(99);

// // Utiliser la fonction f4 pour écrire dans la console le double de 99.

// console.log(f4(99));

// // Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.

// let a = f4(99);

// // Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

// function f5(a,b){
//     console.log(a+b);
// };

// // Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

// function f6(a,b){
//     return a+b;
// };

// // Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.

// // function f5(a,b){
// //     console.log(a+b);
// // }
// f5(42,77);

// // Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

// // function f6(a,b){
// //     return a+b;
// // };

// console.log(f6(42,77));

// // Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

// a+= f6(42,77);

// console.log(a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

// function f7(a,b){
//     if (a<b){        
//     }
//     return b 
// }
// console.log(f7(15,30));

// function f7(n1,n2){
//     if(n1 > n2){
//         return n1;
//     }else{
//         return n2;
//     }
// };

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

// function f8(a,b,c){
//     if (a < b < c){
//     }
//     return c;
// }
// console.log(f8());
// console.log(f8(1,10,100));

// function f8bis(n1,n2,n3){
//     if(n1 >= n2 && n1 >= n3){
//         return n1;
//     }else if (n2 >= n1 && n2 >= n3){
//         return n2;
//     }else{
//         return n3;
//     }
// }

// function f8Ter(n1,n2,n3){
//     if(f7(n1,n2)>= n3){
//         return f7 (n1,n2);
//     }else {
//         return n3;
//     }
// }
// console.log("f8Ter");



// function f8(a,b,c){
//     return Math.max(a,b,c);
// }

// function f8bis(n1,n2,n3){
//     if(n1 >= n2){
//         if(n1 >= n3){
//             return n1;
//         }else {
//             return n3;
//         }
//     }else{

//     }
// }
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

// function f9(a,number){
//     for(let i =0; i < a;i++){

//     console.log(number);
//     }
// }

// f9(15,"chats");

//FIN


// let mysteryNumber;
// let numberOfTries;

// function chooseNumber(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// function initGame(){
//     mysteryNumber=chooseNumber(1,100);
//     numberOfTries=0;
// }

// function makeAGuess(){
//     let guess=parseInt(prompt("Quelle valeur proposez-vous ?"));
//     numberOfTries++;
//     if(guess==mysteryNumber){
//         return 0;
//     }else if(guess>mysteryNumber){
//         return 1;
//     }else if(guess<mysteryNumber){
//         return -1;
//     }
// }

// function play() {
//     initGame();
//     let gameNotFinished=true;
//     while(gameNotFinished){
//         let result=makeAGuess();
//         if(result==0){
//             let plural=numberOfTries>1?"s":"";               
//             console.log("C'est gagné ! Vous avez trouvé en "+numberOfTries+" coup"+plural+".");
//             gameNotFinished=false;
//         }else if(result>0){
//             console.log("Trop grand !");
//         }else{
//             console.log("Trop petit !");
//         }        
//         if(gameNotFinished){
//             console.log("Essayez encore !");
//         }
//     }
// }


