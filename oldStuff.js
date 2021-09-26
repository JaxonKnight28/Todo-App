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

    //makes the first list the default list every time
    document.getElementById('list1').id = 'list1' + ' currentList'
    document.getElementById('listTitle').innerText = lists[1].name;



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

let = todLlistLength = Object.keys(lists).length;
function addList() {
    //grab text from the input box
    let text = document.getElementById('toDoInput').value;
    if (text) {
      todLlistLength += 1
      //let lengthOfObject = (Object.keys(lists).length + 1);
      lists[todLlistLength] = '';
      
      render()
      document.getElementById('list' + todLlistLength).innerText = text; //This spot is broken
    }
    text = ''
    }



function setCurrentList(identity) {
  let listId = []
  for (const key in lists) {
    if (lists.hasOwnProperty(key)) { //Gets the name of the lists and gives a id to each button
      listId.push('list' + key)
    }
    
  }
  let selectedList = identity.id

  let selectedListNum = selectedList.replace('list', '')
  document.getElementById('listTitle').innerText = lists[selectedListNum].name;


  let revisedList  = '<ul class="list-group" id="listItems">';
 for (let numbList in lists) {
  
  //same as in render function to go through the buttons
    revisedList += `<button type="button" class="list-group-item list-group-item-action" id="list${numbList}" onclick="setCurrentList(list${numbList})">${lists[numbList].name}</button>`;
    
 }
  revisedList += '</ul>';
  document.getElementById('listItems').innerHTML = revisedList;
  
  //changes the id so it is the current list
  let currentId = identity.id
  document.getElementById(selectedList).id = currentId + ' currentList'
}
