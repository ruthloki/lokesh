import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { generateTeams, getGameConfig } from '../utils/teamGenerator';

const GameDetails = () => {
  const { gameType } = useParams();
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [gameConfig, setGameConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gameType) {
      setLoading(true);
      setTimeout(() => {
        const config = getGameConfig(gameType);
        const generatedTeams = generateTeams(gameType, 10);
        
        setGameConfig(config);
        setTeams(generatedTeams);
        setLoading(false);
      }, 1000);
    }
  }, [gameType]);

  if (!gameConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
          <p className="text-gray-300 mb-6">The requested game type doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>Back</span>
          </button>
        </div>

        {/* Game Header */}
        <div className={`bg-gradient-to-r ${gameConfig.gradient} rounded-3xl p-8 mb-12 text-white`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-8xl mb-4">{gameConfig.emoji}</div>
              <h1 className="text-5xl font-bold mb-4">{gameConfig.name}</h1>
              <p className="text-xl opacity-90 mb-4">{gameConfig.type}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  👥 {gameConfig.playersPerTeam} players
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  ⏱️ {gameConfig.matchDuration}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  🏟️ {gameConfig.fieldType}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Teams</h2>
          <p className="text-gray-300">Select a team to manage players</p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-pulse">
                <div className="h-6 bg-gray-600 rounded mb-4"></div>
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-8 bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teams.map((team, index) => (
              <div
                key={team.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${team.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-2">Team {index + 1}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{team.name}</p>
                <Link
                  to={`/team/${gameType}/${index + 1}`}
                  className="w-full bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span>Add Players</span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetails;