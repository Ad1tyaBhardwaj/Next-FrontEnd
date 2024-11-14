'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Chatrooms">
    <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="#">Public Chatrooms</HoveredLink>
      <HoveredLink href="#">Private Chatrooms</HoveredLink>
      <HoveredLink href="#">Popular Chatrooms</HoveredLink>
      <HoveredLink href="#">Create a Chatroom</HoveredLink>
    </div>
  </MenuItem>
  <MenuItem setActive={setActive} active={active} item="Community">
    <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="#">Community Rules</HoveredLink>
      <HoveredLink href="#">Guidelines</HoveredLink>
      <HoveredLink href="#">Support</HoveredLink>
      <HoveredLink href="#">FAQ</HoveredLink>
    </div>
  </MenuItem>
  <MenuItem setActive={setActive} active={active} item="Account">
    <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="#">Profile</HoveredLink>
      <HoveredLink href="#">Settings</HoveredLink>
      <HoveredLink href="#">Notifications</HoveredLink>
      <HoveredLink href="#">Logout</HoveredLink>
    </div>
  </MenuItem>
</Menu>

      </div>
    );
  }
  

export default Navbar