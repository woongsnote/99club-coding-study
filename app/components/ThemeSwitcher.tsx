"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  LuMonitor as System,
  LuSun as Sun,
  LuMoon as Moon,
} from "react-icons/lu";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="ghost" className="border-none">
          <Sun size={24} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="theme selector"
        selectionMode="single"
        onAction={(key) => setTheme(key as string)}>
        <DropdownItem key="system" startContent={<System />}>
          system
        </DropdownItem>
        <DropdownItem key="light" startContent={<Sun />}>
          Light
        </DropdownItem>
        <DropdownItem key="dark" startContent={<Moon />}>
          Dark
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
