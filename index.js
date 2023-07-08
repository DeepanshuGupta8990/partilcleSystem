const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    //     ctx.fillstyle = "white";
    // ctx.fillRect(20,20,630,30);
})
// ctx.fillstyle = "white";
// ctx.fillRect(20,20,630,30);
// ctx.strokeStyle = "red"
let hue = 0;
let pp = 0;
let particlesArray = [];
let k = [];
const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener("mousedown", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    mouse.pressed = true;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());

    }
})

canvas.addEventListener("mouseup", function (event) {
    mouse.pressed = false;
});

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    if (mouse.pressed) {
        for (let i = 0; i < 5; i++) {
            particlesArray.push(new Particle());


        }
    }
})

canvas.addEventListener("touchmove",(e)=>{
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size = Math.round(Math.random() * 15 + 1)
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue},100%,50%)`
        // this.color = 'red'
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.2
        

    }
    draw() {

        ctx.fillStyle = this.color

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }
}

function handlesParticles() {
    for (let i = 0; i < particlesArray.length; i++) {

        particlesArray[i].draw();
        particlesArray[i].update();

        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                ctx.beginPath();
                // ctx.strokeStyle = particlesArray[i].color;
                ctx.strokeStyle = 'purple';
                // ctx.lineWidth = Math.round(Math.random()*15+1)/10
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                ctx.stroke();
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1)
            i--;
        }
    }
}




let aaa = 0;
function line() {
    let x = aaa;
    let y = x + 2;
    mouse.x = x
    mouse.y = y;
    for (let ee = 0; ee < 1; ee++) {
        particlesArray.push(new Particle());
    }
    aaa++;
}

let t = 0
function heart() {
    let x = (16 * (Math.sin(t) * Math.sin(t) * Math.sin(t)) * canvas.width / 50) + canvas.width / 2;
    let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * canvas.height / 50 + canvas.height / 2;
    mouse.x = x
    mouse.y = y;
    for (let ee = 0; ee < 10; ee++) {
        particlesArray.push(new Particle());
    }
    t += 0.08;

}


let t1 = 0
function heart1() {
    let x = Math.round((16 * (Math.sin(t1) * Math.sin(t1) * Math.sin(t1)) * canvas.width / 80) + canvas.width / 2);
    let y = -(13 * Math.cos(t1) - 5 * Math.cos(2 * t1) - 2 * Math.cos(3 * t1) - Math.cos(4 * t1)) * canvas.height / 80 + canvas.height / 2;
    mouse.x = x
    mouse.y = y;
    for (let ee = 0; ee < 2; ee++) {
        particlesArray.push(new Particle());
    }
    t1 += 0.1;
}

let t2 = 0
function heart2() {
    let x = (16 * (Math.sin(t2) * Math.sin(t2) * Math.sin(t2)) * canvas.width / 150) + canvas.width / 2;
    let y = -(13 * Math.cos(t2) - 5 * Math.cos(2 * t2) - 2 * Math.cos(3 * t2) - Math.cos(4 * t2)) * canvas.height / 150 + canvas.height / 2;
    mouse.x = x
    mouse.y = y;
    for (let ee = 0; ee < 2; ee++) {
        particlesArray.push(new Particle());
    }
    t2 += 0.1;
}


let animate = () => {
    //   ctx.clearRect(0,0,canvas.width,canvas.height);
    //    heart();
    //    heart1();
    //    heart2();
    // line();
    //   drawcircle();
    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    handlesParticles();
    hue += 5;
    if (hue == 360) { hue = 0 }
    requestAnimationFrame(animate);
}
animate();
//     let lineX = 0;
//     let lineY = 0;
// if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
//     // Create a new SpeechRecognition object
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
//     // Set recognition options
//     recognition.interimResults = true;
//     recognition.lang = 'en-US';
  
//     // Add event listener for the 'result' event
//     recognition.addEventListener('result', event => {
//       const transcript = Array.from(event.results)
//         .map(result => result[0].transcript)
//         .join('');
//       let aa = transcript.split(' ').length;
//       for (let i = 0; i < aa; i++) {
//         mouse.x = lineX;
//         mouse.y = canvas.height/2;
//         for(let j = 0; j<8; j++){
//             mouse.x += 3
//             particlesArray.push(new Particle());
//         }
//        lineX += 10;
//        if(lineX >= canvas.width){
//         lineX = 0;
//        }
//     }
  
//     });
  
//     // Add event listener for the 'end' event
//     recognition.addEventListener('end', recognition.start);
  
//     // Start the recognition process
//     recognition.start();
//   } else {
//     console.log('Speech recognition not supported');
//   }