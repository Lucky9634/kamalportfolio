console.log("I am Link");


let cencelbtn = document.querySelector('#cencel');
let addBarbtn = document.querySelector('#addBar');

addBarbtn.addEventListener('click',()=>{
    console.log('I clicked')
    document.getElementById('flex').style.left = 0;
})
cencelbtn.addEventListener('click',()=>{
    console.log('I clicked')
    document.getElementById('flex').style.left = "-50%";
})