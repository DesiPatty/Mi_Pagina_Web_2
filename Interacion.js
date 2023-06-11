// Obtener el botón y la imagen de perfil
const cambiarFotoButton = document.getElementById("cambiarFotoButton");
const fotoPerfil = document.getElementById("fotoPerfil");


// Variables para las fotos y el índice de foto actual
const fotos = [
  "https://i.ibb.co/w0V7cPd/Aranaras.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/37e6b9102278295.5f32ded41ad60.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf8b5b84611263.5d62c30444ff5.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/abd57a78550093.5ca7bee79de50.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3fc18c84054009.5d5ed7f4ec540.gif",
  "https://i.ibb.co/2SkQKyv/yo-Drawing.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f69da156885011.637149e9aeea1.gif",
  
];
let fotoIndex = 0;

// Función para cambiar la foto
function cambiarFoto() {
  fotoPerfil.src = fotos[fotoIndex];
  fotoIndex = (fotoIndex + 1) % fotos.length; // Avanzar al siguiente índice en bucle
}

// Agregar evento de clic al botón
cambiarFotoButton.addEventListener("click", cambiarFoto);
