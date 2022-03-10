// On commence Toujours par créer une Appli Vue
const app = Vue.createApp({
    data(){
        return {
        age: 50,
        nomUtil:"Michel",
        chant:"",
        };    
    },
    methods: {
        sortie(){
            this.chant.push();
        },
        calculAge(){
            if  (this.age == 50){
                return this.age +5;
            }
        },
        afficherObjectif() {
            const numberRandom = Math.random();
            if(numberRandom > 0.5){
                return numberRandom
            }else {(numberRandom < 0.5)
                return numberRandom
            }
        },
},
})
app.mount("#user-goal");