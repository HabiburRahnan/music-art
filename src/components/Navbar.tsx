"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-manu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="home"
          ></MenuItem>
        </HoveredLink>
        <HoveredLink href="/courses">
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Course</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Songweriting</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </MenuItem>
        </HoveredLink>
        <HoveredLink href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact US"
          ></MenuItem>
        </HoveredLink>
      </Menu>
    </div>
  );
};

export default Navbar;
