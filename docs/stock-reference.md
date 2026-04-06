# Omnicorp Stock Reference

Static reference sheet for seeded stock generation. Values below are synthetic design bounds anchored to historical public-market behavior from large and mid-cap comparables. Market cap is in USD billions. Price is in USD. Annual volatility is a rough annualized range. Profit/share is a rough trailing band usable for `profitPerShare` seeds.

## Agriculture / Food Supply

| Ticker | Comparator             | Market Cap |  Price |     Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | ---------------------- | ---------: | -----: | -------: | ---------: | ----------: | -----------: |
| ADM    | Archer-Daniels-Midland |      25-60 |  25-95 |  0.7-1.0 |     18-30% |   0.55-0.75 |      1.0-6.0 |
| BG     | Bunge Global           |       8-20 | 50-140 |  0.5-0.9 |     18-28% |   0.45-0.70 |     4.0-14.0 |
| DE     | Deere                  |     50-160 | 90-500 |  0.9-1.2 |     22-38% |   0.55-0.80 |     8.0-35.0 |
| AGCO   | AGCO                   |       3-12 | 40-160 |  0.9-1.3 |     25-40% |   0.55-0.80 |     1.0-10.0 |
| MOS    | Mosaic                 |       7-25 |  10-75 |  1.0-1.5 |     30-55% |   0.60-0.85 |     -1.0-8.0 |
| NTR    | Nutrien                |      20-60 | 35-100 |  0.8-1.2 |     24-40% |   0.55-0.80 |      1.0-8.0 |
| CTVA   | Corteva                |      25-60 |  25-80 |  0.6-0.9 |     18-28% |   0.50-0.70 |      0.8-4.0 |
| TSN    | Tyson Foods            |      15-40 |  45-95 |  0.5-0.8 |     20-30% |   0.45-0.65 |      2.0-9.0 |
| CALM   | Cal-Maine Foods        |        1-5 | 30-120 | -0.1-0.5 |     25-55% |   0.20-0.45 |     0.5-13.0 |
| FMC    | FMC                    |       4-18 | 30-140 |  0.8-1.2 |     25-45% |   0.50-0.75 |     -2.0-6.0 |

## Energy / Utilities

| Ticker | Comparator           | Market Cap |  Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | -------------------- | ---------: | -----: | ------: | ---------: | ----------: | -----------: |
| XOM    | Exxon Mobil          |    150-600 | 35-150 | 0.8-1.2 |     20-35% |   0.60-0.85 |     1.0-14.0 |
| CVX    | Chevron              |    120-400 | 50-190 | 0.8-1.2 |     18-32% |   0.60-0.85 |     2.0-18.0 |
| COP    | ConocoPhillips       |     40-180 | 20-140 | 0.9-1.4 |     28-45% |   0.60-0.85 |    -3.0-12.0 |
| EOG    | EOG Resources        |      20-90 | 35-145 | 1.0-1.4 |     28-45% |   0.60-0.85 |    -1.0-16.0 |
| OXY    | Occidental Petroleum |       8-70 |   9-80 | 1.1-1.8 |     35-60% |   0.65-0.90 |     -8.0-6.0 |
| SLB    | SLB                  |      40-90 |  15-65 | 1.1-1.5 |     25-40% |   0.60-0.85 |     -1.0-4.0 |
| ENB    | Enbridge             |     50-100 |  28-55 | 0.6-0.9 |     15-25% |   0.45-0.70 |      1.0-3.0 |
| KMI    | Kinder Morgan        |      25-50 |  12-28 | 0.7-1.0 |     16-28% |   0.45-0.70 |      0.5-1.8 |
| NEE    | NextEra Energy       |     60-180 |  45-95 | 0.4-0.8 |     15-25% |   0.35-0.60 |      1.5-4.0 |
| DUK    | Duke Energy          |      45-90 | 65-125 | 0.3-0.6 |     12-22% |   0.35-0.55 |      3.0-6.0 |

## Industrial Manufacturing

| Ticker | Comparator          | Market Cap |   Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | ------------------- | ---------: | ------: | ------: | ---------: | ----------: | -----------: |
| CAT    | Caterpillar         |     50-200 |  90-400 | 0.9-1.3 |     22-35% |   0.55-0.80 |     3.0-23.0 |
| GE     | GE Aerospace / GE   |     60-220 |  45-220 | 0.9-1.4 |     24-45% |   0.55-0.80 |     -5.0-7.0 |
| HON    | Honeywell           |     80-160 | 100-240 | 0.7-1.0 |     18-28% |   0.50-0.75 |     5.0-10.0 |
| ETN    | Eaton               |     40-150 |  50-380 | 0.9-1.2 |     22-35% |   0.55-0.80 |     2.0-12.0 |
| EMR    | Emerson             |      25-70 |  45-115 | 0.8-1.1 |     18-30% |   0.50-0.75 |      2.0-5.0 |
| PH     | Parker-Hannifin     |      25-90 |  80-700 | 0.9-1.3 |     20-32% |   0.55-0.80 |     5.0-26.0 |
| ITW    | Illinois Tool Works |      50-90 | 140-280 | 0.7-1.0 |     17-28% |   0.50-0.70 |     6.0-11.0 |
| CMI    | Cummins             |      15-40 | 120-320 | 1.0-1.4 |     22-38% |   0.55-0.80 |     4.0-22.0 |
| MMM    | 3M                  |     50-130 |  70-250 | 0.8-1.1 |     18-35% |   0.50-0.75 |     5.0-12.0 |
| RTX    | RTX                 |     70-170 |  50-140 | 0.7-1.0 |     18-28% |   0.50-0.75 |      2.0-6.0 |

