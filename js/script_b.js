if ( localStorage.khasanport.lang == null || localStorage.khasanport.lang == undefined) {
  localStorage.khasanport.lang = 'English'
}
const lang = document.getElementById("lang");
const btnLang = document.getElementById("btnLang");
btnLang.addEventListener("click", (e) => {
  console.log('sd')
  lang.showPicker();
});

const cv = document.querySelector(".cv");
const [home, about, project, contact] = [
  document.querySelectorAll(".home"),
  document.querySelectorAll(".about"),
  document.querySelectorAll(".project"),
  document.querySelectorAll(".contact"),
];
const [
  hero_1,
  hero_2,
  hero_3,
  hero_4,
  about_1,
  about_2,
  project_1,
  certif_1,
  contact_1,
] = [
  document.getElementById("hero_1"),
  document.getElementById("hero_2"),
  document.getElementById("hero_3"),
  document.getElementById("hero_4"),
  document.getElementById("about_1"),
  document.getElementById("about_2"),
  document.getElementById("project_1"),
  document.getElementById("certif_1"),
  document.getElementById("contact_1"),
];

let Bahasa = {
  English: {
    home: `Home`,
    about: `About`,
    project: `Project`,
    contact: `Contact`,
    cv: `Download CV`,

    hero_1: `Hello, I am a programmer web. I master HTML, CSS, Javascript, and
              <span class="my-2 text-green-400">PHP</span>.`,
    hero_2: `<span class="my-2 text-green-400">Laravel</span>, React JS, and
              Tailwindcss is my mainstay.`,
    hero_3: `This year <span class="tahun"></span>, my age is
              <span class="umur text-green-400"></span>`,
    hero_4: `Come on, check out my social media below`,

    about_1: `<h2
            class="text-xl lg:text-3xl font-bold italic mb-2 decoration-double decoration-green-400 underline"
          >
            Khasan<span class="text-green-600">port!</span>
          </h2>
          <p class="pl-4">Hallo!, I'am from Indonesia</p>
          <p class="pl-4">
            I'am Programer. and has done for 2 year of study self-taught about web
            programing language
          </p>
          <p class="pl-4">Need a network technician or programer? Contact me</p>`,
    about_2: `<h2
            class="text-xl lg:text-3xl font-bold italic mb-2 decoration-double decoration-green-400 underline"
          >
            Serv<span class="text-green-600">ices Skill</span>
          </h2>
          <ol class="pl-4 list-decimal">
            <li class="pl-4">Troubleshooting Network</li>
            <li class="pl-4">Create web pages</li>
            <li class="pl-4">Fix Bug</li>
            <li class="flex">
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-orange-300 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Javascript</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                  <path d="M7.5 8h3v8l-2 -1"></path>
                  <path
                    d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"
                  ></path>
                </svg>
              </div>
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-purple-500 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>PHP</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"
                  ></path>
                  <path
                    d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
                  ></path>
                  <path
                    d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
                  ></path>
                  <path d="M12 7.5l-1 5.5"></path>
                  <path d="M11.6 10h2.4l-.5 3"></path>
                </svg>
              </div>
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-orange-400 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Python</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path>
                  <path
                    d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
                  ></path>
                  <path
                    d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
                  ></path>
                  <path d="M11 6l0 .01"></path>
                  <path d="M13 18l0 .01"></path>
                </svg>
              </div>
            </li>
          </ol>`,

    project_1: `Here is <span class="my-2 text-green-400">My Project</span> list`,
    certif_1: `My <span class="my-2 text-green-400">Good One</span> Certification`,
    contact_1: `You can call <span class="my-2 text-green-400">me</span> in the way below`,
  },
  Indonesia: {
    home: `Home`,
    about: `Tentang`,
    project: `Projek`,
    contact: `Kontak`,
    cv: `Unduh CV`,

    hero_1: `Halo, saya seorang programmer web. Saya menguasai HTML, CSS, Javascript, and
              <span class="my-2 text-green-400">PHP</span>.`,
    hero_2: `<span class="my-2 text-green-400">Laravel</span>, React JS, and
              Tailwindcss adalah andalan saya.`,
    hero_3: `This year <span class="tahun"></span>, saya berumur
              <span class="umur text-green-400"></span>`,
    hero_4: `Yuk simak media sosial saya dibawah ini`,

    about_1: `<h2
            class="text-xl lg:text-3xl font-bold italic mb-2 decoration-double decoration-green-400 underline"
          >
            Khasan<span class="text-green-600">port!</span>
          </h2>
          <p class="pl-4">Halo!, saya dari Indonesia</p>
          <p class="pl-4">
            Saya Programer. dan telah menyelesaikan studi selama 2 tahun tentang web bahasa pemrograman
          </p>
          <p class="pl-4">Butuh teknisi jaringan atau programer? Hubungi saya</p>`,
    about_2: `<h2
            class="text-xl lg:text-3xl font-bold italic mb-2 decoration-double decoration-green-400 underline"
          >
            Kemam<span class="text-green-600">puan</span> saya
          </h2>
          <ol class="pl-4 list-decimal">
            <li class="pl-4">Troubleshooting Jaringan</li>
            <li class="pl-4">Membuat Halaman WEB</li>
            <li class="pl-4">Fix Bug</li>
            <li class="flex">
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-orange-300 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Javascript</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                  <path d="M7.5 8h3v8l-2 -1"></path>
                  <path
                    d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"
                  ></path>
                </svg>
              </div>
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-purple-500 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>PHP</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"
                  ></path>
                  <path
                    d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
                  ></path>
                  <path
                    d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
                  ></path>
                  <path d="M12 7.5l-1 5.5"></path>
                  <path d="M11.6 10h2.4l-.5 3"></path>
                </svg>
              </div>
              <div
                href="#"
                target="_blank"
                class="scale-75 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex justify-center items-center border border-secondary hover:bg-black hover:border-black hover:text-orange-400 transition duration-300 opacity-70 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="scale-150 transition duuration-300 box-content"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Python</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path>
                  <path
                    d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
                  ></path>
                  <path
                    d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
                  ></path>
                  <path d="M11 6l0 .01"></path>
                  <path d="M13 18l0 .01"></path>
                </svg>
              </div>
            </li>
          </ol>`,

    project_1: `Berikut List <span class="my-2 text-green-400">Project Saya</span>`,
    certif_1: `Beberapa <span class="my-2 text-green-400">Bukti</span> Sertifikat`,
    contact_1: `Kamu Bisa <span class="my-2 text-green-400">Menghubungiku</span> Dengan Dibawah Ini`,
  },
};

