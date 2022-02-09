var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//Deletebutton
	var deletebtn = document.createElement("button");
	deletebtn.innerHTML = "Delete";
	deletebtn.classList.add("delclass");
	li.appendChild(deletebtn);

}

function deleteListElement(element) {
	if (element.target.className === "delclass") {
		element.target.parentElement.remove();
	}
}


function toggleDone(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}
	
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function UlClick (element) {
	toggleDone(element);
	deleteListElement(element);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", UlClick);



