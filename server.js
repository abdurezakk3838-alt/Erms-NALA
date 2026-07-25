const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { initDatabase } = require('./src/config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SQLite database schema
initDatabase();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend static files
app.use(express.static(path.join(__dirname)));

// API Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/incoming', require('./src/routes/incomingRoutes'));
app.use('/api/outgoing', require('./src/routes/outgoingRoutes'));
app.use('/api/internal', require('./src/routes/internalRoutes'));
app.use('/api/audit', require('./src/routes/auditRoutes'));
app.use('/api/search', require('./src/routes/searchRoutes'));
app.use('/api/reports', require('./src/routes/reportsRoutes'));
app.use('/api/upload', require('./src/routes/uploadRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'UP',
        system: 'NALA ERMS API Backend',
        timestamp: new Date().toISOString()
    });
});

// Fallback to index.html for SPA / static frontend
app.use((req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.status(404).json({ error: 'API endpoint not found' });
    }
});

app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(` NALA ERMS Backend Server running on http://localhost:${PORT}`);
    console.log(` API base: http://localhost:${PORT}/api`);
    console.log(` Database: SQLite initialized`);
    console.log(`=======================================================`);
});
