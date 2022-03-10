const app = Vue.createApp({
    data(){
        return {
        count:0,
        username:"",
        formulaire:"formulaire envoyé",
        nameConfirmed:" ",
        escConfirmed:" "
        };    
    },
    methods: {
        submitForm(){
            alert (this.formulaire);
        },
        confirmationInput(event){
            this.nameConfirmed = event.target.value;
        },
        escapeValue(event){
            this.escConfirmed = event.target.value;
        }
},
})
app.mount("#user-goal");