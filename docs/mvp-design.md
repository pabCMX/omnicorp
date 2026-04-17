# Omnicorp MVP Design Doc

## Overview

- Title: `Omnicorp`
- Genre: client-side React stock trading, corporate raiding, incremental strategy game
- Theme: serious market simulation with satirical onion-style corporate presentation
- Platform: browser
- Persistence: `localStorage`
- Save model: local save, autosave, import/export

## Player Arc

1. Start as a small retail trader.
2. Earn wage income and improve `college` level.
3. Trade stocks across major sectors.
4. Reach activist and majority ownership thresholds.
5. Build subsidiaries and sector control.
6. Reach billionaire status and prestige.
7. Repeat until all sectors are controlled and `Omnicorp` is formed.

## Campaign Structure

- A standard run ends when the player reaches billionaire status and prestiges.
- Full campaign victory is achieved by triggering `Form Omnicorp`.
- Expert full-campaign completion target: `5` to `10` resets.
- Prestige target: about `30` minutes per run.
- First meaningful activist threshold target: about `15` minutes into a first run.

## Platform and Stack

- Frontend: `React`
- Language: `TypeScript`
- Build tool: `Vite`
- State management: `Zustand`
- App model: single-page web app
- Save key: `omnicorp-save-v1`
- Save version: `1`

## MVP Scope

- New game
- Continue game
- Wipe save
- Autosave
- Import/export save string
- Market simulation for `8` fictional stocks
- Manual stock trading
- Career and education system
- Satirical news ticker tied to simulation state
- Portfolio and net-worth tracking
- Corporate control thresholds
- Subsidiaries
- Prestige system
- Omnicorp endgame

## Post-MVP Scope

- Options
- Short selling
- Leverage
- Margin
- Dividends
- Bonds
- Forex
- Crypto
- Multiplayer
- Cloud saves
- Procedural narrative systems beyond the core ticker

## Market Simulation

- Simulation model: hybrid `GBM + mean reversion`
- Market state is deterministic from seed
- Seeded stock generation is bounded by real-world company means and deviations
- Simulation is tick-based
- Baseline tick rate: `250ms` at `1x`
- Market day length: `60` ticks
- Tick speed is controlled in settings
- Tick speed is freely editable by the player
- Initial speed target: `8x` to `16x`

### Price Update

`price_t+1 = price_t * exp((drift - 0.5 * vol^2) * dt + vol * sqrt(dt) * shock + modifiers)`

### Simulation Layers

- Market layer
- Sector layer
- Stock layer

### Market Layer Variables

- Regime
- Global volatility
- Wavelength
- Macro sentiment

### Sector Layer Variables

- Sector factor
- Sector correlation to market
- Sector volatility
- Sector drift bias

### Stock Layer Variables

- Beta
- Idiosyncratic volatility
- Hidden fair value
- Momentum memory
- Corporate health score

### Market Regimes

- `fullExpansion`
- `highTransition`
- `steadyState`
- `lowTransition`
- `fullContraction`

## News System

- News is generated from actual simulation state.
- Multiple concurrent events can occur.
- Noise comes from overlapping events and ambiguous signals rather than fabricated false information.
- MVP uses minimal placeholder writing.
- News categories:
  - macro sentiment
  - sector warnings and tailwinds
  - executive scandal and investigation
  - analyst and bureaucratic warnings
  - consumer, business, and policy demand shifts
- Cassandra-style predictions: `5` to `15` days advance, cryptic and narrow
- Analyst and government news: `3` to `5` days advance, moderately ambiguous
- Macro and sector news: `0` to `1` day advance, can lag market movement
- Event effects target drift, volatility, and fair value
- Event effects do not modify correlation

## Stock Universe

- Stock count: `8`
- Sector coverage uses GICS-style sector IDs:
  - `XLK` Information Technology
  - `XLF` Financials
  - `XLV` Health Care
  - `XLY` Consumer Discretionary
  - `XLC` Communication Services
  - `XLI` Industrials
  - `XLP` Consumer Staples
  - `XLE` Energy
  - `XLU` Utilities
  - `XLB` Materials
  - `XLRE` Real Estate

### Stock Data

Each runtime stock stores immutable seed values and live mutable values in one object.
Seed values include:

- `stockId`
- `ticker`
- `name`
- `sector`
- `initialPrice`
- `initialSharesOutstanding`
- `baseRegimeDrift`
- `baseVolatility`
- `baseBeta`
- `initialStrategyProfile`
- `sectorCorrelation`
- `fairValueAnchor`
- `raidDifficulty`
- `boardMeetingDay`

Live values include:

