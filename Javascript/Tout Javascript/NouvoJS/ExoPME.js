class Salarie {
    constructor(nom,prenom,age,salaire){
        this._nom = nom,
        this._prenom = prenom,
        this._age = age,
        this._salaire = salaire,
        this._cout = this.calculCout()
    }
    calculCout(){
        return((this._salaire*12)*1.90);
    }
}

class Pme {
    constructor(nom,equipe,ventes,fraisF,fraisM){
        this._nom = nom,
        this._equipe = equipe,
        this._ventes = ventes,
        this._fraisF = fraisF,
        this._fraisM = fraisM
    }
    calcul(){
        let result = 0;
    this._equipe.forEach (element => result+= element.calculCout());
    return result;
    }
    bilan(){
        console.log(this._ventes - (this._fraisF + this._fraisM + this.calcul()));
    }
}


const pme = new Pme ("Mon entreprise",
[new Salarie("Pato","Pato",30,2000),
new Salarie("Dom","Dom",40,3000),
new Salarie("Daddy","Daddy",50,4000)],
300000,
20000,
50000);

pme.bilan();





