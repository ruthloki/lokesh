import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGameConfig } from '../utils/teamGenerator';

const TeamManagement = () => {
  const { gameType, teamNumber } = useParams();
  const navigate = useNavigate();
  const [gameConfig, setGameConfig] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (gameType) {
      const config = getGameConfig(gameType);
      setGameConfig(config);
      
      // Initialize players based on game type
      const playerCount = getPlayerCount(gameType);
      const initialPlayers = Array.from({ length: playerCount }, (_, index) => ({
        id: index + 1,
        name: '',
        number: index + 1,
        role: index === 0 ? 'Captain' : (gameType === 'football' && index === 1) ? 'Goalkeeper' : 'Player'
      }));
      setPlayers(initialPlayers);
    }
  }, [gameType]);

  const getPlayerCount = (gameType) => {
    const playerCounts = {
      football: 11,
      basketball: 5,
      volleyball: 6,
      cricket: 11,
      tennis: 1,
      badminton: 1,
      'table-tennis': 1,
      athletics: 1,
      swimming: 1,
      boxing: 1,
      golf: 1,
      'martial-arts': 1
    };
    return playerCounts[gameType] || 11;
  };

  const handlePlayerChange = (playerId, field, value) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId ? { ...player, [field]: value } : player
    ));
  };

  const handleSaveTeam = async () => {
    // Validate that all players have names
    const emptyPlayers = players.filter(player => !player.name.trim());
    if (emptyPlayers.length > 0) {
      alert(`Please fill in names for all ${players.length} players.`);
      return;
    }

    setLoading(true);
    
    // Simulate saving to database
    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      
      // Show success message
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 1500);
  };

  const getRoleOptions = (gameType) => {
    const roleOptions = {
      football: ['Player', 'Captain', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
      basketball: ['Player', 'Captain', 'Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
      volleyball: ['Player', 'Captain', 'Setter', 'Outside Hitter', 'Middle Blocker', 'Opposite', 'Libero'],
      cricket: ['Player', 'Captain', 'Wicket Keeper', 'Batsman', 'Bowler', 'All Rounder'],
      default: ['Player', 'Captain']
    };
    return roleOptions[gameType] || roleOptions.default;
  };

  if (!gameConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-white mb-4">Game Not Found</h2>
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
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>Back to Teams</span>
          </button>
        </div>

        {/* Header */}
        <div className={`bg-gradient-to-r ${gameConfig.gradient} rounded-3xl p-8 mb-8 text-white`}>
          <div className="text-center">
            <div className="text-6xl mb-4">{gameConfig.emoji}</div>
            <h1 className="text-4xl font-bold mb-2">Team {teamNumber}</h1>
            <p className="text-xl opacity-90 mb-4">{gameConfig.name} Squad</p>
            <p className="text-sm opacity-80">Add {players.length} players to complete your team</p>
          </div>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-8 bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="font-medium">Team saved successfully!</span>
            </div>
          </div>
        )}

        {/* Players Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Player Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {players.map((player) => (
              <div key={player.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${gameConfig.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                    {player.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white">Player {player.number}</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Player Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Player Name *
                    </label>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => handlePlayerChange(player.id, 'name', e.target.value)}
                      placeholder="Enter player name"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Player Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Position/Role
                    </label>
                    <select
                      value={player.role}
                      onChange={(e) => handlePlayerChange(player.id, 'role', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      {getRoleOptions(gameType).map((role) => (
                        <option key={role} value={role} className="bg-gray-800 text-white">
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Role Badge */}
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      player.role === 'Captain' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      player.role === 'Goalkeeper' || player.role === 'Wicket Keeper' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {player.role}
                    </span>
                    {player.role === 'Captain' && (
                      <span className="text-yellow-400 text-sm">👑</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleSaveTeam}
              disabled={loading}
              className="bg-primary hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span>Saving Team...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Save Team</span>
                </>
              )}
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Make sure all player names are filled before saving
            </p>
          </div>
        </div>

        {/* Team Summary */}
        <div className="mt-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Team Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{players.length}</div>
              <div className="text-sm text-gray-300">Total Players</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {players.filter(p => p.role === 'Captain').length}
              </div>
              <div className="text-sm text-gray-300">Captains</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {players.filter(p => p.name.trim()).length}
              </div>
              <div className="text-sm text-gray-300">Named Players</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">
                {players.filter(p => !p.name.trim()).length}
              </div>
              <div className="text-sm text-gray-300">Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;