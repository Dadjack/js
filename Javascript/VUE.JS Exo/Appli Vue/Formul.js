const app = Vue.createApp({
    data(){
        return {
        count:0,
        countStart:0,
        username:"",
        formulaire:"formulaire envoyé",
        Monster:"Unleash The Beast",
        nameConfirmed:""
        };    
    },
    methods: {
        submitForm(event){
            alert (this.formulaire);
            // event.preventDefault();
        },
        addAjout(event) {
            this.count += 77;
            
            },
        addSuppr(event) {
                this.count -= 20;
            },
        setName(event) {
                this.username = event.target.value;
        },
        confirmationInput(){
            this.nameConfirmed = this.username;
        }
},
})
app.mount("#user-goal");