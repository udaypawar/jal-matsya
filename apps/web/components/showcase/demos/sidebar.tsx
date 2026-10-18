"use client"

import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@jal-matsya/ui/components/sidebar"

const items = [
  { title: "Home", icon: HomeIcon, active: true },
  { title: "Inbox", icon: InboxIcon, badge: "24" },
  { title: "Calendar", icon: CalendarIcon },
  { title: "Search", icon: SearchIcon },
  { title: "Settings", icon: SettingsIcon },
]

export default function SidebarDemo() {
  return (
    // Contained preview: the real sidebar is `fixed`; `collapsible="none"` keeps it in-flow here.
    <SidebarProvider className="min-h-80 w-full overflow-hidden rounded-lg border">
      <Sidebar collapsible="none" className="border-r">
        <SidebarHeader className="px-4 py-3 text-sm font-semibold">Acme Inc</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="px-4 py-3 text-xs text-muted-foreground">v1.0.0</SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Wrap your app layout in <code>SidebarProvider</code> to use the full collapsible sidebar.
        </p>
      </SidebarInset>
    </SidebarProvider>
  )
}
