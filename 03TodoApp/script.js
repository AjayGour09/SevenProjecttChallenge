const input = document.querySelector('input')
const add = document.querySelector('#addTask')
const list = document.querySelector('#tasklist')

add.addEventListener('click' ,()=>{
    const task = input.value.trim();
    if(task=="") return alert ("Please enter task ");
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.textContent=task;

    li.addEventListener('click',()=>{
        li.classList.toggle('completed')
    });

    const edit = document.createElement('button');
    edit.textContent='Edit';

    edit.addEventListener('click' ,()=>{
        e.stopPropagation();
        const newTask = prompt('Edit Your Task' ,span.textContent);
        if(newTask!==null&&newTask.trim()!==''){
            span.textContent=newTask.trim();
        }
    });

    const dlt = document.createElement('button')
    dlt.textContent ='Delete';
    dlt.addEventListener('click',(e)=>{
        e.stopPropagation();
        li.remove();
    })

    dlt.addEventListener('click',()=>li.remove());
    li.appendChild(span);
    li.appendChild(edit)
    li.appendChild(dlt);
    list.appendChild(li);
    input.value ="";
})

