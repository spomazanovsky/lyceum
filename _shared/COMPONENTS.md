# HTML-сніпети компонентів

## Слайд 1 — Титульний

```html
<div class="slide active" data-n="1">
  <div class="s1">
    <div class="fshape fs1"></div>
    <div class="fshape fs2"></div>
    <div class="fshape fs3"></div>
    <div class="fshape fs4"></div>
    <div class="fshape fs5"></div>
    <div class="fcode">def lesson():</div>
    <div class="fcode">list = []</div>
    <div class="fcode">for i in range(10):</div>
    <div class="fcode">return result</div>
    <div class="ttag">&#x2F;&#x2F; <span class="tn">10 клас</span> · Інформатика</div>
    <h1 class="mtitle">НАЗВА ТЕМИ</h1>
    <div class="tul"></div>
    <p class="tsub">Підзаголовок або короткий опис</p>
    <div class="tmeta">
      <div class="mchip"><span class="ic">📚</span> Тема N</div>
      <div class="mchip"><span class="ic">⏱</span> 45 хв</div>
      <div class="mchip"><span class="ic">💻</span> Практика</div>
    </div>
  </div>
</div>
```

## Слайд 2 — План уроку

```html
<div class="slide" data-n="2">
  <div class="lbl">Сьогодні на уроці</div>
  <h2 class="stitle">План <span class="a">уроку</span></h2>
  <div class="planGrid">
    <div class="pitem">
      <div class="pnum">01</div>
      <div class="ptxt"><strong>Назва блоку</strong>короткий опис</div>
    </div>
    <div class="pitem">
      <div class="pnum">02</div>
      <div class="ptxt"><strong>Назва блоку</strong>короткий опис</div>
    </div>
    <!-- повторити для 4–6 пунктів -->
  </div>
</div>
```

## Типовий теорія-слайд (2 колонки: код + пояснення)

```html
<div class="slide" data-n="3">
  <div class="lbl">Розділ · Підтема</div>
  <h2 class="stitle">Заголовок <span class="a">слайду</span></h2>
  <div class="col2">
    <div class="cb">
      <div class="cbh">
        <div class="dot dr"></div><div class="dot dy"></div><div class="dot dg"></div>
        <span class="fn">назва_файлу.py</span>
      </div>
      <pre>
<span class="cmt"># коментар</span>
<span class="prop">змінна</span> <span class="punct">=</span> <span class="punct">[</span><span class="num">1</span><span class="punct">,</span> <span class="num">2</span><span class="punct">,</span> <span class="num">3</span><span class="punct">]</span>
<span class="fn2">print</span><span class="punct">(</span><span class="prop">змінна</span><span class="punct">)</span>
</pre>
    </div>
    <div>
      <div class="card">
        <div class="ctitle">Пояснення</div>
        <ul>
          <li>Пункт з <span class="hi">акцентом</span></li>
          <li>Ще один пункт</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Живе демо (.demo)

```html
<div class="demo">
  <div class="dlbl">Результат</div>
  <div id="demo-output">початковий стан</div>
  <button class="tbtn" onclick="runDemo()">▶ Виконати</button>
</div>
```

JS-патерн для демо (підсвітка на 1.5 с):
```js
function runDemo() {
  const el = document.getElementById('demo-output');
  el.textContent = 'новий стан';
  el.classList.add('highlight');
  setTimeout(() => el.classList.remove('highlight'), 1500);
}
```

Класи підсвітки (з `base.css`): `.highlight` (cyan), `.highlight-green`, `.highlight-red`

## Слайд завдання (практика)

```html
<div class="slide" data-n="N">
  <div class="lbl">Практика</div>
  <h2 class="stitle">Завдання <span class="badge bm">⭐⭐ Середній</span></h2>
  <div class="col2">
    <div>
      <div class="card">
        <div class="ctitle">Умова</div>
        <p>Опис задачі...</p>
        <ul>
          <li>Крок 1</li>
          <li>Крок 2</li>
        </ul>
      </div>
    </div>
    <div class="cb">
      <div class="cbh">
        <div class="dot dr"></div><div class="dot dy"></div><div class="dot dg"></div>
        <span class="fn">task.py</span>
      </div>
      <pre>
<span class="cmt"># Стартовий код</span>
<span class="prop">дані</span> <span class="punct">=</span> <span class="punct">[...]</span>

<span class="cmt"># ваш код тут</span>
</pre>
    </div>
  </div>
</div>
```
