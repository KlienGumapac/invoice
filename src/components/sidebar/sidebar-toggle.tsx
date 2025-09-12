"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface SidebarToggleProps {
  onToggle: () => void;
}

export function SidebarToggle({ onToggle }: SidebarToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden"
      onClick={onToggle}
    >
      <Menu className="h-4 w-4" />
    </Button>
  );
}
