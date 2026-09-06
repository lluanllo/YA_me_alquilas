# Graph Report - ya_tu_porte  (2026-09-06)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 78 nodes · 104 edges · 10 communities (8 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8cbc7b9`
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

## God Nodes (most connected - your core abstractions)
1. `IconName` - 6 edges
2. `scripts` - 5 edges
3. `include` - 3 edges
4. `allowScripts` - 2 edges
5. `engines` - 2 edges
6. `exclude` - 2 edges
7. `astro` - 2 edges
8. `tailwindcss` - 2 edges
9. `@tailwindcss/vite` - 2 edges
10. `options` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 2 thin omitted)

### Community 0 - "Button.astro"
Cohesion: 0.18
Nodes (5): options, links, sizes, variants, icons

### Community 1 - "package.json"
Cohesion: 0.15
Nodes (12): allowScripts, esbuild, engines, node, name, scripts, astro, build (+4 more)

### Community 2 - "Services.astro"
Cohesion: 0.22
Nodes (3): tones, rentalCards, transportCards

### Community 4 - "IconCircle.astro"
Cohesion: 0.42
Nodes (4): iconSizes, sizes, tones, IconName

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "dependencies"
Cohesion: 0.29
Nodes (7): astro, dependencies, astro, tailwindcss, @tailwindcss/vite, tailwindcss, @tailwindcss/vite

## Knowledge Gaps
- **30 isolated node(s):** `options`, `links`, `sizes`, `variants`, `icons` (+25 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **What connects `options`, `links`, `sizes` to the rest of the system?**
  _30 weakly-connected nodes found - possible documentation gaps or missing edges._