# Typography

Typography Tips by Kevin Powell - <https://www.youtube.com/watch?v=6ardZEhjvV0>
Also look at Steve Schoger Refactoring Videos - <https://www.youtube.com/channel/UCxqiDtkXtOCNJdckODHk9YA>

A normal line-height for your body text, but a biger line-height for your hero section:

```scss
body {
  font-size: xem;
  line-height: 1;

  .hero {
    font-size: xem;
    line-height: 1.6; /* Try: 1.5 ~ 1.7 */
  }
}
```

The New York Times - Paragraphy example:

```scss
body {
  font-size: 16px;

  p {
    font-family: nyt-imperial, georgia, "times new roman", times, serif;
    font-size: 1.25rem; /* 20px; */
    line-height: 1.875rem; /* 30px; */
    color: #333;
    margin-bottom: 0.9375rem; /* 15px */
    margin-top: 0;
  }
}
```

<br>
The New York Times - Paragraphy example:

```scss
body {
  font-size: 16px;

  p {
    font-family: "Guardian Text Egyptian Web", Georgia, serif;
    line-height: 1.5rem; /* 24px; */
    color: #121212;
    margin-bottom: 1rem; /* 16px; */
    margin-top: 0;
    word-wrap: break-word;
  }

  @media screen (max-width: 667px) {
    p {
      margin: 0 0 0.75rem; /* 12px; */
    }
  }
}
```

```css
body {
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 300;
}
```
