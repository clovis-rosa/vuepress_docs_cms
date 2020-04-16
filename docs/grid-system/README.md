# CSS Grid System

```css
/* A */
.grid {
  display: grid;
  grid: auto / repeat(auto-fit, minmax(40ch, 1fr));
  gap: 2ch;
}

/* B */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
  gap: 2ch;
}
```
