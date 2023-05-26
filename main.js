const accordion = document.querySelector(".cnav");
const SITES = [
  {
    PATH: "./projects/paralimpia/index.html",
    TITLE: "Paralimpia",
    DESCRIPTION: "Ez egy vizsgafeladat megoldását tartalmazó oldal, amit meg lehet tekinteni Github-on.",
    PREVIEW: "./imgs/previews/Paralimpia.png",
    DATE: "2023.05.21 - 19:38"
  },
  {
    PATH: "./projects/evmadara/index.html",
    TITLE: "Év madara program",
    DESCRIPTION: "Tekintsd meg a madarak világát, igaz hogy régi de na... Ne szólj bele D:",
    PREVIEW: "./imgs/previews/Év_madara_program.png",
    DATE: "2023.05.26 - 11:50"
  },
]


const wbTitle = document.getElementById("wb-title");
window.onload = () => {
  const projectsTitle = SITES.length > 1 ? "Projektek" : "Projekt";
  wbTitle.innerText = projectsTitle;
}

accordion.addEventListener("click", (e) => {
  if (window.innerWidth > 900) return;

  const activePanel = e.target.closest(".nav-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  // const activePanel = panelToActivate.querySelector(".nav-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);

    panelToActivate
      .querySelector(".nav-content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
      .querySelector(".nav-content")
      .setAttribute("aria-hidden", false);
  }
}






// ( ﾉ ﾟｰﾟ)ﾉ
// Köszönet Petyának aki megvalosította azt, hogy hogyan generáljuk le a kártyákat ❤️
// Link a github-hoz: https://github.com/PetiDev/schoolProjects/

const siteContainer = document.getElementById("wb-container");
SITES.forEach((site) => {
  const card = document.createElement("div");
  card.classList.add("card", "ccard");
  
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("bg-image","hover-overlay", "ripple");
  cardHeader.setAttribute("data-mdb-ripple-color", "dark");

  const frame = document.createElement("img");
  frame.classList.add("img-fluid");
  frame.src = site.PREVIEW ?? "./imgs/previews/default.jpg";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  const cardDate = document.createElement("small");
  cardTitle.classList.add("card-title");
  cardDate.classList.add("ccdate");
  cardDate.innerText = `(${site.DATE})`;
  cardTitle.innerText = `${site.TITLE} `;

  const cardButton = document.createElement("a");
  cardButton.classList.add("btn", "btn-info", 'cbtn');
  cardButton.href = site.PATH;
  cardButton.innerText = "Megnyitás"

  const cardDescription = document.createElement("p");
  cardDescription.innerText = site.DESCRIPTION;
  cardDescription.classList.add("card-text");

  // Do the shitty stuffs
  card.appendChild(cardHeader);
  cardHeader.appendChild(frame);
  card.appendChild(cardBody);
  cardTitle.appendChild(cardDate);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardButton);

  siteContainer.appendChild(card);
})
