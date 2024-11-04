var ulElement = document.getElementById('list');
var lidiv = document.createElement('div');
lidiv.setAttribute('class','lidiv');
ulElement.appendChild(lidiv);
function addTodo(){
    var input = document.getElementById('input');
    if(input.value){
        
        
        //creating list / adding list
        var liElement = document.createElement('li');
        var liTxt = document.createTextNode(input.value);
        liElement.appendChild(liTxt);
        
       
 //deleting single button / deleting single list / data
 var delbtn = document.createElement('button');
        
 var delTxt = document.createTextNode('Delete');
 delbtn.appendChild(delTxt);
 liElement.appendChild(delbtn)
 delbtn.setAttribute('onclick','singleDel(this)');
 //Edit button / Edit list /  data
 var editbtn = document.createElement('button');
 var editTxt = document.createTextNode('Edit');
 editbtn.appendChild(editTxt);
 liElement.appendChild(editbtn);
editbtn.setAttribute('onclick','editthis(this)');
lidiv.appendChild(liElement);
        // ulElement.appendChild(liElement);
        
        input.value = ""
       

    }
    else{alert("add any item")}
}
function deleteAll(){
    ulElement.innerHTML = ""
}
function singleDel(e){
   e.parentNode.remove();
}
function editthis(e){
    var updateval = prompt("Edit Your Text");
    e.parentNode.firstChild.nodeValue = updateval
}