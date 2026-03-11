---
name: verify-app
description: Use before committing, after making changes, or when something seems broken in the motonauta app — runs syntax, data, and cache integrity checks
---

# Verify App

## Automated Checks

Run all from the project root:

### 1. Syntax check
```bash
node --check app.js
```

### 2. Question bank validation
```bash
node .claude/skills/add-questions/validate-questions.mjs
```

### 3. Assets sync check
```bash
node .claude/skills/verify-app/check-assets.mjs
```

### 4. Cache version check
```bash
git diff --name-only HEAD 2>/dev/null | grep -qE '\.(html|css|js|json)$' && \
  git diff HEAD -- sw.js 2>/dev/null | grep -q 'CACHE_NAME' && \
  echo "OK: CACHE_NAME was bumped" || \
  echo "WARN: Cached files changed but CACHE_NAME may not have been bumped — check sw.js"
```

## Manual Checklist

- [ ] Navigation: home -> each mode -> back works
- [ ] Quiz completes and shows results
- [ ] Flash cards flip and navigate
- [ ] localStorage persists across reload (check `quizHistory`, `examHistory`, `flashcards`)
- [ ] Offline mode: disconnect network, app still loads and functions

See `CLAUDE.md` and `docs/architecture.md` for broader project context.
