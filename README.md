# SME Question 1 – Practical Cursor Workflow (Scenario Based)

This branch `sme_question_1` documents, in a **theoretical / scenario-based** way, how to handle a common issue when working with Cursor:

> **Scenario**: Cursor refuses to modify a file, or it modifies the wrong file. How do you correct it?

Use the steps below as if you are explaining the workflow to another engineer in an interview or evaluation. You can take screenshots of each major step in Cursor and VS Code / Git panels as evidence.

---

## 1. When Cursor refuses to modify a file

Typical symptoms:
- Cursor replies that it is in **ask mode** or “read-only” and cannot apply changes.
- Cursor says the file is “outside the workspace” or “not writable”.
- Nothing happens to the file even though the assistant claims it made changes.

### 1.1. Verify mode and workspace
1. **Check mode**: Look at the top of the chat to see if Cursor is in **Ask** mode or **Agent** mode.  
   - If in Ask mode, **switch to Agent mode** so Cursor is allowed to run tools and edit files.
2. **Check workspace**: Confirm the file is inside the currently opened folder/workspace in Cursor (left file tree).  
   - If not, **open the correct folder** (e.g. `cursor_assignment` root), then re-ask Cursor to edit.

> **Screenshot to capture**:  
> - Mode selector showing Ask vs Agent.  
> - File tree showing the project root where the file lives.

### 1.2. Check file path, name and casing
1. Confirm the **exact file path** and name you want to change (e.g. `index.html` vs `Index.html`, `style.css` vs `styles.css`).
2. In your prompt, **refer to the file explicitly** with its name and, if helpful, relative path:
   - “Update `index.html` in the project root. Do not touch any other files.”

If Cursor still won’t modify, explicitly ask:
- “Show me the contents of `index.html` you see.”

This lets you confirm Cursor is looking at the same file you are.

> **Screenshot to capture**:  
> - Editor tab with `index.html`.  
> - Chat message where Cursor prints the file content it sees.

### 1.3. Check for read-only / permission issues
1. Make sure the file is **not read-only** on disk:
   - On Windows: right-click file → **Properties** → uncheck “Read-only”.
2. Ensure you have **write permissions** to the folder and it is not inside a system-protected directory.
3. If using Git, verify the file is not locked by any external tool.

After fixing permissions, ask Cursor again to apply the patch.

> **Screenshot to capture**:  
> - File properties dialog showing read/write.  
> - Git status panel (optional).

### 1.4. Fall back to manual edit guided by Cursor
If tools are limited or disabled (for example, during a theoretical exam setting):
1. Ask Cursor to **output the diff or full new code** as plain text.
2. Manually copy/paste the changes into the file yourself.
3. Use `git diff` to verify the file looks correct.

> **Screenshot to capture**:  
> - Chat where Cursor prints the updated code block.  
> - Editor showing the pasted code.

---

## 2. When Cursor modifies the wrong file

Typical symptoms:
- The wrong component, page, or config file changes.
- Git shows diffs in a different file than expected.

### 2.1. Immediately inspect what changed
1. Run `git status` / open the **Source Control** view to see which files changed.
2. Open the changed file(s) and inspect the diff.

If you see that the wrong file was edited:
- Decide whether to **discard** those changes or **move** them to the correct file.

> **Screenshot to capture**:  
> - Git changes panel listing modified files.  
> - Diff view highlighting unexpected file changes.

### 2.2. Revert unintended changes safely
Options:
1. **Use editor undo**: `Ctrl+Z` in the file if the change was very recent.
2. **Use Git**:
   - `git restore <wrong-file>` (or “Discard changes” in the Source Control panel).
   - If already committed: `git revert <commit-hash>` to undo that commit clearly.

After reverting, confirm with `git status` that the working tree is clean.

> **Screenshot to capture**:  
> - Command palette or terminal with `git restore`.  
> - Clean `git status` after reverting.

### 2.3. Re-run the request with precise targeting
To avoid Cursor touching the wrong file again:
1. Be **very explicit** in the prompt:
   - “Modify only `index.html`. Do not change any `.js` or `.css` files.”
2. If needed, quote the **exact snippet** to change:
   - “In `index.html`, replace this section: `<section class=\"card\">…</section>` with the version below.”
3. Ask Cursor to **show the diff** or the full new content so you can verify before accepting.

> **Screenshot to capture**:  
> - Chat prompt showing clear file name and snippet.  
> - Diff view of the correct file updated.

---

## 3. Best practices to prevent these issues

- **Use branches**:  
  Create a feature branch (like `sme_question_1`) before large AI-driven changes so you can revert easily.

- **Small, iterative edits**:  
  Ask Cursor to make one focused change at a time (e.g. “update the header styles in `index.html` only”), review, then continue.

- **Always review diffs**:  
  Treat Cursor like a pair programmer. You stay responsible for reading the diff and ensuring only the intended files changed.

- **Lock or ignore sensitive files**:  
  For configs or generated files you don’t want touched, mention explicitly:  
  “Don’t modify `package.json` or files in `dist/`.”

These principles show that you not only know how to “use” Cursor, but also how to **control** it, roll back mistakes, and keep changes auditable, which is what a performance-based hands-on evaluation is looking for.


# SME Question 2 – Create a New HTML/CSS Project in Cursor (Hands-On)

Branch: `sme_question_2`

## Goal
Demonstrate creating a fresh HTML/CSS page in Cursor, suitable for quick screenshots during a live performance-based evaluation.

## Files added for this demo
- `landing.html` — static page with hero, feature grid, and instructions section.
- `landing.css` — modern, responsive styling (no JS required).

## How to preview (for your screenshots)
1. Open `landing.html` directly in the browser (double-click) **or** serve locally:  
   `python -m http.server 8000` and open `http://localhost:8000/landing.html`
2. Resize the window to a desktop width (~1280px) for best composition.
3. Capture screenshots of:
   - The **hero section** (headline + buttons + glass card).
   - The **feature grid** and the **“How to capture” steps**.

## What the page shows
- Modern hero with CTA buttons and a glassmorphism card.
- Feature grid describing the project qualities (modern layout, lightweight, responsive).
- Steps section telling the examiner how you captured the screenshot.
- Dark background with gradients; Inter font from Google Fonts; zero JavaScript.

## Cursor workflow to mention in a live run
1. Create branch `sme_question_2`.
2. Ask Cursor to **create `landing.html`** with semantic structure (hero, grid, CTA).
3. Ask Cursor to **create `landing.css`** with gradients, grid/flex, and responsive tweaks.
4. Open `landing.html` in the built-in preview or browser; adjust width; take screenshot(s).
5. Add screenshots to the repo (if required by the evaluator) and update README with the capture notes.

