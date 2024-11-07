import DesktopSideBar from '@/components/Sidebar';
import { Separator } from '@radix-ui/react-context-menu';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
        <DesktopSideBar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          ScrapeFlow
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;