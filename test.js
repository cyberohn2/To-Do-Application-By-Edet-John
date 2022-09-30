
document.getElementById("button").onclick = function () {
    var UserInput = document.getElementById("input").value;
    var List = document.getElementById("list");
    var ListItem = document.createElement("li");
    ListItem.style.borderRadius = "5px";
    ListItem.style.marginBottom = "10px";
    var ToDo = document.createElement("p");
    ToDo.style.textTransform = "uppercase";
    var CancelBTN = document.createElement("input");
    CancelBTN.setAttribute("type", "button");
    CancelBTN.setAttribute("value","Cancel");
    CancelBTN.setAttribute("class","cancelbtn");
    var DoneBTN = document.createElement("input");
    DoneBTN.setAttribute("type", "button");
    DoneBTN.setAttribute("value","Done");
    DoneBTN.setAttribute("class","donebtn");

    if(UserInput == ""){
        alert("please do something");
    }
    else{
ListItem.appendChild(ToDo);
ListItem.appendChild(CancelBTN);
ListItem.appendChild(DoneBTN);
List.appendChild(ListItem);
    ToDo.innerHTML = UserInput;
       }
    CancelBTN.onclick = function (){
        List.RemoveChild(ListItem);
    }
     DoneBTN.onclick = function (){
        List.RemoveChild(ListItem);
         alert("Congrats on completing that task");
    }
    
}


/*document.getElementsById("button").onclick = function(){
    var UserInput = document.getElementById("input").value;
    var List = document.getElementsById("list");
    var ListItem = document.createElement("li");
    var ToDo = document.createElement("p");
    var CancelBTN = document.createElement("input");
    CancelBTN.setAttribute("type", "button");
    CancelBTN.setAttribute("value","&times");
    var DoneBTN = document.createElement("input");
    DoneBTN.setAttribute("type", "button");
    DoneBTN.setAttribute("value","&times");

    if(UserInput == ""){
        alert("please do something");
    }
    else{
ListItem.appendChild(ToDo);
ListItem.appendChild(CancelBTN);
ListItem.appendChild(DoneBTN);
List.appendChild(ListItem);
    ToDo.innerHTML = UserInput;
       }

};
CancelBTN.onclick = function(){
    List.appendChild()
};

DoneBTN.onclick = function(){
    alert("Congrats On Completing That Task");
    List.appendChild();

};
*/
