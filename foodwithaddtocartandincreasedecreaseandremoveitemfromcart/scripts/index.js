const getdata= async() => {
let url='https://masai-food-api.herokuapp.com/api/meals/india';
try{
    let res= await fetch(url);
let data=await res.json();
    console.log("data:",data);
    console.log("meals",data[0].meals)
    displaydata(data);

}
catch(error){
    console.log(error);
}
}
getdata();
const displaydata = (data) => {
    document.querySelector("#container").innerHTML="";
    data[0].meals.map(function(elem){
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
        price.innerText=elem.price
        var cartarray= JSON.parse(localStorage.getItem("products"))|| [];
        var button =document.createElement("button");
        button.setAttribute("id","button")
        button.innerText="ADD TO Cart";
        button.addEventListener("click",function(){
            addtocart(elem)
        })
        div.append(image,id,meal,price,button);
        document.getElementById("container").append(div);
        const addtocart=(elem)=>{
            elem.quant=1;
            cartarray.push(elem);
            localStorage.setItem("products",JSON.stringify(cartarray))
        }
    })
   
}