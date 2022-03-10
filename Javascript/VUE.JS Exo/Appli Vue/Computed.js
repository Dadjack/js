const app = Vue.createApp({
    data(){
    return {
        counter:0,
        username:'',
        leNomConfirmed:'',
        fullName:'',
        activeColor: "red",
        fontSize: 30,
    }
    },
    //Surveille toutes les variables
    // computed:{
    // leFullName(){
    //     console.log('La fonction se lance encore ...');
    //     if(this.username === ''){
    //     return ''
    //     }
    //     return this.username + ' ' + 'DUPOND';
    // }
    // },

    // Surveille (cible une variable) la variable
    // watch:{
    //     username(value){
    //     if(value === ''){
    //             this.fullName = '';
    //             }else{
    //             this.fullName = value + ' ' + 'SchwarZi';
    //             }
    //         }
    //     },
    //     watch:{
    //         counter(value){
    //         if(value > 50 ){
    //                 this.counter = 0;
    //                 }else if (value < -50){
    //                 this.counter = 0;
    //                 }
    //             }
    //         },

    methods:{

      // afficherFullName(){
      //   console.log('La fonction se lance encore ...');
      //   if(this.username === ''){
      //     return ''
      //   }
      //   return this.username + ' ' + 'DUPOND';
      // },

    resetInput(){
        this.username = '';
    },
    confirmationInput(){
        this.leNomConfirmed = this.username
    },

    submitForm(event){
        // event.preventDefault();
        alert('Form Envoyé');
    },

    setName(event, lastname){
        console.log(event)
        this.username = event.target.value +' '+ lastname;
    },

    ajouter(num){
        this.counter += num;
    },
    reduire(num){
        this.counter = this.counter - num;
    },
    }
});
app.mount('#events');