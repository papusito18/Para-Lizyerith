const q = [
["¿Cómo se llama el pajarito mejor amigo de Snoopy?",["Charlie","Woodstock","Joe Cool","Piper"],1],

["¿De qué color es la casita de Snoopy?",["Azul","Roja","Amarilla","Verde"],1],

["¿Quién es el dueño de Snoopy?",["Linus","Franklin","Charlie Brown","Schroeder"],2],

["¿Qué identidad suele imaginar Snoopy cuando vuela sobre su casita?",["Astronauta","Piloto de la Primera Guerra Mundial","Detective","Capitán Pirata"],1],

["¿Qué apodo usa Snoopy cuando se siente genial?",["Flying Ace","Joe Cool","Captain Dog","Cool Puppy"],1],

["¿Qué instrumento toca Schroeder?",["Violín","Guitarra","Piano","Trompeta"],2],

["¿Quién está enamorada de Schroeder?",["Marcie","Lucy","Patty","Sally"],1],

["¿Cómo se llama la hermana de Charlie Brown?",["Lucy","Patty","Sally","Violet"],2],

["¿Qué suele perseguir Snoopy?",["Woodstock","Charlie Brown","El Barón Rojo","Un gato negro"],2],

["Además de jugar y dormir, ¿Cuál es el pasatiempo literario y artístico favorito de Snoopy?",["Viajar por el mundo","Bailar","Escribir novelas","Escribir cuentos"],2]
];

let i = 0;
let s = 0;

const screens = [...document.querySelectorAll(".screen")];

function show(id) {
    screens.forEach(x => x.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").onclick = () => {
    show("quiz");
    loadQ();
};

function loadQ() {
    document.getElementById("status").textContent =
        `Pregunta ${i + 1}/10 | Puntos: ${s}`;

    document.getElementById("progressBar").style.width =
        ((i) / 10 * 100) + "%";

    document.getElementById("question").textContent = q[i][0];

    const a = document.getElementById("answers");
    a.innerHTML = "";

    q[i][1].forEach((t, n) => {
        let b = document.createElement("button");

        b.className = "answer";
        b.textContent = t;

        b.onclick = () => {
            if (n === q[i][2]) s++;

            i++;

            if (i < q.length) {
                loadQ();
            } else {
                endQuiz();
            }
        };

        a.appendChild(b);
    });
}

function endQuiz() {
    show("result");

    document.getElementById("scoreText").textContent =
        `Puntuación obtenida: ${s}/10`;

    for (let k = 0; k < 80; k++) {
        setTimeout(makeHeart, k * 60);
    }
}

document.getElementById("chestBtn").onclick = () => {
    show("chest");
};

document.getElementById("continue1").onclick = () => {

const chest =
document.querySelector(".chest-box");

chest.classList.add("open");

for(let i=0;i<35;i++){

setTimeout(()=>{

const s =
document.createElement("div");

s.className="sparkle";

s.style.left =
(40 + Math.random()*20)+"vw";

s.style.bottom="220px";

document.body.appendChild(s);

setTimeout(()=>{
s.remove();
},2000);

},i*40);
}

setTimeout(()=>{

show("reveal");

},1800);

};

document.getElementById("continue2").onclick = () => {

    romanticMode = true;

    document.body.classList.add("romantic-mode");

    show("proposal");
};
document.getElementById("yesBtn").onclick = () => {

    show("letter");

    document.getElementById("letterText").textContent = `Lizyerith,

Gracias por aceptar esta aventura conmigo.

No sé exactamente qué nos espera, pero sí sé que quiero descubrirlo a tu lado.

Me encanta tu forma de ser, tu manera de ver las cosas y cada conversación que compartimos.

Hoy no empieza una historia perfecta; empieza una historia real.

Y eso la hace mucho más especial.

Gracias por darme esta oportunidad.

Te quiero muchísimo ❤️

Axel`;
};

document.getElementById("noBtn").onclick = () => {

    show("letter");

    document.getElementById("letterText").textContent = `Gracias por llegar hasta acá.

Quería ser sincero con lo que siento porque valoro mucho la confianza que tenemos.

Mi intención nunca fue ponerte incómoda ni hacerte sentir obligada a nada.

Pase lo que pase, sigo apreciando la persona que sos y los momentos que compartimos.

Gracias por leerme y por ser parte de mi vida.

Axel`;
};

function makeHeart() {

    const h = document.createElement("div");

    h.className = "heart";
    h.textContent = "❤️";

    h.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(h);

    setTimeout(() => {
        h.remove();
    }, 6000);
}
let romanticMode = false;
setInterval(() => {

if(!romanticMode) return;

const heart = document.createElement("div");

heart.innerHTML = "❤";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = (15 + Math.random()*20) + "px";

heart.style.opacity = ".6";

heart.style.pointerEvents = "none";

heart.style.animation =
"riseHeart 8s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},600);
