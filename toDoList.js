let toDoList = JSON.parse(localStorage.getItem('toDoList')) || []; 
renderList();

function add(){
  const inputElem = document.querySelector('.js-toDo-input');
  const dateInputElem = document.querySelector('.js-date-input');
  const toDoName = inputElem.value;
  const toDoDate = dateInputElem.value;
  toDoList.push({name: toDoName, dueDate: toDoDate});

  localStorage.setItem('toDoList', JSON.stringify(toDoList));

  renderList();
  inputElem.value = '';
  dateInputElem.value = '';
}

function renderList(){
  let toDoListHTML = '';
  toDoList.forEach(function(toDoObj,i){
    const html = `
    <div class="toDo-name">${toDoObj.name}</div>
    <div class="toDo-date">${toDoObj.dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button>
    `;
    toDoListHTML += html;
  });
  
   const divElem = document.querySelector('.js-toDo-list');
   divElem.innerHTML = toDoListHTML;

   document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, i)=>{
      deleteButton.addEventListener('click', ()=>{
        toDoList.splice(i, 1);
        localStorage.setItem('toDoList',JSON.stringify(toDoList));
        renderList();
      });
    });
}
