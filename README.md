<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UUM Management Museum Audio Website</title>
  <link rel="stylesheet" href="style_try.css">
</head>
<body>
  <header class="uum-header">
  <!-- LEFT: Logo + Subtitle -->
  <div class="header-left">
    <img src="uumlogo.png" alt="UUM Logo" class="uum-logo">
    <span class="header-subtitle" id="header-subtitle">
    </span>
  </div>

  <!-- CENTER: Main title -->
  <div class="header-center">
    <h1 id="title"></h1>
  </div>

  <!-- RIGHT: Navigation -->
  <nav class="header-right">
      <a id="nav-audio" href="try_ucd.html"></a>
      <a id="nav-feedback" href="feedback.html"></a>
      <a id="nav-about" href="about.html"></a>
    <select id="lang-select">
      <option value="ms">BM</option>
      <option value="en">EN</option>
    </select>
  </nav>
  </header>

  <main>
    <!-- AUDIO PAGE -->
    <section id="audio-page" class="page active">
      <h2 id="audio-heading"></h2>

      <div class="segment">
        <img src="ZONA.jpg" alt="Segment 1">
        <h3 id="seg1-title"></h3>
        <audio class="audio-bm" controls src="Zon A (malay).m4a"></audio>
        <audio class="audio-en" controls src="Zon A (english).m4a" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg1-trans"></button>
        <div class="transcript" id="seg1-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONB.jpg" alt="Segment 2">
        <h3 id="seg2-title"></h3>
        <audio class="audio-bm" controls src="Zon B (malay) 1.m4a"></audio>
        <audio class="audio-en" controls src="Zon B (english) 1.m4a" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg2-trans"></button>
        <div class="transcript" id="seg2-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONC.jpg" alt="Segment 3">
        <h3 id="seg3-title"></h3>
        <audio class="audio-bm" controls src="Zon C (malay) 1.m4a"></audio>
        <audio class="audio-en" controls src="Zon C (english) 3.m4a" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg3-trans"></button>
        <div class="transcript" id="seg3-trans"></div>
      </div>

      <div class="segment">
        <img src="ZOND.jpg" alt="Segment 4">
        <h3 id="seg4-title"></h3>
        <audio class="audio-bm" controls src="Zon D (malay).m4a"></audio>
        <audio class="audio-en" controls src="Zon D (english).m4a" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg4-trans"></button>
        <div class="transcript" id="seg4-trans"></div>
      </div>

      <div class="segment">
        <img src="ZONE.jpg" alt="Segment 5">
        <h3 id="seg5-title"></h3>
        <audio class="audio-bm" controls src="Zon E (malay).mp4"></audio>
        <audio class="audio-en" controls src="Zon E (english).mp4" style="display:none;"></audio>
        <button class="transcript-btn" data-target="seg5-trans"></button>
        <div class="transcript" id="seg5-trans"></div>
      </div>

    </section>
  </main>

  <footer>
    <p id="footer1"></p>
    <p id="footer2"></p>
    <p id="footer3"></p>
    <p id="footer4"></p>
  </footer>

  <script src="script_try.js"></script>
</body>
</html>
