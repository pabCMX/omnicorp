# Omnicorp Implementation Roadmap

This roadmap breaks the MVP into small, sequential tasks. Each task includes:

- doc references
- the specific spec content that matters for implementation
- concrete acceptance criteria
- a blank area for implementation notes
- a status field

Use this as a working task tracker. Do tasks in order unless a dependency is already finished.

## Phase 0: Project Setup

## Task 0.1: Create the React/Vite/TypeScript app

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Frontend: React
- Language: TypeScript
- Build tool: Vite
- App model: single-page web app

### Acceptance Criteria

- Project runs locally with a Vite dev server.
- TypeScript compilation succeeds with no errors.
- A minimal app page renders in the browser.
- The repo contains a standard `src/` structure.

### Implementation Details

- Initial project setup completed with bun create vite. Added tailwindcss and shadcn for faster component creation.

### Complete/Incomplete

- Complete

## Task 0.2: Add baseline project structure

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Single-page app
- Zustand store
- Save key: `omnicorp-save-v1`

### Acceptance Criteria

- `src/` contains at least:
  - `app/`
  - `components/`
  - `features/`
  - `store/`
  - `lib/`
  - `types/`
- There is a clear place for game state, UI state, and reusable utilities.
- Imports resolve cleanly without circular dependency problems.

### Implementation Details

- Added the baseline `src/` structure with dedicated `app/`, `components/`, `features/`, `store/`, `lib/`, and `types/` folders. Moved the app entry into `src/app/`, added separate Zustand setup for run and UI state, and established shared utility and type modules.

### Complete/Incomplete

- Complete

## Task 0.3: Add formatting and linting

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- TypeScript project
- Learning project for a novice

### Acceptance Criteria

- `npm run lint` works.
- `npm run typecheck` works.
- `npm run build` works.
- Basic formatting rules are enforced consistently.

### Implementation Details

- Added oxc linting and formatting, replacing eslint. updated typecheck script to give --pretty output.

### Complete/Incomplete

- Incomplete

## Task 0.4: Add app shell and placeholder layout

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Trading terminal layout with separate windows
- Main market screen
- Top news ticker
- Left navigation sidebar
- Center main view that swaps overview, portfolio, stock detail, settings, and help-style panels
- Right contextual stock list

### Acceptance Criteria

- The app renders a stable desktop shell with an obvious ticker, navigation sidebar, main view, and stock sidebar.
- Panels resize sensibly on a desktop viewport.
- Placeholder content identifies the available views and shell regions.

### Implementation Details

- Added a menu-driven shell with a top news ticker, persistent left navigation, central view switching for major screens, and a right stock sidebar. The layout now prioritizes the main panel while keeping market navigation visible.

### Complete/Incomplete

- Complete

## Phase 1: Core Types and Save System

## Task 1.1: Define core TypeScript types

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- `StockDef`
- `StockState`
- `CareerState`
- `SaveData`
- sector coverage
- prestige, subsidiaries, settings, run state

### Acceptance Criteria

- Core game types exist in `src/types/`.
- Types compile without `any`.
- All later modules can import and reuse these types.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 1.2: Define constants and enums

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Sectors
- Market regimes
- Career tracks
- Board meeting cadence
- Tick constants
- Save key

### Acceptance Criteria

- Reused gameplay constants are centralized.
- Magic numbers are removed from feature code.
- Sector IDs, regime IDs, and career IDs are type-safe.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 1.3: Build the save/load utility

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Persistence: `localStorage`
- Save key: `omnicorp-save-v1`
- Save file stores run state, market state, portfolio, career state, corporate ownership, subsidiaries, prestige, settings, meta stats
- Best-effort migration
- Only previous schema version is migratable
- New fields default to zero values

### Acceptance Criteria

- Game state can be serialized and saved to `localStorage`.
- Reloading the page restores saved data.
- Missing save data falls back to a valid new-game state.
- A save version field exists.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 1.4: Add export/import save string support

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Import/export save string
- Save import/export modal

