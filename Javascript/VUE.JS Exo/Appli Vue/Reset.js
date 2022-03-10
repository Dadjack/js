const app = Vue.createApp({
    data(){
        return {
        count:0,
        username:""
        };    
    },
    methods: {
        // setName(event) {
        //         this.username = event.target.value;
        //     },
        resetInput(){
            this.username = "";
        },
        afficherFullName(){
            console.log ("la fonction s'éxecute encore");
            if(this.username == ""){
                return ""
            }else{
                return this.username +" "+ "Arnold";
            }
        }
},
})
app.mount("#user-goal");