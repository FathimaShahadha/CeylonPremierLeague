import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedCards } from '../components/home/FeaturedCards';
import { StatsCounters } from '../components/home/StatsCounters';
import { MiniLeaderboards } from '../components/home/MiniLeaderboards';
import { SponsorShowcase } from '../components/home/SponsorShowcase';
import { FanZone } from '../components/home/FanZone';
export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedCards />
      <StatsCounters />
      <MiniLeaderboards />
      <SponsorShowcase />
      <FanZone />
    </div>);

}