### Acceptance Criteria

- User can export a save string.
- User can paste an exported save string back in and restore the same game state.
- Invalid import data is rejected without crashing the app.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 1.5: Add autosave

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Autosave
- Save status shown in top bar

### Acceptance Criteria

- Game autosaves on an interval.
- Top bar shows a readable last-save state.
- Refreshing the page after autosave restores recent progress.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 2: Global Store and New Game Boot

## Task 2.1: Create the Zustand store skeleton

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Zustand
- Store domains: game, market, portfolio, career, corporations, prestige, settings, save

### Acceptance Criteria

- Zustand store is initialized.
- Store is split into understandable slices or modules.
- Components can read and update store state.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 2.2: Create the new-game factory

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)
- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)

### Important Spec Content

- Starting cash: `$10,000`
- Stock count: `8`
- Deterministic market seed
- Seeded stock generation bounded by historical ranges

### Acceptance Criteria

- Starting a new game creates a complete valid save object.
- New runs begin with `$10,000` cash.
- New runs generate 8 stocks, one per sector.
- Same seed produces the same initial market state.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 2.3: Add wipe-save and new-game UI

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- New game
- Continue game
- Wipe save
- New game / settings modal

### Acceptance Criteria

- User can start a new game from the UI.
- User can wipe the current save from the UI.
- Wiping a save resets to a fresh new-game state.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 3: Stock Generator and Market Initialization

## Task 3.1: Build sector-to-stock generator inputs

### Doc Reference

- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)
- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- 8 sectors
- 10 historical reference stocks per sector
- Reference bounds: market cap, price, beta, annual volatility, sector correlation, profit/share

### Acceptance Criteria

- Each sector has a reusable set of generator bounds.
- Generator inputs are stored in data files, not hard-coded in random functions.
- Each bound set is easy to inspect and edit.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 3.2: Implement seeded stock generation

### Doc Reference

- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)
- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Seeded stock generation
- Use reference rows as bounded seeds
- One stock per sector

### Acceptance Criteria

- Generator creates one synthetic stock per sector.
- Generated values stay inside sector bounds.
- Each stock has all required fields.
- Generator is deterministic for a fixed seed.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 3.3: Implement initial fair value and market cap calculations

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)
- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)

### Important Spec Content

- Hidden fair value
- Market cap
- Shares outstanding
- Sector market cap floats with price

### Acceptance Criteria

- Each generated stock starts with a valid fair value anchor.
- Market cap matches `price * sharesOutstanding`.
- Sector totals can be derived from generated stock states.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 3.4: Add market initialization tests or debug checks

### Doc Reference

- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)

### Important Spec Content

- Historical bounds
- Seeded generation

### Acceptance Criteria

- There is a simple repeatable way to verify generated values stay in range.
- Invalid values are surfaced immediately during development.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 4: Tick Loop and Core Price Simulation

## Task 4.1: Build the simulation clock

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Tick-based simulation
- Baseline tick rate: `250ms`
- Market day length: `60` ticks
- Tick speed from settings

### Acceptance Criteria

- The game advances automatically on a tick timer.
- Tick count increments correctly.
- Time speed can be changed in settings.
- A market close event fires every 60 ticks.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 4.2: Implement market regime state

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Regimes: expansion, contraction, transition
- Market variables: regime, global volatility, wavelength, macro sentiment

### Acceptance Criteria

- Market state includes a current regime and regime-driven modifiers.
- Regime variables are accessible to stock updates.
- The state can be displayed for debugging.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 4.3: Implement sector factor state

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Sector factor
- Sector correlation to market
- Sector volatility
- Sector drift bias

### Acceptance Criteria

- Each sector has a factor state updated each tick or day.
- Stocks can read their sector factor.
- Sector state is deterministic from seed and simulation state.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 4.4: Implement stock price updates

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Hybrid `GBM + mean reversion`
- Price update formula
- Drift affected by regime, sector, beta, and modifiers

### Acceptance Criteria

