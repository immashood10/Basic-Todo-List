var input = document.getElementById("textt");
var list = document.getElementById("list");
function post() {
    console.log(input.value);
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    var postButton = document.createElement("button");
    var postText = document.createTextNode("POST");
    postButton.appendChild(postText);
    list.appendChild(li);
    li.style.marginLeft="auto";;
    li.style.backgroundColor="transparent";
    var delButton = document.createElement("button");
    var editButton = document.createElement("button");
    var delText = document.createTextNode("Delete");
    var editText = document.createTextNode("Edit");
    li.appendChild(delButton);
    li.appendChild(editButton);
    delButton.appendChild(delText);
    delButton.setAttribute('onclick','delTodo()');
    editButton.setAttribute('onclick','editTodo()');
    delButton.className = "button2";
    editButton.className = "button1";
    editButton.appendChild(editText);
    delButton.style.marginLeft="50px";
    editButton.style.margin="auto";
    list.prepend(li);
    input.value = "";
}
function delTodo() {
    event.target.parentNode.remove();
}

function editTodo() {
    var editValue = prompt("Enter a Value");
    event.target.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll() {
    list.remove();
}

