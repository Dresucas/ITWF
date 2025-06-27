var canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = -1;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var particles = [];
var mouse = {};
var mouseTrail = [];
var symbols = ['<', '>', '||', '[', ']', '{', '}', ';', ':', '=', '+', '-', '*', '/', '%', '&', '|', '^', '~', '`', '!', '@', '#', '$', '?', '.', ','];
var color = 'rgba(0, 255, 191, 0.43)';
var blastColor = 'rgb(255, 255, 255)';

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2;
    for (var i = 0; i < 1000; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 1 - 0.5,
            vy: Math.random() * 1 - 0.5,
            sym: symbols[Math.floor(Math.random() * symbols.length)],
            z: Math.random() * 10,
            opacity: 0
        });
    }
    
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouseTrail.push({
            x: mouse.x,
            y: mouse.y,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            sym: symbols[Math.floor(Math.random() * symbols.length)],
            z: Math.random() * 10,
            opacity: 1
        });
        if (mouseTrail.length > 100) {
            mouseTrail.splice(0, 1);
        }
    });

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 2;
    });
    
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.sort(function(a, b) {
        return b.z - a.z;
    });
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        ctx.font = 'bold ' + (p.z + 5) + 'px Courier New';
        ctx.fillStyle = p.color || color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.sym, p.x, p.y);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height * 1.99) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height * 1.99;
        }
        if (Math.abs(mouse.x - p.x) < 50 && Math.abs(mouse.y - p.y) < 50) {
            p.vx = (mouse.x - p.x) * 0.02;
            p.vy = (mouse.y - p.y) * 0.02;
        }
        p.opacity += 0.01;
        if (p.opacity > 1) {
            p.opacity = 1;
        }
    }
    for (var i = 0; i < mouseTrail.length; i++) {
        var p = mouseTrail[i];
        ctx.font = 'bold ' + (p.z + 5) + 'px Courier New';
        ctx.fillStyle = p.color || blastColor;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.sym, p.x, p.y);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height * 1.99) {
            mouseTrail.splice(i, 1);
        }
        p.opacity -= 0.02;
        if (p.opacity < 0) {
            mouseTrail.splice(i, 1);
        }
    }
    requestAnimationFrame(draw);
}

setTimeout(function() {
    init();
    draw();
}, 3000);

