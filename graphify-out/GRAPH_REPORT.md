# Graph Report - ya_tu_porte  (2026-09-08)

## Corpus Check
- 43 files · ~72,879 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 108 nodes · 131 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `949aa08f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.astro
- package.json
- Services.astro
- SectionHeading.astro
- IconCircle.astro
- tsconfig.json
- dependencies
- site.ts
- Graph Report - ya_tu_porte  (2026-09-06)
- Communities (10 total, 2 thin omitted)
- Astro Starter Kit: Basics
- AGENTS.md
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `Graph Report - ya_tu_porte  (2026-09-06)` - 11 edges
2. `Communities (10 total, 2 thin omitted)` - 7 edges
3. `IconName` - 6 edges
4. `scripts` - 5 edges
5. `Astro Starter Kit: Basics` - 4 edges
6. `include` - 3 edges
7. `engines` - 2 edges
8. `@tailwindcss/vite` - 2 edges
9. `astro` - 2 edges
10. `tailwindcss` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (15 total, 4 thin omitted)

### Community 0 - "Button.astro"
Cohesion: 0.18
Nodes (5): options, links, sizes, variants, icons

### Community 1 - "package.json"
Cohesion: 0.15
Nodes (12): allowScripts, esbuild, engines, node, name, scripts, astro, build (+4 more)

### Community 2 - "Services.astro"
Cohesion: 0.20
Nodes (3): tones, rentalCards, cards

### Community 4 - "IconCircle.astro"
Cohesion: 0.42
Nodes (4): iconSizes, sizes, tones, IconName

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "dependencies"
Cohesion: 0.29
Nodes (7): astro, dependencies, astro, tailwindcss, @tailwindcss/vite, tailwindcss, @tailwindcss/vite

### Community 10 - "Graph Report - ya_tu_porte  (2026-09-06)"
Cohesion: 0.18
Nodes (10): Community Hubs (Navigation), Corpus Check, God Nodes (most connected - your core abstractions), Graph Freshness, Graph Report - ya_tu_porte  (2026-09-06), Import Cycles, Knowledge Gaps, Suggested Questions (+2 more)

### Community 11 - "Communities (10 total, 2 thin omitted)"
Cohesion: 0.29
Nodes (7): Communities (10 total, 2 thin omitted), Community 0 - "Button.astro", Community 1 - "package.json", Community 2 - "Services.astro", Community 4 - "IconCircle.astro", Community 5 - "tsconfig.json", Community 6 - "dependencies"

### Community 12 - "Astro Starter Kit: Basics"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Basics, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

## Knowledge Gaps
- **52 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Graph Report - ya_tu_porte  (2026-09-06)` connect `Graph Report - ya_tu_porte  (2026-09-06)` to `Communities (10 total, 2 thin omitted)`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `Communities (10 total, 2 thin omitted)` connect `Communities (10 total, 2 thin omitted)` to `Graph Report - ya_tu_porte  (2026-09-06)`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._