## Responsive Layout System

### It's a good idea to break your components to be used all over your project:
```css
.container {
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
}
```
<br>

### Use multiple classes, e.g.: ".d-flex" for display-flex:
```css
.d-flex /* or .row */ {
    display: flex;
    justify-content: space-between;
}
```
<br>

### Place those in the flex items:
```css
.col {
  /* these are now flex items */
    width: 100%;
}

.col + .col {
    margin-left: 30px;
}
```
<br>

### Make images responsive:
```html
<div class="hero__img">
    <img src="someimage.png" alt="some image">
</div>
```

```css
/* This code in your global settings */
img {
    max-width: 100%;
}

.hero__img {
    alin-self: flex-start;
}
```