- Stock prices change on every tick.
- Price updates use current volatility, shocks, and drift inputs.
- Prices never become negative or invalid.
- Same seed and same actions produce repeatable price paths.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 4.5: Track chart history

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- `priceHistory`
- 30, 15, 10, 5, 1 day chart time scales

### Acceptance Criteria

- Each stock stores enough history for all required chart time scales.
- History is pruned to a bounded size.
- History updates without leaking memory.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 5: Trading Interface and Portfolio

## Task 5.1: Render the stock list

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Left panel: stock list
- Show price and market activity

### Acceptance Criteria

- Stock list shows all 8 stocks.
- List updates live as prices change.
- User can select a stock from the list.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 5.2: Build the stock detail panel

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Center detail view
- Full chart
- Time scales: 30, 15, 10, 5, 1 day
- Company stats tab
- Ownership-based options tab

### Acceptance Criteria

- Selecting a stock opens a detail panel.
- User can switch chart time scales.
- Stats tab shows core values for the selected stock.
- Options tab placeholder exists even before corporate control is implemented.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 5.3: Implement buy and sell actions

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Market buy
- Market sell
- Buy max
- Sell max
- Share-based order size entry

### Acceptance Criteria

- User can buy shares if they have enough cash.
- User can sell owned shares.
- Buy max and sell max work correctly.
- Invalid trades are blocked.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 5.4: Implement portfolio accounting

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Realized P/L
- Unrealized P/L
- Cost basis
- Cash
- Net worth

### Acceptance Criteria

- Portfolio tracks owned shares by stock.
- Cost basis updates correctly after multiple buys.
- Realized P/L updates on sells.
- Unrealized P/L updates with price changes.
- Net worth equals cash plus market value of all holdings plus other owned value already implemented.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 5.5: Build the portfolio summary window

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Portfolio slim summary with company, ticker, day %, day $, current price

### Acceptance Criteria

- Portfolio window lists all open positions.
- Required columns display correctly.
- Values update live during the market day.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 6: Market-Close Processing, Jobs, and College

## Task 6.1: Implement market-close event pipeline

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Market close every 60 ticks
- Processing order:
  - wage income
  - finance commissions
  - subsidiary income
  - subsidiary losses/costs
  - tuition
  - college active check
  - college XP
  - job XP
  - promotions
  - queued job change

### Acceptance Criteria

- Market-close logic runs exactly once per 60 ticks.
- Steps execute in the documented order.
- Debug logging or test output can prove the order.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.2: Implement career state and current job display

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Career tracks
- Current job shown in top bar
- `CareerState`

### Acceptance Criteria

- Current career track and title are stored in game state.
- Top bar shows current job.
- Job state persists through save/load.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.3: Implement wage payouts

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Minimum daily wage baseline: `$60/day`
- Management, tech, and finance wage tables
- Internships can pay `$0/day`

### Acceptance Criteria

- Wage payout at market close matches the active title.
- `$0/day` internships pay zero.
- Cash increases correctly at close.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.4: Implement finance commissions

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Finance modifiers apply to realized P/L only
- Title-based modifier range `+/-2%` to `+/-10%`
- Finance commissions processed after wages

### Acceptance Criteria

- Realized profit and realized loss are modified by the active finance title rate.
- Non-finance jobs do not receive finance commission effects.
- Commission logic does not affect unrealized P/L.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.5: Implement job XP and promotions

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- 1 XP per market close
- XP retained per track
- Each promotion requires 10 XP in prior title
- No demotions

### Acceptance Criteria

- Active track gains 1 XP at market close.
- Promotions occur only if XP and college requirements are both met.
- Promotions never reduce title level.
- XP is preserved when switching tracks.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.6: Implement queued job changes

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Jobs can be queued at any time
- Queued job change applies at next market close
- Prevent finance-scumming

### Acceptance Criteria

