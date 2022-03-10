// // let t = [1,4,7,8,5,2,1];

// // // console.log(t);

// // console.log([10,2,3]);

// // let a = 3;

// // //Accéder à une case du tableaux

// // t[3] = 100; // C'est comme si une variable s'appelait t[3].
// // console.log(t);
// // console.log(t[0]);

// // //Ajouter une case à la fin du tableau

// // t.push(77);
// // console.log(t);
// // t.push(0);
// // console.log(t);

// // //Retirer et retourner la dernière case.
// // t.pop(); //Ca vaut 0, mais je ne fais rien du résultat.
// // console.log(t);
// // console.log(t.pop(),t);

// // let maVariable = 3*t.pop();

// // console.log(maVariable,t);

// // //Taille du tableau

// // console.log(t.length);
// // console.log(2*t.length);


// // 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.

// let tab1 = [144,202,216,216,222,64]

// // 2) Ajouter le nombre 0 à la fin du tableau tab1.

// tab1.push(0);
// console.log(tab1);
// // 3) Afficher *un par un* tous les éléments du tableau tab1.

// console.log(tab1[0]);
// console.log(tab1[1]);
// console.log(tab1[2]);
// console.log(tab1[3]);
// console.log(tab1[4]);
// console.log(tab1[5]);
// console.log(tab1[6]);

// // 4) Retirer le dernier élément du tableau tab1.

// tab1.pop();
// console.log(tab1);
// // 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.

// let tab2 = [238,222,228,216,200];
// // 6) Ajouter le nombre 58 à la fin de tab2.

// tab2.push(58);
// console.log(tab2);
// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.

// tab1.push(tab2[0],tab2[1],tab2[2],tab2[3],tab[4],tab[5]);
// tab1.push(tab2[0]);
// tab1.push(tab2[1]);
// tab1.push(tab2[2]);
// tab1.push(tab2[3]);
// tab1.push(tab2[4]);
// tab1.push(tab2[5]);

// for (let i = 0; i < tab2.length; i++) {
//     tab1.push(tab2[i]);
    
// }


// console.log(tab1);
// // 8) Afficher *un par un* tous les éléments du tableau tab1.

// for(let i = 0; i < tab1.length;i++){
//     console.log(tab1[i]);
// }

// console.log(tab1[0]);
// console.log(tab1[1]);
// console.log(tab1[2]);
// console.log(tab1[3]);
// console.log(tab1[4]);
// console.log(tab1[5]);
// console.log(tab1[6]);
// console.log(tab1[7]);
// console.log(tab1[8]);
// console.log(tab1[9]);
// console.log(tab1[10]);
// console.log(tab1[11]);
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.

// let maVariable = tab1.pop();

// console.log(maVariable);
// // 10) Afficher la taille du tableau tab1.

// console.log(tab1.length); 
// // 11) Ajouter le nombre 66 à la fin du tableau tab1.

// tab1.push(66);
// console.log(tab1);
// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.

// tab1[0] = tab1[0]/2;
// tab1[1] = tab1[1]/2;
// tab1[2] = tab1[2]/2;
// tab1[3] = tab1[3]/2;
// tab1[4] = tab1[4]/2;
// tab1[5] = tab1[5]/2;
// tab1[6] = tab1[6]/2;
// tab1[7] = tab1[7]/2;
// tab1[8] = tab1[8]/2;
// tab1[9] = tab1[9]/2;
// tab1[10] = tab1[10]/2;

// for (let i = 0; i < tab1.length; i++) {
//     tab1[i] = tab1[i]/2; 
// }

// console.log(tab1);
// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :

// console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
// console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)



// Fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.



// function monTab(t){
//     console.log(t[t.length-1]);

// }
// monTab([255,42,70])
// // Fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

// function monTab2(t1){
//     return(t1[t1.length-1])
// }
// console.log(monTab2([99,37,28]));
// Fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

// function minTab(t) {
//     let plusPetite = t[0];
//     for(let i = 0 ; i < t.length ; i++) {
//         if(plusPetite > t[i]) {
//             plusPetite = t[i];
//         }
//     }
//     return plusPetite;
// }

// console.log(minTab([4,8,2,5,17]));

// Fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

