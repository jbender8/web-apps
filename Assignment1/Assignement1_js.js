function createTask(){
    var ultodo = document.createElement("li");
    var inputValue = document.getElementById("txtTask").value;
    var to = document.createTextNode(inputValue);
    ultodo.appendChild(to);
    if (inputValue == '') {
        alert( "You must write something!");
    } 
    else {
        document.getElementById("TodoResults").appendChild(ultodo);        
    }
    document.getElementById("txtTask").value = "";
    var StartTaskButton=document.createElement("button");
    
    StartTaskButton.innerText="Start Task";
	StartTaskButton.className="StartTask";
    ultodo.appendChild(StartTaskButton);
    StartTaskButton.onclick = function(){
        ultodo.removeChild(StartTaskButton);
        document.getElementById("ProgressResults").appendChild(ultodo);
        var CompleteTaskButton=document.createElement("button");
        CompleteTaskButton.innerText="Complete Task";
        CompleteTaskButton.className="CompleteTask";
        ultodo.appendChild(CompleteTaskButton);
        CompleteTaskButton.onclick = function(){
            ultodo.removeChild(CompleteTaskButton);
            document.getElementById("CompletedResults").appendChild(ultodo);
        }   
    }
}