// ===============================
// ELEMENTS
// ===============================
const navAudio = document.getElementById('nav-audio');
const navFeedback = document.getElementById('nav-feedback');
const navAbout = document.getElementById('nav-about');
const langSelect = document.getElementById('lang-select');
const pageTitle = document.getElementById('title');

// About page elements
const aboutHeading = document.getElementById('about-heading');
const aboutDesc = document.getElementById('about-desc');
const teamHeading = document.getElementById('team-heading');

// Footer elements
const footer1 = document.getElementById('footer1');
const footer2 = document.getElementById('footer2');
const footer3 = document.getElementById('footer3');

// ===============================
// LANGUAGE DATA
// ===============================
const langData = {
  ms: {
    title: "Tentang Kami",
    headerSubtitle: " ",
    navAudio: "Audio",
    navFeedback: "Maklum Balas",
    navAbout: "Tentang Kami",
    footer1: `Muzium Pengurusan UUM | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 Audio Muzium Pengurusan UUM. Semua Hak Terpelihara.`
  },
  en: {
    title: "About Us",
    headerSubtitle: " ",
    navAudio: "Audio",
    navFeedback: "Feedback",
    navAbout: "About Us",
    footer1: `UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 UUM Management Museum Audio. All Rights Reserved.`
  }
};

// ===============================
// ABOUT PAGE CONTENT
// ===============================
const aboutContent = {
  ms: {
    heading: " ",
    description:
      "Laman web ini dibangunkan oleh pelajar di bawah School of Multimedia Technology & Communication, Universiti Utara Malaysia (UUM), sebagai sebahagian daripada kursus SCCVK3103 User-Centered Design (UCD). Projek ini merupakan tugasan berkumpulan yang dibimbing oleh pensyarah kursus, Ts. Dr. Nassiriah Shaari, dan bertujuan menyediakan panduan audio interaktif untuk Muzium Pengurusan Universiti Utara Malaysia.",
    teamTitle: "Ahli Kumpulan Projek"
  },
  en: {
    heading: " ",
    description:
      "This website was developed by students under the School of Multimedia Technology & Communication, Universiti Utara Malaysia (UUM), as part of the SCCVK3103 User-Centered Design (UCD) course. The project is a group assignment supervised by the course lecturer, Ts. Dr. Nassiriah Shaari, and aims to provide an interactive audio guide for the Universiti Utara Malaysia Management Museum.",
    teamTitle: "Project Team Members"
  }
};

// ===============================
// APPLY LANGUAGE
// ===============================
function applyLanguage(lang) {
  const t = langData[lang];
  const a = aboutContent[lang];
  if (!t || !a) return;

  // Header
  pageTitle && (pageTitle.innerText = t.title);
  navAudio && (navAudio.innerText = t.navAudio);
  navFeedback && (navFeedback.innerText = t.navFeedback);
  navAbout && (navAbout.innerText = t.navAbout);

  // About page
  aboutHeading && (aboutHeading.textContent = a.heading);
  aboutDesc && (aboutDesc.textContent = a.description);
  teamHeading && (teamHeading.textContent = a.teamTitle);

  // Footer
  footer1 && (footer1.innerHTML = t.footer1);
  footer2 && (footer2.innerHTML = t.footer2);
  footer3 && (footer3.innerHTML = t.footer3);
}

// ===============================
// LANGUAGE SELECT EVENT
// ===============================
if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
  });
}

// ===============================
// INITIALIZE LANGUAGE
// ===============================
applyLanguage(localStorage.getItem('lang') || 'ms');
