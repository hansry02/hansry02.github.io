addItem = function() {
	theList = document.querySelector('ul');
	listItem = document.querySelector('#listItem');
	userPriority = document.querySelector('#priority').value;
	
	var listItemContents = listItem.value;
	
	insertTask(listItemContents, userPriority);
	
	listItem.value = "";
	
	localSave();
}

insertTask = function(text, priority) {
	theList = document.querySelector('ul');
	
	var li = document.createElement('li');
	li.className = priority;
	
	var input = document.createElement('input');
	input.type = "checkbox";
	input.onclick = complete;
	
	textNode = document.createTextNode(text);
	
	li.appendChild(input);
	li.appendChild(textNode);
	theList.appendChild(li);
}

complete = function() {
	if (this.checked) {
		this.parentNode.classList.add("completed");
	}
	
	else {
		this.parentNode.classList.remove("completed");	
	}
	
	localSave();
}

localSave = function() {
	var saves = [];
	var priorities = [];

	lis = document.querySelectorAll('li');
	
	for (i=0; i<lis.length; i++) {
		if (! lis[i].classList.contains("completed")) {
			saves.push(lis[i].innerText);
			priorities.push(lis[i].className);
		}
	}
	
	localStorage.setItem("todo",JSON.stringify(saves));
	localStorage.setItem("priorities",JSON.stringify(priorities));
}

restore = function() {
	tasks = JSON.parse(localStorage.getItem("todo"));
	priorities = JSON.parse(localStorage.getItem("priorities"));
	for (i=0; i<tasks.length; i++) {
		insertTask(tasks[i],priorities[i]);
	}
}

checkAll = function() {
	lis = document.querySelectorAll('li input');
	
	for (i=0; i<lis.length; i++) {
		lis[i].checked = true;
		lis[i].parentNode.classList.add("completed");
	}
	
	localSave();
}

unCheckAll = function() {
	lis = document.querySelectorAll('li input');
	
	for (i=0; i<lis.length; i++) {
		lis[i].checked = false;
		lis[i].parentNode.classList.remove("completed");
	}
	
	localSave();
}

clearAll = function() {
	theList = document.querySelector('ul');
	
	theList.innerHTML = "";
	
	localSave();
}

checkFunction = function() {
	functions = document.querySelector('#functions');
	if (functions.value == "1") {
		checkAll();
		functions.value = "0";
	}
	
	else if (functions.value == "2") {
		unCheckAll();
		functions.value = "0";
	}
	
	else if (functions.value == "3") {
		clearAll();
		functions.value = "0";
	}
	
	else {}
}
