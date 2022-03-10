//AFFICHER LE TEXTE DANS MA DIV
// let monTxt = document.querySelector('textarea');

// let rendu = document.querySelector('div');

// monTxt.addEventListener("keypress",function(){
//     rendu.innerHTML = monTxt.value;
//     // rendu.innerHTML = marked(monTxt.value);
// });


//COMPTEUR
// let monTitre = document.querySelector('h1');

// let timer = 3;

// monTitre.addEventListener("click", function(){
//     let countDown = setInterval(function() {
//         if (timer > 0) { 
//             monTitre.innerHTML = timer -- ;
//         } else {
//             monTitre.innerHTML = ("GO, GO, GO, FANDJO");
//             clearInterval(countDown);
//         }
// },1000);
// })


// let monTitre = document.querySelector('textarea');

// let timer = 3;

// monTitre.addEventListener("click", function(){
//     let countDown = setInterval(function() {
//         if (timer > 0) { 
//             monTitre.innerHTML = timer -- ;
//         } else {
//             monTitre.innerHTML = ("GO, GO, GO, FANDJO");
//         }
// },1000);
// })

// API CEST UN SERVEUR QUI NOUS RENVOIE DES DONNEES

// FONCTION FETCH POUR CONTACTER LAPI EN JAVASCRIPT

// let monTitre = document.getElementById('Titre');

// // rotateElement = rotate.style.rotate=90;

// function rotate(){
//     for(let i=1;i<11;i++)
//     {
//         setInterval(function(){
//             monTitre.style.WebkitTransitionDuration="1s";
//             monTitre.style.Transform = 'rotate(40deg)';
//         },100)
//     }
// }

// rotate();



// let counter = document.querySelector('h2');

// let majCounter = async()=> {

//     let data = await fetch("https://api.countapi.xyz/hit/dadjack/key");
//     let count = await data.json();
//     counter.innerHTML = count.value;
//     counter.style.filter = "blur(0)";

// }

// majCounter();
// console.log(data);
// console.log(count);

//ENREGISTRER CE QUE TU TAPES

// monTxt = document.querySelector('textarea');
// rendu = document.querySelector('div');

// monTxt.value = localStorage.getItem("monSuperTexte");

// if(monTxt.value){
//     rendu.innerHTML = localStorage.getItem("monSuperTexte")
// };

// monTxt.addEventListener("keypress",function(){
//     localStorage.setItem("monSuperTexte",monTxt.value)
//     rendu.innerHTML = monTxt.value
// });

// console.log(monTxt);

//Chargement des éléments lourds

// let mesImages = document.getElementsByTagName("img");

// let tabImg = Array.from(mesImages);

// tabImg.map((uneImage,i) => {
//     uneImage.addEventListener("load",function () {
//         console.log(`image Num : ${i} - chargement finis` );
//     })
// });

//CREATION DE CLASSES

class Imc {
    constructor(nom,poids,taille){
        this._nom = nom;    //Attribut de classe: this_nom; 3 attribut in mode
        this._poids = poids;
        this._taille = taille;
        this_imc = this.calculImc()     //attribut out mode
    }
}

// calculImc(){    //Méthode de classe
//next
// }
// };

let list = [
    new Imc ("Arnold Scwarzeneger",430, 2.30),
    new Imc ("Jack l'eventreur",120,1.5)
];
console.log(list);

