# CSS Grid System

### Auto Grid using CSS Grid

A cool example of how to create layouts with auto grid:

```css
.grid {
  display: grid;
  grid: auto / repeat(auto-fit, minmax(40ch, 1fr));
  gap: 2ch;
}
```

Another example of Grid System to be tested:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
  gap: 2ch;
}
```
