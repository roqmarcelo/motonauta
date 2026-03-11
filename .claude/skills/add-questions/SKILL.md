---
name: add-questions
description: Use when adding, editing, or reviewing questions in questions.js, or when validating the question bank for correctness
---

# Add Questions

## Schema

```js
{
  id: "rip01",          // prefix + sequential number
  topic: "ripeam",      // must be a valid TOPICS key
  question: "...",       // Portuguese (pt-BR)
  options: ["A","B","C","D","E"],  // exactly 5
  correctIndex: 2,      // 0-4, vary positions in source
  explanation: "..."     // Portuguese (pt-BR)
}
```

**ID prefixes:** `rip` (ripeam), `bal` (balizamento), `ps` (primeiros_socorros), `reg` (regulamentos), `sob` (sobrevivencia)

**Valid topics:** `ripeam`, `balizamento`, `primeiros_socorros`, `regulamentos`, `sobrevivencia`

## Checklist

1. Add question to the correct topic section in `questions.js`
2. Use a unique `id` with the right prefix + next sequential number
3. Include exactly 5 options and an `explanation`
4. Vary `correctIndex` — don't always use 0 (shuffled at runtime, but vary in source for readability)
5. All user-facing text in Portuguese (pt-BR)
6. Run validation:
   ```bash
   node .claude/skills/add-questions/validate-questions.mjs
   ```
7. **Bump `CACHE_NAME`** in `sw.js` (e.g. `motonauta-v2` -> `motonauta-v3`)

## Common Mistakes

- Duplicate `id` — breaks flash card localStorage persistence
- Missing `explanation` — user sees blank after answering
- Fewer than 5 options — layout breaks, validation fails
- Forgetting to bump `CACHE_NAME` — PWA users see stale question bank

See `CLAUDE.md` and `docs/architecture.md` for broader project context.
