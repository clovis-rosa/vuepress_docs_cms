# CSS Units

## What Should I Use?

### px

Avoid for font-size. I use px for small details like borders & shadows

#### rem/em

My go to choice or font-sizes and often padding/margin

### vh/vw/vmin/vmax

Used for larger laayout concerns

CSS Units: vh, vw, vmin, vmax by Kevin Powell- <https://www.youtube.com/watch?v=IWFqGsXxJ1E>

```css
.hero {
  background: #111;
  color: white;
  padding: 10vh 0;
  height: 100vh;
}
```

Using `vw` to define `font-size`:

```css
.hero-title {
  font-size: 8vw; // To be tested: 8vmin
  lie-height: 1;
  text-transform: uppercase;
  margin: 0 0 0.25em;
}

.hero-text {
  font-size: 1.2em; // To be tested: 2.5vh
  lie-height: 1.7;
  margin: 1.5em 0;
}
```
