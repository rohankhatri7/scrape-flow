"use client";

import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import React from 'react'


const routes = [
    {
        href: "",
        label: "Home",
        icon: HomeIcon,
    }, 

    {
        href: "workflows",
        label: "Workflows",
        icon: Layers2Icon,
    },
    
    {
        href: "credentials",
        label: "Credentials",
        icon: ShieldCheckIcon,
    },
    
    {
        href: "billing",
        label: "Billing",
        icon: CoinsIcon,
    }, 

];
function DesktopSideBar() {
  return (
    <div>DesktopSideBar</div>
  )
}

export default DesktopSideBar;