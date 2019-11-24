function dragStart(event){
event.dataTransfer.setData("Text", event.target.id);      
document.getElementById("demo").innerHTML = "Start to drag the p element!";
}

function dragOver(event){
      event.preventDefault();
     /** document.getElementById("demo").innerHTML = "The p element is moving!";
     */
}

function drop(event){
    var data =  event.dataTransfer.getData("Text");      
     event.target.appendChild(document.getElementById(data));
     document.getElementById("demo").innerHTML = "The p element is dropped!";

}

function dragEnter (event){
     /** document.getElementById("demo").innerHTML = "Test!";
      */
     if(event.target.className === "droptarget"){
          event.target.style.border = " 3px red solid";
     }
}

function dragLeave (event){
     event.target.style.border = ""
}

function dragEnd (event) {
     document.getElementById("demo").innerHTML = "dropped!";

}