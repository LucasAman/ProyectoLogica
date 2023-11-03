document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var interest = document.getElementById('interest').value;
    alert('Registro exitoso!');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Área de interés:', interest);
});