- `currentPrice`
- `currentSharesOutstanding`
- `currentRegimeDrift`
- `currentVolatility`
- `currentBeta`
- `ownedShares`
- `controlLevel`
- `extractionRate`
- `currentStrategyProfile`
- `lastShock`
- `priceHistory`

## Trading Systems

- Market buy
- Market sell
- Buy max
- Sell max
- Share-based order size entry
- Realized P/L
- Unrealized P/L
- Cost basis
- Cash
- Net worth

## Career and Education

- Education stat name: `college`
- Education is time-based and costs cash per day while enrolled.
- Education gates job access.
- Education only gates jobs in MVP.
- Complex instruments are not unlocked in MVP.

### Career Tracks

- Service
- Tech
- Finance

### Service Ladder

- Burger flipper
- Supervisor
- Store manager
- District manager
- Regional executive
- VP
- CEO

### Tech Ladder

- Unpaid intern
- Junior IT/dev
- Engineer
- Senior engineer
- Staff/principal
- VP engineering
- CEO

### Finance Ladder

- Unpaid intern
- Analyst
- Associate
- Manager
- Director
- VP
- CFO
- CEO

### College Gates

- `0`: burger flipper start job
- `15`: service promotions
- `25`: tech track entry and non-finance C-suite class roles
- `40`: finance track entry
- `50`: high-tier dev/IT roles

### College Progression

- `college` level range in MVP: `0` to `50`
- College is either active or inactive.
- Active college gains `1` college XP per market close.
- Each college level requires `5` college XP.
- College tuition formula per market close: `25 * nextCollegeLevel`
- Total tuition to reach level `15`: `$15,000`
- Total tuition to reach level `25`: `$40,625`
- Total tuition to reach level `40`: `$102,500`
- Total tuition to reach level `50`: `$159,375`

### Compensation

- Minimum wage baseline for MVP: `$7.50/hour`
- Standard work day for MVP wages: `8` hours
- Minimum daily wage baseline: `$60/day`
- Tech internship pay: `$0/day`
- Finance internship pay: `$0/day`
- All non-intern job wages are multipliers on the minimum daily wage baseline.
- Tech track applies a base `x10` multiplier on top of career multipliers.
- Finance track applies a base `x2` multiplier on top of career multipliers.
- Salary jobs pay recurring wages.
- Finance jobs use lower salary than equivalent peers and add realized trade modifiers.
- Finance trade modifiers scale by title.
- Finance modifier range: roughly `+/-2%` to `+/-10%`
- Finance modifiers apply to realized P/L only.

### Job XP

- Each career track stores its own XP total.
- XP is retained when switching tracks.
- Jobs can be queued for change at any time.
- Job changes apply at the next market close.
- Wage payout occurs at market close.
- Wage payout uses the active job at payout time.
- The active job grants `1` XP per market close.
- Promotion requires both the title XP threshold and the title college requirement.
- Each title promotion requires `10` XP in the prior title.
- There are no demotions.

### Market Close Processing

- Market close occurs every `60` ticks.
- Job validation occurs at market close.
- College validation occurs at market close.
- Wage income is paid first.
- Finance commissions are applied after wage income.
- Subsidiary income is paid after finance commissions.
- Subsidiary losses or recurring subsidiary costs are applied after subsidiary income.
- Tuition is deducted after subsidiary costs.
- College active state is checked after tuition.
- College XP is awarded only if tuition is successfully paid and college remains active.
- Job XP is awarded after tuition processing.
- Promotions are processed after XP awards.
- Queued job changes are applied last.

### Service Compensation Table

- Burger flipper: college `0`, XP `0`, multiplier `1.0`, wage `$60/day`
- Supervisor: college `15`, XP `10`, multiplier `1.5`, wage `$90/day`
- Store manager: college `15`, XP `20`, multiplier `2.2`, wage `$132/day`
- District manager: college `15`, XP `30`, multiplier `3.3`, wage `$198/day`
- Regional executive: college `15`, XP `40`, multiplier `5.0`, wage `$300/day`
- VP: college `25`, XP `50`, multiplier `7.5`, wage `$450/day`
- CEO: college `25`, XP `60`, multiplier `12.0`, wage `$720/day`

### Tech Compensation Table

- Unpaid intern: college `25`, XP `0`, multiplier `0`, wage `$0/day`
- Junior IT/dev: college `25`, XP `10`, multiplier `8.0`, wage `$480/day`
- Engineer: college `25`, XP `20`, multiplier `12.0`, wage `$720/day`
- Senior engineer: college `25`, XP `30`, multiplier `18.0`, wage `$1,080/day`
- Staff/principal: college `50`, XP `40`, multiplier `27.0`, wage `$1,620/day`
- VP engineering: college `50`, XP `50`, multiplier `40.0`, wage `$2,400/day`
- CEO: college `50`, XP `60`, multiplier `60.0`, wage `$3,600/day`

