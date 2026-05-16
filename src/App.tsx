import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import {
  Home,
  Teams,
  TeamProfile,
  Players,
  PlayerProfile,
  Matches,
  LiveScores,
  PointsTable,
  Stats,
  Sponsors,
  Gallery,
  Videos,
  News,
  About,
  Contact,
  Admin } from
'./pages';
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster theme="dark" position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:id" element={<TeamProfile />} />
          <Route path="players" element={<Players />} />
          <Route path="players/:id" element={<PlayerProfile />} />
          <Route path="matches" element={<Matches />} />
          <Route path="live" element={<LiveScores />} />
          <Route path="points-table" element={<PointsTable />} />
          <Route path="stats" element={<Stats />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<Videos />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>);

}