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
        var todoTag=document.createElement('p');
        var todoContainer=document.createElement('div')
        var todoText=document.createTextNode(todo);
        var linkElement=document.createElement('a');
        console.log(todo)
        todoContainer.setAttribute('class','container row')
        todoElement.setAttribute('class','list-group-item list-group-item-dark container')
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('class','oi oi-ban col-sm-1');
        todoTag.setAttribute('class','col-sm-11');
        var pos=todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')'); 
        todoTag.appendChild(todoText)
        todoContainer.appendChild(todoTag)     
        todoContainer.appendChild(linkElement)          
        todoElement.appendChild(todoContainer);
        listElement.appendChild(todoElement);
        console.log(todos)
        
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