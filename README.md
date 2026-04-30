# 🧠 DSA Daily Practice

## 📌 Problem-Solving Process

```
1. Read the problem → write 2-3 examples by hand
2. Explain the approach in plain words (as if talking to a friend)
3. Write pseudocode first
4. Write real code → dry-run with your examples before submitting
5. Spend up to 25 min on your own → if stuck, check the pattern hint → try 15 more min
6. Still stuck → read the solution → close it → re-code from scratch after 15 min
```

## 📂 Repo Structure

```
dsa-practice/
│
├── patterns/                        # Problems organized by pattern
│   ├── 01_hash-map/
│   │   ├── README.md                # Theory + problem list + tracking
│   │   ├── easy/
│   │   │   └── 001_two-sum.ts
│   │   ├── medium/
│   │   └── hard/
│   ├── 02_two-pointers/
│   ├── 03_sliding-window/
│   ├── ...
│   └── 14_greedy/
│
├── daily-log/                       # Daily practice journal
│   ├── 2026-04.md                   # Monthly log
│   ├── 2026-05.md
│   └── ...
│
├── review-queue/                    # Spaced repetition queue
│   └── queue.md                     # Problems to review + next review date
│
├── notes/
│   └── patterns-cheatsheet.md       # Pattern recognition cheatsheet
│
└── templates/
    └── solution-template.py
```

## 🗺️ Pattern Roadmap

No time limit. Move to the next pattern when you can solve 60%+ of problems without looking at solutions.

| Phase | Pattern | Problems | Status |
|-------|---------|----------|--------|
| **Foundation** | 01 - HashMap | 10-12 | ✅ |
| | 02 - Two Pointers | 10 | 🟡 |
| | 03 - Sliding Window | 9 | ⬜ |
| | 04 - Binary Search | 8 | ⬜ |
| | 05 - Stack | 8 | ⬜ |
| **Core** | 06 - Linked List | 8 | ⬜ |
| | 07 - Tree BFS/DFS | 12 | ⬜ |
| | 08 - Graph | 10 | ⬜ |
| | 09 - Backtracking | 8 | ⬜ |
| **Advanced** | 10 - Heap | 8 | ⬜ |
| | 11 - Dynamic Programming | 15 | ⬜ |
| | 12 - Trie | 5 | ⬜ |
| | 13 - Union-Find | 5 | ⬜ |
| | 14 - Greedy | 8 | ⬜ |

Legend: ⬜ Not started · 🟡 In progress · ✅ Completed · 🔁 Reviewing

## ⏰ Daily Routine

```
┌─────────────────────────────────────────────────┐
│  DAILY ROUTINE (~60-90 min)                     │
│                                                 │
│  1. Review (15-20 min)                          │
│     → Open review-queue/queue.md                │
│     → Re-solve 1 problem due for review today   │
│     → If OK → push review date further out      │
│     → If fail → reset to 1 day                  │
│                                                 │
│  2. New problem (30-45 min)                     │
│     → Solve 1-2 problems in current pattern     │
│     → Follow the problem-solving process above  │
│                                                 │
│  3. Log & commit (5-10 min)                     │
│     → Update daily-log                          │
│     → Add new problems to review-queue          │
│     → Commit & push                             │
└─────────────────────────────────────────────────┘
```

## 📛 File Naming Convention

```
{leetcode-problem-order}_{leetcode-problem-name}.ts

Examples:
  001_two-sum.ts
  009_group-anagrams.ts
```

- Order number follows the problem list in on LeetCode
- Problem name in lowercase, separated by hyphens
- Each file contains: metadata, brute force, optimal solution, test cases (use the template)

## 🔀 Git Workflow

```bash
# After each session
git add .
git commit -m "daily: 2026-04-28 - solve two sum ✅, review valid palindrome ✅"

# Commit message conventions
# daily: YYYY-MM-DD - short description
# solve: problem-name (pattern, difficulty) status
# review: problem-name - result
# notes: description
# refactor: problem-name - what was improved
```

## 🎯 Principles

1. **Consistency > Intensity** — 1 problem/day × 365 days > 10 problems/day × 30 days
2. **Review before learn** — always review old problems before tackling new ones
3. **Document everything** — where you got stuck matters more than the correct solution
4. **Brute force first** — get it right before getting it fast
5. **Never skip review day** — forgetting an old problem costs more than learning a new one