# GrammarLab

A static, interactive English grammar teaching website designed for junior secondary / Grade 9 learners.

## Features

- Six grammar lessons
  - Simple Present
  - Present Continuous
  - Simple Past
  - Present Perfect
  - Comparatives & Superlatives
  - Modal Verbs
- Explanation, formula, examples, and practice in every lesson
- 10-question final quiz
- Local browser progress saving using `localStorage`
- Light and dark mode
- Responsive layout for phones and desktop computers
- No framework, database, or build process required

## Run locally

Open `index.html` in a browser.

For a more realistic local server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub will provide the public Pages URL after deployment.

## Customize lessons

Open `script.js` and edit the `lessons` array near the top of the file. Each lesson contains:

- `title`
- `summary`
- `uses`
- `formulas`
- `examples`
- `practice`
- `tip`

The site will update automatically from that data.
