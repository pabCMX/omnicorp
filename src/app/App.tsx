import { NewsTicker } from "@/components/newsTicker";
import { OptionsSidebar } from "@/components/optionsSidebar";
import { Portfolio } from "@/components/portfolio";
import { Settings } from "@/components/settings";
import { StocksSidebar } from "@/components/stocksSidebar";
import { useState } from "react";
import { MainScreen } from "@/components/mainScreen";
import { StockDetails } from "@/components/stockDetails";
import { newsItems } from "@/lib/newsItems";
import { Stocks } from "@/lib/allStocks";
import type { Stock } from "@/types/types";
import { Credits } from "@/components/credits";
import { Tutorial } from "@/components/tutorial";
import { Help } from "@/components/help";
import { SidebarProvider } from "@/components/ui/sidebar";

function App() {
  const [stock, setStock] = useState<Stock>(Stocks[0]);
  const [activePanel, setActivePanel] = useState<
    "main" | "settings" | "portfolio" | "stockDetails" | "help" | "credits" | "tutorial"
  >("main");

  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="shrink-0">
          <NewsTicker newsItems={newsItems} />
        </div>
        <div className="flex-1 min-h-0 flex">
          <OptionsSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
          <main className="flex flex-1 min-w-0 min-h-0 items-center justify-center overflow-auto">
            {activePanel === "main" && <MainScreen />}
            {activePanel === "settings" && <Settings />}
            {activePanel === "portfolio" && <Portfolio />}
            {activePanel === "stockDetails" && <StockDetails stock={stock as Stock} />}
            {activePanel === "help" && <Help />}
            {activePanel === "credits" && <Credits />}
            {activePanel === "tutorial" && <Tutorial />}
          </main>
          <StocksSidebar
            side="right"
            allStocks={Stocks}
            setStock={setStock as (stock: Stock) => void}
          />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
