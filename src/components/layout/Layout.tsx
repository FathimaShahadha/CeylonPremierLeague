import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-midnight text-white relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-scanline opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className={`flex-grow pb-16 md:pb-0`}>
          <Outlet />
        </main>

        <Footer />
        <MobileBottomNav />
      </div>
    </div>);

}