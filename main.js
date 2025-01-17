
// JavaScript para el botón flotante (si es necesario)
window.onscroll = function() {
    var btn = document.querySelector(".whatsapp-btn");
    if (window.scrollY > 100) {
      btn.style.bottom = "20px"; // Mantén el botón visible
    }
  };
  

  async function obtenerPosts() {
    try {
      // Esperamos a que fetch obtenga la respuesta de la API
      const response = await fetch('http://localhost:3000/posts');
  
      // Verificamos si la respuesta es exitosa 
      if (!response.ok) {
        throw new Error('Error al obtener los posts');
      }
  
      // Esperamos a que la respuesta sea convertida a formato JSON
      const data = await response.json();
  
      // Trabajamos con los datos obtenidos
      console.log('Datos de los posts:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
/*function btenerPosts() {

  fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => console.log(data))

}
*/
obtenerPosts()



//carrusel

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalImages = 7; // Número total de imágenes
let index = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const offset = -index * 100; // Mover al siguiente bloque de imágenes
    carousel.style.transform = `translateX(${offset}%)`;
}

// Botón "Anterior"
prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    updateCarousel();
});

// Botón "Siguiente"
nextBtn.addEventListener('click', () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    updateCarousel();
});

// Función asincrónica para reproducir automáticamente el carrusel
async function autoPlay() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos
        index = (index < totalImages - 1) ? index + 1 : 0;
        updateCarousel();
    }
}

// Iniciar reproducción automática
autoPlay();