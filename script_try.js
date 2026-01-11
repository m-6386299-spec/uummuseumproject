const navAudio = document.getElementById('nav-audio');
const navFeedback = document.getElementById('nav-feedback');
const navAbout = document.getElementById('nav-about');
const langSelect = document.getElementById('lang-select');

// ===============================
// LANGUAGE DATA (SINGLE SOURCE)
// ===============================
const langData = {
  ms: {
    title: "Audio Muzium Pengurusan UUM",
    headerSubtitle: " ",

    navAudio: "Audio",
    navFeedback: "Maklum Balas",
    navAbout: "Tentang Kami",

    audioHeading: " ",

    segTitles: [
      "Zon A: Ruang Masuk Utama",
      "Zon B: Sejarah Sintok",
      "Zon C: Penubuhan UUM",
      "Zon D: Tayangan Cendekiawan",
      "Zon E: Penerokaan Pengurusan"
    ],

    transcripts: [
      `
      <p><strong>Selamat datang ke Zon A</strong>, ruang masuk <strong>Muzium Pengurusan Universiti Utara Malaysia</strong>. Di sini, anda disambut dengan <strong>keindahan flora dan fauna</strong> yang <strong>menghijau dan menenangkan</strong>, mencerminkan <strong>suasana kampus UUM yang semula jadi</strong></p>
      <p><strong>Pokok rimbun</strong>, <strong>bunga berwarna-warni</strong>, dan <strong>kicauan burung</strong> mencipta <strong>suasana damai</strong>, memberi <strong>inspirasi</strong> dan <strong>menenangkan minda</strong>.</p>
      <p>Nikmati <strong>keindahan alam ini</strong> seketika, sebelum <strong>memulakan perjalanan</strong> menelusuri <strong>ilmu dan pengetahuan</strong> di <strong>muzium</strong>.</p>
      `,
      `
      <p>Melangkah ke dalam <strong>Zon Sejarah Sintok</strong>, pengunjung seolah-olah dibawa kembali ke <strong>detik-detik penting</strong> yang pernah membentuk <strong>identiti kawasan ini</strong>.Naratif zon ini bukan sekadar menceritakan <strong>perkembangan awal Sintok</strong>, malah turut menyingkap <strong>fasa gelap konflik keselamatan negara</strong>. Suasana tegang <strong>era darurat</strong> dihidupkan melalui penceritaan visual dan <strong>bahan pameran terpilih</strong>, membolehkan pengunjung menghayati <strong>cabaran masyarakat setempat</strong> serta <strong>pasukan keselamatan ketika itu.</strong></p>
      <p></p>      `,
      `
      <p><strong>Zon Sejarah Penubuhan Universiti Utara Malaysia</strong> membawa pengunjung menelusuri <strong>detik-detik awal kelahiran</strong> sebuah institusi yang diasaskan untuk menjadi <strong>tunjang pendidikan pengurusan negara</strong>. Penceritaan zon ini memperlihatkan bagaimana <strong>idea penubuhan universiti</strong> ini tercetus pada <strong>awal 1980-an</strong>, <strong>pemilihan Lembah Sintok</strong> sebagai <strong>tapak kampus</strong>, serta <strong>peranan UUM</strong> dalam melahirkan <strong>sumber manusia berpengetahuan tinggi</strong> dalam <strong>bidang pengurusan</strong>. Setiap naratif yang dipersembahkan memperlihatkan <strong>asas, visi dan aspirasi awal</strong> yang membentuk <strong>identiti Universiti Utara Malaysia</strong> sebagai <strong>universiti pengurusan yang unik di Malaysia</strong>.</p>
      `,
      `
      <p>Selamat datang ke <strong>Zon D, Bilik Tayangan Cendekiawan</strong>.</p>
      <p>Di sini, anda akan menelusuri <strong>perjalanan Universiti Utara Malaysia</strong> sejak penubuhannya pada <strong>1984</strong>. Dari <strong>langkah awal membina asas akademik dan pentadbiran</strong>, <strong>UUM terus berkembang</strong> menjadi <strong>universiti pengurusan terkemuka</strong> dengan <strong>program, penyelidikan, dan kerjasama antarabangsa</strong> yang cemerlang.</p>
      <pTayangan ini menyorot <strong>detik penting, pencapaian, dan sumbangan graduan UUM</strong> dalam <strong>memimpin masyarakat dan negara</strong>.</p>
      <p>Nikmati <strong>perjalanan ilmu dan sejarah UUM</strong> dari dahulu hingga kini.</p>
      `,
      `
      <p>Selamat datang ke <strong>Zon E</strong>.</p>
      <p>Di zon ini, anda akan dibawa menelusuri <strong>evolusi pengurusan dan kepimpinan</strong> daripada <strong>tamadun awal</strong> hingga ke <strong>era moden</strong>. Perjalanan bermula di <strong>Tamadun Sumeria dan Babylon</strong> melalui <strong>amalan merekod perdagangan, mengurus sumber, pembahagian kerja</strong> serta pengenalan <strong>undang-undang awal seperti Kod Hammurabi</strong>, diperkukuh oleh pemikiran tokoh klasik seperti <strong>Sun Tzu dan Confucius</strong>.</p>
      <p>Perkembangan ini seterusnya membawa kepada <strong>era Neo-Klasik</strong> yang menekankan <strong>peranan manusia, kecekapan dan sistem pengurusan tersusun</strong> melalui idea tokoh seperti <strong>Adam Smith, Henry Fayol, Maslow dan Max Weber</strong>, yang menjadi asas kepada <strong>pengurusan moden</strong>.</p>
      <p>Zon ini juga mempamerkan pelbagai <strong>replika dan artifak menarik</strong> yang mencerminkan <strong>amalan pengurusan mengikut zaman</strong>. Antaranya ialah <strong>sempoa, alat timbangan</strong> dan <strong>mesin pencetak cek</strong> yang melambangkan <strong>evolusi pengurusan ekonomi dan kewangan</strong>. Antara artifak paling istimewa ialah <strong>beg tangan Gladstone daripada kulit buaya</strong>, simbol <strong>status golongan atasan semasa Perang Dunia Pertama</strong>, serta <strong>akordion</strong> yang digunakan dalam <strong>persembahan Ghazal di Johor dan Ghazal Parti di Kedah</strong>.</p>
      <p>Dalam konteks <strong>Islam dan Alam Melayu</strong>, <strong>pengurusan berasaskan nilai</strong> menjadi teras utama. Prinsip <strong>Tauhid, keadilan, amanah dan syura</strong> yang diperkenalkan oleh <strong>Rasulullah SAW</strong> serta diperkukuh oleh <strong>Khulafa’ al-Rasyidin</strong> melahirkan <strong>sistem pentadbiran seimbang</strong> antara dunia dan akhirat.</p>
      <p>Di zon ini turut dipamerkan <strong>artifak Al-Quran tulisan tangan</strong> yang mencerminkan <strong>ketelitian dan amanah</strong> dalam penyampaian ilmu, serta <strong>batu nisan lelaki dan perempuan</strong> yang berbeza dari segi reka bentuk dan corak, menggambarkan <strong>nilai budaya dan struktur sosial masyarakat Islam</strong>. Di <strong>Alam Melayu</strong>, <strong>Kesultanan Melaka</strong> pula menonjol melalui <strong>Sistem Pembesar Empat Lipatan</strong> dan <strong>undang-undang bertulis</strong>.</p>
      `
    ],

    transcriptBtn: "Transkrip",

    footer1: `Muzium Pengurusan UUM | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 Audio Muzium Pengurusan UUM. Semua Hak Terpelihara.`
  },

  en: {
    title: "UUM Management Museum Audio",
    headerSubtitle: " ",

    navAudio: "Audio",
    navFeedback: "Feedback",
    navAbout: "About Us",

    audioHeading: " ",

    segTitles: [
      "Zone A: Main Entrance Area",
      "Zone B: History of Sintok",
      "Zone C: Establishment of UUM",
      "Zone D: Scholars’ Screening",
      "Zone E: Management Exploration"
    ],

    transcripts: [
      `
      <p><strong>Welcome to Zone A</strong>, the <strong>entrance to the Management Museum</strong> at <strong>Universiti Utara Malaysia</strong>.</p>
      <p>Here, you are greeted by <strong>lush greenery</strong>, <strong>vibrant flowers</strong>,  and the <strong>gentle sounds of birds</strong>, reflecting the <strong>serene and natural environment</strong> of <strong>UUM’s campus</strong>.</p>
      <p>This space offers a moment of <strong>calm and inspiration</strong>, preparing your mind to explore the <strong>rich journey of management, leadership, and knowledge</strong> that awaits inside the museum.</p>
      `,
      `
      <p>Stepping into the <strong>Sintok History Zone</strong>, visitors are transported back to the <strong>pivotal moments</strong> that shaped the <strong>identity of this area</strong>. The narrative of this zone goes beyond recounting <strong>Sintok’s early development</strong>, as it also highlights a <strong>darker chapter</strong> when the area became directly involved in <strong>national security conflicts</strong>.</p>
      <p>The tense atmosphere of the <strong>Emergency period</strong> is brought to life through  <strong>visual storytelling</strong> and <strong>carefully curated displays</strong>, allowing visitors to experience the <strong>challenges faced by local communities and security forces</strong> during that time.</p>
      `,
      `
      <p>Every part of the <strong>Cokmar</strong> carries symbolic significance: the <strong>ever-burning torch of knowledge</strong>, the <strong>paddy flowers symbolizing cultural refinement</strong>, and the <strong>quill feathers representing the dissemination of learning</strong>, to the <strong>keris blades embodying precision and steadfastness in achieving goals</strong>. Alongside the <strong>founding documents</strong>, exhibits of <strong>pioneer students</strong>, and landmarks such as <strong>Dataran Pewira</strong>, this zone not only tells the story of <strong>UUM’s establishment</strong> but also brings to life the <strong>spirit, pride, and enduring legacy</strong> of the <strong>University of Northern Malaysia</strong> as a <strong>sovereign and distinguished center of knowledge</strong>.</p>
      `,
      `
      <p><strong>Welcome to Zone D, the Scholars’ Screening Room</strong>.</p>
      <p>Here, you will explore the <strong>journey of Universiti Utara Malaysia</strong> since its establishment in <strong>1984</strong>. From its <strong>early foundations in academics and administration</strong>, <strong>UUM</strong> has grown into a <strong>leading management university</strong>, excelling in <strong>programs, research, and international collaborations</strong>.</p>
      <p>This screening highlights <strong>key milestones, achievements</strong>, and the <strong>contributions of UUM graduates</strong> in shaping <strong>leadership across society and the nation</strong>.</p>
      <p>Enjoy this <strong>journey through UUM’s history</strong> and its <strong>legacy of knowledge</strong>.</p>
      `,
      `
      <p><strong>Welcome to Zone E</strong>.</p>
      <p>In this zone, visitors are taken on a journey through the <strong>evolution of management and leadership</strong> from <strong>early civilizations</strong> to the <strong>modern era</strong>. The journey begins in <strong>ancient civilizations such as Sumeria and Babylon</strong>, where practices such as <strong>trade record-keeping, resource management, division of labour</strong>, and early legal systems like the <strong>Code of Hammurabi</strong> were introduced. These developments were further strengthened by the ideas of <strong>classical thinkers such as Sun Tzu and Confucius</strong>.</p>
      <p>This evolution later progressed into the <strong>Neo-Classical era</strong>, which emphasized <strong>human roles, efficiency, and structured management systems</strong> through the ideas of figures such as <strong>Adam Smith, Henry Fayol, Maslow, and Max Weber</strong>, forming the <strong>foundation of modern management</strong>.</p>
      <p>This zone also features a wide range of <strong>replicas and fascinating artifacts</strong> that reflect <strong>management practices across different periods</strong>. Among them are the <strong>abacus, weighing instruments, and cheque-printing machines</strong>, which symbolize the <strong>development of economic and financial management</strong>. One of the most remarkable artifacts on display is the <strong>Gladstone handbag made from crocodile leather</strong>, a <strong>symbol of status and authority</strong> owned only by the <strong>elite during the First World War</strong>. Also exhibited is the <strong>accordion</strong>, a musical instrument used in <strong>traditional Ghazal performances</strong> in Johor and <strong>Ghazal Parti in Kedah</strong>, highlighting the <strong>connection between management, culture, and society</strong>.</p>
      <p>In the <strong>Islamic and Malay world context</strong>, <strong>value-based management</strong> plays a central role. Principles such as <strong>Tawhid, justice, trustworthiness, and shura</strong> introduced by <strong>Prophet Muhammad (peace be upon him)</strong> and strengthened by the <strong>Rightly Guided Caliphs</strong> established a <strong>balanced administrative system</strong> between <strong>worldly and spiritual responsibilities</strong>.</p>
      <p>This zone also displays <strong>handwritten Qur’an manuscripts</strong>, reflecting <strong>discipline and integrity</strong> in <strong>knowledge preservation</strong>, as well as <strong>male and female tombstones with distinct designs and patterns</strong> that illustrate <strong>cultural values and social structure within Islamic society</strong>. In the <strong>Malay world</strong>, the <strong>Melaka Sultanate</strong> stood out through the <strong>Four-Tier Chieftain System</strong> and <strong>codified laws</strong>, demonstrating a <strong>well-organized system of governance</strong>.</p>
      `
    ],

    transcriptBtn: "Transcript",

    footer1: `UUM Management Museum | <a href="https://library.uum.edu.my/uum-management-museum/" target="_blank">Universiti Utara Malaysia</a>`,
    footer2: `Email: museum@uum.edu.my | Tel: +604 928 2614`,
    footer3: `© 2025 UUM Management Museum Audio. All Rights Reserved.`
  }
};

