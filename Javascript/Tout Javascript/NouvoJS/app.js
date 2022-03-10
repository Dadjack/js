// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addTodo(){
//     //récup la valeur dansl'input
//     const enteredValue = inputEl.value;
//     //créer du <li></li>
//     const listItemEl = document.createElement('li');
//     //Remplir la <li></li> fraichement crée
//     listItemEl.textContent = enteredValue;
//     //On va placer la <li></li> rempli dans la liste
//     listEl.appendChild(listItemEl);
//     //Je remets la valeur de l'input à zéro
//     inputEl.value = '';

// }


// buttonEl.addEventListener("click",addTodo);

Vue.createApp({
    data() {
    return {
        todos: [],
        enteredValue: "",
        maVariable:"TOTO"
    };
    },
    methods: {
    addTodo() {
        this.todos.push(this.enteredValue);
        this.enteredValue = ""
    },
    },
}).mount("#app");
