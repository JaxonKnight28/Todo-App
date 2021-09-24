//button id is toDoInput
//list title id is listTitle
//lists id is listItems


const lists = {
    1: {
      name: "Shopping list",
      todos: [
        {
          text: 'bananas',
          completed: false
        },
        {
          text: '1 lbs ground turkey',
          completed: false
        }
      ]
    },
   }
   const currentList = lists[0];

//renderFunction
function render() {
    //left bar html
    let listsHtml  = '<ul class="list-group" id="listItems">';
    //go through and get all the names for the different lists
    lists.forEach((list) => {
        listsHtml += `<li class="list-group-item">${list.name}</li>`;
      });
    listsHtml += '</ul>';
    // print out the HTML just made
    document.getElementById('listItems').innerHTML = listsHtml;

    //print the current list out
    document.getElementById('current-list-name').innerText = currentList.name;

    //get the items from the todo
    let todosHtml = '<ul class="list-group" id="listItems">';
    currentList.todos.forEach((list) => {
        //{todo.text}
    todosHtml += `<li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    {todo.text}</li>`;
    // print the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
 });

}

render()