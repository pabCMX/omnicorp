# Omnicorp Event Catalog

Static event catalog for market simulation. Events can overlap. Overlap is the main source of noisy or mixed signals. Event effects modify drift, volatility, and fair value. Event effects do not modify correlation.

## Tell Classes

- `Cassandra`: `5` to `15` day lead, cryptic and narrow
- `Analyst/Government`: `3` to `5` day lead, moderately ambiguous
- `Macro/Sector`: `0` to `1` day lead, broad and current, can lag price action

## Effect Fields

- Drift: percentage shift applied to short-run drift bias
- Volatility: percentage shift applied to current volatility
- Fair Value: percentage shift applied to the hidden fair value anchor

## Event Table

| ID | Event Type | Variant | Tell Class | Lead | Primary Sectors | Drift | Volatility | Fair Value | Example Headline |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MON-01 | Monetary policy | Positive rate cut / liquidity injection | Analyst/Government | 3-5 days | TECH, CONS, ENER/UTIL, FINC | +10% to +30% | +5% to +15% | +2% to +6% | Central bank signals emergency liquidity path |
| MON-02 | Monetary policy | Negative rate hike / liquidity withdrawal | Analyst/Government | 3-5 days | TECH, CONS, FINC, MFGX | -10% to -35% | +10% to +25% | -2% to -8% | Inflation fight escalates after policy briefing leak |
| FIS-01 | Fiscal / industrial policy | Positive subsidy, tax credit, or procurement wave | Analyst/Government | 3-5 days | MFGX, TECH, LOGI, ENER/UTIL | +8% to +30% | +5% to +15% | +3% to +10% | Congress warms to domestic fabrication credit package |
| FIS-02 | Fiscal / industrial policy | Negative tax, tariff, or subsidy rollback | Analyst/Government | 3-5 days | MFGX, CONS, AGRI, ENER/UTIL | -8% to -30% | +10% to +20% | -3% to -10% | Windfall levy draft gains committee traction |
| COM-01 | Commodity input shock | Positive input price relief | Macro/Sector | 0-1 day | AGRI, CONS, LOGI, MFGX | +8% to +25% | +5% to +10% | +2% to +6% | Fuel and fertilizer contracts crack on oversupply chatter |
| COM-02 | Commodity input shock | Negative input squeeze | Macro/Sector | 0-1 day | AGRI, CONS, LOGI, MFGX | -10% to -30% | +10% to +25% | -3% to -9% | Feed, fuel, and freight costs spike after disruption reports |
| DEM-01 | Consumer demand shock | Positive demand boom / consumption craze | Macro/Sector | 0-1 day | CONS, LOGI, TECH, AGRI | +8% to +25% | +8% to +18% | +2% to +7% | Domestic frenzy for imported glowfruit spreads overnight |
| DEM-02 | Consumer demand shock | Negative spending slump / boycott | Macro/Sector | 0-1 day | CONS, LOGI, AGRI | -8% to -25% | +10% to +20% | -2% to -7% | Discretionary spending chill hits weekend footfall trackers |
| ERN-01 | Earnings | Positive beat | Macro/Sector | 0-1 day | Single issuer, sector sympathy | +12% to +35% | +15% to +30% | +4% to +12% | Quarterly profit tops whispers as margins widen |
| ERN-02 | Earnings | Negative miss | Macro/Sector | 0-1 day | Single issuer, sector sympathy | -12% to -35% | +20% to +35% | -4% to -12% | Earnings miss exposes inventory and cost pressure |
| GUI-01 | Guidance | Positive raise | Analyst/Government | 3-5 days | Single issuer, sector sympathy | +10% to +30% | +10% to +20% | +4% to +10% | Analysts warm to revised shipment outlook |
| GUI-02 | Guidance | Negative cut | Analyst/Government | 3-5 days | Single issuer, sector sympathy | -10% to -30% | +15% to +25% | -4% to -10% | Management quietly trims full-year targets |
| PRD-01 | Product cycle | Positive launch / adoption wave | Cassandra | 5-15 days | TECH, CONS, MFGX | +10% to +30% | +10% to +25% | +3% to +10% | Rocket mail is the future, says Melon Tusk |
| PRD-02 | Product cycle | Negative recall / launch delay | Analyst/Government | 3-5 days | TECH, CONS, MFGX | -10% to -28% | +15% to +30% | -3% to -10% | Flagship rollout slips as safety review expands |
| REG-01 | Regulation / permits | Positive approval / deregulation | Analyst/Government | 3-5 days | ENER/UTIL, MFGX, LOGI | +8% to +28% | +5% to +15% | +3% to +9% | Permit queue clears for strategic corridor buildout |
| REG-02 | Regulation / permits | Negative block / compliance crackdown | Analyst/Government | 3-5 days | ENER/UTIL, MFGX, LOGI, FINC | -8% to -28% | +10% to +25% | -3% to -9% | Agency opens broad compliance sweep into permit shortcuts |
| CLN-01 | Clinical / FDA | Positive trial success / approval | Cassandra | 5-15 days | MEDI | +15% to +40% | +20% to +35% | +5% to +15% | Quiet specialists whisper the endpoint data may have hit |
| CLN-02 | Clinical / FDA | Negative trial failure / complete response | Cassandra | 5-15 days | MEDI | -15% to -40% | +25% to +40% | -5% to -15% | Channel checks suggest the panel briefing is going badly |
| LAB-01 | Labor relations | Positive settlement / productivity deal | Analyst/Government | 3-5 days | LOGI, MFGX, CONS, ENER/UTIL | +6% to +20% | +5% to +12% | +2% to +6% | Tentative labor pact points to smoother holiday throughput |
| LAB-02 | Labor relations | Negative strike / lockout | Analyst/Government | 3-5 days | LOGI, MFGX, CONS, ENER/UTIL | -8% to -25% | +12% to +25% | -2% to -8% | Walkout threat widens across key nodes and plants |
| SUP-01 | Supply chain | Positive congestion relief / routing recovery | Macro/Sector | 0-1 day | LOGI, CONS, MFGX, AGRI | +6% to +18% | -5% to +8% | +2% to +5% | Port queues unwind as carriers reopen delayed lanes |
| SUP-02 | Supply chain | Negative closure / shortage / transit shock | Macro/Sector | 0-1 day | LOGI, CONS, MFGX, AGRI | -8% to -22% | +10% to +25% | -2% to -6% | Chokepoint closure snarls shipping and warehouse planning |
| LIT-01 | Litigation | Positive settlement / dismissal | Analyst/Government | 3-5 days | Single issuer, MEDI, TECH, FINC | +6% to +18% | +8% to +15% | +2% to +6% | Court narrows exposure in long-running liability fight |
| LIT-02 | Litigation | Negative verdict / probe expansion | Analyst/Government | 3-5 days | Single issuer, MEDI, TECH, FINC | -8% to -22% | +12% to +25% | -2% to -8% | Investigators widen the docket after fresh filings emerge |
| EXE-01 | Executive / insider | Positive operator hire / insider accumulation | Cassandra | 5-15 days | Single issuer, TECH, FINC, MFGX | +6% to +18% | +5% to +12% | +2% to +6% | Veteran turnaround chief quietly accumulates stock |
| EXE-02 | Executive / insider | Negative scandal / fraud / abrupt exit | Cassandra | 5-15 days | Single issuer, FINC, TECH, CONS | -10% to -28% | +15% to +30% | -3% to -10% | Board chatter swirls around vanished travel receipts |
| MNA-01 | M&A / antitrust | Positive deal approval / synergy close | Analyst/Government | 3-5 days | FINC, TECH, MEDI, MFGX | +8% to +22% | +8% to +18% | +3% to +8% | Merger remedies appear lighter than expected |
| MNA-02 | M&A / antitrust | Negative deal block / hostile defense | Analyst/Government | 3-5 days | FINC, TECH, MEDI, MFGX | -8% to -22% | +10% to +20% | -3% to -8% | Antitrust staff push for structural concessions beyond tolerance |