### Finance Compensation Table

- Unpaid intern: college `40`, XP `0`, multiplier `0`, wage `$0/day`, trade modifier `0%`
- Analyst: college `40`, XP `10`, multiplier `2.0`, wage `$120/day`, trade modifier `+/-2%`
- Associate: college `40`, XP `20`, multiplier `2.8`, wage `$168/day`, trade modifier `+/-3%`
- Manager: college `40`, XP `30`, multiplier `4.0`, wage `$240/day`, trade modifier `+/-4%`
- Director: college `40`, XP `40`, multiplier `5.6`, wage `$336/day`, trade modifier `+/-6%`
- VP: college `40`, XP `50`, multiplier `8.0`, wage `$480/day`, trade modifier `+/-10%`
- CFO: college `40`, XP `60`, multiplier `11.0`, wage `$660/day`, trade modifier `+/-12%`
- CEO: college `40`, XP `70`, multiplier `16.0`, wage `$960/day`, trade modifier `+/-15%`

## Recovery and Passive Income

- Runs cannot hard-lock from bad trades.
- Wage income provides a recovery floor.
- If margin is added later, debt liquidates back to zero.
- Majority-controlled subsidiaries generate passive cashflow.
- Subsidiary income formula: `profitPerShare * sharesOwned`
- Subsidiary income target: about `20%` of strong active income

## Corporate Control

### Ownership Thresholds

- `5%`: insider metrics access
- `15%`: activist influence
- `33%`: blocking / soft control
- `51%`: majority control
- `100%` or forced-merger condition: full acquisition
- `majority` and `full` automatically imply subsidiary behavior for gameplay systems
- No separate subsidiary flag is required in MVP; subsidiary behavior is derived from stock control state

### Corporate Actions

- Restructure
- Extract cash
- Merge into holding company
- Merging into a holding company permanently removes the company from the public market
- Corporate strategy changes are queued.
- Corporate strategy changes are applied at board meetings.
- Board meetings occur every `5` in-game days.
- Each company has a fixed `boardMeetingDay` from `0` to `4` within that cycle.

### Restructure System

- Restructure supports multiple corporate profiles.
- Initial restructure profiles:
  - growth stock
  - balanced
  - blue-chip dividend stock
- Restructure changes underlying value stats and the fair value anchor.
- Subsidiaries include an extraction slider from full reinvestment to full extraction.
- Extraction slider range: `0%` to `100%`
- Extraction efficiency is derived from the active strategy profile and the current extraction rate rather than stored separately in save data.

### Restructure Profile Multipliers

- Growth:
  - fair value growth multiplier: `1.2x`
  - valuation multiplier: `1.2x`
  - volatility multiplier: `1.2x`
  - extraction efficiency multiplier: `0.7x`
- Balanced:
  - fair value growth multiplier: `1.0x`
  - valuation multiplier: `1.0x`
  - volatility multiplier: `1.0x`
  - extraction efficiency multiplier: `0.9x`
- Blue-chip:
  - fair value growth multiplier: `0.8x`
  - valuation multiplier: `0.8x`
  - volatility multiplier: `0.8x`
  - extraction efficiency multiplier: `1.0x`

### Extraction Effects

- Extraction payout formula:
  - `extractionRate * profitPerShare * sharesOwned * extractionEfficiency`
- Extraction rates under `20%`:
  - `+5%` fair value growth bonus
  - `+5%` valuation multiplier bonus
- Extraction rates over `80%`:
  - `-5%` fair value growth penalty
  - `-5%` valuation multiplier penalty

### Board Meeting Rules

- Profile changes are queued until the next board meeting.
- Extraction slider changes are queued until the next board meeting.
- Each company resolves its own queued corporate changes at its board meeting.

### Subsidiaries

- Subsidiaries remain listed and tradable.
- Majority-controlled subsidiaries contribute market value to sector-control calculations.

## Sector Control and Victory

- Final victory action: `Form Omnicorp`
- Final victory requirement: control `51%` of total market value in every sector

### Sector Control Calculation

- Count publicly held shares owned by the player.
- Count market value of majority-controlled subsidiaries.
- Evaluate control as a percentage of total simulated sector market cap.
- Sector market cap floats with price.
- Sector market cap is recalculated each market day.
- Partial subsidiaries use public market price for valuation.

## Prestige

- Prestige currency: `Systemic Importance` (`SI`)
- Prestige unlock: billionaire status
- Prestige payout baseline: `5` SI at `1B` net worth before control bonuses
- Prestige growth: `n log n`
- Prestige also scales with control progress

