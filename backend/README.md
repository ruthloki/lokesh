# LOKESH Sports Arena - Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Start Production Server
```bash
npm start
```

## API Endpoints

### Football Teams
- **GET** `/api/football/teams`
- **Description**: Returns 10 football teams
- **Response**:
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Manchester United" },
    { "id": 2, "name": "Liverpool FC" }
  ],
  "message": "Football teams retrieved successfully"
}
```

### Health Check
- **GET** `/api/health`
- **Description**: Server health status
- **Response**:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-30T10:00:00.000Z"
}
```

## Environment Variables
Create a `.env` file in the backend directory:
```
PORT=5000
NODE_ENV=development
```

## Server Details
- **Port**: 5000 (default)
- **CORS**: Enabled for all origins
- **Error Handling**: Comprehensive error middleware
- **Response Format**: Consistent JSON structure