- User can select a future job during the day.
- Current job remains active until market close.
- Queued job becomes active after close if valid.
- Save/load preserves queued job state.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 6.7: Implement college enrollment, tuition, and XP

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- College is active or inactive
- 1 college XP per market close while active
- 5 XP per level
- Tuition formula: `25 * nextCollegeLevel`
- Auto-disable if tuition cannot be paid
- No XP loss
- Tuition check occurs before college XP award

### Acceptance Criteria

- User can toggle college on and off.
- Tuition is charged only when college is active.
- College auto-disables if payment fails.
- College XP is only awarded when tuition succeeds.
- College level increases after every 5 college XP.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 7: News and Event Engine

## Task 7.1: Encode the event catalog as data

### Doc Reference

- [event-catalog.md](/home/phantompc/dev/omnicorp/docs/event-catalog.md)

### Important Spec Content

- Event IDs
- Positive and negative variants
- Tell classes
- Lead windows
- Drift/volatility/fair-value effects

### Acceptance Criteria

- Event catalog exists as structured data in code.
- Each event type has both positive and negative variants.
- Data includes lead time, affected sectors, and stat effects.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 7.2: Build seeded event scheduling

### Doc Reference

- [event-catalog.md](/home/phantompc/dev/omnicorp/docs/event-catalog.md)
- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- News generated from actual simulation state
- Multiple concurrent events can occur
- Overlap creates noisy mixed signals

### Acceptance Criteria

- Events are scheduled from the run seed.
- Multiple events can overlap on the same day.
- Event scheduling is deterministic for a fixed seed.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 7.3: Apply event effects to market simulation

### Doc Reference

- [event-catalog.md](/home/phantompc/dev/omnicorp/docs/event-catalog.md)
- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Effects modify drift, volatility, and fair value
- Correlation is unchanged

### Acceptance Criteria

- Active events influence the targeted sectors or issuers.
- Effects alter drift, volatility, and fair value only.
- Correlation values remain unchanged by events.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 7.4: Render the news feed

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)
- [event-catalog.md](/home/phantompc/dev/omnicorp/docs/event-catalog.md)

### Important Spec Content

- Vertical news headline feed
- Minimal placeholder writing
- Different tell horizons

### Acceptance Criteria

- News feed shows current headlines in a vertical list.
- Headlines appear before or near related market effects according to their tell class.
- Feed updates over time without duplicates piling up forever.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 7.5: Add movers window

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Side window for gainers and losers

### Acceptance Criteria

- App shows top gainers and top losers by daily performance.
- Window updates as prices move.
- Sorting is correct.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 8: Corporate Ownership and Sector Control

## Task 8.1: Compute ownership thresholds per company

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- 5%, 15%, 33%, 51%, 100% thresholds

### Acceptance Criteria

- Control level updates as owned shares change.
- Threshold transitions are correct and reversible.
- UI can show current control level.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 8.2: Show ownership data in company detail

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Company detail shows ownership-based information
- Company detail shows sector-control contribution

### Acceptance Criteria

- Company detail shows owned shares and owned percentage.
- Company detail shows current control level.
- Company detail shows sector-control contribution placeholder or value.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 8.3: Implement floating sector market cap

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Sector market cap floats with price
- Recalculated each market day
- Partial subsidiaries use public market price

### Acceptance Criteria

- Sector totals update after market-close recalculation.
- Publicly traded company values reflect current market price.
- Sector totals are visible in debug or UI.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 8.4: Implement sector-control calculation

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Count public shares owned by player
- Count majority-controlled subsidiary value
- Evaluate control as a percentage of total sector market cap

### Acceptance Criteria

- Sector control percentage is computed for every sector.
- Percentages update when prices or ownership change.
- Results are bounded between 0 and 100%.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 8.5: Build the sector-control dashboard

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Dedicated sector-control dashboard
- Company detail also shows contribution

### Acceptance Criteria

- Dashboard lists all sectors and current control percentages.
- User can quickly see which sectors are closest to Omnicorp control.
- Data matches the underlying sector-control calculations.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 9: Subsidiaries and Corporate Actions

