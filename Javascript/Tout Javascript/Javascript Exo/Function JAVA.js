/*Les fonctions*/

// function maSuperFonction (){
//     console.log("Jean");
//     console.log(9*7);
// }
// maSuperFonction();

// function maSuperFonction (num){
//     console.log("Jean");
//     console.log(8*num);
// }
// maSuperFonction(5);

// function maSuperFonction (num,num1){
//     console.log(num-num1);
// }
// maSuperFonction(30,16);

// let num = 30;

// function uneFonction(){
//     let num = 9;
//     console.log(num);
// }

// uneFonction();
// console.log(num);

/*Function return*/
// function moins(a,b){
//     return a-b;
// }
// let total = moins(56,23);

// console.log(total);

/*Calcul moyenne*/

/*1ere facon*/
// let noteA = 9;
// let noteB = 16;

// function Calcul(noteA,noteB){
//     return (noteA + noteB) /2;
// }

// let moyenne = Calcul (noteA,noteB);
// console.log(moyenne);

/*2eme façon*/
// let noteA = 9;
// let noteB = 16;
// let moyenne = (noteA+noteB);

// function Calcul(noteA,noteB){
//     console.log((9+16)/2);
// }

// Calcul()

/*3eme façon*/

// let noteA = 9;
// let noteB = 16;

// let moyenne = calcul(noteA, noteB);

/* 
function calcul(a,b){
    return(a+b)/2;
}
console.log(moyenne); */



/*let a = 11;
let b = 99;

console.log(a == b); égal à b?
console.log(a != b); différent de b?
console.log(a !== b); strictement différent de b?*/

/*Ternaire*/
// let age = 11 ;
// let majorite = 18;

// console.log(age == majorite ? "OK" : "NON");

/*Compparaison
ET &&
OU ||
NON !*/

/*function esTubeau(charisme){
    if (charisme >= 30){
        return "gosse beau";    
    } 
    else if (charisme <= 10){
        return "Waow Ca craint";
    }  
    else {
        return "Non notable";
    }
}

console.log(esTubeau (35));*/
/*fonction pour utiliser le if, else if, et else, faire attention aux()*/

// noteA =9;
// noteB =12;
// noteC =15;

// function mention(notes) {

// let moyenne = (notes[0]+ notes[1]+ notes[2])/3; /* notes.length (diviser par la taille du tableau);*/

//     if (moyenne >= 16){
//         return "TB";
//     }
//     else if (moyenne >=10){
//         return "AB";
//     }
//     else{ 
//         return "NIET"
//     }
// }

/*Autre manière de faire
function calculMoyenne(note){
    let result = 0;
    for (i = 0; i < note.length; i++){
        result += note[i]
    }
    result = result/note.length;
    if (result >= 16){
        return ("TB");
    }  
    else if (result >= 10){
        return ("AB");
    }
    else{
        return("NIET");
    }
}
console.log(calculMoyenne([18,17,16,18]));*/

//var voiture = { // on utilise le = pour dire à l'objet voiture qu'on lui assigne des propriétés " "
   // "nbChevaux":500, // les prorpiétés sont définies par "texte": valeur,
    //"vitesseMax":450,
    //"faiblesse":["accélération","adhérence"] // comme SQL, c'est le dernier donc pas de virgule finale
//};

/*var afficher = "vitesseMax"

console.log(voiture.vitesseMax); // affiche vitesseMax
console.log(voiture["vitesseMax"]); // affiche vitesseMax
console.log(voiture[afficher]); //affiche vitesseMax
console.log(voiture.faiblesse[1]); */

/*Rajouter une valeur (marque) à voiture (nouvelle propriété de l'objet voiture)*/
/*voiture.marque ="Ferrari";
on ajoute dans faiblesse
voiture.faiblesse.push("unTruc");

voiture.nbChevaux = 700;
voiture.vitesseMax = 600;
voiture.faiblesse [0]= "structure";
voiture.faiblesse [1]= "couleur";*/

/*Effacer voiture.marque
delete voiture.marque;

console.log(voiture);
console.log(voiture.hasOwnProperty("vitesseMax"));*//*(savoir si la propriété vitesseMax est dans voiture)*/

// let voiture = { 
//     "nbChevaux":500, 
//     "vitesseMax":450,
//     "faiblesse":["accélération","adhérence"],
// "pilote" : {
//     "pilotes" : "Jack",
//     "copilote": "Daniels"
//     }
// };

