// script.js
const malla = {
  "1º semestre": [
    "INTRODUCCIÓN AL MARKETING",
    "FUNDAMENTOS DE VENTAS",
    "HERRAMIENTAS TECNOLÓGICAS I",
    "FUNDAMENTOS DE ECONOMÍA",
    "NIVELACIÓN MATEMÁTICA",
    "HABILIDADES DE COMUNICACIÓN"
  ],
  "2º semestre": [
    "PLAN DE MARKETING",
    "SITIOS WEB Y LANDING PAGES",
    "HERRAMIENTAS TECNOLÓGICAS II",
    "FUNDAMENTOS DE GESTIÓN DE PERSONAS",
    "FUNDAMENTOS DE FINANZAS Y PRESUPUESTOS",
    "ALGEBRA"
  ]
  // Puedes seguir agregando más semestres aquí
};

const prerequisitos = {
  "FUNDAMENTOS DE GESTIÓN DE PERSONAS": ["FUNDAMENTOS DE ECONOMÍA"],
  "ALGEBRA": ["NIVELACIÓN MATEMÁTICA"]
};

const ramosCursados = [
  "FUNDAMENTOS DE ECONOMÍA",
  "NIVELACIÓN MATEMÁTICA",
  "HABILIDADES DE COMUNICACIÓN"
];

const container = document.getElementById("malla-container");

for (let semestre in malla) {
  const div = document.createElement("div");
  div.className = "semestre";

  const title = document.createElement("h2");
  title.textContent = semestre;
  div.appendChild(title);

  malla[semestre].forEach((ramo) => {
    const ramoDiv = document.createElement("div");
    ramoDiv.className = "ramo";

    if (ramosCursados.includes(ramo)) {
      ramoDiv.classList.add("cursado");
    }

    ramoDiv.textContent = ramo;

    const prDiv = document.createElement("div");
    prDiv.className = "prerrequisitos";
    if (prerequisitos[ramo]) {
      prDiv.textContent = "Prerrequisitos: " + prerequisitos[ramo].join(", ");
    } else {
      prDiv.textContent = "Sin prerrequisitos.";
    }

    ramoDiv.addEventListener("click", () => {
      prDiv.style.display = prDiv.style.display === "none" ? "block" : "none";
    });

    div.appendChild(ramoDiv);
    div.appendChild(prDiv);
  });

  container.appendChild(div);
}