// ===============================
// APPLY LANGUAGE
// ===============================
function applyLanguage(lang) {
  const t = langData[lang];
  if (!t) return;

  document.getElementById('title') &&
    (document.getElementById('title').innerText = t.title);

  document.getElementById('header-subtitle') &&
    (document.getElementById('header-subtitle').innerText = t.headerSubtitle);

  navAudio && (navAudio.innerText = t.navAudio);
  navFeedback && (navFeedback.innerText = t.navFeedback);
  navAbout && (navAbout.innerText = t.navAbout);

  document.getElementById('audio-heading') &&
    (document.getElementById('audio-heading').innerText = t.audioHeading);

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`seg${i}-title`) &&
      (document.getElementById(`seg${i}-title`).innerText = t.segTitles[i - 1]);

    // ⭐ IMPORTANT FIX HERE
    document.getElementById(`seg${i}-trans`) &&
      (document.getElementById(`seg${i}-trans`).innerHTML = t.transcripts[i - 1]);
  }

  document.querySelectorAll('.transcript-btn').forEach(
    btn => btn.innerText = t.transcriptBtn
  );

  document.querySelectorAll('.audio-bm').forEach(
    a => a.style.display = lang === 'ms' ? 'block' : 'none'
  );
  document.querySelectorAll('.audio-en').forEach(
    a => a.style.display = lang === 'en' ? 'block' : 'none'
  );

  document.getElementById('footer1') &&
    (document.getElementById('footer1').innerHTML = t.footer1);
  document.getElementById('footer2') &&
    (document.getElementById('footer2').innerHTML = t.footer2);
  document.getElementById('footer3') &&
    (document.getElementById('footer3').innerHTML = t.footer3);
}

// ===============================
// LANGUAGE PERSISTENCE
// ===============================
langSelect &&
  langSelect.addEventListener('change', () => {
    localStorage.setItem('lang', langSelect.value);
    applyLanguage(langSelect.value);
  });

applyLanguage(localStorage.getItem('lang') || 'ms');

// ===============================
// TRANSCRIPT TOGGLE
// ===============================
document.querySelectorAll('.transcript-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const t = document.getElementById(btn.dataset.target);
    if (!t) return;
    t.style.display = t.style.display === 'block' ? 'none' : 'block';
  });
});

// ===============================
// PLAY ONLY ONE AUDIO
// ===============================
const allAudios = document.querySelectorAll('audio');

allAudios.forEach(audio => {
  audio.addEventListener('play', () => {
    allAudios.forEach(a => {
      if (a !== audio) a.pause();
    });
  });
});
