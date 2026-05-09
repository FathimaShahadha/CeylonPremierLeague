export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  captain: string;
  coach: string;
  owner: string;
  stats: {
    played: number;
    won: number;
    lost: number;
    nrr: number;
    points: number;
  };
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  role: 'Batter' | 'Bowler' | 'All-Rounder' | 'Wicket-Keeper';
  image: string;
  jerseyNumber: number;
  stats: {
    matches: number;
    runs: number;
    wickets: number;
    strikeRate: number;
    economy: number;
    highestScore: number;
    bestBowling: string;
  };
  mvpPoints: number;
}

export interface Match {
  id: string;
  team1Id: string;
  team2Id: string;
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Completed';
  score?: {
    team1: string; // e.g., "112/3 (10)"
    team2: string; // e.g., "108/7 (10)"
  };
  result?: string;
  toss?: string;
}