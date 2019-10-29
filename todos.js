var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'fazer cafe', 
    'estudar js',
    'ola mundo'
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var deleteElement = document.createElement('a');

        deleteElement.setAttribute('href' , '#');

        var pos = todos.indexOf(todo);
        deleteElement.setAttribute('onclick' , 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
        deleteElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        listElement.appendChild(deleteElement);
    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}