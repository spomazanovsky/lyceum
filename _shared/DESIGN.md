# Дизайн-система

## CSS-змінні (у `base.css`, не повторювати)

```
--bg:#07101f  --card:#142240  --border:#1c3054  --text:#e2e8f0  --muted:#526480
--cyan:#00d4ff  --coral:#ff6b6b  --yellow:#ffd93d  --green:#6bcb77  --purple:#a78bfa  --orange:#fb923c
--fd:'Exo 2'  --fb:'Nunito'  --fm:'JetBrains Mono'
```

## Готові компоненти в `base.css`

| Клас(и) | Призначення |
|---------|-------------|
| `#prog` | Прогрес-бар |
| `.bg-grid` / `.bg-glow` / `.bg-glow2` | Фон |
| `.slide` / `.slide.active` | Перехід fade+translateX |
| `#nav` / `.nbtn` / `#ctr` | Навігація |
| `.lbl` `.hi` `.hy` `.hc` `.hg` `.hp` | Типографіка та акценти |
| `.col2` `.col3` `.card` `.ctitle` | Сітка та картки |
| `.cb` `.cbh` `.dot` `.dr/.dy/.dg` `pre` | Блок коду з macOS-dots |
| `.demo` `.dlbl` `.tbtn` | Живе демо |
| `.highlight` `.highlight-green` `.highlight-red` | Підсвітка в демо |
| `.badge` `.be/.bm/.bh` | Бейджі складності ⭐ |
| `.s1` `.fshape` `.fs1–.fs5` `.fcode` `.ttag` `.mtitle` `.tul` `.tmeta` `.mchip` | Титульний слайд |
| `.planGrid` `.pitem` `.pnum` `.ptxt` | Слайд плану уроку |

## Підсвітка синтаксису (вручну через `<span>`)

### Python
| Клас | Колір | Токени |
|------|-------|--------|
| `.kw` | `#ff79c6` | `def for in if elif else return import from class while break continue` |
| `.fn2` | `#50fa7b` | `print len append range sorted list dict set zip map filter` |
| `.str` | `#f1fa8c` | `'рядок'` `"рядок"` |
| `.num` | `#bd93f9` | числа: `0 42 3.14 -1` |
| `.cmt` | `#6272a4` | `# коментар` (додати `font-style:italic`) |
| `.prop` | `#8be9fd` | імена змінних, параметрів |
| `.punct` | `#f8f8f2` | `[] () {} , : = + - * /` |
| `.val` | `#ffb86c` | індекси, зрізи, булеві `True False None` |

### JavaScript
| Клас | Колір | Токени |
|------|-------|--------|
| `.kw` | `#ff79c6` | `const let var function return if else for of in new` |
| `.fn2` | `#50fa7b` | `console document addEventListener querySelector` |
| `.str` | `#f1fa8c` | `'рядок'` `"рядок"` `` `шаблон` `` |
| `.num` | `#bd93f9` | числа |
| `.cmt` | `#6272a4` | `// коментар` `/* блок */` |
| `.prop` | `#8be9fd` | імена змінних і параметрів |
| `.punct` | `#f8f8f2` | `{} () [] ; , = => .` |

### HTML
| Клас | Колір | Токени |
|------|-------|--------|
| `.tag` | `#ff79c6` | `<div>` `</div>` `<input>` |
| `.at` | `#bd93f9` | атрибути: `class=` `id=` `href=` `type=` |
| `.str` | `#f1fa8c` | значення атрибутів у лапках |
| `.cmt` | `#6272a4` | `<!-- коментар -->` |
| `.punct` | `#f8f8f2` | `< > / =` |

### CSS
| Клас | Колір | Токени |
|------|-------|--------|
| `.sel` | `#50fa7b` | `.клас` `#id` `div:hover` |
| `.prop` | `#8be9fd` | властивості: `color background font-size` |
| `.val` | `#f1fa8c` | значення: `#fff 16px flex bold` |
| `.num` | `#bd93f9` | числові значення |
| `.at` | `#ff79c6` | `@media @keyframes @import` |
| `.punct` | `#f8f8f2` | `{ } : ;` |
