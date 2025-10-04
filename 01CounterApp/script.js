const Count = document.getElementById('Count')
const increment =document.getElementById('increment')
const decrement = document.getElementById('decrement')
const reset = document.getElementById('reset')

let count = parseInt(localStorage.getItem('count')) || 0;;
function updatedisplay(){
    Count.innerText = count;
    localStorage.setItem('count',count);
}

increment.addEventListener('click' , ()=>{
    count++;
    updatedisplay();
})

decrement.addEventListener('click',()=>{
    if(count > 0){
    count--;
    }
    updatedisplay();
})
reset.addEventListener('click', ()=>{
    count = 0 ;
    updatedisplay();
})
updatedisplay();
 