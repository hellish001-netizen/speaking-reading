# GrammarLab V2

A static, differentiated English grammar teaching website for junior secondary / Grade 9 learners. It is designed to run directly on GitHub Pages with no framework, database, build process, or login system.

## What changed in V2

The website now uses a learning sequence instead of behaving like a digital worksheet:

1. **See + Notice** — students read a short context and identify a pattern.
2. **Understand** — students connect the pattern to meaning, grammar form, and a common error.
3. **Try It** — three differentiated practice levels:
   - Level 1: Recognize
   - Level 2: Construct
   - Level 3: Apply
4. **Use It** — students produce their own language and use a self-check list.
5. **Mastery** — students must score at least 2/3 to unlock the next level. Passing Level 3 marks the lesson as mastered.
6. **Final Quiz** — unlocks after all six lessons are mastered and gives a category-by-category result.

## Included lessons

- Simple Present
- Present Continuous
- Simple Past
- Present Perfect
- Comparatives & Superlatives
- Modal Verbs

## Other features

- Explanatory feedback after every checked answer
- Progress and best scores saved with browser `localStorage`
- Student writing saved locally in the browser
- Teacher notes hidden by default and available through Teacher Mode
- Light and dark mode
- Responsive layout for phones, tablets, and computers
- No external libraries or internet dependencies after the files are loaded

## Run locally

You can open `index.html` directly. For a local web server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create or open your GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.

GitHub Pages will publish the site from those files.

## Edit the teaching material

Most lesson content lives near the top of `script.js` inside the `lessons` array. Each lesson includes:

- `summary`
- `objective`
- `context`
- `notice`
- `uses`
- `formulas`
- `mistake`
- `levels`
- `production`
- `selfCheck`
- `teacherTip`

Each practice question contains its own answer and explanation, so feedback can teach the specific grammar point rather than simply displaying “wrong.”

## Important limitation

Because this is a static GitHub Pages website, progress is stored only in the student's own browser. A teacher cannot see every student's scores centrally. That would require a backend or an external service such as Firebase/Supabase later.
