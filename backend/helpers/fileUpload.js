const multer = require('multer');
const path = require('path');

// Create multer CONFIG for storage var
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to the 'uploads' directory
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
