import type { Stock } from "@/types/types";
import { Stocks } from "@/lib/allStocks";

export function StockDetails({ stock }: { stock: Stock }) {
  const stockDef = Stocks.find((s) => s.stockId === stock.stockId);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Stock Details</h1>
      <p className="text-lg">This is a test of the stock details view.</p>
      <p className="text-lg">Stock: {stockDef?.name}</p>
      <p className="text-lg">Ticker: {stockDef?.ticker}</p>
      <p className="text-lg">Sector: {stockDef?.sector}</p>
      <p className="text-lg">Initial Price: {stock.initialPrice}</p>
      <p className="text-lg">Current Price: {stock.currentPrice}</p>
      <p className="text-lg">Initial Shares Outstanding: {stock.initialSharesOutstanding}</p>
      <p className="text-lg">Current Shares Outstanding: {stock.currentSharesOutstanding}</p>
      <p className="text-lg">Base Regime Drift: {stock.baseRegimeDrift}</p>
      <p className="text-lg">Current Regime Drift: {stock.currentRegimeDrift}</p>
      <p className="text-lg">Base Volatility: {stock.baseVolatility}</p>
      <p className="text-lg">Current Volatility: {stock.currentVolatility}</p>
      <p className="text-lg">Base Beta: {stock.baseBeta}</p>
      <p className="text-lg">Current Beta: {stock.currentBeta}</p>
      <p className="text-lg">Fair Value: {stock.fairValueAnchor}</p>
      <p className="text-lg">Last Shock: {stock.lastShock}</p>
      <p className="text-lg">Owned Shares: {stock.ownedShares}</p>
      <p className="text-lg">Control Level: {stock.controlLevel}</p>
      <p className="text-lg">Extraction Rate: {stock.extractionRate}</p>
      <p className="text-lg">Stock Strategy Profile: {stock.currentStrategyProfile}</p>
    </div>
  );
}
