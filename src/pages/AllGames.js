import React from 'react';
import { Link } from 'react-router-dom';

const AllGames = () => {
  const games = [
    {
      id: 'football',
      name: 'Football',
      emoji: '⚽',
      description: 'The beautiful game',
      gradient: 'from-green-500 to-green-600',
      players: '11 vs 11'
    },
    {
      id: 'basketball',
      name: 'Basketball',
      emoji: '🏀',
      description: 'Fast-paced court action',
      gradient: 'from-orange-500 to-orange-600',
      players: '5 vs 5'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      emoji: '🎾',
      description: 'Precision and power',
      gradient: 'from-yellow-500 to-yellow-600',
      players: '1 vs 1'
    },
    {
      id: 'cricket',
      name: 'Cricket',
      emoji: '🏏',
      description: 'Gentleman\'s game',
      gradient: 'from-blue-500 to-blue-600',
      players: '11 vs 11'
    }
  ];

  return (
    <div className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              All Games
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your favorite sport and explore teams, tournaments, and competitions.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link
              key={game.id}
              to={game.id === 'football' ? '/football/teams' : `/games/${game.id}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${game.gradient} rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                {/* Game Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {game.emoji}
                </div>
                
                {/* Game Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    {game.name}
                  </h3>
                  <p className="text-white/80 mb-4 text-sm">
                    {game.description}
                  </p>
                  <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
                    {game.players}
                  </div>
                  
                  {/* Action Button */}
                  <div className="bg-white/20 hover:bg-white/30 group-hover:bg-white/40 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 group-hover:border-white/50">
                    {game.id === 'football' ? 'View Teams' : 'Coming Soon'}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              🏆 Featured: Football Teams
            </h2>
            <p className="text-gray-300 mb-6">
              Click on Football to explore 10 professional teams and their details.
            </p>
            <Link
              to="/football/teams"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>⚽</span>
              <span>Explore Football Teams</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGames;