# Graph Report - ya_tu_porte  (2026-09-09)

## Corpus Check
- 45 files · ~58,932 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 115 nodes · 147 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `835056ec`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Button.astro
- package.json
- Services.astro
- SectionHeading.astro
- tsconfig.json
- dependencies
- index.astro
- Graph Report - ya_tu_porte  (2026-09-06)
- Astro Starter Kit: Basics
- AGENTS.md
- CLAUDE.md
- Seguridad de despliegue

## God Nodes (most connected - your core abstractions)
1. `Graph Report - ya_tu_porte  (2026-09-06)` - 11 edges
2. `Communities (10 total, 2 thin omitted)` - 7 edges
3. `IconName` - 6 edges
4. `scripts` - 5 edges
5. `whatsappLink()` - 4 edges
6. `Astro Starter Kit: Basics` - 4 edges
7. `site` - 4 edges
8. `include` - 3 edges
9. `allowScripts` - 2 edges
10. `engines` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Button.astro"
Cohesion: 0.17
Nodes (9): options, links, sizes, variants, icons, iconSizes, sizes, tones (+1 more)

### Community 1 - "package.json"
Cohesion: 0.15
Nodes (12): allowScripts, esbuild, engines, node, name, scripts, astro, build (+4 more)

### Community 2 - "Services.astro"
Cohesion: 0.20
Nodes (3): tones, rentalCards, cards

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "dependencies"
Cohesion: 0.29
Nodes (7): astro, dependencies, astro, tailwindcss, @tailwindcss/vite, tailwindcss, @tailwindcss/vite

### Community 7 - "index.astro"
Cohesion: 0.33
Nodes (4): whatsapp, whatsapp, site, whatsappLink()

### Community 10 - "Graph Report - ya_tu_porte  (2026-09-06)"
Cohesion: 0.11
Nodes (17): Communities (10 total, 2 thin omitted), Community 0 - "Button.astro", Community 1 - "package.json", Community 2 - "Services.astro", Community 4 - "IconCircle.astro", Community 5 - "tsconfig.json", Community 6 - "dependencies", Community Hubs (Navigation) (+9 more)

### Community 12 - "Astro Starter Kit: Basics"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Basics, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

## Knowledge Gaps
- **55 isolated node(s):** `options`, `cards`, `questions`, `whatsapp`, `whatsapp` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `options`, `cards`, `questions` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Graph Report - ya_tu_porte  (2026-09-06)` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._