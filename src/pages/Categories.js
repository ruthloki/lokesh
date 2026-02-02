import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { 
      id: 'football', 
      name: 'Football', 
      emoji: '⚽', 
      type: 'outdoor team', 
      activeMatches: 15, 
      gradient: 'from-green-500 to-green-600', 
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center',
      players: '11 players per team'
    },
    { 
      id: 'basketball', 
      name: 'Basketball', 
      emoji: '🏀', 
      type: 'indoor team', 
      activeMatches: 10, 
      gradient: 'from-purple-500 to-purple-600', 
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center',
      players: '5 players per team'
    },
    { 
      id: 'tennis', 
      name: 'Tennis', 
      emoji: '🎾', 
      type: 'outdoor individual', 
      activeMatches: 12, 
      gradient: 'from-orange-500 to-orange-600', 
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
      players: '1-2 players'
    },
    { 
      id: 'cricket', 
      name: 'Cricket', 
      emoji: '🏏', 
      type: 'outdoor team', 
      activeMatches: 8, 
      gradient: 'from-blue-500 to-blue-600', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      players: '11 players per team'
    },
    { 
      id: 'volleyball', 
      name: 'Volleyball', 
      emoji: '🏐', 
      type: 'indoor team', 
      activeMatches: 7, 
      gradient: 'from-teal-500 to-teal-600', 
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center',
      players: '6 players per team'
    },
    { 
      id: 'table-tennis', 
      name: 'Table Tennis', 
      emoji: '🏓', 
      type: 'indoor individual', 
      activeMatches: 9, 
      gradient: 'from-indigo-500 to-indigo-600', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      players: '1-2 players'
    },
    { 
      id: 'badminton', 
      name: 'Badminton', 
      emoji: '🏸', 
      type: 'indoor individual', 
      activeMatches: 11, 
      gradient: 'from-pink-500 to-pink-600', 
      image: 'https://images.unsplash.com/photo-1593786481097-4b47bf5c8c23?w=400&h=300&fit=crop&crop=center',
      players: '1-2 players'
    },
    { 
      id: 'athletics', 
      name: 'Athletics', 
      emoji: '🏃', 
      type: 'outdoor individual', 
      activeMatches: 6, 
      gradient: 'from-red-500 to-red-600', 
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop&crop=center',
      players: '1 athlete'
    }
  ];

  const filteredCategories = categories.filter(category => {
    if (activeFilter === 'all') return true;
    return category.type.includes(activeFilter);
  });

  const filters = [
    { key: 'all', label: 'All Sports', icon: '🏆' },
    { key: 'outdoor', label: 'Outdoor', icon: '🌞' },
    { key: 'indoor', label: 'Indoor', icon: '🏢' },
    { key: 'team', label: 'Team Sports', icon: '👥' },
    { key: 'individual', label: 'Individual', icon: '👤' }
  ];

  return (
    <main className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-text-glow">
              Sports Categories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your sport and start building your team. Each game has its own team structure and player requirements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex flex-wrap gap-2 border border-white/20 glass-morphism">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`category-tab px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.key 
                    ? 'active bg-gradient-to-r from-primary to-purple-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Link key={category.id} to={`/game/${category.id}`} className="category-card group">
              <div className={`relative bg-gradient-to-br ${category.gradient} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl`}>
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                     style={{ backgroundImage: `url('${category.image}')` }}>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Game Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  
                  {/* Game Name */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Game Info */}
                  <div className="space-y-2 mb-4">
                    <p className="text-white/80 text-sm">{category.players}</p>
                    <p className="text-white/70 text-xs capitalize">
                      {category.type.replace('outdoor ', '').replace('indoor ', '')}
                    </p>
                  </div>
                  
                  {/* Active Matches */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{category.activeMatches} Active</span>
                    </div>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                      {category.type.includes('team') ? 'Team' : 'Individual'}
                    </span>
                  </div>
                  
                  {/* Join Button */}
                  <button className="w-full bg-white/20 hover:bg-white/30 group-hover:bg-white/40 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/30 group-hover:border-white/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    <span>View Teams</span>
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Platform Statistics
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {categories.reduce((sum, cat) => sum + cat.activeMatches, 0)}
              </div>
              <div className="text-gray-300 text-sm">Total Active Matches</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{categories.length}</div>
              <div className="text-gray-300 text-sm">Sports Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {categories.filter(cat => cat.type.includes('team')).length}
              </div>
              <div className="text-gray-300 text-sm">Team Sports</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {categories.filter(cat => cat.type.includes('individual')).length}
              </div>
              <div className="text-gray-300 text-sm">Individual Sports</div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No sports found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your filters to see more sports categories.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
            >
              Show All Sports
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Categories;