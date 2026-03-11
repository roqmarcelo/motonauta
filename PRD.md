### Product: Motonauta Study App
**Goal:** Help users study for the Brazilian Motonauta (jet ski) license exam from Capitania dos Portos.

**Exam Facts:**
- 20 multiple-choice questions, 5 options each
- 50% to pass (10/20 correct)
- 1h30 time limit
- No practical exam
- 5 topics: RIPEAM, Balizamento, Primeiros Socorros, Regulamentos, Sobrevivência

**Tech:** PWA (vanilla JS, no framework), mobile-first, offline-capable, nautical theme (navy/white)

### Task Breakdown

#### T1 — Project Scaffold
- [ ] T1.1: Create folder structure (`motonauta/`, `motonauta/icons/`)
- [ ] T1.2: Create empty files: `index.html`, `style.css`, `app.js`, `questions.js`, `manifest.json`, `sw.js`

#### T2 — PWA Setup
- [ ] T2.1: Write `manifest.json` (app name "Motonauta", theme color navy, display standalone, icon refs)
- [ ] T2.2: Write `sw.js` with cache-first strategy for all app assets
- [ ] T2.3: Register service worker in `index.html`
- [ ] T2.4: Add `<link rel="manifest">` and meta tags (theme-color, viewport, apple-touch-icon)
- [ ] T2.5: Generate placeholder PWA icons (192x192, 512x512)

#### T3 — App Shell & Theme
- [ ] T3.1: Write `index.html` base structure (app container, screen divs, nav)
- [ ] T3.2: CSS reset and base typography in `style.css`
- [ ] T3.3: Nautical color scheme (navy `#1a237e`, white, accent `#0288d1`, light gray backgrounds)
- [ ] T3.4: Responsive layout (mobile-first, max-width container, touch-friendly button sizes)
- [ ] T3.5: SPA router in `app.js` — hash-based navigation (`#home`, `#flashcards`, `#quiz`, `#exam`, `#results`)
- [ ] T3.6: Screen show/hide logic tied to router

#### T4 — Home Screen
- [ ] T4.1: App header with logo/title "Motonauta"
- [ ] T4.2: Topic filter chips (All, RIPEAM, Balizamento, Primeiros Socorros, Regulamentos, Sobrevivência)
- [ ] T4.3: Three mode cards with icons: "Flash Cards", "Quiz", "Simulado"
- [ ] T4.4: Progress summary section (cards studied, quiz average, exams taken)

#### T5 — Question Bank
- [ ] T5.1: Define data structure and topic constants in `questions.js`
- [ ] T5.2: Write ~20 RIPEAM questions (lights, marks, signals, right of way, overtaking)
- [ ] T5.3: Write ~15 Balizamento questions (buoy colors, shapes, lateral/cardinal/danger/special/safe water)
- [ ] T5.4: Write ~20 Primeiros Socorros questions (CPR, fractures, hemorrhage, hypothermia, burns, life jacket use)
- [ ] T5.5: Write ~20 Regulamentos questions (LESTA/RLESTA, fines, deadlines, vessel types, NORMAM, jet ski rules)
- [ ] T5.6: Write ~15 Sobrevivência questions (equipment inspection, life jacket classes, abandon ship, survival gear)
- [ ] T5.7: Review all questions for accuracy and add explanations to each

#### T6 — Flash Cards Mode
- [ ] T6.1: Flash card UI — card container with front (question) and back (answer + explanation)
- [ ] T6.2: Flip animation (CSS 3D transform on click/tap)
- [ ] T6.3: "Sei" (know) and "Revisar" (review) buttons below card
- [ ] T6.4: Card deck logic — shuffle, filter by selected topic, skip known cards
- [ ] T6.5: Progress bar showing cards remaining in current session
- [ ] T6.6: Save card status (known/review) to localStorage per question ID
- [ ] T6.7: Cards marked "review" appear 3x more often in shuffle

#### T7 — Quiz Mode
- [ ] T7.1: Quiz setup screen — topic selector + start button
- [ ] T7.2: Question display — question text, 5 option buttons, question counter (e.g., "3/10")
- [ ] T7.3: Answer selection — highlight selected, disable others
- [ ] T7.4: Immediate feedback — green/red highlight, show explanation text
- [ ] T7.5: "Próxima" (next) button to advance
- [ ] T7.6: Score summary screen — X/10 correct, percentage, pass/fail indication
- [ ] T7.7: "Revisar Erros" button — show list of wrong answers with correct answer highlighted
- [ ] T7.8: "Novo Quiz" and "Voltar" buttons on results screen

#### T8 — Exam Simulation Mode
- [ ] T8.1: Exam intro screen — rules explanation (20 questions, 1h30, 50% to pass)
- [ ] T8.2: Timer display (countdown from 1:30:00, visible in header)
- [ ] T8.3: Question display with 5 options — no feedback on selection, just mark selected
- [ ] T8.4: Question navigation — "Anterior"/"Próxima" buttons + question number grid
- [ ] T8.5: Question grid showing answered/unanswered status
- [ ] T8.6: "Finalizar" button with confirmation
- [ ] T8.7: Auto-submit when timer hits zero
- [ ] T8.8: Results screen — total score, pass/fail banner, breakdown by topic (pie or bar)
- [ ] T8.9: Review all answers with correct/incorrect indicators

#### T9 — Progress & Persistence
- [ ] T9.1: localStorage schema — `{ flashcards: {id: status}, quizHistory: [{date, score, topic}], examHistory: [{date, score, passed}] }`
- [ ] T9.2: Save flash card status on each "Sei"/"Revisar" action
- [ ] T9.3: Save quiz result after each quiz completion
- [ ] T9.4: Save exam result after each simulation
- [ ] T9.5: Load and display aggregate stats on home screen
- [ ] T9.6: "Resetar Progresso" option (with confirmation) in a simple settings area

#### T10 — Polish & Icons
- [ ] T10.1: Generate SVG/PNG icons with anchor or compass motif
- [ ] T10.2: Add loading state / splash screen
- [ ] T10.3: Touch feedback on buttons (active states, ripple)
- [ ] T10.4: Smooth transitions between screens
- [ ] T10.5: Empty states (no quiz history yet, no flashcard progress)
- [ ] T10.6: Test PWA install prompt on mobile Chrome

#### T11 — Testing & Verification
- [ ] T11.1: Test all navigation flows (home → each mode → results → home)
- [ ] T11.2: Test flash cards — flip, mark, topic filter, persistence
- [ ] T11.3: Test quiz — full round, scoring, error review
- [ ] T11.4: Test exam — full 20 questions, timer, pass/fail
- [ ] T11.5: Test localStorage — refresh page, data persists
- [ ] T11.6: Test offline — disconnect network, app still works
- [ ] T11.7: Test mobile viewport — responsive layout, touch targets ≥44px

### File Structure
```
motonauta/
  PRD.md
  index.html
  style.css
  app.js
  questions.js
  manifest.json
  sw.js
  icons/
    icon-192.png
    icon-512.png
```

### Data Model
```js
{ id, topic, question, options[5], correctIndex, explanation }
```
Topics: `"ripeam"`, `"balizamento"`, `"primeiros_socorros"`, `"regulamentos"`, `"sobrevivencia"`

### Verification
1. Open in browser, navigate all screens
2. Flash cards: flip, mark, filter by topic
3. Quiz: answer 10 questions, check scoring
4. Exam: run full 20-question timed simulation
5. Refresh page — progress persists
6. Test on mobile viewport
7. Test offline (disconnect, reload)
