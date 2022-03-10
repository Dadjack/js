const app = Vue.createApp({
    data(){
    return {
        boxASelected:false,
        boxBSelected:false,
        boxCSelected:false,
    }
    },
    methods:{
    boxSelection(uneBox){
        if(uneBox === 'A'){
            this.boxASelected = true;
        }else if(uneBox === 'B'){
            this.boxBSelected = true;
        }else if(uneBox === 'C'){
            this.boxCSelected = true;
        }
    }

    }
});
app.mount('#styling');

