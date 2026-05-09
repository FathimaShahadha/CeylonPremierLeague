import { Team, Player, Match } from '../types';

export const teams: Team[] = [
{
  id: 't1',
  name: 'Mumbai Strikers',
  shortName: 'MUM',
  logo: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=200&q=80',
  color: '#0052FF',
  captain: 'Rohit S.',
  coach: 'Mahela J.',
  owner: 'Reliance Sports',
  stats: { played: 5, won: 4, lost: 1, nrr: 1.25, points: 8 }
},
{
  id: 't2',
  name: 'Delhi Dynamos',
  shortName: 'DEL',
  logo: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=200&q=80',
  color: '#FF0000',
  captain: 'Rishabh P.',
  coach: 'Ricky P.',
  owner: 'GMR Group',
  stats: { played: 5, won: 3, lost: 2, nrr: 0.85, points: 6 }
},
{
  id: 't3',
  name: 'Bangalore Blitz',
  shortName: 'BLR',
  logo: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=200&q=80',
  color: '#FFD54A',
  captain: 'Virat K.',
  coach: 'Andy F.',
  owner: 'United Spirits',
  stats: { played: 5, won: 3, lost: 2, nrr: 0.45, points: 6 }
},
{
  id: 't4',
  name: 'Chennai Chargers',
  shortName: 'CHE',
  logo: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=200&q=80',
  color: '#FFFF00',
  captain: 'MS Dhoni',
  coach: 'Stephen F.',
  owner: 'India Cements',
  stats: { played: 5, won: 2, lost: 3, nrr: -0.15, points: 4 }
}];


export const players: Player[] = [
{
  id: 'p1',
  name: 'Virat K.',
  teamId: 't3',
  role: 'Batter',
  image:
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80',
  jerseyNumber: 18,
  stats: {
    matches: 5,
    runs: 245,
    wickets: 0,
    strikeRate: 185.5,
    economy: 0,
    highestScore: 82,
    bestBowling: '0/0'
  },
  mvpPoints: 450
},
{
  id: 'p2',
  name: 'Jasprit B.',
  teamId: 't1',
  role: 'Bowler',
  image:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  jerseyNumber: 93,
  stats: {
    matches: 5,
    runs: 12,
    wickets: 12,
    strikeRate: 120.0,
    economy: 6.5,
    highestScore: 10,
    bestBowling: '4/12'
  },
  mvpPoints: 420
}];


export const matches: Match[] = [
{
  id: 'm1',
  team1Id: 't1',
  team2Id: 't2',
  date: '2026-05-08',
  time: '20:00 IST',
  venue: 'Wankhede Stadium, Mumbai',
  status: 'Live',
  score: { team1: '112/3 (8.2)', team2: 'Yet to bat' },
  toss: 'Mumbai Strikers won the toss and elected to bat'
},
{
  id: 'm2',
  team1Id: 't3',
  team2Id: 't4',
  date: '2026-05-09',
  time: '20:00 IST',
  venue: 'Chinnaswamy Stadium, Bangalore',
  status: 'Upcoming'
},
{
  id: 'm3',
  team1Id: 't1',
  team2Id: 't4',
  date: '2026-05-07',
  time: '20:00 IST',
  venue: 'Chepauk Stadium, Chennai',
  status: 'Completed',
  score: { team1: '145/4 (10)', team2: '130/8 (10)' },
  result: 'Mumbai Strikers won by 15 runs'
}];