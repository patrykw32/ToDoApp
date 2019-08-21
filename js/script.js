
function addTask(text) {
    console.log('Add task to list')
    const todo = document.createElement('div');
    todo.classList.add('todo-element');

    //belka górna
    const todoBar = document.createElement('div');
    todoBar.classList.add('todo-element-bar');

    //data w belce
    const todoDate = document.createElement('div');
    todoDate.classList.add('todo-element-bar');
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    todoDate.innerText = dateText;

    //przycisk usuwania
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-element-delete');
    todoDelete.classList.add('button');
    todoDelete.innerHTML = 'Delete';
    todoDelete.setAttribute('id', 'newEl');

    //przycisk edycji zadania
    const todoEdit = document.createElement('button');
    todoEdit.classList.add('todo-element-edit');
    todoEdit.classList.add('button');
    todoEdit.innerHTML = 'Edit';
    

    //przycisk zapisywania
    const todoSave = document.createElement('button');
    todoSave.classList.add('todo-element-save');
    todoSave.classList.add('button');
    todoSave.innerHTML = 'Save';

    //wrzucamy elementy do belki
    todoBar.appendChild(todoDate);
    todoBar.appendChild(todoDelete);
    todoBar.appendChild(todoEdit);
    todoBar.appendChild(todoSave);

    //checkbox
    const checkboxTask = document.createElement('input');
    checkboxTask.classList.add('todo-checkbox')
    checkboxTask.type = "checkbox";
    checkboxTask.checked = false;

    //element z tekstem
    const todoText = document.createElement('p');
    todoText.classList.add('todo-element-text');
    todoText.innerText = text;
    todoText.contentEditable = "false";


    //łączymy całość
    todo.appendChild(todoBar);
    todo.appendChild(checkboxTask);
    todo.appendChild(todoText);

    //i wrzucamy do listy
    todoList.append(todo);


    todoDelete.addEventListener('click', function(){
        todo.remove();
    })


    checkboxTask.addEventListener('click', function(){
            if (checkboxTask.checked === true){
                console.log('checkin checkbox')
              todoText.style.textDecoration = "line-through";
            } else {
            todoText.style.textDecoration = "none";
            }
    })

    todoEdit.addEventListener('click', function(){
        if (todoText.contentEditable === "false"){
            todoText.contentEditable = "true"
            todoText.style.borderBottom = "1px solid #F15C5C";
        }
    })

    let saveEl = function(){
        if (todoText.innerText === ''){
            todoText.innerText = "You have to define task"
        }
        else  {
        todoText.contentEditable = "false";
        const newDate = new Date();
        const newDateText = newDate.getDate() + '-' + (newDate.getMonth()+1) + '-' + newDate.getFullYear() + ' godz.: ' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
        todoDate.innerText = newDateText;
        todoText.style.border = "none";
        }
    }

    todoSave.addEventListener('click', saveEl)
   
}



document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('#todoList');
    const todoForm = document.querySelector('#todoForm');
    const todoSearch = document.querySelector('#todoSearch');
   
    const btnRemove = document.querySelector('.button-remove')
   

    //Add element to list
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('.todo-form-message');
        if (input.value !== '') {
            addTask(input.value);
            input.value = '';

        }
    });




    //Search element
    todoSearch.addEventListener('input', function() {
        const val = this.value;
        const elems = todoList.querySelectorAll('.todo-element');
    
        [].forEach.call(elems, function(el) {
            const text = el.querySelector('.todo-element-text').innerText;
    
            if (text.indexOf(val) !== -1) {
                el.style.setProperty('display', '');
            } else {
                el.style.setProperty('display', 'none');
            }
        });
    });
    
    
});