function language(e) {
  if (khasanport.lang == "eng" || e.value == "English") {
    home.forEach((e) => {
      e.innerHTML = Bahasa.English.home;
    });
    about.forEach((e) => {
      e.innerHTML = Bahasa.English.about;
    });
    project.forEach((e) => {
      e.innerHTML = Bahasa.English.project;
    });
    contact.forEach((e) => {
      e.innerHTML = Bahasa.English.contact;
    });

    cv.innerHTML = Bahasa.English.cv;
    hero_1.innerHTML = Bahasa.English.hero_1;
    hero_2.innerHTML = Bahasa.English.hero_2;
    hero_3.innerHTML = Bahasa.English.hero_3;
    hero_4.innerHTML = Bahasa.English.hero_4;
    about_1.innerHTML = Bahasa.English.about_1;
    about_2.innerHTML = Bahasa.English.about_2;
    project_1.innerHTML = Bahasa.English.project_1;
    certif_1.innerHTML = Bahasa.English.certif_1;
    contact_1.innerHTML = Bahasa.English.contact_1;
  } else if (khasanport.lang == "ind" || e.value == "Indonesia") {
    home.forEach((e) => {
      e.innerHTML = Bahasa.Indonesia.home;
    });
    about.forEach((e) => {
      e.innerHTML = Bahasa.Indonesia.about;
    });
    project.forEach((e) => {
      e.innerHTML = Bahasa.Indonesia.project;
    });
    contact.forEach((e) => {
      e.innerHTML = Bahasa.Indonesia.contact;
    });
    cv.innerHTML = Bahasa.Indonesia.cv;
    hero_1.innerHTML = Bahasa.Indonesia.hero_1;
    hero_2.innerHTML = Bahasa.Indonesia.hero_2;
    hero_3.innerHTML = Bahasa.Indonesia.hero_3;
    hero_4.innerHTML = Bahasa.Indonesia.hero_4;
    about_1.innerHTML = Bahasa.Indonesia.about_1;
    about_2.innerHTML = Bahasa.Indonesia.about_2;
    project_1.innerHTML = Bahasa.Indonesia.project_1;
    certif_1.innerHTML = Bahasa.Indonesia.certif_1;
    contact_1.innerHTML = Bahasa.Indonesia.contact_1;
  }
}
lang.addEventListener("change", (e) => {
  language(e.target);
});