## Task 9.1: Implement majority-controlled subsidiaries

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Subsidiaries remain listed and tradable
- Majority-controlled subsidiaries contribute to sector-control calculations
- Subsidiary income formula: `profitPerShare * sharesOwned`

### Acceptance Criteria

- A majority-controlled company can be marked as a subsidiary.
- Subsidiary status persists in saves.
- Subsidiary state is visible in company detail or portfolio.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 9.2: Implement subsidiary passive income

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Subsidiary income formula
- Payout occurs during market-close processing

### Acceptance Criteria

- Majority-controlled subsidiaries pay daily passive cashflow.
- Payout amount follows the documented formula.
- Payout appears in cash and event log or transaction history.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 9.3: Implement queued board-meeting changes

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Corporate strategy changes are queued
- Board meetings every 5 in-game days
- Each company resolves its own queued corporate changes

### Acceptance Criteria

- Profile and extraction changes can be queued during the week.
- Queued changes do not apply immediately.
- Changes apply at the next board meeting only.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 9.4: Implement restructure profiles

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Profiles: growth, balanced, blue-chip
- Growth multipliers: 1.2x FVG, VM, Vol; 0.7x extraction efficiency
- Balanced multipliers: 1.0x FVG, VM, Vol; 0.9x extraction efficiency
- Blue-chip multipliers: 0.8x FVG, VM, Vol; 1.0x extraction efficiency

### Acceptance Criteria

- Each subsidiary or controllable company stores its current profile.
- Profile changes affect the documented stats.
- The current profile is visible in company detail.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 9.5: Implement extraction slider

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Extraction range: 0% to 100%
- Extraction payout formula:
  - `extractionRate * profitPerShare * sharesOwned * extractionEfficiency`
- Under 20% extraction:
  - +5% fair value growth
  - +5% valuation multiplier
- Over 80% extraction:
  - -5% fair value growth
  - -5% valuation multiplier

### Acceptance Criteria

- Extraction slider can be set and queued.
- Applied extraction changes affect payout and value modifiers.
- Edge thresholds below 20% and above 80% apply correctly.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 9.6: Implement extract cash and merge actions

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Corporate actions:
  - Restructure
  - Extract cash
  - Merge into holding company

### Acceptance Criteria

- Controlled companies expose the correct actions in the UI.
- Actions update underlying company state.
- Actions persist through save/load.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 10: Prestige and Long-Arc Progression

## Task 10.1: Implement billionaire prestige eligibility

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Standard run ends at billionaire status and prestige
- Prestige target: about 30 minutes

### Acceptance Criteria

- Game detects when net worth reaches or exceeds 1B.
- Prestige action becomes available at that point.
- Prestige is not available before the threshold.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 10.2: Implement SI payout calculation

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- `Systemic Importance`
- Baseline: 5 SI at 1B before control bonuses
- Formula:
  - `wealthRatio = max(1, netWorth / 1_000_000_000)`
  - `n = 1 + log10(wealthRatio)`
  - `controlBonus = majorityControlledCompanies`
  - `si = floor(5 * n * log2(n + 1)) + controlBonus`

### Acceptance Criteria

- SI awarded on prestige matches the formula.
- Formula can be verified with test values.
- SI total persists across runs.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 10.3: Implement prestige reset logic

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Standard run resets on prestige
- Prestige currency and upgrades carry forward

### Acceptance Criteria

- Prestige resets run-specific progress.
- Prestige currency and purchased upgrades remain.
- New run begins in a valid state after prestige.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 10.4: Build the prestige tree data model

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Prestige branches:
  - Information
  - Execution
  - Control
  - Market Structure
- Cost curve:
  - 5, 10, 20, 40, 80

### Acceptance Criteria

- Prestige upgrades are defined in structured data.
- Each upgrade stores current level and next cost.
- Tree is easy to render in the UI.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 10.5: Implement prestige upgrade purchasing

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- SI cost curve
- Upgrade branches

### Acceptance Criteria

- User can spend SI on upgrade levels.
- Costs increase correctly by level.
- Purchases persist across reloads and future runs.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 10.6: Apply prestige effects to new runs

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Prestige changes market rules and long-run consistency

