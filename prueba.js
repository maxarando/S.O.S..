/* var inputs = document.getElementsByClassName('input');
for (var i = 0;i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');

        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}



let algo=document.querySelector(".forma")

 algo.addEventListener('submit', function(event){
 event.preventDefault();


    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telef = document.getElementById("telef").value;
    var movil = document.getElementById("movil").value;
    var ciudad = document.getElementById("ciudad").value;
    
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("E-mail:", email);
    console.log("Telefono fijo:", telef);
    console.log("Telefono movil:", movil);
    console.log("Ciudad:", ciudad);
});

 
const form = document.querySelector('#myforme');
form.addEventListener('.submit',(event)=>{
    event.preventDefault();
    const nombre= document.querySelector('#nombre').value;
    const apellido= document.querySelector('#apellido').value;
    const email= document.querySelector('#email').value;
    const telef= document.querySelector('#telef').value;
    const movil= document.querySelector('#movil').value;
    const ciudad= document.querySelector('#ciudad').value;


    console.log('Nombres ${nombre}');
    console.log('Apellido ${apellido}');
    console.log('E-mail ${email}');
    console.log('Telefono fijo ${telef}');
    console.log('Telefono movil ${movil}');
    console.log('Ciudad ${ciudad}');

});
*/




document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telef = document.getElementById("telef").value;
    var movil = document.getElementById("movil").value;
    var ciudad = document.getElementById("ciudad").value;
    
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("E-mail:", email);
    console.log("Telefono fijo:", telef);
    console.log("Telefono movil:", movil);
    console.log("Ciudad:", ciudad);

    document.querySelector(".formulario").submit();
    });
});