// function maxTab(t) {
//     let plusGrande = t [0];
//     for (let i = 0; i < t.length; i++) {
//         if(plusGrande <  t[i]) {
//             plusGrande = t [i];
//         }
//     }
//     return plusGrande;
// }

// console.log(maxTab([6,9,15,20,12]));

// ++ Fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// function tab3(t){
//     let valeur1 = 0;
//     let valeur2 = 0;
//     for(let i = 0; i < t.length; i++){
//         if(t[i] > valeur1){
            
//     }if (t [i] > valeur2){
//         return valeur2;
//     }
// }
// console.log(tab3);

// function secondBiggest(tableau){
//     let plsGrnd = 0;//stocker la plus grande valeur trouvée jusqu'à présent
//     let plsGrnd2 = 0;//stocker la deuxième plus grande valeur trouvée jusqu'à présent
//     for (let i=0; i<tableau.length;i++){
//         if ( tableau[i] >= plsGrnd  ){
//             plsGrnd2 = plsGrnd;
//             plsGrnd = tableau[i];
            
//         }else if(tableau[i] > plsGrnd2){
//             plsGrnd2=tableau[i];
//         }
//     }
//     return plsGrnd2;

// }

// console.log(secondBiggest([5,9,12,6,41]));

// function tab4(){
//     let tab = [3, 5, 8, 10, 9, 12];
//     let tabStock = -1000;
//     let tabStock2 = -999;

//     for (let i = 0; i < tab.length; i++) {
//         if(tabStock > tabStock2){
//             tabStock2 = tabStock;
//         }
//     if(tab[i] > tabStock){
//     tabStock = tab[i]; 
//     }
//     }
//     return tabStock2
// }
// Fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// function count(t,n){
//     let cpt = 0;
//     for (let i = 0; i < tb.length; i++) { 
//             if(t[i] == n){
//                 cpt ++;
//             }
//         }
//         return cpt;
// }

// console.log();
// Fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
// 
// function search(t,n){
//     for(let i=0; i < t.length; i++){
//         if(t[i] == n){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(search([8,2,7,10,2],9));
// console.log(search([10,25,9,15,2],9));
// console.log(search([8,2,3,10,2],2));
// console.log(search([5,2,7,5,2],5));
// console.log(search([1,2,7,10,2],8));

// //Deuxième variante

// function search(t,n){
//     return (count(t,n)) > 0;


// Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?


// Exercice TAB1 :
// Créer un tableau qui contient tout les nombres de 1 à 100, dans l'ordre.




// for (let tab = [],i = 0; i < 100; i++) tab[i]=i;

// if (tab < 100;tab +=1;)

// let tab = [];

// for(let i=1;i<=100;i++){
//     tab.push(i);
// }

// console.log(tab);

// Exercice TAB2 :
// Ajouter tous les nombres de 99 à 1 (à l'envers donc) à la fin de ce tableau
// À ce stade, le tableau devrait ressembler à :
// [1,2,3,...,97,98,99,100,99,98,97,96,...,3,2,1]

// for(let i = 99;i > 0;i--){       
//    tab.push(i);
// }
    

// console.log(tab);

// Exercice TAB3 :
// Supprimer les 50 dernières cases du tableau.
// for (let i = 0; i < 50; i++) {
//     tab.pop();
    
// }

// console.log(tab);

// Exercice TAB4 :
// Quel nombre est présent dans la dernière case du tableau ? (Le but n'est pas pas de le chercher "à la main", mais plutôt en l'écrivant dans la console).

// console.log(tab[49]);
// Exercice TAB5 :
// Compter (dans le tableau) le nombre de valeurs qui sont comprises entre 80 et 200. (En cas de besoin, question intermédiaire : supposons qu'on a une variable qui s'appelle n. Comment écrire le test "Est-ce que n est entre 80 et 200 ?")
// for (let i =0;i<200;i++){
//     console.log(tab.length<80);
// }

// let n = 0;

// if (n > 80 && n < 200){
//     console.log(true);
// }else{
//     console.log(false);
// }

// tab = [21,32,80,85,90,36,145,100];



// function count(tab){
//     let cpt = 0;
//     for (let i =0; i < tab.length; i++){
//         if(tab[i]>= 80 && tab[i]<= 200){
//             cpt++;
//         }
//     }
//     return cpt;
// }

// console.log(count(tab));
