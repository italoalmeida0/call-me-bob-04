# call-me-bob 🤖 04

**To-Do List #04** — Bob has a to-do list. You have Python. Let's make a deal.

A cozy, game-like site to practice Python in the browser. Help Bob fix his
windmill, run the bake sale, tidy up his workshop and watch his sunflowers —
one chore at a time. No timers, no pressure: pick a chore, read Bob's note,
write your function and hit **Grade me!**. Bob's little robot helper checks
your code right in your browser and shows a full test trace.

**🌐 Live site:** https://italoalmeida0.github.io/call-me-bob-04/

**🧭 Bob's other to-do lists:** ⬅️ [call-me-bob 03](https://github.com/italoalmeida0/call-me-bob-03) · ➡️ [call-me-bob 05](https://github.com/italoalmeida0/call-me-bob-05)

## The chores

Every chore card shows **topic chips** — the classic computer-science
concepts behind the puzzle, so you know exactly what to study before (or
after) solving it.

| Day | Chore | What Bob needs | Topics to study |
|-----|-------|----------------|-----------------|
| 1 | The Windmill Gears | Check if one list is a rotation of another (any shift, either direction) | Rotation Check, Array Scanning |
| 1 | Firefly Field Notes | Render a coordinate list into a text grid of `*` and `.` | 2D Grid, Matrix Rendering |
| 2 | Bob's Bake Sale | Values that appear in EVERY list, sorted and deduplicated | Set Intersection, Sorting |
| 2 | Morning Milk Run | Merge k sorted lists into a single sorted route | Merge K Sorted Lists, Heap / Greedy |
| 3 | The Ribbon Stall | Minimum cuts so every piece is a palindrome | Palindrome Partitioning, Dynamic Programming |
| 3 | Bob's Workshop Setup | Dependency order with alphabetical tie-breaks; detect circular manuals | Topological Sort, Graphs (Kahn's Algorithm) |
| 4 | Sunflower Watch | Maximum of every sliding window of size k | Sliding Window Maximum, Deque |

## How it works

- 📝 **7 chores** across 4 days of Bob's week, each with a story-driven subject
- 🐍 **Python editor** powered by CodeMirror 6 (syntax highlighting, indent guides)
- 🤖 **In-browser grading** — tests run locally via [Pyodide](https://pyodide.org)
  (WebAssembly CPython), nothing ever leaves your machine
- 🔍 **Full test trace** — every test case shows the call, expected value, your
  result and OK/KO, just like a terminal grader
- ▶️ **Run button** — run your script anytime and see `print()` output in the
  robot log, with a 15s infinite-loop guard
- ⭐ **Progress tracking** — solved chores and your code are saved in
  `localStorage`
- 📱 **Responsive** — works on desktop and mobile

## Tech stack

- [Bun](https://bun.sh) — dev server & bundler
- [SolidJS](https://www.solidjs.com) — UI
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [CodeMirror 6](https://codemirror.net) — editor
- [Pyodide](https://pyodide.org) — Python runtime for grading

## Development

```bash
bun install
bun run dev      # http://localhost:5600
```

## Build & deploy

```bash
bun run build    # outputs the static site to ./dist
bun run start    # preview the build on http://localhost:5900
```

The `dist/` folder is fully static — deploy it to GitHub Pages, Netlify,
Cloudflare Pages or any static host as-is. This repo deploys automatically
to GitHub Pages on every push to `main` via GitHub Actions.

## License

[MIT](./LICENSE) © Italo Almeida
