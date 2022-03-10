//---------CLASSE--------------------//

class Imc {
    // Constructor -> initialise les données
constructor(nom, poids, taille) {
    this._nom = nom;        // 3 attributes en In mode
    this._poids = poids;
    this._taille = taille;
    this._imc = this.calculImc();    // attribute en OUT mode (à calculer)
}
    // Le calcul
  calculImc() {    // Format simple (2 nombres après le . ou la ,)
    return (this._poids/Math.pow(this._taille, 2)).toFixed(2);//.pow méthode pour la puissance
    // return (this._poids/(this._taille**2)).toFixed(2);
}
    // Affichage
display() {
    console.log
    (this._nom + " (" + this._poids + " kg, " + this._taille + " M) a un IMC de: " + this._imc);
    }
}

    // progr principal -> injection des données
const list = [
    new Imc("Sébastien Chabal", 135, 1.89),
    new Imc("Escaladeuse Ultra Svelte", 45, 1.70),
    ];

list.forEach(element => element.display());//element variable temporaire