### SI Payout Formula

```ts
const wealthRatio = Math.max(1, netWorth / 1_000_000_000);
const n = 1 + Math.log10(wealthRatio);
const controlBonus = majorityControlledCompanies;
const si = Math.floor(5 * n * Math.log2(n + 1)) + controlBonus;
```

### Prestige Tree

- Information
- Execution
- Control
- Market Structure

### Prestige Upgrade Cost Curve

- Level 1: `5`
- Level 2: `10`
- Level 3: `20`
- Level 4: `40`
- Level 5: `80`

## UI

### Main Layout

- Trading terminal layout with separate windows
- Top news ticker that stays visible above the main shell
- Left navigation sidebar for switching major views
- Large center window reserved for dashboard, portfolio, stock detail, settings, help, and similar high-focus views
- Right stock sidebar for browsing and selecting companies while staying in the current main view

### Default Windows

- Top news ticker
- Left navigation menu
- Center overview dashboard
- Right stock list with search and company selection

### Stock Detail View

- Full chart
- Selectable time scales:
  - `30` day
  - `15` day
  - `10` day
  - `5` day
  - `1` day
- Company stats tab
- Ownership-based corporate options tab

### Required Views

- Main market screen
- Portfolio screen
- Stock detail screen
- Settings screen
- Help / tutorial / credits style informational screens
- Prestige screen
- Omnicorp victory screen
- Save import/export modal
- New game / settings modal

### Sector Control UI

- Company detail shows company sector-control contribution.
- Dashboard shows all sector-control percentages.

## Save Data

Save file stores:

- version
- timestamps
- seed
- run state
- market state
- career state
- prestige state
- settings
- meta stats
- portfolio state is derived from stocks where `ownedShares > 0`
- corporate ownership and subsidiary behavior are derived from each stock's `controlLevel`
- save data is stored under `omnicorp-save-v1`

### Save Migration

- Save migration is best-effort.
- Only the immediately previous schema version can be migrated.
- Saves older than one schema version are invalid.
- New fields default to zero values on migration.

## Data Shapes

```ts
type StrategyProfile = "growth" | "balanced" | "blue-chip";
```

```ts
type Stock = {
  stockId: string;
  ticker: string;
  name: string;
  sector: SectorId;
  initialPrice: number;
  currentPrice: number;
  initialSharesOutstanding: number;
  currentSharesOutstanding: number;
  baseRegimeDrift: number;
  currentRegimeDrift: number;
  baseVolatility: number;
  currentVolatility: number;
  baseBeta: number;
  currentBeta: number;
  lastShock: number;
  initialStrategyProfile: StrategyProfile;
  currentStrategyProfile: StrategyProfile;
  sectorCorrelation: number;
  fairValueAnchor: number;
  raidDifficulty: number;
  boardMeetingDay: number;
  ownedShares: number;
  controlLevel: "none" | "watch" | "activist" | "blocking" | "majority" | "full";
  extractionRate: number;
  priceHistory: number[];
};
```

```ts
type MarketState = {
  stocks: Stock[];
};
```

```ts
type CareerState = {
  careerTrack: "service" | "tech" | "finance";
  titleId: string;
  queuedCareerTrack: "service" | "tech" | "finance" | null;
  queuedTitleId: string | null;
  collegeLevel: number;
  collegeXp: number;
  collegeActive: boolean;
  xpByTrack: Record<"service" | "tech" | "finance", number>;
  wagePerDay: number;
  financeCommissionRate: number;
};
```

```ts
type SaveData = {
  version: number;
  createdAt: number;
  updatedAt: number;
  seed: number;
  run: RunState;
  market: MarketState;
  career: CareerState;
  prestige: PrestigeState;
  settings: SettingsState;
  stats: MetaStats;
};
```

## Agreed Numeric Targets

- Starting cash: `$10,000`
- Minimum wage baseline: `$7.50/hour`
- Minimum daily wage baseline: `$60/day`
- Tech internship pay: `$0/day`
- Finance internship pay: `$0/day`
- Stock count: `8`
- Initial stock prices: `$20` to `$180`
- Base annualized volatility analogue: `15%` to `55%`
- Macro cycle length: `6` to `12` in-game minutes
- Majority control threshold: `51%`
- First activist threshold target: `~15` minutes
- Prestige target: billionaire status at `~30` minutes
- Prestige payout baseline: `5 SI` at `1B` net worth before control bonuses
- Expert campaign target: `~5` to `10` resets
- Tick speed is hard-set by player settings and freely editable
- College XP per level: `5`
