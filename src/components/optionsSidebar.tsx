import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function OptionsSidebar({
  setActivePanel,
}: {
  activePanel: "main" | "settings" | "portfolio" | "stockDetails" | "help" | "credits" | "tutorial";
  setActivePanel: (
    panel: "main" | "settings" | "portfolio" | "stockDetails" | "help" | "credits" | "tutorial",
  ) => void;
}) {
  return (
      <Sidebar collapsible="none">
        <SidebarHeader>
          <h1 className="text-2xl font-bold">Menu</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("main")}>
                <h1 className="text-2xl font-bold">Home</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("portfolio")}>
                <h1 className="text-2xl font-bold">Portfolio</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("stockDetails")}>
                <h1 className="text-2xl font-bold">Stock Details</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("settings")}>
                <h1 className="text-2xl font-bold">Settings</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("help")}>
                <h1 className="text-2xl font-bold">Help</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("credits")}>
                <h1 className="text-2xl font-bold">Credits</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActivePanel("tutorial")}>
                <h1 className="text-2xl font-bold">Tutorial</h1>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
  );
}

export default OptionsSidebar;
