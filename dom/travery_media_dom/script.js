// select the form
let form = document.getElementById('addForm');

// select items list
let itemList = document.getElementById('items');

// select the search box
let filter = document.getElementById('filter');

////////////////////////////////////////

// event listener to add items
form.addEventListener('submit', addItem);

// add items function
function addItem(e) {

    // prevent page from re-loading upon submit
    e.preventDefault();

    ////////////////////////////////////////

    // get the input value, set equal to newItem var
    let newItem = document.getElementById('item').value;

    // create new element (li)
    let li = document.createElement('li');

    // add class(es) to the li
    li.className = 'list-group-item';

    // create text node from newItem's input
    let text = document.createTextNode(newItem)

    // append user's input to li
    li.appendChild(text);

    ////////////////////////////////////////

    // create delete button content
    let delBtn = document.createElement('button');

    // add classes to delete button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    // create and append text node to delete button
    let delBtnText = document.createTextNode('X');
    delBtn.appendChild(delBtnText);

    // append user's input to the li
    li.appendChild(delBtn);

    ////////////////////////////////////////

    // append li item to the item list group
    itemList.appendChild(li);
};

////////////////////////////////////////

// delete items from list - listener
itemList.addEventListener('click', removeItem);

// delete items from list - function
function removeItem(e) {

    // if statement to find the items (with delete button)
    if (e.target.classList.contains('delete')) {

        // select the delete button
        let listItem = e.target.parentElement;

        // remove the li item selected
        itemList.removeChild(listItem);
    }
};

////////////////////////////////////////

// event listener to search
filter.addEventListener('keyup', search);

// add items function
function search(e) {

    // get querty text from user, convert to lowercase
    let text = e.target.value.toLowerCase();
    
    // get all the li's
    let items = itemList.getElementsByTagName('li');

    // convert to array
    Array.from(items).forEach(function(item){

        // get actual text from
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else { 
            item.style.display = 'none';
        }
    });
};

