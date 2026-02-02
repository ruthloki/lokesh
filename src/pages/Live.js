import React, { useState, useEffect } from 'react';

const Live = () => {
  const [liveMatches, setLiveMatches] = useState([
    {
      id: 1,
      title: 'Champions League Final',
      venue: 'Wembley Stadium',
      viewers: '89,000',
      time: '87\' min',
      period: '2nd Half',
      team1: { name: 'Fire Cats', code: 'FC', league: 'England Premier League', gradient: 'from-blue-500 to-blue-600' },
      team2: { name: 'Thunder Hawks', code: 'TH', league: 'Spain La Liga', gradient: 'from-red-500 to-red-600' },
      score: '3 - 2',
      stats: [
        { label: 'Possession', team1: '68%', team2: '32%' },
        { label: 'Shots', team1: '12', team2: '8' },
        { label: 'Corners', team1: '5', team2: '3' }
      ]
    },
    {
      id: 2,
      title: 'Pro Basketball',
      venue: 'Madison Square',
      viewers: '42K',
      time: 'Q4 - 2:15',
      period: 'Final Quarter',
      team1: { name: 'Storm Lions', code: 'SL', league: 'Eastern Conf.', gradient: 'from-green-500 to-green-600' },
      team2: { name: 'Night Eagles', code: 'NE', league: 'Western Conf.', gradient: 'from-purple-500 to-purple-600' },
      score: '98 - 102',
      stats: [
        { label: 'FG%', team1: '45%', team2: '52%' },
        { label: '3PT', team1: '12', team2: '15' }
      ]
    },
    {
      id: 3,
      title: 'Tennis Open',
      venue: 'Centre Court',
      viewers: '28K',
      time: 'Set 3',
      period: '5-4',
      team1: { name: 'A. Smith', code: 'AS', league: 'Rank #12', gradient: 'from-orange-500 to-orange-600' },
      team2: { name: 'M. Johnson', code: 'MJ', league: 'Rank #8', gradient: 'from-teal-500 to-teal-600' },
      score: '6-4, 4-6, 5-4',
      stats: [
        { label: 'Sets', team1: '1', team2: '1' }
      ]
    },
    {
      id: 4,
      title: 'T20 Championship',
      venue: 'Lords Cricket',
      viewers: '67K',
      time: 'Over 15.3',
      period: '2nd Innings',
      team1: { name: 'Royal Kings', code: 'RK', league: 'Target: 165', gradient: 'from-blue-500 to-blue-600' },
      team2: { name: 'Super Stars', code: 'SS', league: '164/8 (20 overs)', gradient: 'from-indigo-500 to-indigo-600' },
      score: '142/6',
      stats: [
        { label: 'Need', team1: '23 in 28 balls', team2: '' }
      ]
    }
  ];

  // Simulate live score updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMatches(prev => prev.map(match => {
        if (Math.random() > 0.9) { // 10% chance to update
          // Simple score update simulation
          return { ...match, time: match.time }; // Keep same for demo
        }
        return match;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-green-400 to-teal-400 bg-clip-text text-transparent animate-text-glow">
              Live Matches
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real-time action with live scores, match updates, and streaming
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-3xl font-bold text-accent mb-2">12</div>
            <div className="text-gray-300">Live Now</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">156K</div>
            <div className="text-gray-300">Total Viewers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
            <div className="text-gray-300">Sports Active</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24</div>
            <div className="text-gray-300">Upcoming</div>
          </div>
        </div>

        {/* Live Matches */}
        <div className="space-y-6">
          {/* Featured Live Match */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 glass-morphism hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-accent">LIVE • FEATURED</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{liveMatches[0].title}</h3>
                  <p className="text-gray-300">{liveMatches[0].venue} • {liveMatches[0].viewers} viewers</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-accent font-bold text-lg">{liveMatches[0].time}</p>
                <p className="text-gray-300">{liveMatches[0].period}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${liveMatches[0].team1.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                  {liveMatches[0].team1.code}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{liveMatches[0].team1.name}</h4>
                  <p className="text-gray-300">{liveMatches[0].team1.league}</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-8xl font-bold text-white live-score mb-4">{liveMatches[0].score}</div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  {liveMatches[0].stats.map((stat, index) => (
                    <div key={index}>
                      <span className="text-2xl font-bold text-blue-400">{stat.team1}</span>
                      <span className="block text-gray-300 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-right">
                <div>
                  <h4 className="text-2xl font-bold text-white">{liveMatches[0].team2.name}</h4>
                  <p className="text-gray-300">{liveMatches[0].team2.league}</p>
                </div>
                <div className={`w-20 h-20 bg-gradient-to-r ${liveMatches[0].team2.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                  {liveMatches[0].team2.code}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Watch Live Stream</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Match Stats
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Commentary
              </button>
            </div>
          </div>

          {/* Other Live Matches Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.slice(1).map((match) => (
              <div
                key={match.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 bg-accent/20 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-accent">LIVE</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{match.title}</h4>
                      <p className="text-gray-300 text-sm">{match.venue} • {match.viewers} viewers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-bold">{match.time}</p>
                    <p className="text-gray-300 text-sm">{match.period}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${match.team1.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                      {match.team1.code}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">{match.team1.name}</h5>
                      <p className="text-gray-300 text-sm">{match.team1.league}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white live-score">{match.score}</div>
                    {match.stats[0] && (
                      <div className="text-sm text-gray-300">{match.stats[0].label}: {match.stats[0].team1}</div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 text-right">
                    <div>
                      <h5 className="font-bold text-white">{match.team2.name}</h5>
                      <p className="text-gray-300 text-sm">{match.team2.league}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${match.team2.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                      {match.team2.code}
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition-all duration-300">
                  Watch Live
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;