# Компоненти для теоретичних уроків (без коду)

Для тем без програмування (інформація/дані, мережі, безпека, апаратне забезпечення тощо).
Доповнює `COMPONENTS.md` (який орієнтований на код-уроки). Використовуй разом із базовими
класами з `base.css` (`.card`, `.demo`, `.badge`, `.col2`, `.col3`, `.hi/.hy/.hc/.hg/.hp`).

Заміни префікс `xx-` на свій тематичний префікс уроку (правило #1 з `CLAUDE.md`).

## Означення (definition box)

Акцентований блок для строгого означення терміна.

```html
<div class="xx-def">
  <div class="dt">Означення</div>
  <p><strong>Термін</strong> — розгорнуте пояснення з <span class="hi">ключовим</span> словом.</p>
</div>
```
```css
.xx-def{background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.22);border-left:3px solid var(--cyan);border-radius:0 12px 12px 0;padding:16px 20px;margin-bottom:14px}
.xx-def .dt{font-family:var(--fd);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--cyan);margin-bottom:6px}
.xx-def p{margin:0;font-size:14.5px;color:#e2e8f0}
```

## Ланцюжок / схема процесу (flow)

Кроки процесу зліва направо, з опційним інтерактивним підсвічуванням по черзі.

```html
<div class="xx-flow" id="flow1">
  <div class="xx-fstep" data-step="1"><div class="ic">📥</div><div class="tt">Крок 1</div><span class="tag tag-p">передавання</span></div>
  <div class="xx-farrow">→</div>
  <div class="xx-fstep" data-step="2"><div class="ic">🧠</div><div class="tt">Крок 2</div><span class="tag tag-o">опрацювання</span></div>
</div>
<button class="tbtn" onclick="xxPlayFlow('flow1')">▶ Відтворити</button>
```
```css
.xx-flow{display:flex;align-items:stretch;gap:6px;flex-wrap:nowrap}
.xx-fstep{flex:1;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 10px;text-align:center;transition:all .35s ease}
.xx-fstep .ic{font-size:20px;margin-bottom:6px}
.xx-fstep .tt{font-size:11.5px;color:#c4d0e0;font-family:var(--fd);font-weight:600}
.xx-fstep .tag{display:inline-block;margin-top:7px;font-family:var(--fm);font-size:9.5px;padding:2px 7px;border-radius:20px}
.xx-fstep.on{border-color:var(--cyan);background:rgba(0,212,255,.08);transform:translateY(-4px);box-shadow:0 8px 22px rgba(0,212,255,.15)}
.xx-farrow{display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:16px;padding-top:20px}
.tag-p{background:rgba(0,212,255,.15);color:var(--cyan)}   /* передавання */
.tag-o{background:rgba(167,139,250,.15);color:var(--purple)} /* опрацювання */
.tag-z{background:rgba(255,217,61,.15);color:var(--yellow)}  /* зберігання */
```
```js
let xxFlowBusy = false;
function xxPlayFlow(id) {
  if (xxFlowBusy) return;
  xxFlowBusy = true;
  const steps = document.querySelectorAll(`#${id} .xx-fstep`);
  steps.forEach(s => s.classList.remove('on'));
  steps.forEach((s, i) => setTimeout(() => s.classList.add('on'), i * 550));
  setTimeout(() => { xxFlowBusy = false; }, steps.length * 550 + 900);
}
```

## Терміни-бейджі (process/tag pills)

Компактний перелік понять, з виділенням "основних" серед них.

```html
<div class="xx-pillGrid">
  <span class="xx-pill main">основний термін</span>
  <span class="xx-pill">другорядний термін</span>
