const form = document.getElementById("ratingForm");
const avg = document.getElementById("averageRating");
const count = document.getElementById("totalRatings");

const navAudio = document.getElementById('nav-audio');
const navFeedback = document.getElementById('nav-feedback');
const navAbout = document.getElementById('nav-about');
const langSelect = document.getElementById('lang-select');
const pageTitle = document.getElementById('title');

/* ===== Language Data ===== */
const langData = {
  ms: {
    title: "Maklum Balas Muzium Pengurusan UUM",
    navAudio: "Audio",
    navFeedback: "Maklum Balas",
    navAbout: "Tentang Kami",
    feedbackHeading: "Nilai Pengalaman Anda",
    ratingLabel: "Pilih penilaian anda:",
    submitBtn: "Hantar Penilaian",
    avgText: "Purata Penilaian",
    totalText: "Jumlah Penilaian",
    backBtn: "⬅ Kembali ke Panduan Audio",
    footer1: `Muzium Pengurusan UUM | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 Audio Muzium Pengurusan UUM. Semua Hak Terpelihara.`
  },

  en: {
    title: "UUM Management Museum Feedback",
    navAudio: "Audio",
    navFeedback: "Feedback",
    navAbout: "About Us",
    feedbackHeading: "Rate Your Experience",
    ratingLabel: "Select your rating:",
    submitBtn: "Submit Rating",
    avgText: "Average Rating",
    totalText: "Total Ratings",
    backBtn: "⬅ Back to Audio",
    footer1: `UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 UUM Management Museum Audio. All Rights Reserved.`
  }
};

/* ===== Apply Language ===== */
function applyLanguage(lang) {
  const t = langData[lang];

  pageTitle.innerText = t.title;
  navAudio.innerText = t.navAudio;
  navFeedback.innerText = t.navFeedback;
  navAbout.innerText = t.navAbout;

  // Update feedback form labels
  document.querySelector('.feedback-container h2').innerText = t.feedbackHeading;
  document.querySelector('form label').innerText = t.ratingLabel;
  form.querySelector('button[type="submit"]').innerText = t.submitBtn;
  document.querySelector('.feedback-display h3').innerText = t.avgText;
  document.querySelector('.feedback-display p:nth-child(2)').innerHTML =
    `<span id="averageRating">${avg.textContent}</span> / 5 ⭐`;
  document.querySelector('.feedback-display p:nth-child(3)').innerHTML =
    `${t.totalText}: <span id="totalRatings">${count.textContent}</span>`;
  document.querySelector('.back-btn').innerText = t.backBtn;

  // Update footer
  document.getElementById('footer1').innerHTML = t.footer1;
  document.getElementById('footer2').innerHTML = t.footer2;
  document.getElementById('footer3').innerHTML = t.footer3;
}

/* ===== Language Persistence ===== */
langSelect.addEventListener('change', () => {
  const lang = langSelect.value;
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
});

/* ===== Initialize Language ===== */
applyLanguage(localStorage.getItem('lang') || 'en');

/* ===== Feedback Form Logic ===== */

// Load existing ratings
let ratings = JSON.parse(localStorage.getItem("ratings")) || [];

function updateStats() {
  if (ratings.length === 0) {
    avg.textContent = "0";
    count.textContent = "0";
  } else {
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = (sum / ratings.length).toFixed(1);
    avg.textContent = average;
    count.textContent = ratings.length;
  }

  // Refresh text for current language
  applyLanguage(localStorage.getItem('lang') || 'en');
}

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="rating"]:checked');
  if (!selected) {
    alert(langSelect.value === "ms" ? "Sila pilih penilaian ⭐" : "Please select a rating ⭐");
    return;
  }

  // Save rating
  ratings.push(Number(selected.value));
  localStorage.setItem("ratings", JSON.stringify(ratings));

  // Reset and update stats
  form.reset();
  updateStats();
});

// Initialize on page load
updateStats();
