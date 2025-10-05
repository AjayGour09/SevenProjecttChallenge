const body = document.querySelector('body')
const button = document.querySelector('button')
console.log(button);

function changer() {
    button.addEventListener('click' ,()=>{
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = randomColor;
    }) ;   
}
changer();