</div>
```
```css
.xx-pillGrid{display:flex;gap:9px;flex-wrap:wrap;margin:10px 0 14px}
.xx-pill{font-family:var(--fm);font-size:12px;padding:6px 13px;border-radius:20px;border:1px solid var(--border);color:#c4d0e0;background:var(--card)}
.xx-pill.main{border-color:var(--cyan);color:var(--cyan);background:rgba(0,212,255,.08);font-weight:600}
```

## Порівняння підходів / теорій (2–3 картки)

Використовуй разом з `.col3`. Додай `.sel` до "правильної"/прийнятої картки.

```html
<div class="col3">
  <div class="xx-appr">
    <div class="at" style="color:var(--yellow)">Назва підходу</div>
    <div class="aauth">Автор / джерело</div>
    <p>Опис підходу.</p>
  </div>
  <div class="xx-appr sel">
    <div class="at" style="color:var(--green)">Прийнятий підхід ✓</div>
    <div class="aauth">...</div>
    <p>...</p>
  </div>
</div>
```
```css
.xx-appr{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:15px;transition:border-color .2s}
.xx-appr:hover{border-color:var(--cyan)}
.xx-appr .at{font-family:var(--fd);font-weight:700;font-size:13.5px;margin-bottom:6px}
.xx-appr .aauth{font-family:var(--fm);font-size:10.5px;color:var(--muted);margin-bottom:8px}
.xx-appr p{font-size:12.5px;margin:0}
.xx-appr.sel{border-color:var(--green);box-shadow:0 0 0 1px rgba(107,203,119,.3)}
```

## Квіз-картки (клік → показати відповідь)

Для практики "визнач/класифікуй" без стартового коду — учень клікає, щоб перевірити себе.

```html
<div class="xx-quiz">
  <div class="xx-qitem" onclick="this.classList.toggle('show')">
    <div class="q">Питання або ситуація</div>
    <div class="ans">→ відповідь</div>
  </div>
</div>
```
```css
.xx-quiz{display:flex;flex-direction:column;gap:8px}
.xx-qitem{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:11px 14px;cursor:pointer;transition:border-color .2s}
.xx-qitem:hover{border-color:var(--cyan)}
.xx-qitem .q{font-size:13px;color:#e2e8f0}
.xx-qitem .ans{max-height:0;overflow:hidden;opacity:0;transition:all .3s ease;font-family:var(--fm);font-size:11.5px;color:var(--green)}
.xx-qitem.show .ans{max-height:60px;opacity:1;margin-top:7px}
```

## Рядок рішення (питання ↔ відповідь, для слайда-рішення)

```html
<div class="xx-solRow"><span class="q">Питання</span><span class="a">коротка відповідь</span></div>
```
```css
.xx-solRow{display:flex;justify-content:space-between;align-items:center;gap:12px;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:11px 15px;margin-bottom:8px}
.xx-solRow .q{font-size:12.5px;color:#c4d0e0}
.xx-solRow .a{font-family:var(--fm);font-size:11.5px;color:var(--green);white-space:nowrap}
```

## Дві колонки-схеми (напр. апаратна/програмна складова)

```html
<div class="col2">
  <div class="xx-sysCol">
    <div class="st" style="color:var(--cyan)">⚙ Заголовок колонки</div>
    <div class="xx-sysItem"><span class="k">Пункт</span><span class="v">приклад</span></div>
  </div>
  <div class="xx-sysCol"><!-- друга колонка --></div>
</div>
```
```css
.xx-sysCol{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px}
.xx-sysCol .st{font-family:var(--fd);font-weight:700;font-size:14px;margin-bottom:12px;text-align:center;padding-bottom:10px;border-bottom:1px solid var(--border)}
.xx-sysItem{display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px dashed rgba(28,48,84,.6);font-size:12.5px}
.xx-sysItem:last-child{border-bottom:none}
.xx-sysItem .k{color:#e2e8f0}
.xx-sysItem .v{color:var(--muted);font-family:var(--fm);font-size:11px;text-align:right}
```

## Чеклист навичок / переваг (2 колонки, іконка + текст)

```html
<div class="xx-skillGrid">
  <div class="xx-skill"><span class="ic">✓</span><p>Формулювання пункту</p></div>
</div>
```
```css
.xx-skillGrid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.xx-skill{display:flex;gap:10px;align-items:flex-start;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:11px 13px}
.xx-skill .ic{color:var(--green);font-size:14px;margin-top:1px}
.xx-skill p{margin:0;font-size:12.5px}
```

## Практика без коду (заміна .cb-варіанту з COMPONENTS.md)

Слайд завдання для теоретичної теми — умова + чеклист кроків + підказка, без стартового коду.

```html
<div class="slide" data-n="N">
  <div class="lbl">Практика / Завдання N</div>
  <div class="th">
    <div class="tnum">01</div>
    <div class="tinf"><h2>Назва завдання</h2><span class="badge be">⭐ Базовий рівень</span></div>
  </div>
  <p>Умова завдання.</p>
  <div class="xx-quiz"><!-- або звичайний .card з описом --></div>
  <div class="hint hint-g">
    <div class="hlbl" style="color:var(--green)">💡 Підказка</div>
    <p>Текст підказки.</p>
  </div>
</div>
```

`.th`, `.tnum`, `.tinf`, `.hint`/`.hint-g`/`.hint-y`/`.hlbl` — спільні для code- і theory-уроків, з `COMPONENTS.md`, варто винести в `base.css` (поки що дублюються в кожному уроці — TODO).
