const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Trust proxy - needed for rate limiting when behind a reverse proxy
app.set('trust proxy', 1);

// Body parser
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Set security headers
app.use(helmet({
  contentSecurityPolicy: false,
}));

// Enable CORS
app.use(cors());

// Rate limiting
app.use(rateLimiter);

// Mount routers
app.use('/api/v1/tasks', require('./routes/tasks'));

// Use custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));