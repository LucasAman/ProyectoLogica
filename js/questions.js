const preguntas = [
   {
       pregunta: "¿Quién es el creador de la canción 'Yesterday'?",
       opciones: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
       respuestaCorrecta: "Paul McCartney"
   },
   {
       pregunta: "¿En qué país se celebró el primer Festival de Woodstock?",
       opciones: ["Estados Unidos", "Canadá", "Australia", "Nueva Zelanda"],
       respuestaCorrecta: "Estados Unidos"
   },
   {
       pregunta: "¿Cuál es el género musical que fusiona el reggae y el dancehall?",
       opciones: ["Dancehall", "Reggae", "Dubstep", "Trap"],
       respuestaCorrecta: "Dancehall"
   },
   {
       pregunta: "¿Quién es el músico que interpretó la canción 'Hotel California'?",
       opciones: ["The Eagles", "The Rolling Stones", "The Beatles", "The Doors"],
       respuestaCorrecta: "The Eagles"
   },
   {
       pregunta: "¿En qué ciudad se encuentra el prestigioso conservatorio 'Guildhall School of Music and Drama'?",
       opciones: ["Londres", "Manchester", "Edimburgo", "Glasgow"],
       respuestaCorrecta: "Londres"
   }
];

let contadorPreguntas = 0;
let puntos = 0;

function cargarPregunta() {
   if (contadorPreguntas < preguntas.length) {
       let enunciado = document.getElementById("contenedor-pregunta");
       enunciado.innerHTML = preguntas[contadorPreguntas].pregunta;
       let botonEnviar = document.getElementById("boton-enviar");
       botonEnviar.onclick = function () { enviarRespuesta() };
   } else {
       mostrarResultado();
   }
}

function enviarRespuesta() {
   let respuesta = document.getElementById("opcion-correcta");
   if (respuesta) {
       let opcion = respuesta.options[respuesta.selectedIndex].text;
       if (opcion === preguntas[contadorPreguntas].respuestaCorrecta) {
           puntos++;
       }
       contadorPreguntas++;
       cargarPregunta();
   }
}

function mostrarResultado() {
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = "Has acertado " + puntos + " preguntas de " + preguntas.length;
   let botonReiniciar = document.getElementById("boton-reiniciar");
   botonReiniciar.onclick = function () { reiniciarCuestionario() };
}

function reiniciarCuestionario() {
   contadorPreguntas = 0;
   puntos = 0;
   cargarPregunta();
}

cargarPregunta();




function cargarPregunta() {
   if (contadorPreguntas < preguntas.length) {
       let enunciado = document.getElementById("pregunta");
       enunciado.innerHTML = preguntas[contadorPreguntas].pregunta;

       let opciones = document.getElementById("opcion-correcta");
       for (let i = 0; i < opciones.options.length; i++) {
           opciones.options[i].text = preguntas[contadorPreguntas].opciones[i];
       }

       let botonEnviar = document.getElementById("boton-enviar");
       botonEnviar.onclick = function () { enviarRespuesta() };
   } else {
       mostrarResultado();
   }
}