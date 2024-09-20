import path from 'path';
import fs from 'fs';

// Implement saveLogFile function
function saveLogFile(logText) {
    // Create a path for the destination file
    const logDir = path.join(process.cwd(), 'logs');
    // Define filePath 
    const filePath = path.join(logDir, 'log.log'); 

    // If logDir does not exist, create it
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // Save log text to the logfile
    fs.appendFileSync(filePath, logText + '\n');
}

// Implement logger function
export default function Logger(req, res, next) {
    // Logger text section

    // Get request method
    const method = req.method;

    // Get original URL
    const originalUrl = req.originalUrl;


    // Get current time
    const startTime = Date.now();

    // Logger section
    res.on('finish', () => {
        // Request completion time
        const duration = Date.now() - startTime; 

         // Get status code 
        const status = res.statusCode

        // Format log text
        const logText = `${method} ${originalUrl} : ${status} : ${duration}ms`;

        // Save logText to logFile with saveLogFile function
        saveLogFile(logText);

        // Log to console
        console.log(logText);
    });

    next();
}
