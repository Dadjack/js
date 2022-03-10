/*
    Pour javascript, vous nommerez vos variable en lowerCamelCase
    var maSuperVariable
    function maSuperFonction (){
        // Instruction
    }
    Seule les classes seront écrite en UpperCamelCase 
    MaSuperClasse
    Pensez à nommez correctement vos variable fonction pour comprendre
    directement, ce qu'elle fait. 
    Cela simplifiera la relecture. 

    N'oubliez pas Lors de la création de votre repository distant votreNom - Mes exercices JavaScript
    Cela me simplifiera la vie lors des correction MERCI !
*/

// var reponse = confirm("veuillez confirmer la réponse");

// function maSuperFonction (){
//     if(reponse == true){
//         alert("ok la procedure va continuer");
//     } else {
//         alert("on Arrete tout ! "); 
//     }
// }

// maSuperFonction();

// function maSuperFonction (){
//     if(reponse == false){
//         alert("on Arrete tout ! ");
//     } else {
//         alert("ok la procedure va continuer");
//     }
// }

// maSuperFonction();

// let age = prompt("quel age avez vous?");

// function monAge(){
//     if(age >= 0  && age < 18 ){
//     console.log("vous etes encore jeune dit donc");
//     }else if(age > 18 && age < 25){
//             console.log("vous etes un jeune adulte");
//         }else if(age > 25 && age < 50){
//             console.log("bienvenue dans le grand age");
//         }else(console.log("waow tu es un sage !"));
//     }

//     monAge();

    // let age = prompt("quel age avez vous?");

    // switch(age){
    //     case (age < 18) :
    //         console.log("vous etes encore jeune dit donc");
    //         break;
    //         default:
    //             console.log("une erreur est survenue");
    //         break;
    // }

    // console.log(age);

    //Array

// let tableauDanimaux = ["vache", "canard", "biche"]; // un Tableau a une dimension
//si je veut appelé un élément alors
// console.log(tableauDanimaux[0]); //L'index d'un tableau commence à zero

//tableau a deux dimension
// let tableauFilm = [
//   ["batman", "zack snyder"],
//   ["avatar", "james cameron"],
// ];
//appel d'un élément
// console.log(tableauFilm[0][1]); //affiche zack snyder

/*
    il esxiste des méthode pour modifier ou travailler un tableau 
    fruits = ['pomme', 'banane', 'poire', 'fraise']
    •fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)
    •fruits[0] : sélectionne le premier élément
    •fruits[length - 1] : sélectionne le dernier élément
    •fruits.push('pamplemousse') : ajoute un élément à la fin du tableau
    •fruits.unshift('pamplemousse') : ajoute un élément au début du tableau
    •fruits.pop() : supprime le dernier élément
    •fruits.shift() : supprime le premier élément
    •fruits.indexOf('banane') : retourne l'index d'un élément
    •fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses
    •fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)
    •fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.
*/

let mesAges = ["vous etes encore jeune dit donc","vous etes un jeune adulte","bienvenue dans le grand age"];

// alert (mesAges[0]);
// alert (mesAges[1]);
// alert (mesAges[2]);

// let mesAges =[
//     [18, "vous etes encore jeune dit donc"],
//     [18, "vous etes encore jeune dit donc"],

// ]
let age = prompt("quel age avez vous?");

function monAge(){
    if(age >= 0  && age < 18 ){
        alert (mesAges[0]);
    }else if(age > 18 && age < 25){
        alert (mesAges[1]);
        }else if(age > 25 && age < 50){
            alert (mesAges[2]);
        }else(console.log("waow tu es un sage !"));
    }

    monAge();