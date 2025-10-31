# Weather App

A simple and clean weather application that shows current weather conditions based on latitude and longitude coordinates.

## Features

- Real-time weather data
- Clean and responsive UI
- Displays temperature, wind speed, and weather conditions
- Error handling and loading states

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/StandByPlease/Experiment5.git
cd Experiment5
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5002
```

4. Start the server:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:5002/weather.html
```

## Technologies Used

- Express.js
- MongoDB
- HTML/CSS
- Fetch API

## Usage

1. Enter the latitude and longitude of your desired location
2. Click "Get Weather"
3. View the current weather conditions including:
   - Temperature in Celsius
   - Wind speed in km/h
   - Weather description