// Team Generation Utility
export const generateTeams = (gameType, count = 10) => {
  const teamNames = {
    football: [
      'Fire Dragons', 'Thunder Wolves', 'Lightning Bolts', 'Storm Eagles', 
      'Blazing Phoenix', 'Iron Titans', 'Golden Hawks', 'Silver Sharks',
      'Crimson Lions', 'Azure Panthers', 'Emerald Vipers', 'Diamond Falcons'
    ],
    basketball: [
      'Sky Dunkers', 'Court Kings', 'Hoop Masters', 'Slam Warriors',
      'Net Crushers', 'Rim Rockers', 'Ball Blazers', 'Court Legends',
      'Dunk Dynasty', 'Basket Bulls', 'Hoops Heroes', 'Court Commanders'
    ],
    tennis: [
      'Ace Strikers', 'Net Winners', 'Serve Masters', 'Court Aces',
      'Racket Rebels', 'Baseline Bombers', 'Volley Victors', 'Match Point',
      'Tennis Titans', 'Court Crushers', 'Serve Legends', 'Rally Rulers'
    ],
    cricket: [
      'Wicket Warriors', 'Boundary Blasters', 'Six Shooters', 'Run Makers',
      'Pitch Perfect', 'Stumped Stars', 'Cricket Crusaders', 'Ball Bashers',
      'Wicket Wizards', 'Boundary Beasts', 'Cricket Champions', 'Run Raiders'
    ],
    volleyball: [
      'Spike Squad', 'Net Ninjas', 'Volleyball Vipers', 'Serve Slammers',
      'Block Busters', 'Court Crushers', 'Spike Legends', 'Net Masters',
      'Volleyball Victors', 'Spike Storm', 'Net Navigators', 'Court Conquerors'
    ],
    'table-tennis': [
      'Paddle Power', 'Ping Pong Pros', 'Table Titans', 'Spin Masters',
      'Paddle Pirates', 'Table Terrors', 'Ping Legends', 'Pong Warriors',
      'Paddle Perfection', 'Table Toppers', 'Spin Specialists', 'Paddle Panthers'
    ],
    badminton: [
      'Shuttle Smashers', 'Racket Raiders', 'Feather Fighters', 'Court Kings',
      'Shuttle Squad', 'Badminton Beasts', 'Racket Rebels', 'Shuttle Storm',
      'Court Crushers', 'Feather Fury', 'Shuttle Legends', 'Racket Rulers'
    ],
    athletics: [
      'Speed Demons', 'Track Titans', 'Field Fighters', 'Sprint Squad',
      'Marathon Masters', 'Jump Jets', 'Throw Thunders', 'Run Rebels',
      'Track Terrors', 'Field Fury', 'Athletic Aces', 'Speed Stars'
    ],
    swimming: [
      'Wave Riders', 'Pool Sharks', 'Aqua Athletes', 'Swim Squad',
      'Water Warriors', 'Pool Panthers', 'Aqua Aces', 'Swim Stars',
      'Wave Warriors', 'Pool Predators', 'Aqua Avengers', 'Swim Legends'
    ],
    boxing: [
      'Knockout Kings', 'Punch Power', 'Ring Raiders', 'Boxing Beasts',
      'Fight Club', 'Punch Panthers', 'Ring Rulers', 'Boxing Bulls',
      'Knockout Knights', 'Punch Pros', 'Ring Rebels', 'Boxing Legends'
    ],
    golf: [
      'Eagle Eyes', 'Birdie Bombers', 'Par Perfection', 'Golf Gladiators',
      'Tee Titans', 'Fairway Fighters', 'Green Guardians', 'Golf Gods',
      'Eagle Elite', 'Birdie Beasts', 'Par Panthers', 'Golf Legends'
    ],
    'martial-arts': [
      'Dojo Dragons', 'Karate Kings', 'Martial Masters', 'Fight Force',
      'Combat Crusaders', 'Warrior Way', 'Martial Mavericks', 'Dojo Demons',
      'Karate Crushers', 'Combat Champions', 'Martial Legends', 'Fight Fury'
    ]
  };

  const colors = [
    'from-red-500 to-red-600',
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-teal-500 to-teal-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600',
    'from-yellow-500 to-yellow-600',
    'from-cyan-500 to-cyan-600',
    'from-lime-500 to-lime-600',
    'from-rose-500 to-rose-600'
  ];

  const gameTeamNames = teamNames[gameType] || teamNames.football;
  const shuffledNames = [...gameTeamNames].sort(() => Math.random() - 0.5);
  const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

  return Array.from({ length: count }, (_, index) => {
    const teamName = shuffledNames[index % shuffledNames.length];
    const teamColor = shuffledColors[index % shuffledColors.length];
    const abbreviation = teamName.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 3);
    
    return {
      id: `team-${index + 1}`,
      name: teamName,
      abbreviation,
      color: teamColor,
      players: generateRandomNumber(15, 25),
      wins: generateRandomNumber(0, 10),
      losses: generateRandomNumber(0, 10),
      draws: generateRandomNumber(0, 5),
      points: generateRandomNumber(10, 50),
      goalDifference: generateRandomNumber(-10, 15),
      founded: generateRandomYear(),
      captain: generatePlayerName(),
      coach: generateCoachName(),
      homeStadium: generateStadiumName(),
      rating: (Math.random() * 2 + 3).toFixed(1), // Rating between 3.0 and 5.0
      isActive: Math.random() > 0.1 // 90% chance of being active
    };
  });
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomYear = () => {
  return generateRandomNumber(1990, 2020);
};

