# Motonauta

Study app for the Brazilian Motonauta (jet ski) license exam from Capitania dos Portos.

## About the Exam

- 20 multiple-choice questions, 5 options each
- 50% to pass (10/20 correct)
- 1h30 time limit, no practical exam
- 5 topics: RIPEAM, Balizamento, Primeiros Socorros, Regulamentos, Sobrevivência

## Features

- **Flash Cards** — Study at your own pace. Cards flip to reveal answers with explanations. Mark as "Sei" (know) or "Revisar" (review). Review cards appear 3x more often.
- **Quiz** — 10 questions with immediate feedback, explanations, and error review.
- **Simulado** — Full exam simulation: 20 questions, 1h30 countdown, no feedback until the end, pass/fail result with topic breakdown.
- **Progress Tracking** — Stats persisted in localStorage across sessions.
- **Offline Support** — Service worker caches all assets for offline use.
- **Installable** — PWA that can be added to home screen on mobile.

## Tech Stack

- **HTML/CSS/JS** — Vanilla, no frameworks or build tools
- **PWA** — Service worker with cache-first strategy, web app manifest
- **Storage** — localStorage for progress persistence
- **Routing** — Hash-based SPA navigation
- **Design** — Mobile-first, nautical theme (navy/white), touch-friendly (44px+ targets)

## Architecture

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
│                                                  │
│  ┌─────────────┐   ┌────────────────────────┐   │
│  │ Service      │   │ index.html             │   │
│  │ Worker       │   │ ┌──────────────────┐   │   │
│  │ (sw.js)      │◄──┤ │ App Shell        │   │   │
│  │              │   │ │                  │   │   │
│  │ Cache-first  │   │ │ #home            │   │   │
│  │ strategy     │   │ │ #flashcards      │   │   │
│  │              │   │ │ #quiz            │   │   │
│  └──────────────┘   │ │ #exam            │   │   │
│                     │ └──────────────────┘   │   │
│                     └──────────┬─────────────┘   │
│                                │                  │
│              ┌─────────────────┼──────────────┐  │
│              │                 │               │  │
│        ┌─────▼─────┐   ┌──────▼──────┐  ┌────▼─┐│
│        │ app.js     │   │questions.js │  │style ││
│        │            │   │             │  │.css  ││
│        │ Router     │   │ 90 questions│  └──────┘│
│        │ Flash Cards│   │ 5 topics    │          │
│        │ Quiz       │   │             │          │
│        │ Exam       │   └─────────────┘          │
│        │ Storage    │                             │
│        └─────┬──────┘                             │
│              │                                    │
│        ┌─────▼──────┐                             │
│        │localStorage │                            │
│        │             │                            │
│        │ flashcards: │                            │
│        │  {id:status}│                            │
│        │ quizHistory │                            │
│        │ examHistory │                            │
│        └─────────────┘                            │
└───────────────────────────────────────────────────┘
```

### Data Flow

```
questions.js ──► shuffleOptions() ──► Render to screen
                 (randomizes option     │
                  order per session)    │
                                        ▼
                                   User answers
                                        │
                        ┌───────────────┼───────────────┐
                        ▼               ▼               ▼
                   Flash Cards       Quiz            Exam
                   save know/      save score       save score
                   review status   + topic          + pass/fail
                        │               │               │
                        └───────────────┼───────────────┘
                                        ▼
                                   localStorage
                                        │
                                        ▼
                                   Home screen
                                   stats display
```

## Running Locally

No build step required. Just serve the files:

```bash
# Using npx (no install needed)
npx serve . -p 4747

# Or with Python
python3 -m http.server 4747

# Or with Node
npx http-server . -p 4747
```

Open **http://localhost:4747** in your browser.

> **Note:** Service workers require HTTPS or `localhost`. The app won't install as a PWA from a plain IP address.

## Question Bank

90 questions across 5 topics:

| Topic | Count | Covers |
|-------|-------|--------|
| RIPEAM | 20 | Lights, signals, right of way, sound signals, navigation rules |
| Balizamento | 15 | Buoy colors/shapes, IALA B system, cardinal/lateral/danger marks |
| Primeiros Socorros | 20 | CPR, fractures, hemorrhage, hypothermia, burns, drowning |
| Regulamentos | 20 | LESTA, NORMAM, fines, jet ski rules, licensing, alcohol laws |
| Sobrevivência | 15 | Life jackets, HELP position, MAYDAY, fire, abandon ship |

Each question follows the structure:
```js
{ id, topic, question, options[5], correctIndex, explanation }
```

Option order is randomized at runtime so positions can't be memorized.

## License

MIT