### Acceptance Criteria

- Purchased prestige upgrades affect newly started runs.
- Effects are visible in debug state or UI.
- Effects do not require a full page refresh to apply after prestige.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 11: Omnicorp Endgame

## Task 11.1: Detect final Omnicorp eligibility

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Final victory requirement:
  - 51% control of total market value in every sector
- Final victory action:
  - Form Omnicorp

### Acceptance Criteria

- Game detects when all sector thresholds are met.
- Form Omnicorp action becomes available only when legal.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 11.2: Implement Form Omnicorp action and victory state

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Omnicorp victory screen

### Acceptance Criteria

- Triggering Form Omnicorp moves the game into a victory state.
- Victory screen renders correctly.
- Victory state persists in save/load.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 12: UI Completion and Quality Pass

## Task 12.1: Build settings modal

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- New game / settings modal
- Tick speed controlled in settings
- Columns/windows show or hide information

### Acceptance Criteria

- Settings modal opens and closes.
- Tick speed can be changed from settings.
- At least basic panel visibility options exist.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 12.2: Add event log / transaction log

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Bottom panel includes event log
- Wage, tuition, subsidiary cashflow, and corporate actions should be understandable

### Acceptance Criteria

- Important game actions create log entries.
- Log is readable and scrollable.
- Latest entries appear first or clearly in chronological order.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 12.3: Add pause and resume controls

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Game can pause at any time

### Acceptance Criteria

- User can pause the tick loop.
- No market time advances while paused.
- Resume continues correctly without duplicating ticks.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 12.4: Final desktop usability pass

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Terminal-style layout
- Main center window for detailed view
- Side windows for news, movers, portfolio

### Acceptance Criteria

- Main layout is usable on a typical laptop viewport.
- Text is readable.
- Important controls are reachable without layout breakage.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Phase 13: Verification and MVP Exit

## Task 13.1: Add smoke tests or manual test checklist

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)
- [stock-reference.md](/home/phantompc/dev/omnicorp/docs/stock-reference.md)
- [event-catalog.md](/home/phantompc/dev/omnicorp/docs/event-catalog.md)

### Important Spec Content

- Entire MVP flow from new game to prestige to Omnicorp

### Acceptance Criteria

- There is a written checklist that covers:
  - new game
  - save/load
  - trading
  - jobs
  - college
  - market close
  - news events
  - ownership thresholds
  - subsidiaries
  - board meetings
  - prestige
  - Omnicorp victory

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 13.2: Run a full gameplay pass to first prestige

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Prestige target: about 30 minutes

### Acceptance Criteria

- A complete run to first prestige is playable.
- No blocking bugs appear in the run.
- The run can be completed without direct state editing.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 13.3: Run a full gameplay pass to Omnicorp

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- Final campaign target: Omnicorp after 5 to 10 resets for expert play

### Acceptance Criteria

- Omnicorp victory can be reached in a long-form test.
- Victory screen works.
- Save/load remains stable across multiple prestiges.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Task 13.4: Tag the MVP as complete

### Doc Reference

- [mvp-design.md](/home/phantompc/dev/omnicorp/docs/mvp-design.md)

### Important Spec Content

- MVP scope

### Acceptance Criteria

- Every task in this roadmap is either completed or intentionally deferred.
- Deferred work is outside the current MVP scope.
- The app supports the full agreed MVP loop.

### Implementation Details

-

### Complete/Incomplete

- Incomplete

## Coverage Checklist

This roadmap covers:

- project setup
- save system
- app shell
- deterministic stock generation
- tick loop
- market simulation
- chart history
- trading
- portfolio accounting
- jobs
- college
- market-close processing
- queued job switching
- event engine
- news feed
- movers window
- ownership thresholds
- sector control
- subsidiaries
- board meetings
- restructure profiles
- extraction slider
- prestige unlock and payout
- prestige tree
- prestige resets
- Omnicorp final victory
- settings
- logs
- verification
