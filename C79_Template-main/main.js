menuListArray = ["Pizza Vegetariana", "pizza de arroz", "picanha vegetariana", "bolo sem massa"];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=o; i<menuListArray.lenght; i++){
    hetmldata=htmldata + menuListArray[i]+'<br>';
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata; 
var imgtags = '<img id="im1" src"images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=o; i<menuListArray.lenght; i++){
    hetmldata=htmldata +imgtags + menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}
function addTop(){
var item = document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}