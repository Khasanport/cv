const khasanport = JSON.parse(localStorage.getItem("khasanport"));
let red = 0;
let green = 0;
let blue = 0;
let alpha = 1;

if (
  khasanport === null ||
  khasanport === undefined ||
  khasanport.mode === "light"
) {
  localStorage.setItem(
    "khasanport",
    JSON.stringify({
      mode: "light",
    })
  );
  document.querySelector("html").classList.remove("dark");
} else if (khasanport.mode === "dark") {
  document.querySelector("html").classList.add("dark");
} else {
  document.body.classList.remove("dark:bg-black");
  document.body.style.background = khasanport.color;
}

const dark = document.querySelector(".btnDark");
dark.addEventListener("click", function () {
  const item = JSON.parse(localStorage.getItem("khasanport"));
  if (document.querySelector("html").classList.contains("dark")) {
    item.mode = "light";
    localStorage.setItem("khasanport", JSON.stringify(item));
    document.querySelector("html").classList.remove("dark");
  } else {
    item.mode = "dark";
    localStorage.setItem("khasanport", JSON.stringify(item));
    document.querySelector("html").classList.add("dark");
  }
});

const nav = document.getElementById("Navbar");
const toogle = document.querySelector(".toogle");
const btnGroup = document.querySelector(".button-group");
const [Home, About, Project, Contact] = [
  document.querySelector(".btn-Home"),
  document.querySelector(".btn-About"),
  document.querySelector(".btn-Project"),
  document.querySelector(".btn-Contact"),
];

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.screen.height || window.scrollY >= 600) {
    nav.classList.add("bg-black");

    About.classList.add("active");

    Home.classList.remove("active");
    Project.classList.remove("active");
    Contact.classList.remove("active");
  } else {
    nav.classList.remove("bg-black");
  }
  if (window.scrollY <= 860) {
    Home.classList.add("active");

    About.classList.remove("active");
    Project.classList.remove("active");
    Contact.classList.remove("active");
  }
  if (window.scrollY >= 640) {
    About.classList.add("active");

    Home.classList.remove("active");
    Project.classList.remove("active");
    Contact.classList.remove("active");
  }
  if (window.scrollY >= 850) {
    Project.classList.add("active");

    Home.classList.remove("active");
    About.classList.remove("active");
    Contact.classList.remove("active");
  }
  if (window.scrollY >= 1240) {
    Contact.classList.add("active");

    Home.classList.remove("active");
    About.classList.remove("active");
    Project.classList.remove("active");
  }
});

toogle.addEventListener("click", function (e) {
  e.preventDefault();
  btnGroup.classList.toggle("translate-x-full");
});

const ai = document.querySelector(".ai");
ai.addEventListener("click", function (e) {
  console.log("khasanport");
  btnGroup.classList.toggle("translate-x-full");
});

function direct() {
  const loc = window.location.href.split("/")[3].split("#")[1];
  if (loc === "") {
    Home.classList.add("active");

    About.classList.remove("active");
    Project.classList.remove("active");
    Contact.classList.remove("active");
  } else if (loc === "About") {
    About.classList.add("active");

    Home.classList.remove("active");
    Project.classList.remove("active");
    Contact.classList.remove("active");
  } else if (loc === "Project") {
    Project.classList.add("active");

    Home.classList.remove("active");
    About.classList.remove("active");
    Contact.classList.remove("active");
  } else if (loc === "Contact") {
    Contact.classList.add("active");

    Home.classList.remove("active");
    About.classList.remove("active");
    Project.classList.remove("active");
  }
}
Home.addEventListener("click", function (e) {
  setTimeout(() => {
    direct();
  }, 500);
});
About.addEventListener("click", function (e) {
  setTimeout(() => {
    direct();
  }, 500);
});
Project.addEventListener("click", function (e) {
  setTimeout(() => {
    direct();
  }, 500);
});
Contact.addEventListener("click", function (e) {
  setTimeout(() => {
    direct();
  }, 500);
});

const tahun = document.querySelector(".tahun");
const date = new Date().getFullYear();
tahun.innerHTML = date;

const umur = document.querySelector(".umur");
const sekarang = date - 2006;
umur.innerHTML = sekarang + " year";

const programerAn = document.querySelector(".programer");
const textPr = "Programer";
const cont = textPr.split("");
let hapus = textPr.split("");
let i = {
  i: 0,
  hapus: false,
};
new Typed("#typed", {
  strings: ["Programer", "From", "Indonesia"],
  typeSpeed: 100,
  delaySpeed: 100,
  loop: true,
});
