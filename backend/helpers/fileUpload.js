const multer = require('multer');

// Get path from .env
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const uploadPath = process.env.UPLOAD_PATH;

// Check if the upload directory location exists, if not, create it
const fs = require('fs');
if (!fs.existsSync
    (uploadPath)) {
    fs.mkdirSync(uploadPath);
}

// Create multer CONFIG for storage var
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath); // Save files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + `_${file.originalname}`;
        cb(null, uniqueName); // Save with the original filename
    }
});

// Set the upload const to use multer and storage const
const upload = multer({ storage: storage });

// Export
module.exports = upload;
