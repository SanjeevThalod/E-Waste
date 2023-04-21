let x = document.getElementById('x');
let nav = document.getElementById('navbar');
let bar = document.getElementById('mobile')

x.addEventListener('click',function(){
    nav.style.right = '-300px';
    console.log('ha')
});
bar.addEventListener('click',function(){
    nav.style.right = '0px'
});