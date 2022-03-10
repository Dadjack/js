// Comptes bancaires
class CompteBancaire {
    constructor(titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
}

// Ajoute un montant au solde
    crediter(montant) {
    this.solde += montant;
    console.log ("Ajout de: " + montant + " pour: " + this.titulaire);
    }

// Retirer un montant au solde
retirer(montant) {
    try {
        if (this.solde < montant)
            throw this.titulaire + ", retrait de: " +  montant + " refusé avec solde: " + this.solde;
          // Ci dessous l'opération du retrait
            this.solde -= montant;
        console.log ("Retrait de: " + montant + " pour: " + this.titulaire);
    }
    catch (error) {
        console.log ("--J'AI ATTRAPÉ MON ERREUR CUSTOM--->" + error);
    }
} 

// Le virement sera utilisé sur 1 instance de CompteBancaire 
virer(montant, membre) {
        console.log ("Virement de: " + montant + " de la part: " + this.titulaire + " vers: " +
            membre.titulaire);
            console.log(this)

        membre.crediter(montant);
        this.retirer(montant);// Ici le this va récupérer l'instance sur laquelle on utilise .virer() 
}


// Renvoie la description du compte
decrire() {
    return "titulaire: " + this.titulaire + ", solde: " + this.solde;
    }
}


const lesComptes = {
    "Alex" : new CompteBancaire("Alex"),
    "Clovis" : new CompteBancaire("Clovis"),
    "Marco" : new CompteBancaire("Marco"),
}  


// lecture tableau associatif ou Objet["truc"]
// Boucle FOR IN qui Crédite et décrit chaque compte

for (let element in lesComptes)
lesComptes[element].crediter(1000);

// un retrait de la part d'ALex
lesComptes["Alex"].retirer (100);


// un petit virement de Marco à Clovis :
lesComptes["Marco"].virer (300, lesComptes["Clovis"]);


// un petit retrait incorrect pour Alex
lesComptes["Alex"].retirer (1200);


// bilan
for (let key in lesComptes)
console.log(lesComptes[key].decrire());