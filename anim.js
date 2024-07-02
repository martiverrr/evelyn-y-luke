// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var letras = document.querySelector("#letras");

// Matriz de objetos que contiene cada línea y su tiempo de aparición en segundos
var letrasData = [
  { text: "En ese momento", hora: 15 },
  { text: "El susurro de los pájaros", hora: 18 },
  { text: "Solitario antes de que el sol llorara", time: 27 },
  { text: "Cayó del cielo", tiempo: 32 },
  { text: "Como gotas de agua", tiempo: 33 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 41 },
  { text: "Lindas mariposas en mis manos", time: 47 },
  { text: "Demasiada luz para el crepúsculo", time: 54 },
  { text: "Estoy de humor para el amor de las flores", time: 59 },
  { text: "Esa visión", tiempo: 67 },
  { text: "Realmente fuerte, me voló la cabeza", tiempo: 72 },
  { text: "Silencio Déjame ver qué era", time: 78 },
  { text: "Sólo quiero vivir en las nubes", time: 83 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 91 },
  { text: "Lindas mariposas en mis manos", time: 97 },
  { text: "Demasiada luz para el crepúsculo", time: 104 },
  { text: "Estoy de humor para el amor de las flores", time: 108 },
  { text: "En ese momento", hora: 144 },
  { text: "El susurro de los pájaros", tiempo: 148 },
  { text: "Solitario antes de que el sol llorara", time: 153 },
  { text: "Cayó del cielo", tiempo: 158 },
  { text: "Como gotas de agua", tiempo: 164 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 169 },
  { text: "Lindas mariposas en mis manos", time: 176 },
  { text: "Demasiada luz para el crepúsculo", hora: 183 },
  { text: "Estoy de humor para las flores", time: 188 },
  { texto: "Amor.", tiempo: 140 },
];

// Animar las letras
función updateLyrics() {
  var tiempo = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (línea) => tiempo >= línea.tiempo && tiempo < línea.tiempo + 6
  );

  si (línea actual) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacidad = Math.min(1, (tiempo - currentLine.tiempo) / fadeInDuration);

    // Aplica el efecto de aparición
    letras.estilo.opacidad = opacidad;
    letras.innerHTML = currentLine.text;
  } demás {
    // Restablece la opacidad y el contenido si no hay una línea actual
    letras.estilo.opacidad = 0;
    letras.innerHTML = "";
  }
}

setInterval(actualizarLetra, 1000);

//título de la función
// Función para ocultar el título después de 216 segundos
función ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s entran y salen con facilidad hacia delante"; /* Duración y función de temporización de la desaparición */
  setTimeout(función () {
    titulo.style.display = "ninguno";
  }, 3000); // Espera 3 segundos antes de ocultarlo por completo
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);