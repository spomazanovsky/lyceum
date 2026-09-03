# HTML-шаблон нового уроку

```html
<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>НАЗВА УРОКУ — 10 клас</title>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;800&family=Nunito:wght@300;400;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="_shared/base.css">
<style>
/* Тільки урок-специфічні стилі */
</style>
</head>
<body>
<div id="prog"></div>
<div class="bg-grid"></div>
<div class="bg-glow"></div>
<div class="bg-glow2"></div>
<div id="app">
  <div id="slides">

    <div class="slide active" data-n="1"><!-- слайд 1 --></div>
    <div class="slide" data-n="2"><!-- слайд 2 --></div>
    <!-- ... -->

  </div>
  <nav id="nav">
    <button class="nbtn" id="pb" onclick="go(-1)">←</button>
    <div id="ctr"><span id="cn">1</span> / <span id="tot"></span></div>
    <button class="nbtn" id="nb" onclick="go(1)">→</button>
  </nav>
</div>
<script src="_shared/nav.js"></script>
<script>
/* Тільки урок-специфічний JS */
</script>
</body>
</html>
```

> Для файлів у підпапках: `href="../_shared/base.css"` та `src="../_shared/nav.js"`  
> `<span id="tot">` — nav.js заповнює автоматично, вручну писати не треба.  
> Слайди нумерувати `data-n="1"`, `data-n="2"` ... послідовно.
