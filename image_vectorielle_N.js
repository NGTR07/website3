var image = document.getElementById("MonDessin");
var ctx = image.getContext("2d");

// Définir la taille du canvas en fonction de la taille de l'écran
image.width = window.innerWidth * 0.8;
image.height = window.innerHeight * 0.7;

// Pour un rectangle rempli
ctx.fillStyle = "red";
ctx.fillRect(0, 0, image.width, image.height);

let angle = 0;
let rotationSpeed = 0.01;

function drawPatternWithPNG() {
    ctx.save();
    
    // Effacer le canvas
    ctx.clearRect(0, 0, image.width, image.height);
    
    // Dessiner le rectangle rouge de fond
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, image.width, image.height);
    
    // Créer un masque circulaire pour le clearRect
    ctx.beginPath();
    ctx.arc(image.width / 2, image.height / 2, 170, 0, 2 * Math.PI);
    ctx.clip();
    
    // Effacer uniquement la zone circulaire
    ctx.clearRect((image.width - 700) / 2, (image.height - 400) / 2, 700, 400);
    
    ctx.restore();
    
    // Sauvegarder et configurer la rotation
    ctx.save();
    ctx.translate(image.width / 2, image.height / 2);
    ctx.rotate(angle);
    ctx.translate(-(image.width / 2), -(image.height / 2));
    
    // Dessiner le cercle blanc
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(image.width / 2, image.height / 2, 170, 0, 2 * Math.PI);
    ctx.fill();
    
    // Dessiner l'image PNG au centre
    var png = new Image();
    png.src = "https://raw.githubusercontent.com/ngtr07/website3/main/python_N.png";
    ctx.drawImage(png, (image.width - 200) / 2, (image.height - 200) / 2, 200, 200);
    
    ctx.restore();
    angle += rotationSpeed;
    requestAnimationFrame(drawPatternWithPNG);
}

function decreaseSpeed() {
    if (rotationSpeed > 0.001) {
        rotationSpeed -= 0.02;
    }
}

function increaseSpeed() {
    rotationSpeed += 0.02;
}
