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
showListItems(1)
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
  //calls the showListItems function to show the items for the chosen list
  showListItems(identity)
}


function showListItems(listNum) {
  //similar to the render function but displays the todo items for each specific list
  let listItemHtml = '<ul class="list-group" id="listItems">'
  //opens up the chosen list and gets the todo list
  let items = lists[listNum]['todos']
  let itemNum = 0
  let currentItem = ''
  for (const key in items) {
    //this loop goes through each item in the list and adds a button for it
   currentItem =items[key]['text']
   listItemHtml +=  `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" aria-label="...">${currentItem}</li>`
  }
  listItemHtml += '</ul>'
  //displays to the item section
  document.getElementById('todoItems').innerHTML = listItemHtml;
}