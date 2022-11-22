var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addEvent);
itemList.addEventListener('click', removeEvent);

function addEvent(e) {
    e.preventDefault();
    var item = document.getElementById('item').value;

    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.appendChild(document.createTextNode(item));

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    newItem.appendChild(deletebtn);

    itemList.appendChild(newItem);
    item.value = " ";
}

function removeEvent(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do You Really Want to Delete this?? ')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}