// console.log(voiture.pilote.pilotes);
// console.log(voiture.pilote.copilote);



// let dessin =[];

// while ( i < 10 ) {
//     i++;
//     dessin.push("#");
//     console.log(dessin);
// }

// for(let i =0;i < 10; i++){

//     dessin.push("#");
//     console.log(dessin);
// }

// let carName = "volvo";
// let x = 50;

// let x = 5 ;
// let y = 10;
// let somme = x + y;

// console.log(somme);

// let z = (x+y);

// alert(z);

// let prenom = "Jean", lastName = "Doe" , age = 35;

// let [name,firstName,age] = ["jean","jack",72];

// console.log(name,firstName,age);

//1

//alert(10*5);

//2
//alert(10/5);

//3
//alert(15%9);

//4
// x = 10;
// y = 5;
// x = x + y;
// x += y;

//5
//x *= y;


// function plus(Tab){
//     for (let i = 0; i < Tab.length; i++) {    
//         for (let j = 0; j < Tab[i].length; j++) {
//             Tab[i][j]++;
//     }
// }
//     return (Tab);
// }

// console.log(plus([[10,10],[2,2],[3,3]]));
/*length (combien il y a déléments dans le tableau)*/


// automatiser le +1 sans boucle for avec .map
// let Tab = [9,5,4,1,2,3];


// let ajouterUn =Tab.map(function(number){
//     return number+1
// });

// console.log(Tab);
// console.log(ajouterUn);

// let ajouterUn = tab.map(number => number + 1);


//Templates strings
// let voiture = { 
//     "marque" : "Renault ",
//     "model" : "Clio Rs",
//     "vitesse" : 700
// };

// const message = `${voiture.marque + voiture.model} a une "\n" vitesse de pointe de ${voiture.vitesse} km/h`;

// console.log(message);

//Number
//let length = 16;

//String
//let lastName = "Johnson";

//Object
// const x = {
//     firstName: "John",
//     lastName: "Doe"
// };
// console.log(x.firstName,x.lastName);

// function myFunction(){
//     alert("Hello world!")
// };

// myFunction();


// function myFunction(){
//     alert("Hello world!")
// };

// function myFunction() {
//     return "hello"
// };
// document.getElementById("demo").innerHTML = myFunction();


//Exo 1
// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// alert(person.firstName);

//Exo 2
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     country: "Norway" 
// };

// person.Town = "Paris";
// console.log(person.firstName);

//Exo 3
// const person = {
//     name: "John", age :50
// };

// alert(person.name + " a " + person.age);

//une valeur inclus dans
// const tab =["a","b","c"];
// console.log(tab.includes("a"));


//calcul puissance
// console.log(5**4);

// let j =20;
// let i=15;
// result = i*j;

// function myFunction(){
//         if  ( 5**4>=result) {
//         return ("true");
//         }
//         else if (5**4<=result) {
//         return ("false");
//     }
//     else return ("NADA");
// };

//console.log(myFunction);
// myFunction();

// function calculMoyenne(note){
//     let result = 0;
//     for (i = 0; i < note.length; i++){
//         result += note[i]
//     }
//     result = result/note.length;
//     if (result >= 16){
//         return ("TB");
//     }  
//     else if (result >= 10){
//         return ("AB");
//     }
//     else{
//         return("NIET");
//     }
// }


// let monTitre = document.body.getElementsByTagName("h1");

// alert(monTitre[1].innerText);
// console.log();(monTitre[1].innerText);

// let unTitre = document.getElementById("Titre").innerText;

// console.log(unTitre);


// function insertBefore(Titre,txt){
//     Titre.txt.insertBefore(Titre,txt);
// }

// ("<p>txt</p>").insertBefore("h1");
// console.log(Titre,txt);
// console.log(Titre,txt);

// let Titre = document.getElementsByTagName("h1");

// let txt = document.getElementsByTagName("p");

// document.body.insertBefore(txt[0], Titre[0]);
// alert(Titre,txt);
// Title.prepend(txt);



//Append child and remove child

// let Titre = document.getElementById("Title");

// let txt = document.getElementsByTagName("p");

//document.body.appendChild(Titre);

// let Titre = document.getElementById("Title");

