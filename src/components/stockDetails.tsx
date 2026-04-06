import type { StockDef } from "@/types/types";

export function StockDetails({ stock }: { stock: StockDef }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Stock Details</h1>
      <p className="text-lg">This is a test of the stock details view.</p>
      <p className="text-lg">Stock: {stock.name}</p>
      <p className="text-lg">Ticker: {stock.ticker}</p>
      <p className="text-lg">Sector: {stock.sector}</p>
      <p className="text-lg">Initial Price: {stock.initialPrice}</p>
      <p className="text-lg">Shares Outstanding: {stock.sharesOutstanding}</p>
    </div>
  );
}
