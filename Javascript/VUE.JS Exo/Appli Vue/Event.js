const app = Vue.createApp({
    data(){
    return {
        counter:0,
        username:''
    }
    },

    methods:{

    setName(event, lastname){
        console.log(event)
        this.username = event.target.value +' '+ lastname;
    },

    ajouter(num){
        this.counter += num;
    },
    reduire(num){
        this.counter = this.counter - num;
    }
    }
});
app.mount('#events');