import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api';

const FootballTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFootballTeams();
  }, []);

  const fetchFootballTeams = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await ApiService.getFootballTeams();
      
      if (response.success) {
        setTeams(response.data);
      } else {
        throw new Error(response.message || 'Failed to fetch teams');
      }
    } catch (err) {
      console.error('Error fetching football teams:', err);
      setError(err.message || 'Failed to load football teams');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchFootballTeams();
  };

  const handleBackToGames = () => {
    navigate('/games');
  };

  // Loading State
  if (loading) {
    return (
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">⚽</div>
            <h1 className="text-4xl font-bold text-white mb-4">Football Teams</h1>
            <p className="text-gray-300">Loading teams...</p>
          </div>

          {/* Loading Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-pulse">
                <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <div className="text-6xl mb-6">❌</div>
            <h2 className="text-3xl font-bold text-white mb-4">Failed to Load Teams</h2>
            <p className="text-gray-300 mb-8">{error}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetry}
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Try Again</span>
              </button>
              <button
                onClick={handleBackToGames}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBackToGames}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>Back to All Games</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 mb-8 text-white">
            <div className="text-8xl mb-4">⚽</div>
            <h1 className="text-5xl font-bold mb-4">Football Teams</h1>
            <p className="text-xl opacity-90">Professional football clubs ready for competition</p>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teams.map((team, index) => (
            <div
              key={team.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Team Logo/Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              {/* Team Name */}
              <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-green-400 transition-colors duration-300">
                {team.name}
              </h3>
              
              {/* Team Info */}
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-4">Professional Club</p>
                
                {/* Action Button */}
                <button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border border-green-500/30 hover:border-green-500/50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Teams Summary */}
        <div className="mt-16 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Teams Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{teams.length}</div>
                <div className="text-gray-300">Total Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">11</div>
                <div className="text-gray-300">Players per Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">90</div>
                <div className="text-gray-300">Minutes per Match</div>
              </div>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleRetry}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            <span>Refresh Teams</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootballTeams;