const q = [
["¿Cómo se llama el pajarito mejor amigo de Snoopy?",["Woodstock","Charlie","Joe Cool","Piper"],0],
["¿De qué color es la casita de Snoopy?",["Roja","Azul","Amarilla","Verde"],0],
["¿Quién es el dueño de Snoopy?",["Charlie Brown","Linus","Schroeder","Franklin"],0],
["¿Qué identidad suele imaginar Snoopy cuando vuela sobre su casita?",["Piloto de la Primera Guerra Mundial","Astronauta","Detective","Capitán Pirata"],0],
["¿Qué apodo usa Snoopy cuando se siente genial?",["Joe Cool","Captain Dog","Flying Ace","Cool Puppy"],0],
["¿Qué instrumento toca Schroeder?",["Piano","Violín","Guitarra","Trompeta"],0],
["¿Quién está enamorada de Schroeder?",["Lucy","Sally","Patty","Marcie"],0],
["¿Cómo se llama la hermana de Charlie Brown?",["Sally","Lucy","Patty","Violet"],0],
["¿Qué suele perseguir Snoopy?",["El Barón Rojo","Un gato negro","Woodstock","Charlie Brown"],0],
["Además de jugar y dormir, ¿Cuál es el pasatiempo literario y artístico favorito de Snoopy?",["Viajar por el mundo","Escribir novelas","Escribir cuentos","Bailar"],1]
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
    show("reveal");
};

document.getElementById("continue2").onclick = () => {
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
setInterval(() => {

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
