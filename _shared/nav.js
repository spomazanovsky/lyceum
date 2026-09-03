/* ─────────────────────────────────────────────────────────────
   Lyceum Presentations — Navigation
   Підключати ПЕРШИМ скриптом перед блоком уроку:
     <script src="../_shared/nav.js"></script>
   HTML-шаблон навігації:
     <nav id="nav">
       <button class="nbtn" id="pb" onclick="go(-1)">←</button>
       <div id="ctr"><span id="cn">1</span> / N</div>
       <button class="nbtn" id="nb" onclick="go(1)">→</button>
     </nav>
   Слайди: <div class="slide [active]" data-n="1"> ... </div>
───────────────────────────────────────────────────────────── */

const TOTAL = document.querySelectorAll('.slide').length;
let cur = 1;

function go(d) {
  const nxt = cur + d;
  if (nxt < 1 || nxt > TOTAL) return;
  const old = document.querySelector('.slide.active');
  old.classList.remove('active');
  old.style.transform = d > 0 ? 'translateX(-44px)' : 'translateX(44px)';
  old.style.opacity = '0';
  cur = nxt;
  const nw = document.querySelector(`.slide[data-n="${cur}"]`);
  nw.style.transition = 'none';
  nw.style.transform = d > 0 ? 'translateX(44px)' : 'translateX(-44px)';
  nw.style.opacity = '0';
  void nw.offsetWidth;
  nw.style.transition = '';
  nw.classList.add('active');
  nw.style.opacity = '';
  nw.style.transform = '';
  setTimeout(() => { old.style.cssText = ''; }, 500);
  updateNav();
}

function updateNav() {
  document.getElementById('cn').textContent = cur;
  document.getElementById('pb').disabled = cur === 1;
  document.getElementById('nb').disabled = cur === TOTAL;
  document.getElementById('prog').style.width = ((cur - 1) / (TOTAL - 1) * 100) + '%';
}

document.addEventListener('keydown', e => {
  if (['ArrowRight', 'ArrowDown'].includes(e.key)) { e.preventDefault(); go(1); }
  else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); go(-1); }
});

document.addEventListener('DOMContentLoaded', () => {
  const tot = document.getElementById('tot');
  if (tot) tot.textContent = TOTAL;
  updateNav();
});