## Healthcare / Biotech

| Ticker | Comparator           | Market Cap |   Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | -------------------- | ---------: | ------: | ------: | ---------: | ----------: | -----------: |
| JNJ    | Johnson & Johnson    |    300-500 | 130-190 | 0.4-0.7 |     12-20% |   0.35-0.55 |      5.0-8.0 |
| PFE    | Pfizer               |    150-330 |   25-60 | 0.5-0.9 |     16-28% |   0.40-0.65 |      1.0-6.0 |
| MRK    | Merck                |    150-350 |  45-140 | 0.4-0.8 |     15-25% |   0.40-0.65 |      2.0-8.0 |
| ABBV   | AbbVie               |     80-350 |  60-210 | 0.5-0.9 |     16-28% |   0.40-0.65 |     3.0-14.0 |
| AMGN   | Amgen                |    100-170 | 180-340 | 0.4-0.8 |     15-25% |   0.40-0.65 |     9.0-18.0 |
| GILD   | Gilead               |     70-130 |   55-90 | 0.3-0.8 |     14-25% |   0.35-0.60 |      2.0-6.0 |
| BMY    | Bristol Myers Squibb |     70-170 |   40-80 | 0.4-0.8 |     16-26% |   0.40-0.65 |      2.0-8.0 |
| MDT    | Medtronic            |     90-170 |  70-130 | 0.5-0.9 |     15-25% |   0.40-0.65 |      2.0-5.0 |
| ISRG   | Intuitive Surgical   |     20-200 |  15-200 | 0.9-1.3 |     25-40% |   0.45-0.70 |      1.0-7.0 |
| SYK    | Stryker              |     70-150 | 170-390 | 0.7-1.0 |     18-28% |   0.45-0.70 |     4.0-11.0 |

## Banking / Finance

| Ticker | Comparator       | Market Cap |    Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | ---------------- | ---------: | -------: | ------: | ---------: | ----------: | -----------: |
| JPM    | JPMorgan Chase   |    180-700 |   55-300 | 0.9-1.3 |     20-35% |   0.55-0.80 |     5.0-20.0 |
| BAC    | Bank of America  |    150-400 |    20-55 | 1.1-1.6 |     25-40% |   0.60-0.85 |      0.5-3.5 |
| WFC    | Wells Fargo      |    100-250 |    22-65 | 1.0-1.5 |     24-40% |   0.60-0.85 |      0.5-5.5 |
| C      | Citigroup        |     70-180 |    35-85 | 1.2-1.8 |     28-45% |   0.60-0.85 |      1.0-9.0 |
| GS     | Goldman Sachs    |     70-200 |  140-700 | 1.1-1.5 |     22-38% |   0.55-0.80 |    10.0-50.0 |
| MS     | Morgan Stanley   |     60-220 |   25-150 | 1.1-1.6 |     24-40% |   0.55-0.80 |      1.5-8.0 |
| AXP    | American Express |     70-220 |   65-320 | 1.0-1.4 |     20-35% |   0.50-0.75 |     4.0-14.0 |
| BLK    | BlackRock        |     80-140 | 300-1100 | 1.1-1.4 |     20-35% |   0.50-0.75 |    20.0-40.0 |
| SCHW   | Charles Schwab   |     40-180 |    25-90 | 1.0-1.6 |     25-45% |   0.55-0.80 |      1.0-4.0 |
| USB    | U.S. Bancorp     |     45-110 |    30-70 | 0.9-1.3 |     20-35% |   0.50-0.75 |      2.0-6.0 |

## Consumer Goods / Retail

