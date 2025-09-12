"use client";

import { Button } from "@/components/ui/button";
import { SidebarToggle } from "@/components/sidebar";
import { Download, Plus } from "lucide-react";

interface AppHeaderProps {
  title: string;
  onSidebarToggle: () => void;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export function AppHeader({ 
  title, 
  onSidebarToggle, 
  primaryAction,
  secondaryAction 
}: AppHeaderProps) {
  return (
    <header className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarToggle onToggle={onSidebarToggle} />
            <div className="h-6 w-px bg-border hidden md:block" />
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            {secondaryAction && (
              <Button variant="outline" size="sm" className="hidden sm:flex" onClick={secondaryAction.onClick}>
                {secondaryAction.icon}
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button size="sm" onClick={primaryAction.onClick}>
                {primaryAction.icon}
                {primaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
