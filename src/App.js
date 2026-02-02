import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
import FootballTeams from './pages/FootballTeams';
import Tournaments from './pages/Tournaments';
import Live from './pages/Live';
import Rankings from './pages/Rankings';
import Categories from './pages/Categories';
import GameDetails from './pages/GameDetails';
import TeamManagement from './pages/TeamManagement';
import Login from './pages/Login';
import Register from './pages/Register';
import JoinTournament from './pages/JoinTournament';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-900 dark:text-white font-inter overflow-x-hidden transition-colors duration-300 relative">
          <AnimatedBackground />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<AllGames />} />
            <Route path="/football/teams" element={<FootballTeams />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/live" element={<Live />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/game/:gameType" element={<GameDetails />} />
            <Route path="/team/:gameType/:teamNumber" element={<TeamManagement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/join-tournament" element={<JoinTournament />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;