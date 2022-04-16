var cartarray = JSON.parse(localStorage.getItem("products"))|| [];
console.log(cartarray);
function displaydata(cartarray){
cartarray.map((elem,index)=>{
    var div=document.createElement('div');
    div.setAttribute("id","div")
    var image=document.createElement("img");
    image.setAttribute("src",elem.strMealThumb)
    image.setAttribute("id",'image')
    var id= document.createElement('p');
    id.innerText=elem.idMeal;
    var meal= document.createElement('p');
    meal.innerText=elem.strMeal;
    var price=document.createElement("p");
    price.innerText=elem.price+"-" + elem.quant
    var button1 =document.createElement("button")
    button1.innerText="ADD+1";
    button1.setAttribute("id","btn");
    button1.addEventListener("click",function(){
        increasecount(index);
    })
    var button2 =document.createElement("button")
    button2.innerText="minus-1";
    button2.setAttribute("id","btn");
    
    button2.addEventListener("click",function(){
        decreasecount(index);
    })
    var remove =document.createElement("button")
remove.setAttribute("id","btn1")
remove.innerText="Remove item from cart";
remove.addEventListener("click",function(){
cartarray.splice(index,1);
localStorage.setItem("products",JSON.stringify(cartarray));
 document.querySelector("#container").innerHTML='';
displaydata(cartarray);
})
    div.append(image,id,meal,price,button1,button2,remove);
    document.getElementById("container").append(div);
   
})
}

function increasecount(index){
    document.querySelector("#container").innerHTML=""
    cartarray[index].quant++;
    localStorage.setItem("products",JSON.stringify(cartarray));
    
    displaydata(cartarray)
    // showtotal()
    }
    
    function decreasecount(index){
    document.querySelector("#container").innerHTML=""
    cartarray[index].quant--;
    localStorage.setItem("products",JSON.stringify(cartarray));
    
    displaydata(cartarray)
    // showtotal()
    }
displaydata(cartarray);