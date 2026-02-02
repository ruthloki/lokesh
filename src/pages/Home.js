import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '../components/Logo';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const slides = [
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const categories = [
    { id: 'football', name: 'Football', emoji: '⚽', type: 'outdoor team', active: 15, gradient: 'from-green-500 to-green-600' },
    { id: 'basketball', name: 'Basketball', emoji: '🏀', type: 'indoor team', active: 10, gradient: 'from-purple-500 to-purple-600' },
    { id: 'tennis', name: 'Tennis', emoji: '🎾', type: 'outdoor individual', active: 12, gradient: 'from-orange-500 to-orange-600' },
    { id: 'cricket', name: 'Cricket', emoji: '🏏', type: 'outdoor team', active: 8, gradient: 'from-blue-500 to-blue-600' },
    { id: 'volleyball', name: 'Volleyball', emoji: '🏐', type: 'indoor team', active: 7, gradient: 'from-teal-500 to-teal-600' },
    { id: 'table-tennis', name: 'Table Tennis', emoji: '🏓', type: 'indoor individual', active: 9, gradient: 'from-indigo-500 to-indigo-600' },
    { id: 'badminton', name: 'Badminton', emoji: '🏸', type: 'indoor individual', active: 11, gradient: 'from-pink-500 to-pink-600' },
    { id: 'athletics', name: 'Athletics', emoji: '🏃', type: 'outdoor individual', active: 6, gradient: 'from-red-500 to-red-600' }
  ];

  const filteredCategories = categories.filter(category => {
    if (activeCategory === 'all') return true;
    return category.type.includes(activeCategory);
  });

  return (
    <div className="relative z-10">
      {/* Hero Section with Sports Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sports Image Slideshow Background */}
        <div className="absolute inset-0 z-0">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url('${slide}')` }}
              >
                <div className="slide-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            {/* Featured Logo */}
            <div className="flex justify-center mb-8">
              <AnimatedLogo size="xl" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-glow">
                Future of
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Sports</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Experience next-generation tournament management with AI-powered analytics, 
              real-time streaming, and immersive fan engagement.
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-2">
                <span>Start Tournament</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
            <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 border border-white/30">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-gray-200">Active Players</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-200">Tournaments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-gray-200">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-200">Live Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories Section */}
      <section className="relative z-10 py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-text-glow">
                Game Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from a wide variety of indoor and outdoor sports tournaments
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex space-x-2 border border-white/20 glass-morphism">
              {['all', 'outdoor', 'indoor'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-tab px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category ? 'active' : ''
                  }`}
                >
                  {category === 'all' ? 'All Sports' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link key={category.id} to={`/game/${category.id}`} className="category-card">
                <div className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className="text-4xl mb-4">{category.emoji}</div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.type.replace('outdoor ', '').replace('indoor ', '')}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{category.active} Active</span>
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                      View Teams
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="relative z-10 py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
                Live Matches
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience real-time action with live scores and match updates
            </p>
          </div>

          <div className="space-y-6">
            {/* Featured Live Match */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300 hover:shadow-xl glass-morphism hover:bg-white/15">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-accent">LIVE</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Champions League - Semi Final</p>
                    <p className="text-gray-300 text-sm">Stadium: Wembley • 85,000 viewers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary font-bold">85' min</p>
                  <p className="text-gray-300 text-sm">2nd Half</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    FC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Fire Cats</h3>
                    <p className="text-gray-300 text-sm">England Premier</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold text-white live-score">2 - 1</div>
                  <div className="flex space-x-4 mt-2">
                    <div className="text-center">
                      <span className="text-primary font-bold">65%</span>
                      <span className="block text-gray-300 text-xs">Possession</span>
                    </div>
                    <div className="text-center">
                      <span className="text-accent font-bold">8</span>
                      <span className="block text-gray-300 text-xs">Shots</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-right">
                  <div>
                    <h3 className="text-xl font-bold text-white">Thunder Hawks</h3>
                    <p className="text-gray-300 text-sm">Spain La Liga</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    TH
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm transition-all duration-300">
                  Watch Stream
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl text-sm transition-all duration-300">
                  Match Stats
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Standings Section */}
      <section className="py-20 bg-white/5 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Tournament Standings
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Live updated standings and team statistics from active tournaments
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20 glass-morphism">
            <div className="px-6 py-4 bg-white/5 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Football Championship - Group A</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Played</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Won</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Lost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">GD</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="winner-row bg-gradient-to-r from-yellow-50/10 to-yellow-100/10 animate-winner-glow">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-lg">FC</div>
                        <span className="font-bold text-white">Fire Cats 🏆</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">4</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">+8</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">12</td>
                  </tr>
                  <tr className="bg-green-500/10">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-gray-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">TH</div>
                        <span className="font-medium text-white">Thunder Hawks</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">+3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;