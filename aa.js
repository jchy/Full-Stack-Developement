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
function displayTodos(todos, container){
    let ul = document.createElement("ul");
    container.innerHTML = "";
    for(let i = 0;i<todos.length;i++){
        let li = document.createElement("li");
        li.textContent = `${todos[i].name} |${todos[i].price}`;
        var img = document.createElement('img');
        img.src = `${todos[i].url}`;

        li.style.backgroundColor="yellow";
        li.style.color="black";
        let imgli = document.createElement("li");
        imgli.appendChild(img);
        ul.appendChild(imgli);
        ul.append(li);
    }
    container.append(ul);
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




