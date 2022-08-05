//Comportamiento barra lateral

const menuLateral = document.querySelector('.menulateral');

menuLateral.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