| Ticker | Comparator       | Market Cap |   Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | ---------------- | ---------: | ------: | ------: | ---------: | ----------: | -----------: |
| WMT    | Walmart          |    300-900 |  20-120 | 0.4-0.7 |     12-22% |   0.35-0.60 |      1.5-3.0 |
| COST   | Costco           |    100-450 |  25-120 | 0.6-0.9 |     18-28% |   0.40-0.65 |     3.0-12.0 |
| PG     | Procter & Gamble |    200-400 |  70-180 | 0.3-0.7 |     12-20% |   0.35-0.55 |      3.0-7.0 |
| KO     | Coca-Cola        |    170-330 |   35-75 | 0.3-0.6 |     12-20% |   0.35-0.55 |      1.5-2.8 |
| PEP    | PepsiCo          |    130-350 |  85-200 | 0.4-0.8 |     14-22% |   0.35-0.60 |      3.0-8.0 |
| MCD    | McDonald's       |    110-250 | 115-320 | 0.5-0.9 |     16-25% |   0.40-0.65 |     4.0-12.0 |
| NKE    | Nike             |     90-280 |  50-180 | 0.7-1.1 |     20-35% |   0.45-0.70 |      1.0-4.0 |
| TGT    | Target           |     45-120 |  55-260 | 0.7-1.1 |     20-35% |   0.45-0.70 |     4.0-14.0 |
| HD     | Home Depot       |    150-450 |  90-420 | 0.8-1.1 |     18-30% |   0.45-0.70 |     6.0-18.0 |
| LOW    | Lowe's           |     60-170 |  60-280 | 0.9-1.2 |     20-32% |   0.45-0.70 |     4.0-14.0 |

## Technology / Semiconductors / Software

| Ticker | Comparator | Market Cap |   Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | ---------- | ---------: | ------: | ------: | ---------: | ----------: | -----------: |
| MSFT   | Microsoft  |   300-3500 |  35-500 | 0.8-1.1 |     18-32% |   0.55-0.80 |     2.0-13.0 |
| AAPL   | Apple      |   500-3500 |  20-260 | 1.0-1.4 |     22-38% |   0.55-0.80 |      2.0-7.0 |
| NVDA   | NVIDIA     |    10-4000 |   3-180 | 1.2-2.0 |     35-80% |   0.60-0.90 |      0.1-3.5 |
| AVGO   | Broadcom   |    80-1200 |  15-250 | 1.0-1.4 |     25-45% |   0.55-0.80 |      1.0-8.0 |
| ORCL   | Oracle     |    120-600 |  35-220 | 0.9-1.2 |     18-30% |   0.50-0.75 |      1.5-5.5 |
| CRM    | Salesforce |     40-350 |  50-320 | 1.0-1.4 |     24-40% |   0.55-0.80 |     -1.0-7.0 |
| ADBE   | Adobe      |    100-350 | 200-700 | 1.0-1.3 |     22-35% |   0.50-0.75 |     5.0-15.0 |
| AMD    | AMD        |      5-400 |   2-220 | 1.5-2.2 |     35-70% |   0.60-0.90 |     -1.5-3.0 |
| INTC   | Intel      |    100-350 |   18-70 | 0.7-1.2 |     20-40% |   0.50-0.75 |     -4.0-5.0 |
| CSCO   | Cisco      |    120-250 |   35-65 | 0.7-1.0 |     16-25% |   0.45-0.70 |      2.0-4.0 |

## Transport / Logistics

| Ticker | Comparator            | Market Cap |   Price |    Beta | Annual Vol | Sector Corr | Profit/Share |
| ------ | --------------------- | ---------: | ------: | ------: | ---------: | ----------: | -----------: |
| UPS    | United Parcel Service |     80-200 |  60-230 | 0.8-1.1 |     18-30% |   0.50-0.75 |     3.0-15.0 |
| FDX    | FedEx                 |     40-100 |  80-320 | 1.0-1.4 |     22-38% |   0.55-0.80 |     3.0-18.0 |
| UNP    | Union Pacific         |    100-180 |  65-280 | 0.9-1.2 |     18-28% |   0.50-0.75 |     5.0-12.0 |
| CSX    | CSX                   |     40-100 |   15-40 | 0.8-1.2 |     18-30% |   0.50-0.75 |      1.0-2.5 |
| NSC    | Norfolk Southern      |      30-75 | 150-300 | 0.8-1.2 |     18-30% |   0.50-0.75 |     5.0-14.0 |
| JBHT   | J.B. Hunt             |      12-25 |  70-220 | 0.9-1.3 |     22-35% |   0.55-0.80 |      3.0-8.0 |
| ODFL   | Old Dominion          |      10-50 |  25-250 | 1.0-1.4 |     25-40% |   0.55-0.80 |      0.8-6.0 |
| EXPD   | Expeditors            |      15-25 |  80-140 | 0.8-1.1 |     18-28% |   0.45-0.70 |      3.0-6.0 |
| CHRW   | C.H. Robinson         |      10-18 |  70-120 | 0.6-0.9 |     16-25% |   0.45-0.65 |      3.0-5.0 |
| XPO    | XPO                   |       3-18 |  20-140 | 1.2-1.8 |     30-55% |   0.60-0.85 |     -2.0-5.0 |

## Generator Notes

- Use the reference rows as bounded seeds, not as direct imports.
- Sector market cap should float with price.
- Partial subsidiaries use public market price for valuation.
- Wholly owned subsidiary valuation is not pinned in this document.
