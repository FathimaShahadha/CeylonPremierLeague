import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { LiveTicker } from './LiveTicker';
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-midnight text-white relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-scanline opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <LiveTicker />
        <Navbar />

        <main className="flex-grow pb-16 md:pb-0 pt-24">
          <Outlet />
        </main>

        <Footer />
        <MobileBottomNav />
      </div>
    </div>);

}