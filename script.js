function addTask() {
    let task = document.createElement("li");
    task.innerHTML = "task";
    task.contentEditable = "true";
    document.getElementById('ul').appendChild(task);
    let span = document.createElement("span");
    let cross = document.createTextNode("×");
    span.className = "close";
    span.appendChild(cross);
    task.appendChild(span);
    span.contentEditable = "false";
}


let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function deleteTask() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


function onload() {
    let list = document.getElementsByTagName("li");
    for (let i = 0; i < list.length; i++) {
        let span = document.createElement("span");
        let cross = document.createTextNode("×");
        span.className = "close";
        span.appendChild(cross);
        list[i].appendChild(span);
        span.contentEditable = "false";
    }
}