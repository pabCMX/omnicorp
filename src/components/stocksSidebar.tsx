import type { StockDef } from "@/types/types";
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
  allStocks: StockDef[];
  setStock: (stock: StockDef) => void;
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
                    <div key={stock.id}>
                      <SidebarMenuItem onClick={() => setStock(stock)}>
                        <div>
                          <h1 className="text-2xl font-bold">{stock.ticker}</h1>
                          <p className="text-sm text-gray-500">{stock.name}</p>
                          <p className="text-sm text-gray-500">${/* stock.price.toFixed(2) */}</p>
                          <div>
                            <p className="text-sm text-gray-500">Day % Change:</p>
                            <p className="text-sm text-gray-500">
                              {/* stock.percentChange.toFixed(2) */} %
                            </p>
                            <p className="text-sm text-gray-500">
                              ${/* stock.dollarChange.toFixed(2) */}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${/* stock.marketCap.toFixed(2) */}
                            </p>
                            <p className="text-sm text-gray-500 ">Sector:{stock.sector}</p>
                            <p className="text-sm text-gray-500 italic">
                              Sector Correlation:{stock.sectorCorrelation}
                            </p>
                            <p className="text-sm text-gray-500 italic">
                              Beta:{stock.beta.toFixed(2)}
                            </p>
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
