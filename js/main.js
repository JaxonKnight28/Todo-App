//button id is toDoInput
//list title id is listTitle
//lists id is listItems


let lists = {
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
    3: {
      name: "Chores",
      todos: [
        {
          text: 'dishes',
          completed: false
        },
        {
          text: 'laundry',
          completed: false
        }
      ]
    },
   }
   let currentList = lists[1];

//renderFunction
function render() {
    //left bar html
    let listsHtml  = '<ul class="list-group" id="listItems">';
    //go through and get all the names for the different lists
    for (const key in lists) {
      if (lists.hasOwnProperty(key)) { //Sets the name of the list and gives a id to each button
        listsHtml += `<button type="button" class="list-group-item list-group-item-action" id="list${key}" onclick="setCurrentList(${key})">${lists[key].name}</button>`;
      }
    }
    listsHtml += '</ul>';
    // print out the HTML just made
    document.getElementById('listItems').innerHTML = listsHtml;

}
render()
setCurrentList(1)

//creates a varable to keep track of the length of the number of lists
let todoListLength = Object.keys(lists).length;
function addList() {
    //grab text from the input box
    let newListName = document.getElementById('toDoInput').value;
    if (newListName) {
      //adds 1 to the length of the todoListLength to properly add another one
      todoListLength += 1
      //creates a new object in the list of objects and initialzes the name given and an empty todo list
      lists[todoListLength] = {'name': newListName, 'todos': []};
      //sets the newly created list as the current list
      setCurrentList(todoListLength)
      }
    }



function setCurrentList(identity) {
  //first resets the lists by rendering it again
  render();
  //takes the number taken and creates a variable that matches the ID of the wanted list
  let theChosen = 'list' + identity;
  //changes the title of the current list
  document.getElementById('listTitle').innerText = lists[identity].name;
  //changes motifies the chosen ID so that it is the current list
  document.getElementById(theChosen).id = theChosen + ' currentList';
  //adds an active class to the list button to make it blue when selected
  document.getElementById(theChosen + ' currentList').classList.add('active')
}
