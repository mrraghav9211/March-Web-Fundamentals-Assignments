let todos = [];
const render = function(){
    const parent_container = document.getElementById('list_container');
    parent_container.innerHTML =" ";
    for(let i = 0; i<todos.length; i +=1){
        const new_li = document.createElement('li')
        const new_span = document.createElement('span')
        const new_span1 = document.createElement('span')
        new_span1.className = "fa-solid fa-trash right"
        new_span.innerText = todos[i];
        new_span1.id = "btn"
        new_li.appendChild(new_span)
        new_li.appendChild(new_span1)
        parent_container.appendChild(new_li)
    }
}
const add_item = function(){
    const ip = document.getElementById('input_txt');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const btn = document.getElementById('add_btn');
btn.addEventListener('click', add_item);



const  delete_btn = function(index){
    let new_arr = [];
    for(let i = 0; i<todos.length; i += 1){
        if (i !=index) {
            new_arr.push(todos[i])
        }
    }
    todos = new_arr;
    render();
}
const btn2 = document.getElementById('add');
btn2.addEventListener('click',delete_btn);