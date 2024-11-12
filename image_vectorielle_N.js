var image = document.getElementById("MonDessin");
var ctx = image.getContext("2d");

// stroke -> contour du rectangle
ctx.strokeStyle ="red";
ctx.strokeRect(80, 20, 50, 50);

// Pour un rectangle rempli
ctx.fillStyle = "red";
ctx.fillRect(150, 100, 700, 400);

let angle = 0;
function drawPatternNAZI() {
    ctx.save();
    
    // Créer un masque circulaire pour le clearRect
    ctx.beginPath();
    ctx.arc(500, 300, 170, 0, 2 * Math.PI);
    ctx.clip();
    
    // Effacer uniquement la zone circulaire
    ctx.clearRect(330, 130, 340, 340);
    
    ctx.restore();
    
    // Sauvegarder et configurer la rotation
    ctx.save();
    ctx.translate(500, 300);
    ctx.rotate(angle);
    ctx.translate(-500, -300);
    
    // Dessiner le cercle blanc
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(500, 300, 170, 0, 2 * Math.PI);
    ctx.fill();
    
    // Dessiner le motif de lignes
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 30;
    ctx.moveTo(500, 300);
    ctx.lineTo(500, 200);
    ctx.lineTo(600, 200);
    ctx.moveTo(500, 300);
    ctx.lineTo(600, 300);
    ctx.lineTo(600, 400);
    ctx.moveTo(500, 300);
    ctx.lineTo(500, 400);
    ctx.lineTo(400, 400);
    ctx.moveTo(500, 300);
    ctx.lineTo(400, 300);
    ctx.lineTo(400, 200);
    ctx.stroke();
    
    ctx.restore();
    angle += 0.2;
    requestAnimationFrame(drawPatternNAZI);
}


// Démarrer l'animation
drawPatternNAZI();
