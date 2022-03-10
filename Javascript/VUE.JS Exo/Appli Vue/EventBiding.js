const app = Vue.createApp({
    data(){
        return {
        count:0,
        username:""
        };    
    },
    methods: {
        //AVEC LES PARAMETRES
        // addAjout(count) {
        // this.count += count++;
        // },
        // addSuppr(count) {
        //     this.count -= count --;
        // },
        //SANS PARAMETRE
        // addAjout() {
        //     this.count += 77;
        //     },
        // addSuppr() {
        //         this.count -= 20;
        //     },
        // setName(event) {
        //         this.username = event.target.value;
        //     },
        resetInput(event){
            this.username = event.target.reset;
        }
},
})
app.mount("#user-goal");