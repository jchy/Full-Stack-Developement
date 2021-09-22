let todo = [];
let cartArr=[];
function handleAdd(){
    //retrieve input text
    const text = document.getElementById("input").value;
    const text2 = document.getElementById("input2").value;
    const text3 = document.getElementById("input3").value;
    document.getElementById("input").style.border = 1+"px solid grey";

    if(!text){
        alert('type something');
        return;
    }
    const payload = {
        name: text,
        price: text2,
        url: text3
    };
    todo.push(payload);
    localStorage.setItem("todos", JSON.stringify(todo));
    //update the UI
    const container = document.getElementById("task-list");
    displayTodos(todo, container);
}

function random(val){
    return Math.floor(Math.random()*val);
}

function randomColor(){
    return 'rgb('+random(210)+','+random(210)+","+random(210)+')';
}

var flag=0;

function displayTodos(todos, container){
        var div = document.createElement("div");
    container.innerHTML = "";
    for(let i = 0;i<todos.length;i++){
        var addToCart = document.createElement("button");
        addToCart.textContent = "ADD TO CART";
        addToCart.style.backgroundColor = "orange";
        addToCart.style.marginLeft = 30+"px";
        var div2 = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = `${todos[i].name} `;
        p.style.color = "white";
        let p2 = document.createElement("p");
        p2.textContent = `Price : ₹ ${todos[i].price}`;
        p2.style.color = "white";
        var img = document.createElement('img');
        img.src = `${todos[i].url}`;
        img.style.height = 180+"px";
        img.style.width = 100+"%";
        div2.style.height = 300+"px";
        div2.style.width = 19+"%";
        div2.style.backgroundColor = randomColor();
        div2.style.padding = 1+"%";
        div2.style.border = 1+"px solid grey";
        div2.style.float = "left";
        div2.style.margin = 1.5+"%";
        div2.appendChild(img)
        div2.appendChild(p);
        div2.appendChild(p2);
        div2.appendChild(addToCart);
        div.appendChild(div2);
        addToCart.addEventListener("click",function handleCart(){
            var productName = p.textContent;
            const payload2 = {
                pname: productName,
            };
            if(flag==0){
                cartArr.push(payload2.pname);
                localStorage.setItem("userCart", JSON.stringify(cartArr));
                flag++;
            }
            for(let i=0;i<cartArr.length;i++){
                if(p.textContent === cartArr[i].pname){
                    alert('Product is already in the cart');
                      return;
                }
            }
            cartArr.push(payload2);
            localStorage.setItem("userCart", JSON.stringify(cartArr));
            handleCartOnLoad();
        });
    }
    container.append(div);
}

function handleCartOnLoad(){
    const cartVal = JSON.parse(localStorage.getItem("payload2"));
    if(cartVal){
        cartArr = cartVal;
    }
}


function handleLoad(){
    const data = JSON.parse(localStorage.getItem("todos"));
    const container = document.getElementById("task-list");
    if(data){
        todo =data;
        displayTodos(data, container);
    }
}

window.addEventListener("load",function(){
    const addBtn = document.getElementById("add-btn");
    addBtn.style.backgroundColor="green";
    addBtn.addEventListener("click",handleAdd);
    handleLoad();
})
