import React, { useState } from 'react';

const Rankings = () => {
  const [activeTournament, setActiveTournament] = useState('football');

  const tournaments = {
    football: {
      name: 'Football Championship - Group A',
      emoji: '⚽',
      standings: [
        { rank: 1, team: 'Fire Cats', code: 'FC', league: 'England Premier', played: 6, won: 5, draw: 1, lost: 0, gf: 18, ga: 6, gd: '+12', points: 16, isWinner: true, gradient: 'from-blue-500 to-blue-600' },
        { rank: 2, team: 'Thunder Hawks', code: 'TH', league: 'Spain La Liga', played: 6, won: 4, draw: 1, lost: 1, gf: 14, ga: 8, gd: '+6', points: 13, gradient: 'from-red-500 to-red-600' },
        { rank: 3, team: 'Storm Lions', code: 'SL', league: 'Germany Bundesliga', played: 6, won: 3, draw: 2, lost: 1, gf: 12, ga: 9, gd: '+3', points: 11, gradient: 'from-green-500 to-green-600' },
        { rank: 4, team: 'Night Eagles', code: 'NE', league: 'Italy Serie A', played: 6, won: 2, draw: 1, lost: 3, gf: 8, ga: 11, gd: '-3', points: 7, gradient: 'from-purple-500 to-purple-600' },
        { rank: 5, team: 'Fire Wolves', code: 'FW', league: 'France Ligue 1', played: 6, won: 1, draw: 1, lost: 4, gf: 5, ga: 15, gd: '-10', points: 4, gradient: 'from-orange-500 to-orange-600' }
      ],
      topScorers: [
        { rank: 1, name: 'Marcus Johnson', team: 'Fire Cats', goals: 12 },
        { rank: 2, name: 'Carlos Rodriguez', team: 'Thunder Hawks', goals: 10 },
        { rank: 3, name: 'David Miller', team: 'Storm Lions', goals: 8 }
      ]
    },
    basketball: {
      name: 'Basketball League - Eastern Conference',
      emoji: '🏀',
      standings: [
        { rank: 1, team: 'Storm Lions', code: 'SL', league: 'Eastern Conference', games: 12, wins: 10, losses: 2, winPct: '.833', ppg: 118.5, streak: 'W5', isWinner: true, gradient: 'from-green-500 to-green-600' },
        { rank: 2, team: 'Night Eagles', code: 'NE', league: 'Eastern Conference', games: 12, wins: 8, losses: 4, winPct: '.667', ppg: 112.3, streak: 'L1', gradient: 'from-purple-500 to-purple-600' }
      ]
    },
    tennis: {
      name: 'Tennis Open - Singles Rankings',
      emoji: '🎾',
      standings: [
        { rank: 1, name: 'Alex Smith', worldRank: '#12', record: '8-1', isWinner: true },
        { rank: 2, name: 'Maria Johnson', worldRank: '#8', record: '7-2' }
      ]
    }
  };

  const currentTournament = tournaments[activeTournament];

  return (
    <main className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-text-glow">
              Rankings & Standings
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Live updated standings, team statistics, and player rankings from all active tournaments
          </p>
        </div>

        {/* Tournament Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex space-x-2 border border-white/20 glass-morphism">
            {Object.entries(tournaments).map(([key, tournament]) => (
              <button
                key={key}
                onClick={() => setActiveTournament(key)}
                className={`tournament-tab px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTournament === key ? 'active bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tournament.name.split(' - ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Rankings */}
        <div className="tournament-rankings">
          {activeTournament === 'football' && (
            <>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 glass-morphism mb-8">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                    <span className="text-3xl">{currentTournament.emoji}</span>
                    <span>{currentTournament.name}</span>
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Team</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Played</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Won</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Draw</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Lost</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">GF</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">GA</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">GD</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {currentTournament.standings.map((team) => (
                        <tr
                          key={team.rank}
                          className={`${team.isWinner ? 'winner-row bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 animate-winner-glow' : 
                            team.rank <= 3 ? 'bg-green-500/10' : 
                            team.rank >= 4 ? 'bg-orange-500/10' : ''}`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                              team.isWinner ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' : 'bg-gray-600 text-white'
                            }`}>
                              {team.rank}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`w-12 h-12 bg-gradient-to-r ${team.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg`}>
                                {team.code}
                              </div>
                              <div>
                                <div className="font-bold text-white flex items-center space-x-2">
                                  <span>{team.team}</span>
                                  {team.isWinner && <span className="text-yellow-400">🏆</span>}
                                </div>
                                <div className="text-gray-300 text-sm">{team.league}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{team.played}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{team.won}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{team.draw}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{team.lost}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-accent font-medium">{team.gf}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400 font-medium">{team.ga}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-accent font-medium">{team.gd}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white text-lg">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Scorers */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 glass-morphism">
                <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">Top Scorers</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {currentTournament.topScorers.map((scorer) => (
                      <div key={scorer.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            scorer.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'
                          }`}>
                            {scorer.rank}
                          </div>
                          <div>
                            <div className="font-bold text-white">{scorer.name}</div>
                            <div className="text-gray-300 text-sm">{scorer.team}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">{scorer.goals}</div>
                          <div className="text-gray-300 text-sm">Goals</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTournament === 'basketball' && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 glass-morphism">
              <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                  <span className="text-3xl">{currentTournament.emoji}</span>
                  <span>{currentTournament.name}</span>
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Games</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Wins</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Losses</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Win %</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">PPG</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Streak</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {currentTournament.standings.map((team) => (
                      <tr
                        key={team.rank}
                        className={team.isWinner ? 'winner-row bg-gradient-to-r from-yellow-500/20 to-yellow-600/20' : ''}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            team.isWinner ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' : 'bg-gray-600 text-white'
                          }`}>
                            {team.rank}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 bg-gradient-to-r ${team.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                              {team.code}
                            </div>
                            <div>
                              <div className="font-bold text-white flex items-center space-x-2">
                                <span>{team.team}</span>
                                {team.isWinner && <span className="text-yellow-400">🏆</span>}
                              </div>
                              <div className="text-gray-300 text-sm">{team.league}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{team.games}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{team.wins}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{team.losses}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-accent font-bold">{team.winPct}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{team.ppg}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">{team.streak}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTournament === 'tennis' && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 glass-morphism">
              <div className="px-6 py-4 bg-white/5 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                  <span className="text-3xl">{currentTournament.emoji}</span>
                  <span>{currentTournament.name}</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {currentTournament.standings.map((player) => (
                    <div
                      key={player.rank}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        player.isWinner ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 winner-row' : 'bg-white/5'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          player.isWinner ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}>
                          {player.rank}
                        </div>
                        <div>
                          <div className="font-bold text-white flex items-center space-x-2">
                            <span>{player.name}</span>
                            {player.isWinner && <span className="text-yellow-400">🏆</span>}
                          </div>
                          <div className="text-gray-300 text-sm">World Rank {player.worldRank}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">{player.record}</div>
                        <div className="text-gray-300 text-sm">Win-Loss</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Rankings;