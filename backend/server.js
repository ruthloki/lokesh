const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Football teams data
const footballTeams = [
  { id: 1, name: 'Manchester United' },
  { id: 2, name: 'Liverpool FC' },
  { id: 3, name: 'Chelsea FC' },
  { id: 4, name: 'Arsenal FC' },
  { id: 5, name: 'Manchester City' },
  { id: 6, name: 'Tottenham Hotspur' },
  { id: 7, name: 'Newcastle United' },
  { id: 8, name: 'Brighton & Hove Albion' },
  { id: 9, name: 'Aston Villa' },
  { id: 10, name: 'West Ham United' }
];

// API Routes
app.get('/api/football/teams', (req, res) => {
  try {
    // Simulate network delay for realistic loading state
    setTimeout(() => {
      res.json({
        success: true,
        data: footballTeams,
        message: 'Football teams retrieved successfully'
      });
    }, 800);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve football teams',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Football teams: http://localhost:${PORT}/api/football/teams`);
});

module.exports = app;