// let txt = document.getElementsByTagName("p");

// document.body.removeChild(Titre);



// let Titre = document.getElementById("Title");

// let txt = document.getElementsByTagName("p");

// let text = document.createTextNode("newTxt");

// document.body.appendChild(text);
// txt[0].before(text);

// function ajoutText(pseudo,duTexte){
//     let newTxt = document.createElement("p")
//     newTxt.innerHTML =  pseudo.bold() + duTexte;
//     document.body.appendChild(newTxt);
// };

// ajoutText("JACK ","Je suis la")
// ajoutText("JEAN ","Je suis plus la")
// ajoutText("ARNOLD ","Il est parti")

// function ajoutText(pseudo,duTexte){
//     let newTxt = document.createElement("p")
//     newTxt.innerHTML =  `${pseudo.bold()} -- ${duTexte}`;
//     document.body.appendChild(newTxt);
// };

// ajoutText("JACK ","Je suis la")
// ajoutText("JEAN ","Je suis plus la")
// ajoutText("ARNOLD ","Il est parti")

// inner.HTML récupère ce qu'il y a entre les deux balises HTML.Rajoute du texte dans newTxt.


//Changer un lien 

// let monLien = document.getElementsByTagName("a")[0];
// let href = monLien.getAttribute("href");
// let Titre = document.getElementById("Title");

//get pour récupérer et set pour modifier

// console.log(monLien.getAttribute("href"));
// console.log(Titre.innerHTML);
// console.log(Titre.getAttribute("id"));

// monLien.setAttribute("href","https://www.youtube.com/watch?v=OlDIMiutXXw&list=RDOlDIMiutXXw&start_radio=1")

// let img = document.body.getElementsByTagName("img"[0]); Récupérer une image

//EXO DOM 4 : insertBefore()
// let titre = document.getElementById('titre');

// let txt = document.getElementsByTagName('p');
// console.log(txt);
// console.log(txt[0]);

// document.body.insertBefore(txt[0], titre);

//Scope : porté des variables

//Replacer des elements

// const titre = document.getElementById("Titre");
// const txt = document.body.getElementsByTagName("p");
// const newTxt = document.createTextNode("Bienvenue");

// document.body.appendChild(newTxt);
// document.body.replaceChild(newTxt, txt[0]);

// console.log(document.body);

//Fonction Map

// let mesTxt = document.getElementsByTagName("p");
// let textesTab = Array.from(mesTxt);

// textesTab.map(function(leTxt) {
//     leTxt.innerHTML = 'LoL Hacked'

// });

// console.log(mesTxt);

// let mesTitres = document.getElementsByTagName("h1");
// let titresTab = Array.from(mesTitres);//On transforme en vrai tableau

//On va mapper chaque case du tableau sous le nom leTitre
// titresTab.map(leTitre => leTitre.innerHTML = "LOL tu as été Hacked");

//Autre syntaxe avec function
// titresTab.map(function(leTitre){
//     leTitre.innerHTML = "LOL tu as été Hacked"
// });

// titresTab.map(function(leTitre) {
//     leTitre.innerHTML = "Ca Fart"
    // document.body.appendChild(leTitre[0]):changer un seul titre
// });

//Taille d'un élément
// let element = document.getElementsByTagName("p")[0];
// let taille = element.getBoundingClientRect();
// let height = taille.height;
// let width = taill.width;

// console.log(element.offsetHeight);
// console.log(taille);

// let titre = document.getElementById('Title');

// console.log(titre.offsetHeight);
// console.log(titre.offsetWidth);
// console.log(titre.clientWidth);

// let titre = document.getElementById('Title');

// function changeColor() {
//     document.getElementById('Title').style.color =red;
// }


//Changer la couleur des éléments
// let titre = document.getElementById('Title');

// titre.style.color = "black";
// titre.style.fontFamily = "impact";
// titre.style.boxShadow = "2px 2px 20px green";

// titre.style.textAlign = "center";

// let bod = document.getElementById('cor');
// bod.style.background = "red";

// let para = document.getElementById("p1");
// para.style.color = "white";

// titre.style.display = "flex";
// titre.style.justifyContent = "flex-end";

// titre[0].setAttribute("style", "color:red");

// titre.setAttribute("style", "font-family:impact");

// window.addEventListener(document.body.style.background = "green")


