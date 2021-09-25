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
    2: {
      name: "School list",
      todos: [
        {
          text: 'homework',
          completed: false
        },
        {
          text: 'math',
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
    for (const key in lists) {
      if (lists.hasOwnProperty(key)) { //Sets the name of the list and gives a id to each button
        listsHtml += `<button type="button" class="list-group-item list-group-item-action" id="list${key}" onclick="setCurrentList(list${key})">${lists[key].name}</button>`;
      }
    }
    listsHtml += '</ul>';
    // print out the HTML just made
    document.getElementById('listItems').innerHTML = listsHtml;


    //print the current list out
//     document.getElementById('listTitle').innerText = currentList.name;

//     //get the items from the todo
//     let todosHtml = '<ul class="list-group" id="listItems">';
//     currentList.todos.forEach((list) => {
//         //{todo.text}
//     todosHtml += `<li class="list-group-item">
//     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//     {todo.text}</li>`;
//     // print the todos
//     document.getElementById('current-list-todos').innerHTML = todosHtml;
//  });

}
render()
// the function to add todos

function addTodo() {
    //grab text from the input box
    const text =
    document.getElementById('toDoInput').value;
    if(text) {
      currentList.todos.push({
        text: text,
        completed: false
      })
      render();
    }
}


function setCurrentList(identity) {
  let listId = []
  for (const key in lists) {
    if (lists.hasOwnProperty(key)) { //Sets the name of the list and gives a id to each button
      listId.push('list' + key)
    }
    
  }
  let selectedList = identity.id
  let tobeRemoved = listId.indexOf(selectedList) //removes the chosed list from the listId
  console.log(tobeRemoved)
  listId.splice(tobeRemoved, 1)
  console.log(listId)

//create a loop to go through and reset the other lists

  identity.id += ' currentList'
}
