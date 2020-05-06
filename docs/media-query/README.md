# Media Queries

### Things that I need to start to look after:

This is going to afect all screens smaller then 900px(or 56.25em):

```css
@media (min-width: 56.25em) {
  grid-template-columns: 1fr 300px;
}
```

From this example: 900px / 16px = 56.25em

<br>

This is going to afect all screens between 0 and 575px:

```css
@media screen and (max-width: 575px) {
  main {
    flex-direction: column;
  }
}
```
