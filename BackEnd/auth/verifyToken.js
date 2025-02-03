const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('../config');
const logFile = path.join(__dirname, 'login.logs');

function logMessage(message) {
    fs.appendFileSync(logFile, `${new Date().toISOString()} - ${message}\n`);
}

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const message = "Unauthorized access attempt detected";
        console.warn(message);
        logMessage(message);
        return res.status(403).json({ auth: false, message: 'Access denied. Missing or invalid token.' });
    }
    
    const token = authHeader.split('Bearer ')[1];
    
    jwt.verify(token, config.key, (err, decoded) => {
        if (err) {
            const message = `Token verification failed: ${err.message}`;
            console.error(message);
            logMessage(message);
            return res.status(403).json({ auth: false, message: 'Invalid or expired token.' });
        }
        
        req.id = decoded.id;
        next();
    });
}

module.exports = verifyToken;