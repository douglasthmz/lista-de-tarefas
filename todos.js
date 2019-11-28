var listElement=document.querySelector('#app ul');
var inputElement=document.querySelector('#app input');
var buttonElement=document.querySelector('#app button');

buttonElement.setAttribute('class', 'btn btn-dark');
listElement.setAttribute('class', 'list-group');
inputElement.setAttribute('class', 'input-group-text')

var todos=JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML='';
    for(todo of todos){
        var todoElement=document.createElement('li');
        var todoText=document.createTextNode(todo);
        var linkElement=document.createElement('a');
        todoElement.setAttribute('class','list-group-item list-group-item-dark')
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('class','oi oi-ban');
        linkElement.setAttribute('style','text-align:right display:block');
        var pos=todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');      
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}
renderTodos();

function addTodo(){
    var todoText=inputElement.value;
    todos.push(todoText);
    inputElement.value='';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick=addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}