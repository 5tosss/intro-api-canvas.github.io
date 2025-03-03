// Obtiene una referencia al elemento <canvas> en el documento HTML
let canvas = document.getElementById("canvas");

// Obtiene el contexto de dibujo en 2D del canvas
// Esto es necesario para poder dibujar en el canvas usando métodos de dibujo
let ctx = canvas.getContext("2d");

// Establece el color de relleno para las figuras dibujadas
// En este caso, el color es verde ("green"), pero también se pueden usar
// otros formatos como hex (#00FF00) o RGB (rgb(40, 45, 70))


    // Dibujar un rectángulo
    ctx.fillStyle = "rgb(40, 45, 70)"; // Azul verdoso
    ctx.fillRect(50, 50, 300, 300);

    const canvastr = document.getElementById("canvas-triangle");
    if (canvastr.getContext) 
    {
        const ctx = canvastr.getContext("2d");

        // Dibujar un triángulo naranja
        ctx.fillStyle = "rgb(255, 100, 0)";
        ctx.beginPath();
        ctx.moveTo(150, 50);  // Punto superior
        ctx.lineTo(200, 150); // Esquina inferior derecha
        ctx.lineTo(100, 150); // Esquina inferior izquierda
        ctx.closePath();
        ctx.fill();
    }
        //dibujar carita feliz
    const canvascf = document.getElementById("canvas-smiley");
            if (canvascf.getContext) 
            {
                const ctx = canvascf.getContext("2d");

                ctx.beginPath();
                ctx.arc(150, 100, 50, 0, Math.PI * 2, true); // Círculo externo
                ctx.moveTo(185, 100);
                ctx.arc(150, 100, 35, 0, Math.PI, false); // Boca
                ctx.moveTo(140, 90);
                ctx.arc(135, 90, 5, 0, Math.PI * 2, true); // Ojo izquierdo
                ctx.moveTo(165, 90);
                ctx.arc(160, 90, 5, 0, Math.PI * 2, true); // Ojo derecho
                ctx.stroke();
            }
            const canvasdt = document.getElementById("canvas-two-triangles");
            if (canvasdt.getContext) {
                const ctx = canvasdt.getContext("2d");

                // Triángulo relleno
                ctx.fillStyle = "rgb(0, 150, 50)";
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.lineTo(150, 50);
                ctx.lineTo(50, 150);
                ctx.fill();

                // Triángulo contorneado
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.lineTo(200, 100);
                ctx.lineTo(100, 200);
                ctx.closePath();
                ctx.stroke();
            }
            const canvascu = document.getElementById("canvas-curves");
            if (canvascu.getContext) 
            {
                const ctx = canvascu.getContext("2d");

                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 3; j++) {
                        ctx.beginPath();
                        const x = 50 + j * 60; // Coordenada x
                        const y = 50 + i * 40; // Coordenada y
                        const radius = 10; // Radio del Arco
                        const startAngle = 0; // Punto inicial del Círculo
                        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
                        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

                        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                        if (i > 1) {
                            ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
                            ctx.fill();
                        } else {
                            ctx.strokeStyle = "black";
                            ctx.stroke();
                        }
                    }
                }
            }
            const canvasqc = document.getElementById("canvas-quadratic-curves");
            if (canvasqc.getContext) {
                const ctx = canvasqc.getContext("2d");

                ctx.beginPath();
                ctx.moveTo(75, 25);
                ctx.quadraticCurveTo(25, 25, 25, 62.5);
                ctx.quadraticCurveTo(25, 100, 50, 100);
                ctx.quadraticCurveTo(50, 120, 30, 125);
                ctx.quadraticCurveTo(60, 120, 65, 100);
                ctx.quadraticCurveTo(125, 100, 125, 62.5);
                ctx.quadraticCurveTo(125, 25, 75, 25);
                ctx.stroke();
            }
            const canvasht = document.getElementById("canvas-heart");
            if (canvasht.getContext) {
                const ctx = canvasht.getContext("2d");

                // Ejemplo de curvas cúbicas para dibujar un corazón
                ctx.beginPath();
                ctx.moveTo(75, 40);
                ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
                ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
                ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
                ctx.fillStyle = "red";
                ctx.fill();
            }
            const canvaspm = document.getElementById("canvas-pacman");
            if (canvaspm.getContext) {
                const ctx = canvaspm.getContext("2d");

                roundedRect(ctx, 12, 12, 150, 150, 15);
                roundedRect(ctx, 19, 19, 150, 150, 9);
                roundedRect(ctx, 53, 53, 49, 33, 10);
                roundedRect(ctx, 53, 119, 49, 16, 6);
                roundedRect(ctx, 135, 53, 49, 33, 10);
                roundedRect(ctx, 135, 119, 25, 49, 10);

                ctx.beginPath();
                ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
                ctx.lineTo(31, 37);
                ctx.fill();

                for (let i = 0; i < 8; i++) {
                    ctx.fillRect(51 + i * 16, 35, 4, 4);
                }

                for (i = 0; i < 6; i++) {
                    ctx.fillRect(115, 51 + i * 16, 4, 4);
                }

                for (i = 0; i < 8; i++) {
                    ctx.fillRect(51 + i * 16, 99, 4, 4);
                }

                ctx.beginPath();
                ctx.moveTo(83, 116);
                ctx.lineTo(83, 102);
                ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
                ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
                ctx.lineTo(111, 116);
                ctx.lineTo(106.333, 111.333);
                ctx.lineTo(101.666, 116);
                ctx.lineTo(97, 111.333);
                ctx.lineTo(92.333, 116);
                ctx.lineTo(87.666, 111.333);
                ctx.lineTo(83, 116);
                ctx.fill();

                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.moveTo(91, 96);
                ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
                ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
                ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
                ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
                ctx.moveTo(103, 96);
                ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
                ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
                ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
                ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
                ctx.fill();

                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
                ctx.fill();
            }
        

        // Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
        function roundedRect(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.arcTo(x, y + height, x + radius, y + height, radius);
            ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
            ctx.arcTo(x + width, y, x + width - radius, y, radius);
            ctx.arcTo(x, y, x, y + radius, radius);
            ctx.stroke();
        }
