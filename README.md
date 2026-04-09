# Omnicorp

Omnicorp is a client-side React-based incremental strategy game about stock trading, corporate control, and prestige-driven market manipulation.
Start as a small trader, build wealth through a semi-realistic seeded market simulation, take control of companies and sectors, and (eventually) form _Omnicorp_.

## Current Project State

- Early-stage learning project
- Design and implementation planning are defined
- React + TypeScript + Vite app scaffold exists

## MVP Summary

- Deterministic tick-based stock market simulation
- 8 fictional sector stocks generated from realistic historical bounds
- Manual trading with portfolio tracking
- Jobs, college progression, and market-close payouts
- News/event system with overlapping signals
- Corporate control, subsidiaries, board meetings, and restructuring
- Prestige through `Systemic Importance`
- Final Omnicorp endgame based on sector control

## Stack

- React
- TypeScript
- Vite
- Zustand
- localStorage for saves

## Key Docs

- [MVP Design](./docs/mvp-design.md)
- [Implementation Roadmap](./docs/implementation-roadmap.md)
- [Stock Reference](./docs/stock-reference.md)
- [Event Catalog](./docs/event-catalog.md)

## Development

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
npm run fmt
npm run preview
```
