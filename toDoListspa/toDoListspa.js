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
	var i;
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
