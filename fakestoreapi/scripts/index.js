async function getData(){
    let url='https://fakestoreapi.com/products';

    try{
    let res= await fetch(url);
    let data= await res.json();
    console.log(data);
    console.log(data[0].title)
    displaydata(data)
    }
    catch(error){
        console.log(error);
    } 
}

getData();
function displaydata(data){
    document.querySelector("#container").innerHTML='';
    data.map(function(elem){
        var div=document.createElement("div");
        var titl=document.createElement("p");
        titl.innerText=elem.title;
        var description=document.createElement("p");
        description.innerText=elem.description;
        var price=document.createElement("p");
        price.innerText=elem.price;
        var avatar=document.createElement('img');
        avatar.setAttribute("src",elem.image)
        avatar.setAttribute("id","image")
        var cartarray=JSON.parse(localStorage.getItem('products'))||[];

        var button=document.createElement('button');
        button.innerText="addtocart";
        button.addEventListener("click",function(){
            addtocart(elem);
        })
        div.append(titl,description,price,avatar,button);
        document.querySelector("#container").append(div);
        function addtocart(elem){
            elem.quant=1;
            cartarray.push(elem);
            localStorage.setItem("products",JSON.stringify(cartarray));

        }
    })
}