# Architecture

## File Structure

```
motonauta/
├── index.html        # Single HTML file, all screens as divs
├── app.js            # App logic: router, modes, storage
├── questions.js      # Question bank (117 questions) + topic constants
├── style.css         # All styles, mobile-first
├── sw.js             # Service worker (cache-first, motonauta-v4)
├── manifest.json     # PWA manifest
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── docs/
    ├── architecture.md
    └── pdf/          # Source images used to derive questions
```

## SPA Routing

Hash-based (`#home`, `#flashcards`, `#quiz`, `#exam`). Each screen is a `<div class="screen">` in `index.html`. The router in `app.js` toggles `.active` class on `hashchange`.

## Screens & Modes

### Home (`#home`)
- Topic filter chips (shared state: `selectedTopic`)
- Mode cards → navigate to mode
- Progress stats from localStorage
- `.app-header` shows total question count via `.q-count` span

### Flash Cards (`#flashcards`)
- Builds a weighted deck from `questions.js`, filtered by topic
- Cards marked "review" appear 3x in the deck
- Cards marked "know" are skipped
- CSS 3D flip animation on tap
- Saves status per question ID to `localStorage.flashcards`

### Quiz (`#quiz`)
- Setup → pick topic → start
- 10 random questions, options shuffled via `shuffleOptions()`
- Immediate feedback: green/red highlight + explanation
- Results: score, pass/fail, error review
- Saves to `localStorage.quizHistory`

### Exam (`#exam`)
- Intro → start
- 20 random questions, options shuffled via `shuffleOptions()`
- Countdown timer (1h30), no feedback during exam
- Question navigation grid (answered/unanswered indicators)
- Auto-submit at timer zero or manual "Finalizar"
- Results: score, pass/fail banner, topic breakdown, full review
- Saves to `localStorage.examHistory`

## Question Bank

117 questions across 5 topics:

| Topic key | Label | Count | ID range |
|---|---|---|---|
| `ripeam` | RIPEAM | 27 | rip01–rip27 |
| `balizamento` | Balizamento | 20 | bal01–bal20 |
| `primeiros_socorros` | Primeiros Socorros | 28 | ps01–ps28 |
| `regulamentos` | Regulamentos | 24 | reg01–reg24 |
| `sobrevivencia` | Sobrevivência | 18 | sob01–sob18 |

Schema per question:
```js
{
  id: "rip01",           // unique, prefix + sequential number
  topic: "ripeam",       // one of 5 topic keys
  question: "...",       // pt-BR
  options: ["a","b","c","d","e"],  // exactly 5
  correctIndex: 2,       // 0–4, varied positions in source
  explanation: "..."     // pt-BR, 1–2 sentences
}
```

## Data Flow

```
questions.js (static)
       │
       ▼
  shuffle question order
       │
       ▼
  shuffleOptions() per question (randomize option positions)
       │
       ▼
  Render to DOM
       │
       ▼
  User interaction → update localStorage
       │
       ▼
  Home screen reads localStorage for stats
```

## localStorage Schema

```js
// Flash card status per question
flashcards: { "rip01": "know", "bal03": "review", ... }

// Quiz history (appended after each quiz)
quizHistory: [
  { date: "ISO string", score: 0.8, topic: "ripeam" }
]

// Exam history (appended after each exam)
examHistory: [
  { date: "ISO string", score: 16, passed: true }
]
```

## Service Worker

Cache-first strategy. All app assets are pre-cached on install. Cache is versioned via `CACHE_NAME` in `sw.js` — old caches are deleted on activate.

**Important:** Bump the version string after any file change, or installed PWAs will serve stale files.

## Styling

- Navy primary: `#1a237e`
- Accent: `#0288d1`
- Success: `#2e7d32`, Error: `#c62828`
- Max-width container: 480px
- All interactive elements: min 44px touch target
- `.q-count`: 0.7rem, opacity 0.55 — discrete question count shown in all headers
- `.screen-title`: flex column wrapper around `<h2>` + `.q-count` in mode screen headers
