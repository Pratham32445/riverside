"use client";
import { useState } from "react";
import {
  Home,
  ChartNoAxesColumnIncreasingIcon,
  FolderClosed,
  CalendarCheck,
  Settings,
  PartyPopper,
  PanelLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderClosed,
  },
  {
    title: "Scheduled",
    url: "#",
    icon: CalendarCheck,
  },
];

const itemsFooter = [
  {
    title: "What's new",
    url: "#",
    icon: PartyPopper,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <Sidebar 
      className={`border-none transition-all duration-300 ${expanded ? "w-64" : "w-20"}`}
      data-expanded={expanded}
    >
      <SidebarHeader>
        <div className="flex items-center justify-between pt-4 px-4">
          <div className="flex items-center gap-2">
            <ChartNoAxesColumnIncreasingIcon />
            {expanded && <p className="text-lg font-bold">LAKESIDE</p>}
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {expanded ? <PanelLeft size={22} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-3">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="my-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon width={30} height={30} />
                      {expanded && <span className="font-bold text-md">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-5">
        <SidebarMenu>
          {itemsFooter.map((item, idx) => (
            <SidebarMenuItem className="my-2" key={idx}>
              <SidebarMenuButton asChild>
                <a href={"/"} className="flex items-center gap-3">
                  <item.icon width={30} height={30} />
                  {expanded && <span className="font-bold text-md">{item.title}</span>}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}