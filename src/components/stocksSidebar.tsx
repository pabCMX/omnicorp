import type { Stock } from "@/types/types";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarGroupContent,
} from "./ui/sidebar";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useState } from "react";

export function StocksSidebar({
  allStocks,
  setStock,
  side,
}: {
  allStocks: Stock[];
  setStock: (stock: Stock) => void;
  side: "left" | "right";
}) {
  const [search, setSearch] = useState("");

  return (
    <Sidebar side={side} collapsible="none">
      <SidebarHeader>
        <h1 className="text-2xl font-bold">Stocks</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>All Stocks</SidebarGroupLabel>
          <SidebarGroupContent>
            <Field>
              <FieldLabel htmlFor="search">Search</FieldLabel>
              <Input
                id="search"
                name="search"
                type="text"
                placeholder="Search stocks"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Field>
            {allStocks
              .filter((stock) => stock.name.toLowerCase().includes(search.toLowerCase()))
              .map((stock) => {
                return (
                  <div key={stock.stockId}>
                    <SidebarMenuItem onClick={() => setStock(stock)}>
                      <div>
                        <h1 className="text-2xl font-bold">{stock.ticker}</h1>
                        <p className="text-sm text-gray-500">{stock.name}</p>
                        <p className="text-sm text-gray-500">${stock.currentPrice.toFixed(2)}</p>
                        <div>
                          <p className={`text-sm ${((stock.currentPrice - stock.initialPrice) / stock.initialPrice * 100) >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {((stock.currentPrice - stock.initialPrice) / stock.initialPrice * 100).toFixed(2)} % {((stock.currentPrice - stock.initialPrice) / stock.initialPrice * 100) >= 0 ? "↑" : "↓"}
                          </p>
                          <p className="text-sm text-gray-500">Day % Change:</p>
                        </div>
                      </div>
                    </SidebarMenuItem>
                  </div>
                );
              })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default StocksSidebar;
