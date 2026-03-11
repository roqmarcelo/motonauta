---
name: deploy-changes
description: Use when any app file is modified and needs to be tested locally or shipped, or when users report seeing stale content after changes
---

# Deploy Changes

## Why This Exists

The service worker uses a **cache-first strategy** — it serves cached files indefinitely until `CACHE_NAME` changes. Without a version bump, modified files are never fetched.

## Deployment Checklist

1. **Bump `CACHE_NAME`** in `sw.js`
   - Increment version: `motonauta-v2` -> `motonauta-v3`
   - This is the single most important step

2. **Update `ASSETS` array** (if new files were added)
   - Add new file paths to the `ASSETS` array in `sw.js`
   - Paths are relative with `./` prefix (e.g. `'./new-file.js'`)

3. **Restart local server on a fresh port**
   ```bash
   # Kill existing server, start fresh
   npx serve . -p 4748
   ```

4. **Clear browser state**
   - DevTools -> Application -> Service Workers -> Unregister
   - DevTools -> Application -> Storage -> Clear site data
   - Hard reload (Cmd+Shift+R / Ctrl+Shift+R)

## Red Flags

| Symptom | Cause |
|---------|-------|
| "Changed a file but browser shows old version" | Forgot to bump `CACHE_NAME` |
| "New file returns 404 offline" | File not in `ASSETS` array |
| "Changes work in incognito but not normal" | Old service worker still active |

See `CLAUDE.md` and `docs/architecture.md` for broader project context.
