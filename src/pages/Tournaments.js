import React, { useState } from 'react';

const Tournaments = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tournaments = [
    {
      id: 1,
      name: 'Champions League',
      sport: 'Football Tournament',
      emoji: '⚽',
      status: 'live',
      teams: '16/16',
      prizePool: '$50,000',
      viewers: '12.5K',
      progress: 75,
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      name: 'Pro Basketball',
      sport: 'Basketball League',
      emoji: '🏀',
      status: 'upcoming',
      teams: '8/12',
      prizePool: '$25,000',
      startsIn: '2h 15m',
      progress: 67,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      name: 'Volleyball Masters',
      sport: 'Volleyball Championship',
      emoji: '🏐',
      status: 'completed',
      teams: '16/16',
      winner: 'Thunder Bolts',
      totalViews: '45.2K',
      progress: 100,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      id: 4,
      name: 'Tennis Open',
      sport: 'Singles & Doubles',
      emoji: '🎾',
      status: 'upcoming',
      teams: '24/32',
      prizePool: '$15,000',
      startsIn: '1 day',
      progress: 75,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    if (activeFilter === 'all') return true;
    return tournament.status === activeFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'live':
        return (
          <div className="flex items-center space-x-2 bg-accent/20 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-accent">LIVE</span>
          </div>
        );
      case 'upcoming':
        return (
          <div className="flex items-center space-x-2 bg-warning/20 px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-warning">UPCOMING</span>
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center space-x-2 bg-gray-500/20 px-3 py-1 rounded-full">
            <span className="text-xs font-bold text-gray-400">COMPLETED</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getActionButton = (tournament) => {
    switch (tournament.status) {
      case 'live':
        return (
          <button className="w-full bg-accent hover:bg-green-600 text-white py-3 rounded-xl text-sm font-medium transition-all duration-300">
            Watch Live
          </button>
        );
      case 'upcoming':
        return (
          <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-medium transition-all duration-300">
            Join Tournament
          </button>
        );
      case 'completed':
        return (
          <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-xl text-sm font-medium transition-all duration-300">
            View Results
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-text-glow">
              Tournaments
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and join exciting tournaments across various sports. Compete with the best and showcase your skills.
          </p>
        </div>

        {/* Tournament Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex space-x-2 border border-white/20 glass-morphism">
            {[
              { key: 'all', label: 'All Tournaments' },
              { key: 'live', label: 'Live' },
              { key: 'upcoming', label: 'Upcoming' },
              { key: 'completed', label: 'Completed' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.key ? 'active bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="tournament-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tournament.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                    {tournament.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{tournament.name}</h3>
                    <p className="text-gray-300 text-sm">{tournament.sport}</p>
                  </div>
                </div>
                {getStatusBadge(tournament.status)}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Teams</span>
                  <span className="text-white font-medium">{tournament.teams}</span>
                </div>
                {tournament.prizePool && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Prize Pool</span>
                    <span className="text-accent font-medium">{tournament.prizePool}</span>
                  </div>
                )}
                {tournament.viewers && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Viewers</span>
                    <span className="text-white font-medium">{tournament.viewers}</span>
                  </div>
                )}
                {tournament.startsIn && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Starts In</span>
                    <span className="text-white font-medium">{tournament.startsIn}</span>
                  </div>
                )}
                {tournament.winner && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Winner</span>
                    <span className="text-accent font-medium">{tournament.winner}</span>
                  </div>
                )}
                {tournament.totalViews && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Views</span>
                    <span className="text-white font-medium">{tournament.totalViews}</span>
                  </div>
                )}
              </div>

              <div className="progress-bar mb-4">
                <div 
                  className={`progress-fill h-2 rounded-full transition-all duration-500 ${
                    tournament.status === 'live' ? 'bg-accent' : 
                    tournament.status === 'upcoming' ? 'bg-warning' : 'bg-accent'
                  }`}
                  style={{ width: `${tournament.progress}%` }}
                ></div>
              </div>

              {getActionButton(tournament)}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTournaments.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tournaments found</h3>
            <p className="text-gray-300">Try adjusting your filters to see more tournaments.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Tournaments;