## Event-Type Notes

### Monetary Policy

- Positive version raises risk appetite and softens funding pressure.
- Negative version compresses valuation multiples and funding access.

### Fiscal / Industrial Policy

- Positive version benefits sectors with direct subsidy, tax-credit, or procurement exposure.
- Negative version benefits competitors to the taxed segment and harms directly targeted firms.

### Commodity Input Shock

- Positive version lowers input costs for downstream users.
- Negative version raises input costs and margin pressure for downstream users.

### Consumer Demand Shock

- Positive version lifts retailers, consumer suppliers, and freight.
- Negative version cuts sell-through and restocking.

### Earnings

- Positive and negative versions are mostly single-name events with sympathy spillover inside the sector.

### Guidance

- Positive and negative versions move fair value more than same-day macro headlines.

### Product Cycle

- Positive version supports growth names and ecosystem suppliers.
- Negative version hits growth expectations and near-term shipments.

### Regulation / Permits

- Positive version affects project timing and asset monetization.
- Negative version affects capex timing and compliance cost.

### Clinical / FDA

- Positive and negative versions are concentrated inside healthcare and biotech.

### Labor Relations

- Positive version eases throughput and cost uncertainty.
- Negative version raises execution risk and short-run volatility.

### Supply Chain

- Positive version reduces delivery friction and inventory stress.
- Negative version reduces throughput and raises working-capital pressure.

### Litigation

- Positive version reduces overhang.
- Negative version increases liability risk and governance discount.

### Executive / Insider

- Positive version improves confidence in execution.
- Negative version increases governance discount and uncertainty.

### M&A / Antitrust

- Positive version improves expected synergy capture.
- Negative version removes takeover premium and raises uncertainty.
