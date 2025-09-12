"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  Users, 
  BarChart3, 
  Settings
} from "lucide-react";

export function SidebarNav() {
  const pathname = usePathname();

  const navigationItems = [
    {
      name: "Invoices",
      href: "/dashboard",
      icon: FileText,
      current: pathname === "/dashboard"
    },
    {
      name: "Clients",
      href: "/clients",
      icon: Users,
      current: pathname === "/clients"
    },
    {
      name: "Reports",
      href: "/reports",
      icon: BarChart3,
      current: pathname === "/reports"
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
      current: pathname === "/settings"
    }
  ];

  return (
    <nav className="flex-1 px-4 py-6 space-y-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              item.current
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
