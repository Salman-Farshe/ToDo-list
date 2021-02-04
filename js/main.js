let inputTodo = document.getElementById('mytodo');
let addTodoButton = document.getElementById('btnTodo');
let todos = document.getElementById('todos');

let insert = document.getElementById('insert');
let allinput = document.getElementById('todoInput'); 

// Input + Click on add button
addTodoButton.addEventListener('click', function(){
    createNewTodo();
});

// Input + Press on enter
inputTodo.addEventListener('keypress', function(){
    if(event.which === 13){
        createNewTodo();
    }
});

// Hide section
insert.addEventListener('click', function(){
    allinput.classList.toggle('done');
});

function createNewTodo(){
    // create a new empty elements
    let emptytodo = document.createElement('p');
    // input values sent to emptyTodo
    emptytodo.innerText = inputTodo.value;
    // emptytodo values move to todos section for display
    todos.appendChild(emptytodo);
    // after display, input section is clear
    inputTodo.value = "";
    // for finished the task
    emptytodo.addEventListener('click', function(){
        this.classList.toggle('finish');
    });
    // to remove completed task
    emptytodo.addEventListener('dblclick', function(){
        this.remove(emptytodo);
    });
}