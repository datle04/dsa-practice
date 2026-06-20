# 08 — Graph

## When to Use

- Grid/matrix traversal (islands, regions, rotting oranges)
- Find connected components
- Shortest path in unweighted graph
- Dependency ordering → Topological Sort
- Keywords: "connected", "reachable", "path", "neighbor", "adjacent"

## Template

```typescript
// DFS on grid
function dfsGrid(grid: string[][], r: number, c: number): void {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;
  if (grid[r][c] === "0") return; // visited or invalid
  grid[r][c] = "0"; // mark visited
  dfsGrid(grid, r + 1, c);
  dfsGrid(grid, r - 1, c);
  dfsGrid(grid, r, c + 1);
  dfsGrid(grid, r, c - 1);
}

// BFS on grid
function bfsGrid(grid: string[][], startR: number, startC: number): void {
  const rows = grid.length, cols = grid[0].length;
  const queue: [number, number][] = [[startR, startC]];
  grid[startR][startC] = "0"; // mark visited
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== "0") {
        grid[nr][nc] = "0";
        queue.push([nr, nc]);
      }
    }
  }
}

// BFS on adjacency list
function bfs(graph: Map<number, number[]>, start: number): void {
  const visited = new Set<number>([start]);
  const queue: number[] = [start];

  while (queue.length > 0) {
    const node = queue.shift()!;
    for (const neighbor of graph.get(node) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Topological Sort (BFS — Kahn's algorithm)
function topoSort(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>();
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    if (!graph.has(pre)) graph.set(pre, []);
    graph.get(pre)!.push(course);
    inDegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    for (const neighbor of graph.get(node) ?? []) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return order.length === numCourses ? order : []; // empty = cycle
}
```

## Problems

### Medium

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 1 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | DFS/BFS grid | | |
| 2 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | BFS/DFS + HashMap | | |
| 3 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | DFS from border | | |
| 4 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | Topological sort | | |
| 5 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Topological sort | | |
| 6 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Multi-source BFS | | |
| 7 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | DFS from border | | |
| 8 | [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) | BFS/DFS/Union-Find | | |

### Hard

| # | Problem | Type | Status | Date |
|---|---------|------|--------|------|
| 9 | [Word Ladder](https://leetcode.com/problems/word-ladder/) | BFS | | |
| 10 | [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | Topological sort | | |

## Hints

<details><summary>Number of Islands</summary>Scan grid. When you find "1", count it and DFS/BFS to mark all connected "1"s as visited.</details>
<details><summary>Clone Graph</summary>Same idea as Copy List with Random Pointer. HashMap maps old node → new node. BFS/DFS to traverse and clone.</details>
<details><summary>Pacific Atlantic Water Flow</summary>Don't start from every cell. Start DFS/BFS from ocean borders inward. Find cells reachable by both oceans.</details>
<details><summary>Course Schedule</summary>Build dependency graph. Topological sort. If result length < numCourses → cycle exists → return false.</details>
<details><summary>Course Schedule II</summary>Same as Course Schedule but return the ordering instead of boolean.</details>
<details><summary>Rotting Oranges</summary>Multi-source BFS: start from ALL rotten oranges simultaneously. Each BFS level = 1 minute.</details>
<details><summary>Surrounded Regions</summary>DFS from border "O"s, mark them safe. Everything else that's "O" gets flipped to "X".</details>
<details><summary>Graph Valid Tree</summary>A valid tree has exactly n-1 edges and is fully connected. Check both with BFS/DFS or Union-Find.</details>
<details><summary>Word Ladder</summary>BFS from beginWord. Each level = 1 transformation. Generate all possible 1-char changes, check if in wordList.</details>
<details><summary>Alien Dictionary</summary>Compare adjacent words to find character ordering. Build graph of char dependencies. Topological sort.</details>

## Lessons Learned

-
