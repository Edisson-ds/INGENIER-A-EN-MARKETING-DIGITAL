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
  ],
  "3º semestre": [
    "BRANDING",
    "STORYTELLING",
    "HERRAMIENTAS DE MARKETING DIGITAL",
    "PROPUESTA DE VALOR Y PRECIOS",
    "HERRAMIENTAS TECNOLÓGICAS III",
    "ESTADÍSTICA DESCRIPTIVA",
    "FUNDAMENTOS DE ANTROPOLOGÍA"
  ],
  "4º semestre": [
    "INVESTIGACIÓN DE MERCADOS",
    "SOCIAL MEDIA MARKETING",
    "TALLER APLICADO I DE MARKETING",
    "NEGOCIACIÓN",
    "ÉTICA PARA EL TRABAJO",
    "FORMACIÓN CRISTIANA",
    "ELECTIVO COMPETENCIAS GLOBALES"
  ],
  "5º semestre": [
    "MEDIOS & AUDIENCIAS",
    "INBOUND MARKETING I",
    "COMUNICACIONES INTEGRADAS DE MARKETING",
    "KEY ACCOUNT MANAGEMENT",
    "FORMACIÓN COMPLEMENTARIA"
  ],
  "6º semestre": [
    "DISEÑO UX/UI",
    "INBOUND MARKETING II",
    "TALLER APLICADO II DE MARKETING",
    "BIG DATA E INTELIGENCIA DE NEGOCIOS",
    "CADENA DE SUMINISTROS"
  ],
  "7º semestre": [
    "PRODUCTOS Y SERVICIOS",
    "INBOUND MARKETING III",
    "CANALES DE DISTRIBUCIÓN & E-COMMERCE",
    "GESTIÓN DE EQUIPOS DE VENTA",
    "ÉTICA PROFESIONAL",
    "FORMACIÓN COMPLEMENTARIA"
  ],
  "8º semestre": [
    "TALLER APLICADO FINAL",
    "HABILIDADES COMUNICACIONALES PARA EL TRABAJO",
    "ELECTIVO COMPETENCIAS GLOBALES",
    "FORMACIÓN COMPLEMENTARIA"
  ]
};

const prerequisitos = {
  "FUNDAMENTOS DE GESTIÓN DE PERSONAS": ["FUNDAMENTOS DE ECONOMÍA"],
  "ALGEBRA": ["NIVELACIÓN MATEMÁTICA"],
  "ESTADÍSTICA DESCRIPTIVA": ["ALGEBRA", "NIVELACIÓN MATEMÁTICA"],
  "INVESTIGACIÓN DE MERCADOS": ["ALGEBRA", "NIVELACIÓN MATEMÁTICA", "ESTADÍSTICA DESCRIPTIVA"],
  "BIG DATA E INTELIGENCIA DE NEGOCIOS": ["HERRAMIENTAS TECNOLÓGICAS II", "HERRAMIENTAS TECNOLÓGICAS III"],
  "INBOUND MARKETING II": ["INBOUND MARKETING I"],
  "INBOUND MARKETING III": ["INBOUND MARKETING I", "INBOUND MARKETING II"],
  "TALLER APLICADO II DE MARKETING": ["TALLER APLICADO I DE MARKETING"],
  "TALLER APLICADO FINAL": ["TALLER APLICADO I DE MARKETING", "TALLER APLICADO II DE MARKETING"],
  "ÉTICA PROFESIONAL": ["ÉTICA PARA EL TRABAJO", "FUNDAMENTOS DE ANTROPOLOGÍA"],
  "HABILIDADES COMUNICACIONALES PARA EL TRABAJO": ["HABILIDADES DE COMUNICACIÓN"]
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
