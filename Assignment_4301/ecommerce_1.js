let todo = [];

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

function displayTodos(todos, container){
        var div = document.createElement("div");
    container.innerHTML = "";
    for(let i = 0;i<todos.length;i++){
        var div2 = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = `${todos[i].name} `;
        let p2 = document.createElement("p");
        p2.textContent = `Price : ₹ ${todos[i].price}`;
        var img = document.createElement('img');
        img.src = `${todos[i].url}`;
        img.style.height = 120+"px";
        img.style.width = 115+"px";
        div2.style.height = 200+"px";
        div2.style.width = 115+"px";
        div2.style.backgroundColor = randomColor();
        div2.style.padding = 10+"px";
        div2.style.border = 1+"px solid grey";
        div2.style.float = "left";
        div2.style.margin = 10+"px";
        div2.appendChild(img)
        div2.appendChild(p);
        div2.appendChild(p2);
        div.appendChild(div2);
    }
    container.append(div);
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