//Changer avec querySelector
// const monTitre = document.querySelector("#Title");

// const truc = document.querySelectorAll("p");

// console.log(monTitre)
// console.log(truc)

//Utilisation de classlist// EXO DOM 12
// let titre = document.getElementById('Title'); 
// let lien = document.getElementsByTagName('a');
// let para = document.getElementsByTagName('p'); 

// titre.addEventListener("click",function (){
//     titre.classList.add("maClasse");
// });

// lien[0].addEventListener("click",function (){
//     titre.classList.add("maCouleur");
// });

// lien[1].addEventListener("click",function (){
//     titre.classList.remove("maCouleur");
// });

// lien[2].addEventListener("click",function (){
//     titre.classList.toggle("maCouleur");
// });

// para[0].addEventListener("click",function (){
//     para[0].classList.toggle("monPara1")
// });

// para[1].addEventListener("click",function (){
//     para[1].classList.toggle("monPara2")
// });

// para[2].addEventListener("click",function (){
//     para[2].classList.toggle("monPara3")
// });

//Autre façon de faire
//lien[0].addEventListener("click", () => titre.classList.add("maCouleur"))

// let titre = document.getElementById('Title2');

// addEventListener("mouseout",function (){
//     titre.style.display = "block";
// });

//Focus Blur
// let leInput = document.querySelector("input");

// leInput.addEventListener("focus", function(){
//     leInput.style.background = "royalBlue";
// });

// leInput.addEventListener("blur", function(){
//     leInput.style.backgroundColor = "white";
// });

// let leTitre = document.querySelector('h1');
// let leInput = document.querySelector("input");

// leInput.addEventListener("keypress",function(event){
//     console.log(event.key);
// });

// addEventListener("keypress",function(event){
//     console.log(event.key);
//     leTitre.innerHTML += event.key;
// });

//addEvenListener : j'ajoute un évènement à ma fonction.Qu'est-ce que dois faire ma fonction

// function onclick(event) {
//     let x =0;
//     let y =0;
//     document.body.textContent =
//     "clientX: " + event.clientX +
//     " - clientY: " + event.clientY;
// };

//Trouver les coodornées au clique
// addEventListener("click",function(event){
//     console.log(event.x, event.y);
// });



// addEventListener("click",function(event){
//     let monImg = document.createElement('img')
//     let taille = 50;
//     monImg.setAttribute("src", `image.jpg`)
//     //on oublie pas de placer l'image
//     document.body.appendChild(monImg);
// });

// console.log(event.screenX.screenY);

// addEventListener("click",function(event){
//     let monImg = document.createElement('img')
    // let taille = 50 +"px";
    // monImg.style.position = "absolute";
    // pour opti le centrage , on soustrait la moitié de la taille de l'img
    // monImg.style.left =  event.x/2 +"px";
    // monImg.style.top = event.y/2 +"px";
    // monImg.style.position = monImg.x/2 + "px" + monImg.y/2 +"px";
//     monImg.style.position = (monImg.x + monImg.y)/2 +"px";
//     monImg.setAttribute("src", `image.jpg`);
//     document.body.appendChild(monImg);
// });

// SCROLL ANIM

// let bar = document.querySelector("bar");

// addEventListener("scroll",function(){
//     console.log(document.body.scrollHeight, innerHeight, scrollY);   
// });

// const laBar = document.querySelector(".bar");


// addEventListener("scroll", function() {

// let scrollMax =  document.body.scrollHeight - innerHeight  ;
// let onEstOu = scrollY / scrollMax *100;

// laBar.style.width = onEstOu + "%";

// console.log(`
// Hauteur page : ${document.body.scrollHeight}
// Hauteur affichage : ${innerHeight}
// Scroll Position Y : ${scrollY}`);

// });

// setTimeout(function(){ document.write("Hello"); }, 3000);
//SET TIME OUT
let monTitre = document.querySelector('h1');

setTimeout(function() {
    monTitre.innerHTML = "Salut c'est cool";
    //monTitre.textContent = "Salut c'est cool";
    monTitre.style.opacity = 1 ;
    document.body.style.background = "red";

},2000);

// document.write.innerHTML(monTitre);

let monTxt = document.querySelector('textarea')
let btn = document.querySelector('input')

addEventListener("keypress",function(){
    btn.disabled =monTxt.value.length  >= 5 ? true : false;

    
});