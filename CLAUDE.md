# CLAUDE.md

## Project Overview

PWA study app for the Brazilian Motonauta (jet ski) license exam. Vanilla JS, no frameworks, no build step.

## Commands

```bash
# Serve locally (pick any)
npx serve . -p 4747
python3 -m http.server 4747
```

Open http://localhost:4747. Service workers require `localhost` or HTTPS.

## Architecture

See [docs/architecture.md](docs/architecture.md) for file structure and data flow details.

**Key files:**
- `index.html` — All screens as `<div class="screen">` sections, hash-based SPA
- `app.js` — Router, all mode logic (flash cards, quiz, exam), localStorage persistence
- `questions.js` — Question bank (90 questions, 5 topics) + topic constants
- `style.css` — Mobile-first styles, nautical theme
- `sw.js` — Service worker, cache-first strategy
- `manifest.json` — PWA manifest

## Conventions

- **No frameworks, no build tools.** Everything runs directly in the browser.
- **All UI in Portuguese (pt-BR).** Questions, labels, buttons — everything user-facing.
- **Code comments in English.** Keep them minimal.
- Options are shuffled at runtime via `shuffleOptions()` — never hardcode correct answer positions.
- Bump `CACHE_NAME` version in `sw.js` after any file change so installed PWAs get updates.
- Touch targets must be ≥44px (`min-height: 44px` on buttons).
- Questions follow the schema: `{ id, topic, question, options[5], correctIndex, explanation }`.
- Topic keys: `ripeam`, `balizamento`, `primeiros_socorros`, `regulamentos`, `sobrevivencia`.
- localStorage keys: `flashcards`, `quizHistory`, `examHistory`.

## Adding Questions

1. Add to the appropriate topic section in `questions.js`
2. Use a unique `id` (prefix: `rip`, `bal`, `ps`, `reg`, `sob` + number)
3. Always include 5 options and an `explanation`
4. Bump `CACHE_NAME` in `sw.js`

## Common Pitfalls

- Forgetting to bump `sw.js` cache version → users see stale files
- Adding questions with duplicate `id` → flash card persistence breaks
- Putting correct answer always at `correctIndex: 0` → `shuffleOptions()` mitigates this at runtime, but vary positions in source for readability
