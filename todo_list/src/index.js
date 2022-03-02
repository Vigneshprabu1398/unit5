import"./index.css"
var count=0;
document.querySelector("#myForm").addEventListener("submit",myFun);
var myObj=JSON.parse(localStorage.getItem("Products")) || [];   
display(myObj);
function myFun(event){
    event.preventDefault() 
    console.log("object");
    count++;
    var Category = document.querySelector("#cat").value;
    var Title = document.querySelector("#title").value;
    var desp = document.querySelector("#tarea").value;
    var price = document.querySelector("#price").value;

    var product={
        count:count,
        Category:Category,
        Title:Title,
        descripition:desp,
        price:price,
    }
    myObj.push(product);
    localStorage.setItem("Products",JSON.stringify(myObj));     

    display(myObj);

}

function display(myObj){
    document.querySelector("tbody").textContent="";
    myObj.map(function(elem,index){
        var row = document.createElement("tr");

        var td1 = document.createElement("td")
        td1.textContent=elem.count;
        var td2 = document.createElement("td");
        td2.textContent=elem.Category
        var td3 = document.createElement("td");
        td3.textContent=elem.Title
        var td4 = document.createElement("td");
        td4.textContent=elem.descripition
        var td5 = document.createElement("td");
        td5.textContent=elem.price
        var li = document.createElement("hr");

        var del= document.createElement("button");
        del.textContent="Delete";
        del.addEventListener("click",function (){
        deleteTask(index);
        })
        row.append(td1,td2,td3,td4,td5,li,del);
        document.querySelector("tbody").append(row);
    })
    function delfun(event){
        console.log(event.target.parentNode);
        event.event.target.parentNode.remove();
    }
}

function deleteTask(index){
    myObj.splice(index,1);
    localStorage.setItem("Products",JSON.stringify(myObj))
    display(myObj);
}