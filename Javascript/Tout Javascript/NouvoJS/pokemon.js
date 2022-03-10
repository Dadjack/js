// let maCarte = "Ronflex";
// let taCarte = "Magmar";

// let nosCarte = maCarte;

// maCarte = taCarte;
// taCarte = nosCarte;

// console.log(maCarte,taCarte);
// document.write(maCarte,taCarte);


//échange cartes via destructuring de array //

let maCarte = "Ronflex";
let taCarte = "Magmar";

[maCarte, taCarte] = [taCarte,maCarte];

console.log('MA CARTE :',maCarte);
console.log('MA CARTE :',taCarte);

const voiture = {
    marque: "Toyota",
    model: "Gt",
    vitesse: 300
}

const {marque, model, vitesse} = voiture;
console.log(marque, model, vitesse);

const notes = [12, 17, 8, 9];
const [ francais, philo, Lv1, Lv2] = notes;
console.log(francais);