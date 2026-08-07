/**
 * exercises.js — Bob's chore list.
 *
 * Each chore has:
 *   id        unique slug (used for localStorage)
 *   tier      1..4 (Bob's week: Monday..Thursday-ish difficulty)
 *   title     story title
 *   tagline   one-line teaser for the card
 *   icon      material-symbols icon name
 *   topics    study-topic chips shown under the title
 *   funcName  the function the player must implement
 *   stub      starter code shown in the editor
 *   story     array of paragraphs (the subject, Bob-flavored)
 *   signature the required def line
 *   rules     array of bullet rules
 *   examples  [{ input, output }] — shown in the subject
 *   tests     [{ call, args, expected }] — args/expected are PYTHON literals
 *             evaluated inside the Pyodide grader; `call` is display-only.
 *   banned    optional { names: [...], attrs: [...] } — function calls the
 *             robot rejects via AST inspection before running any test.
 */

export const TIERS = [
  { tier: 1, label: "Day 1", subtitle: "Warm-up Chores" },
  { tier: 2, label: "Day 2", subtitle: "Kitchen Duty" },
  { tier: 3, label: "Day 3", subtitle: "Workshop Wizardry" },
  { tier: 4, label: "Day 4", subtitle: "Garden Mastery" },
];

export const EXERCISES = [
  // -----------------------------------------------------------------------
  // DAY 1
  // -----------------------------------------------------------------------
  {
    id: "windmill-gears",
    tier: 1,
    title: "The Windmill Gears",
    tagline: "A storm spun Bob's windmill. Is the gear ring just rotated?",
    icon: "settings",
    funcName: "gears_match",
    topics: ["Rotation Check", "Array Scanning"],
    stub: "def gears_match(gear_a: list[int], gear_b: list[int]) -> bool:\n    pass\n",
    story: [
      "Bob's old windmill has a ring of numbered teeth. Last night a storm spun the whole ring around its axle — the teeth are all still in the same order, but the ring might start at a different tooth now.",
      "Bob wrote down the teeth sequence before the storm and after it. Help him figure out whether the new sequence is just a rotation of the old one (shifted circularly, left or right), or whether a tooth actually fell off and something is broken.",
    ],
    signature: "def gears_match(gear_a: list[int], gear_b: list[int]) -> bool:",
    rules: [
      "Check if gear_b is a rotation of gear_a",
      "Handle sequences of different lengths (return False)",
      "Handle empty rings (two empty rings are rotations of each other)",
      "A rotation can be 0 positions (identical sequence)",
      "Consider both left and right rotations",
    ],
    examples: [
      { input: "gears_match([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])", output: "True" },
      { input: "gears_match([1, 2, 3, 4, 5], [4, 5, 1, 2, 3])", output: "True" },
      { input: "gears_match([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])", output: "True" },
      { input: "gears_match([1, 2, 3, 4, 5], [2, 3, 4, 5, 1])", output: "True" },
      { input: "gears_match([1, 2, 3], [1, 3, 2])", output: "False" },
      { input: "gears_match([1, 2, 3], [1, 2])", output: "False" },
      { input: "gears_match([], [])", output: "True" },
      { input: "gears_match([1, 1, 1], [1, 1, 1])", output: "True" },
    ],
    tests: [
      { call: "gears_match([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])", args: "([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])", expected: "True" },
      { call: "gears_match([1, 2, 3, 4, 5], [4, 5, 1, 2, 3])", args: "([1, 2, 3, 4, 5], [4, 5, 1, 2, 3])", expected: "True" },
      { call: "gears_match([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])", args: "([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])", expected: "True" },
      { call: "gears_match([1, 2, 3, 4, 5], [2, 3, 4, 5, 1])", args: "([1, 2, 3, 4, 5], [2, 3, 4, 5, 1])", expected: "True" },
      { call: "gears_match([1, 2, 3], [1, 3, 2])", args: "([1, 2, 3], [1, 3, 2])", expected: "False" },
      { call: "gears_match([1, 2, 3], [1, 2])", args: "([1, 2, 3], [1, 2])", expected: "False" },
      { call: "gears_match([], [])", args: "([], [])", expected: "True" },
      { call: "gears_match([1, 1, 1], [1, 1, 1])", args: "([1, 1, 1], [1, 1, 1])", expected: "True" },
      { call: "gears_match([1], [2])", args: "([1], [2])", expected: "False" },
      { call: "gears_match([7, 7], [7, 7])", args: "([7, 7], [7, 7])", expected: "True" },
      { call: "gears_match([1, 1, 2], [1, 2, 1])", args: "([1, 1, 2], [1, 2, 1])", expected: "True" },
      { call: "gears_match([2, 1, 1], [1, 1, 2])", args: "([2, 1, 1], [1, 1, 2])", expected: "True" },
      { call: "gears_match([0, 0, 1], [0, 1, 0])", args: "([0, 0, 1], [0, 1, 0])", expected: "True" },
      { call: "gears_match([2, 2, 1], [2, 1, 2])", args: "([2, 2, 1], [2, 1, 2])", expected: "True" },
      { call: "gears_match([-1, 0, 5, -3], [5, -3, -1, 0])", args: "([-1, 0, 5, -3], [5, -3, -1, 0])", expected: "True" },
      { call: "gears_match([1, 2, 3, 4], [1, 3, 2, 4])", args: "([1, 2, 3, 4], [1, 3, 2, 4])", expected: "False" },
      { call: "gears_match([1, 1, 2, 2], [1, 2, 1, 2])", args: "([1, 1, 2, 2], [1, 2, 1, 2])", expected: "False" },
      { call: "gears_match([5], [5])", args: "([5], [5])", expected: "True" },
      { call: "gears_match([1, 2], [2, 1])", args: "([1, 2], [2, 1])", expected: "True" },
    ],
  },
  {
    id: "firefly-notes",
    tier: 1,
    title: "Firefly Field Notes",
    tagline: "Bob sketches the fireflies he spots on squared paper.",
    icon: "grid-on",
    funcName: "firefly_grid",
    topics: ["2D Grid", "Matrix Rendering"],
    stub: "def firefly_grid(fireflies: list[tuple[int, int]], size: int) -> list[str]:\n    pass\n",
    story: [
      "Every evening Bob sits on his porch and watches the fireflies. He keeps a notebook with a square grid, and whenever he spots a firefly at some position, he marks a '*' on the paper. Empty squares get a '.'",
      "Bob's eyesight isn't what it used to be, so he wants a function that takes his raw notes — a list of (row, col) coordinates and the grid size — and produces the final drawing as a list of strings, one string per row.",
    ],
    signature: "def firefly_grid(fireflies: list[tuple[int, int]], size: int) -> list[str]:",
    rules: [
      "Take a list of firefly coordinates as tuples (row, col) and the grid size as an integer",
      "Return a list of strings representing the grid",
      "Fireflies are represented by '*' and empty squares by '.'",
      "Grid coordinates start from (0, 0) at the top-left",
      "Ignore coordinates outside the grid boundaries",
      "Handle duplicate coordinates (a firefly appears only once)",
    ],
    examples: [
      { input: "firefly_grid([(0, 0), (1, 1), (2, 2)], 3)", output: "['*..', '.*.', '..*']" },
      { input: "firefly_grid([(1, 1), (0, 1), (2, 1), (1, 0), (1, 2)], 3)", output: "['.*.', '***', '.*.']" },
      { input: "firefly_grid([], 2)", output: "['..', '..']" },
      { input: "firefly_grid([(0, 0), (0, 0), (1, 1)], 2)", output: "['*.', '.*']" },
      { input: "firefly_grid([(0, 0), (5, 5)], 3)", output: "['*..', '...', '...']" },
      { input: "firefly_grid([(1, 0), (1, 1), (1, 2)], 3)", output: "['...', '***', '...']" },
    ],
    tests: [
      { call: "firefly_grid([(0, 0), (1, 1), (2, 2)], 3)", args: "([(0, 0), (1, 1), (2, 2)], 3)", expected: "['*..', '.*.', '..*']" },
      { call: "firefly_grid([(1, 1), (0, 1), (2, 1), (1, 0), (1, 2)], 3)", args: "([(1, 1), (0, 1), (2, 1), (1, 0), (1, 2)], 3)", expected: "['.*.', '***', '.*.']" },
      { call: "firefly_grid([], 2)", args: "([], 2)", expected: "['..', '..']" },
      { call: "firefly_grid([(0, 0), (0, 0), (1, 1)], 2)", args: "([(0, 0), (0, 0), (1, 1)], 2)", expected: "['*.', '.*']" },
      { call: "firefly_grid([(0, 0), (5, 5)], 3)", args: "([(0, 0), (5, 5)], 3)", expected: "['*..', '...', '...']" },
      { call: "firefly_grid([(1, 0), (1, 1), (1, 2)], 3)", args: "([(1, 0), (1, 1), (1, 2)], 3)", expected: "['...', '***', '...']" },
      { call: "firefly_grid([(0, -1)], 3)", args: "([(0, -1)], 3)", expected: "['...', '...', '...']" },
      { call: "firefly_grid([(-1, 0)], 3)", args: "([(-1, 0)], 3)", expected: "['...', '...', '...']" },
      { call: "firefly_grid([(0, 0)], 1)", args: "([(0, 0)], 1)", expected: "['*']" },
      { call: "firefly_grid([(0, 0), (0, 1), (1, 0), (1, 1)], 2)", args: "([(0, 0), (0, 1), (1, 0), (1, 1)], 2)", expected: "['**', '**']" },
      { call: "firefly_grid([(-1, -1)], 2)", args: "([(-1, -1)], 2)", expected: "['..', '..']" },
      { call: "firefly_grid([(2, 2)], 3)", args: "([(2, 2)], 3)", expected: "['...', '...', '..*']" },
      { call: "firefly_grid([(0, 0), (2, 0), (0, 2), (2, 2)], 3)", args: "([(0, 0), (2, 0), (0, 2), (2, 2)], 3)", expected: "['*.*', '...', '*.*']" },
    ],
  },

  // -----------------------------------------------------------------------
  // DAY 2
  // -----------------------------------------------------------------------
  {
    id: "bake-sale",
    tier: 2,
    title: "Bob's Bake Sale",
    tagline: "Which ingredients show up in EVERY recipe?",
    icon: "cookie",
    funcName: "shared_ingredients",
    topics: ["Set Intersection", "Sorting"],
    stub: "def shared_ingredients(recipes: list[list[int]]) -> list[int]:\n    pass\n",
    story: [
      "Bob is baking for the village fair. He found a stack of old family recipes, and each one lists its ingredients by their pantry shelf numbers. Bob's pantry is tiny, so he only wants to stock the ingredients that appear in ALL the recipes — everything else he'll borrow from the neighbors.",
      "Given the list of recipes (each a list of shelf numbers), return the shelf numbers that appear in every recipe, sorted in ascending order.",
    ],
    signature: "def shared_ingredients(recipes: list[list[int]]) -> list[int]:",
    rules: [
      "Return elements that appear in ALL lists",
      "The result must be sorted in ascending order",
      "Remove duplicates from the result",
      "Handle empty input or empty lists gracefully",
      "If any list is empty, the answer is empty",
    ],
    examples: [
      { input: "shared_ingredients([[1, 2, 3], [2, 3, 4], [2, 3, 5]])", output: "[2, 3]" },
      { input: "shared_ingredients([[1, 2, 3, 4], [2, 4, 6, 8], [4, 8, 12]])", output: "[4]" },
      { input: "shared_ingredients([[1, 2, 3], [4, 5, 6]])", output: "[]" },
      { input: "shared_ingredients([[1, 1, 2, 3], [1, 2, 2, 3], [1, 2, 3, 3]])", output: "[1, 2, 3]" },
      { input: "shared_ingredients([])", output: "[]" },
      { input: "shared_ingredients([[1, 2, 3], []])", output: "[]" },
      { input: "shared_ingredients([[5]])", output: "[5]" },
    ],
    tests: [
      { call: "shared_ingredients([[1, 2, 3], [2, 3, 4], [2, 3, 5]])", args: "([[1, 2, 3], [2, 3, 4], [2, 3, 5]],)", expected: "[2, 3]" },
      { call: "shared_ingredients([[1, 2, 3, 4], [2, 4, 6, 8], [4, 8, 12]])", args: "([[1, 2, 3, 4], [2, 4, 6, 8], [4, 8, 12]],)", expected: "[4]" },
      { call: "shared_ingredients([[1, 2, 3], [4, 5, 6]])", args: "([[1, 2, 3], [4, 5, 6]],)", expected: "[]" },
      { call: "shared_ingredients([[1, 1, 2, 3], [1, 2, 2, 3], [1, 2, 3, 3]])", args: "([[1, 1, 2, 3], [1, 2, 2, 3], [1, 2, 3, 3]],)", expected: "[1, 2, 3]" },
      { call: "shared_ingredients([])", args: "([],)", expected: "[]" },
      { call: "shared_ingredients([[1, 2, 3], []])", args: "([[1, 2, 3], []],)", expected: "[]" },
      { call: "shared_ingredients([[5]])", args: "([[5]],)", expected: "[5]" },
      { call: "shared_ingredients([[4, 8], [4, 8]])", args: "([[4, 8], [4, 8]],)", expected: "[4, 8]" },
      { call: "shared_ingredients([[64, 8, 1, 128], [1, 8, 64, 128]])", args: "([[64, 8, 1, 128], [1, 8, 64, 128]],)", expected: "[1, 8, 64, 128]" },
      { call: "shared_ingredients([[-3, -1, 2], [-1, 2, 5]])", args: "([[-3, -1, 2], [-1, 2, 5]],)", expected: "[-1, 2]" },
      { call: "shared_ingredients([[1, 2, 3], [2], [2, 7]])", args: "([[1, 2, 3], [2], [2, 7]],)", expected: "[2]" },
      { call: "shared_ingredients([[], []])", args: "([[], []],)", expected: "[]" },
      { call: "shared_ingredients([[1, 2, 3, 4], [2, 3, 4], [3, 4], [4]])", args: "([[1, 2, 3, 4], [2, 3, 4], [3, 4], [4]],)", expected: "[4]" },
      { call: "shared_ingredients([[10, 20, 30], [30, 20, 10], [20, 30]])", args: "([[10, 20, 30], [30, 20, 10], [20, 30]],)", expected: "[20, 30]" },
    ],
  },
  {
    id: "milk-run",
    tier: 2,
    title: "Morning Milk Run",
    tagline: "Merge Bob's sorted delivery routes into one big route.",
    icon: "local-shipping",
    funcName: "merge_milk_routes",
    topics: ["Merge K Sorted Lists", "Heap / Greedy"],
    stub: "def merge_milk_routes(routes: list[list[int]]) -> list[int]:\n    pass\n",
    story: [
      "Bob delivers milk at dawn. Each of his carriers hands him a list of house numbers to visit, already sorted from the smallest house number to the largest. Carrying all those separate lists around is a mess, so Bob wants one single route with every stop, still in ascending order.",
      "Since each route is already sorted, Bob expects you to merge them efficiently — his arms are tired enough as it is.",
      "One more thing: Bob's robot helper is watching, and it will REFUSE to grade any solution that uses sorted(), list.sort(), or heapq.merge(). Bob says the whole point is to merge already-sorted routes by hand — re-sorting everything is cheating.",
    ],
    signature: "def merge_milk_routes(routes: list[list[int]]) -> list[int]:",
    rules: [
      "Take a list of sorted integer lists as input",
      "Return a single merged list in ascending order",
      "Preserve all duplicate stops in the final route",
      "Handle empty routes and empty input gracefully",
      "All input routes are guaranteed to be sorted in ascending order",
      "Handle negative numbers correctly (yes, Bob's village has weird addresses)",
      "FORBIDDEN: using sorted(), list.sort(), or heapq.merge() — the robot checks and rejects them",
    ],
    banned: { names: ["sorted", "merge"], attrs: ["sort", "merge"] },
    examples: [
      { input: "merge_milk_routes([[1, 3, 5], [2, 4, 6]])", output: "[1, 2, 3, 4, 5, 6]" },
      { input: "merge_milk_routes([[1, 5, 9], [2, 3, 8], [4, 6, 7]])", output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]" },
      { input: "merge_milk_routes([[5], [1, 3], [2, 4]])", output: "[1, 2, 3, 4, 5]" },
      { input: "merge_milk_routes([[1, 1, 2], [2, 3, 3]])", output: "[1, 1, 2, 2, 3, 3]" },
      { input: "merge_milk_routes([[], [1, 2, 3]])", output: "[1, 2, 3]" },
      { input: "merge_milk_routes([])", output: "[]" },
      { input: "merge_milk_routes([[-5, -1, 0], [-3, 2, 4]])", output: "[-5, -3, -1, 0, 2, 4]" },
      { input: "merge_milk_routes([[10], [10], [10]])", output: "[10, 10, 10]" },
    ],
    tests: [
      { call: "merge_milk_routes([[1, 3, 5], [2, 4, 6]])", args: "([[1, 3, 5], [2, 4, 6]],)", expected: "[1, 2, 3, 4, 5, 6]" },
      { call: "merge_milk_routes([[1, 5, 9], [2, 3, 8], [4, 6, 7]])", args: "([[1, 5, 9], [2, 3, 8], [4, 6, 7]],)", expected: "[1, 2, 3, 4, 5, 6, 7, 8, 9]" },
      { call: "merge_milk_routes([[5], [1, 3], [2, 4]])", args: "([[5], [1, 3], [2, 4]],)", expected: "[1, 2, 3, 4, 5]" },
      { call: "merge_milk_routes([[1, 1, 2], [2, 3, 3]])", args: "([[1, 1, 2], [2, 3, 3]],)", expected: "[1, 1, 2, 2, 3, 3]" },
      { call: "merge_milk_routes([[], [1, 2, 3]])", args: "([[], [1, 2, 3]],)", expected: "[1, 2, 3]" },
      { call: "merge_milk_routes([])", args: "([],)", expected: "[]" },
      { call: "merge_milk_routes([[-5, -1, 0], [-3, 2, 4]])", args: "([[-5, -1, 0], [-3, 2, 4]],)", expected: "[-5, -3, -1, 0, 2, 4]" },
      { call: "merge_milk_routes([[10], [10], [10]])", args: "([[10], [10], [10]],)", expected: "[10, 10, 10]" },
      { call: "merge_milk_routes([[1, 2, 3]])", args: "([[1, 2, 3]],)", expected: "[1, 2, 3]" },
      { call: "merge_milk_routes([[], []])", args: "([[], []],)", expected: "[]" },
      { call: "merge_milk_routes([[1, 4, 7], [2, 5, 8], [3, 6, 9]])", args: "([[1, 4, 7], [2, 5, 8], [3, 6, 9]],)", expected: "[1, 2, 3, 4, 5, 6, 7, 8, 9]" },
      { call: "merge_milk_routes([[0], [-1], [1]])", args: "([[0], [-1], [1]],)", expected: "[-1, 0, 1]" },
    ],
  },

  // -----------------------------------------------------------------------
  // DAY 3
  // -----------------------------------------------------------------------
  {
    id: "ribbon-stall",
    tier: 3,
    title: "The Ribbon Stall",
    tagline: "Cut the ribbon so every piece reads the same both ways.",
    icon: "content-cut",
    funcName: "ribbon_cuts",
    topics: ["Palindrome Partitioning", "Dynamic Programming"],
    stub: "def ribbon_cuts(ribbon: str) -> int:\n    pass\n",
    story: [
      "At the village market, Bob sells decorative ribbons printed with letters. A ribbon only sells if every piece on display reads exactly the same forwards and backwards — villagers are picky like that.",
      "Bob can cut a ribbon into pieces, but every cut costs him a coin. Given the letters on a ribbon, find the MINIMUM number of cuts Bob needs so that every resulting piece reads the same both ways. If the whole ribbon already works, zero cuts and Bob keeps his coins.",
    ],
    signature: "def ribbon_cuts(ribbon: str) -> int:",
    rules: [
      "Find the minimum cuts so that every piece reads the same forwards and backwards",
      "Return the number of cuts needed (not the number of pieces)",
      "Handle empty ribbons (return 0)",
      "A single character always reads the same both ways",
      "Letter case matters ('A' is not 'a')",
    ],
    examples: [
      { input: 'ribbon_cuts("aab")', output: "1", note: '"aa|b" -> "aa" and "b" both work — 1 cut' },
      { input: 'ribbon_cuts("aba")', output: "0", note: '"aba" already reads the same both ways' },
      { input: 'ribbon_cuts("abcba")', output: "0", note: "the whole ribbon already works" },
      { input: 'ribbon_cuts("abcd")', output: "3", note: '"a|b|c|d" — every letter on its own' },
      { input: 'ribbon_cuts("aabaa")', output: "0", note: "no cuts needed at all" },
      { input: 'ribbon_cuts("abac")', output: "1", note: '"aba|c" — 1 cut' },
      { input: 'ribbon_cuts("")', output: "0", note: "nothing to cut" },
    ],
    tests: [
      { call: 'ribbon_cuts("aab")', args: '("aab",)', expected: "1" },
      { call: 'ribbon_cuts("aba")', args: '("aba",)', expected: "0" },
      { call: 'ribbon_cuts("abcba")', args: '("abcba",)', expected: "0" },
      { call: 'ribbon_cuts("abcd")', args: '("abcd",)', expected: "3" },
      { call: 'ribbon_cuts("aabaa")', args: '("aabaa",)', expected: "0" },
      { call: 'ribbon_cuts("abac")', args: '("abac",)', expected: "1" },
      { call: 'ribbon_cuts("")', args: '("",)', expected: "0" },
      { call: 'ribbon_cuts("aa")', args: '("aa",)', expected: "0" },
      { call: 'ribbon_cuts("ab")', args: '("ab",)', expected: "1" },
      { call: 'ribbon_cuts("aaba")', args: '("aaba",)', expected: "1" },
      { call: 'ribbon_cuts("bbab")', args: '("bbab",)', expected: "1" },
      { call: 'ribbon_cuts("aabcbab")', args: '("aabcbab",)', expected: "2" },
      { call: 'ribbon_cuts("abacabb")', args: '("abacabb",)', expected: "2" },
      { call: 'ribbon_cuts("aabab")', args: '("aabab",)', expected: "1" },
      { call: 'ribbon_cuts("aabbaa")', args: '("aabbaa",)', expected: "0" },
      { call: 'ribbon_cuts("abababab")', args: '("abababab",)', expected: "1" },
      { call: 'ribbon_cuts("racecarx")', args: '("racecarx",)', expected: "1" },
      { call: 'ribbon_cuts("aaabaa")', args: '("aaabaa",)', expected: "1" },
      { call: 'ribbon_cuts("xyzzyx")', args: '("xyzzyx",)', expected: "0" },
    ],
  },
  {
    id: "workshop-setup",
    tier: 3,
    title: "Bob's Workshop Setup",
    tagline: "Some tools must be assembled before others. Find the order.",
    icon: "build",
    funcName: "workshop_setup_order",
    topics: ["Topological Sort", "Graphs (Kahn's Algorithm)"],
    stub: "def workshop_setup_order(tools: dict[str, list[str]]) -> list[str]:\n    pass\n",
    story: [
      "Bob's workshop is a glorious mess. Each tool on his shelf comes with a manual listing which OTHER tools must be assembled first (you need the wrench before the bolt-tightener, obviously).",
      "Given a dictionary where each key is a tool and its value is the list of tools it depends on, return a valid assembly order — every tool appearing only after everything it depends on. If the manuals contradict each other in a circle, no order works and Bob goes fishing instead (return an empty list).",
      "When several tools could be assembled at the same time, Bob picks them in alphabetical order so his checklist stays tidy and deterministic.",
    ],
    signature: "def workshop_setup_order(tools: dict[str, list[str]]) -> list[str]:",
    rules: [
      "Take a dictionary where keys are tool names and values are lists of dependencies",
      "Return tools in assembly order (dependencies first)",
      "Return an empty list if no valid order exists (circular dependency)",
      "Handle empty input and isolated dependency chains",
      "Ignore references to tools not present in the dictionary",
      "A tool that depends on itself can never be assembled",
      "Break ties alphabetically so the output is deterministic",
    ],
    examples: [
      {
        input: 'workshop_setup_order({"app": ["database"], "database": ["driver"], "driver": []})',
        output: "['driver', 'database', 'app']",
        note: "driver → database → app",
      },
      {
        input: 'workshop_setup_order({"A": [], "B": ["A"], "C": ["A", "B"]})',
        output: "['A', 'B', 'C']",
        note: "A has no deps, B needs A, C needs both",
      },
      {
        input: "workshop_setup_order({})",
        output: "[]",
        note: "empty workshop",
      },
      {
        input: 'workshop_setup_order({"X": ["Y"], "Y": ["X"]})',
        output: "[]",
        note: "circular: X needs Y, Y needs X",
      },
      {
        input: 'workshop_setup_order({"web": [], "api": [], "frontend": ["web"], "backend": ["api"]})',
        output: "['api', 'web', 'backend', 'frontend']",
        note: "two independent chains, alphabetical tie-break",
      },
    ],
    tests: [
      { call: 'workshop_setup_order({"app": ["database"], "database": ["driver"], "driver": []})', args: '({"app": ["database"], "database": ["driver"], "driver": []},)', expected: "['driver', 'database', 'app']" },
      { call: 'workshop_setup_order({"A": [], "B": ["A"], "C": ["A", "B"]})', args: '({"A": [], "B": ["A"], "C": ["A", "B"]},)', expected: "['A', 'B', 'C']" },
      { call: "workshop_setup_order({})", args: "({},)", expected: "[]" },
      { call: 'workshop_setup_order({"X": ["Y"], "Y": ["X"]})', args: '({"X": ["Y"], "Y": ["X"]},)', expected: "[]" },
      { call: 'workshop_setup_order({"web": [], "api": [], "frontend": ["web"], "backend": ["api"]})', args: '({"web": [], "api": [], "frontend": ["web"], "backend": ["api"]},)', expected: "['api', 'web', 'backend', 'frontend']" },
      { call: 'workshop_setup_order({"self": ["self"]})', args: '({"self": ["self"]},)', expected: "[]" },
      { call: 'workshop_setup_order({"a": ["external"]})', args: '({"a": ["external"]},)', expected: "['a']" },
      { call: 'workshop_setup_order({"a": ["b", "zzz"], "b": []})', args: '({"a": ["b", "zzz"], "b": []},)', expected: "['b', 'a']" },
      { call: 'workshop_setup_order({"a": ["x"], "b": ["y"]})', args: '({"a": ["x"], "b": ["y"]},)', expected: "['a', 'b']" },
      { call: 'workshop_setup_order({"a": ["b", "c"], "b": ["d"], "c": ["d"], "d": []})', args: '({"a": ["b", "c"], "b": ["d"], "c": ["d"], "d": []},)', expected: "['d', 'b', 'c', 'a']" },
      { call: 'workshop_setup_order({"a": ["b"], "b": ["missing"]})', args: '({"a": ["b"], "b": ["missing"]},)', expected: "['b', 'a']" },
      { call: 'workshop_setup_order({"a": ["b"], "b": ["c"], "c": ["a"], "z": []})', args: '({"a": ["b"], "b": ["c"], "c": ["a"], "z": []},)', expected: "[]" },
      { call: 'workshop_setup_order({"b": [], "a": []})', args: '({"b": [], "a": []},)', expected: "['a', 'b']" },
      { call: 'workshop_setup_order({"lib": [], "app1": ["lib"], "app2": ["lib"], "app3": ["lib"]})', args: '({"lib": [], "app1": ["lib"], "app2": ["lib"], "app3": ["lib"]},)', expected: "['lib', 'app1', 'app2', 'app3']" },
    ],
  },

  // -----------------------------------------------------------------------
  // DAY 4
  // -----------------------------------------------------------------------
  {
    id: "sunflower-watch",
    tier: 4,
    title: "Sunflower Watch",
    tagline: "Through a gap in the fence, Bob tracks the tallest sunflower.",
    icon: "yard",
    funcName: "tallest_sunflowers",
    topics: ["Sliding Window Maximum", "Deque"],
    stub: "def tallest_sunflowers(heights: list[int], k: int) -> list[int]:\n    pass\n",
    story: [
      "Bob is absurdly proud of his sunflower patch. His fence has a small gap that lets him see exactly k flower beds at a time. Every morning he walks along the fence, sliding the gap one bed to the right, and writes down the height of the tallest sunflower he can see.",
      "Given the heights of every bed and the gap size k, return the list of maximums Bob records at each position of the gap.",
    ],
    signature: "def tallest_sunflowers(heights: list[int], k: int) -> list[int]:",
    rules: [
      "Slide a window of size k through the list of heights",
      "Record the maximum height at each window position",
      "Return a list with one maximum per position",
      "Handle edge cases (empty list, k <= 0, k greater than the number of beds)",
      "Return an empty list for invalid inputs",
    ],
    examples: [
      { input: "tallest_sunflowers([1, 3, -1, -3, 5, 3, 6, 7], 3)", output: "[3, 3, 5, 5, 6, 7]" },
      { input: "tallest_sunflowers([1, 2, 3, 4, 5], 2)", output: "[2, 3, 4, 5]" },
      { input: "tallest_sunflowers([5, 4, 3, 2, 1], 1)", output: "[5, 4, 3, 2, 1]" },
      { input: "tallest_sunflowers([1, 2, 3], 3)", output: "[3]" },
      { input: "tallest_sunflowers([1, 2, 3], 4)", output: "[]" },
      { input: "tallest_sunflowers([], 2)", output: "[]" },
      { input: "tallest_sunflowers([1, 2, 3], 0)", output: "[]" },
    ],
    tests: [
      { call: "tallest_sunflowers([1, 3, -1, -3, 5, 3, 6, 7], 3)", args: "([1, 3, -1, -3, 5, 3, 6, 7], 3)", expected: "[3, 3, 5, 5, 6, 7]" },
      { call: "tallest_sunflowers([1, 2, 3, 4, 5], 2)", args: "([1, 2, 3, 4, 5], 2)", expected: "[2, 3, 4, 5]" },
      { call: "tallest_sunflowers([5, 4, 3, 2, 1], 1)", args: "([5, 4, 3, 2, 1], 1)", expected: "[5, 4, 3, 2, 1]" },
      { call: "tallest_sunflowers([1, 2, 3], 3)", args: "([1, 2, 3], 3)", expected: "[3]" },
      { call: "tallest_sunflowers([1, 2, 3], 4)", args: "([1, 2, 3], 4)", expected: "[]" },
      { call: "tallest_sunflowers([], 2)", args: "([], 2)", expected: "[]" },
      { call: "tallest_sunflowers([1, 2, 3], 0)", args: "([1, 2, 3], 0)", expected: "[]" },
      { call: "tallest_sunflowers([2, 2, 2], 2)", args: "([2, 2, 2], 2)", expected: "[2, 2]" },
      { call: "tallest_sunflowers([1, 2, 3], -1)", args: "([1, 2, 3], -1)", expected: "[]" },
      { call: "tallest_sunflowers([-5, -2, -9, -1], 2)", args: "([-5, -2, -9, -1], 2)", expected: "[-2, -2, -1]" },
      { call: "tallest_sunflowers([7], 1)", args: "([7], 1)", expected: "[7]" },
      { call: "tallest_sunflowers([3, 3, 3, 3], 2)", args: "([3, 3, 3, 3], 2)", expected: "[3, 3, 3]" },
      { call: "tallest_sunflowers([1, 3, 2, 5, 4], 5)", args: "([1, 3, 2, 5, 4], 5)", expected: "[5]" },
    ],
  },
];

export function getExercise(id) {
  return EXERCISES.find((ex) => ex.id === id) || null;
}
