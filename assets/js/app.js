const btn_carrito = document.getElementById('btn-carrito');
const btn_cerrar = document.querySelector('#btn_cerrar');

btn_carrito.addEventListener('click', function(){
    const modal = document.querySelector('#modal');
    modal.style.display = 'block';
})
btn_cerrar.addEventListener('click', function(){
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
})