const generatePlayerName = () => {
  const firstNames = [
    'Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn',
    'Blake', 'Cameron', 'Drew', 'Emery', 'Finley', 'Harper', 'Hayden', 'Jamie'
  ];
  const lastNames = [
    'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez',
    'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor'
  ];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const generateCoachName = () => {
  const coachNames = [
    'Coach Thompson', 'Coach Martinez', 'Coach Anderson', 'Coach Wilson',
    'Coach Garcia', 'Coach Rodriguez', 'Coach Brown', 'Coach Davis',
    'Coach Miller', 'Coach Johnson', 'Coach Williams', 'Coach Jones'
  ];
  return coachNames[Math.floor(Math.random() * coachNames.length)];
};

const generateStadiumName = () => {
  const stadiumPrefixes = [
    'Victory', 'Champion', 'Elite', 'Premier', 'Grand', 'Royal', 'Imperial',
    'Supreme', 'Ultimate', 'Legendary', 'Majestic', 'Spectacular'
  ];
  const stadiumSuffixes = [
    'Arena', 'Stadium', 'Field', 'Court', 'Center', 'Complex', 'Dome',
    'Coliseum', 'Park', 'Ground', 'Venue', 'Hall'
  ];
  
  const prefix = stadiumPrefixes[Math.floor(Math.random() * stadiumPrefixes.length)];
  const suffix = stadiumSuffixes[Math.floor(Math.random() * stadiumSuffixes.length)];
  return `${prefix} ${suffix}`;
};

// Get game configuration
export const getGameConfig = (gameType) => {
  const gameConfigs = {
    football: {
      name: 'Football',
      emoji: '⚽',
      type: 'outdoor team',
      playersPerTeam: '11',
      matchDuration: '90 minutes',
      fieldType: 'Grass Field',
      equipment: ['Football', 'Goals', 'Corner Flags'],
      rules: 'FIFA Standard Rules',
      gradient: 'from-green-500 to-green-600'
    },
    basketball: {
      name: 'Basketball',
      emoji: '🏀',
      type: 'indoor team',
      playersPerTeam: '5',
      matchDuration: '48 minutes (4 quarters)',
      fieldType: 'Indoor Court',
      equipment: ['Basketball', 'Hoops', 'Shot Clock'],
      rules: 'NBA/FIBA Rules',
      gradient: 'from-purple-500 to-purple-600'
    },
    tennis: {
      name: 'Tennis',
      emoji: '🎾',
      type: 'outdoor individual',
      playersPerTeam: '1-2',
      matchDuration: 'Best of 3/5 sets',
      fieldType: 'Tennis Court',
      equipment: ['Tennis Balls', 'Rackets', 'Net'],
      rules: 'ITF Rules',
      gradient: 'from-orange-500 to-orange-600'
    },
    cricket: {
      name: 'Cricket',
      emoji: '🏏',
      type: 'outdoor team',
      playersPerTeam: '11',
      matchDuration: 'T20: 3 hours, ODI: 8 hours',
      fieldType: 'Cricket Ground',
      equipment: ['Cricket Ball', 'Bat', 'Wickets', 'Pads'],
      rules: 'ICC Rules',
      gradient: 'from-blue-500 to-blue-600'
    },
    volleyball: {
      name: 'Volleyball',
      emoji: '🏐',
      type: 'indoor team',
      playersPerTeam: '6',
      matchDuration: 'Best of 5 sets',
      fieldType: 'Indoor Court',
      equipment: ['Volleyball', 'Net', 'Antenna'],
      rules: 'FIVB Rules',
      gradient: 'from-teal-500 to-teal-600'
    },
    'table-tennis': {
      name: 'Table Tennis',
      emoji: '🏓',
      type: 'indoor individual',
      playersPerTeam: '1-2',
      matchDuration: 'Best of 5/7 games',
      fieldType: 'Table Tennis Table',
      equipment: ['Ping Pong Ball', 'Paddles', 'Table', 'Net'],
      rules: 'ITTF Rules',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    badminton: {
      name: 'Badminton',
      emoji: '🏸',
      type: 'indoor individual',
      playersPerTeam: '1-2',
      matchDuration: 'Best of 3 games',
      fieldType: 'Badminton Court',
      equipment: ['Shuttlecock', 'Rackets', 'Net'],
      rules: 'BWF Rules',
      gradient: 'from-pink-500 to-pink-600'
    },
    athletics: {
      name: 'Athletics',
      emoji: '🏃',
      type: 'outdoor individual',
      playersPerTeam: '1',
      matchDuration: 'Varies by event',
      fieldType: 'Track & Field',
      equipment: ['Starting Blocks', 'Hurdles', 'Javelins', 'Shot Put'],
      rules: 'World Athletics Rules',
      gradient: 'from-red-500 to-red-600'
    },
    swimming: {
      name: 'Swimming',
      emoji: '🏊',
      type: 'outdoor individual',
      playersPerTeam: '1',
      matchDuration: 'Varies by distance',
      fieldType: 'Swimming Pool',
      equipment: ['Pool', 'Lane Ropes', 'Starting Blocks'],
      rules: 'World Aquatics Rules',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    boxing: {
      name: 'Boxing',
      emoji: '🥊',
      type: 'indoor individual',
      playersPerTeam: '1',
      matchDuration: '3-12 rounds',
      fieldType: 'Boxing Ring',
      equipment: ['Boxing Gloves', 'Ring', 'Protective Gear'],
      rules: 'Professional Boxing Rules',
      gradient: 'from-sky-500 to-sky-600'
    },
    golf: {
      name: 'Golf',
      emoji: '🏌️',
      type: 'outdoor individual',
      playersPerTeam: '1',
      matchDuration: '4-5 hours (18 holes)',
      fieldType: 'Golf Course',
      equipment: ['Golf Clubs', 'Golf Balls', 'Tees'],
      rules: 'R&A/USGA Rules',
      gradient: 'from-lime-500 to-lime-600'
    },
    'martial-arts': {
      name: 'Martial Arts',
      emoji: '🥋',
      type: 'indoor individual',
      playersPerTeam: '1',
      matchDuration: '3-5 rounds',
      fieldType: 'Dojo/Mat Area',
      equipment: ['Protective Gear', 'Mats', 'Uniforms'],
      rules: 'Various Martial Arts Rules',
      gradient: 'from-stone-500 to-stone-600'
    }
  };

  return gameConfigs[gameType] || gameConfigs.football;
};