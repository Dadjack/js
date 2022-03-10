// On commence Toujours par créer une Appli Vue
const app = Vue.createApp({
        data(){
            return {
            todos :[],
            enteredValue: "",
            mesObjets: "Le roi de la frime",
            mesObjectifs:"Devenir immortel",
            objectif1:"Bad boys",
            objectif2:"The slam",
            numberOne : 92,
            unObjet:["name:Jack, firstname:Jean, age: 27"],
            maRemarque: "clique saloppe", 
            vueLink:'https://vuejs.org'
            };    
        },
        methods: {
            afficherObjectif() {
                const numberRandom = Math.random();
                if(numberRandom > 0.5){
                    return this.objectif1
                }else {(numberRandom < 0.5)
                    return this.objectif2
                }
            },
},
})
app.mount("#user-goal");




// const app = Vue.createApp({
//     data(){
//         return {
//         todos :[],
//         enteredValue: "",
//         mesObjectifs:"Devenir immortel",
//         numberOne : 92,
//         unObjet:["name:Jack, firstname:Jean, age: 27"],
//         maRemarque: "clique saloppe", 
//         vueLink:'https://vuejs.org'
//         };    
//     },
//     methods: {
//         addTodo() {
//             this.todos.push(this.enteredValue);
//             this.enteredValue = ""
//         },
// },
// })
// app.mount("#user-goal");



