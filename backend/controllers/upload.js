const upload = require('../helpers/fileUpload');
const File = require('../models/files');

// Get path from .env
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const uploadPath = process.env.UPLOAD_PATH;

module.exports.uploadFile = (req, res) => {

    // UPLOAD FILE
    upload.single('file')(req, res, async (err) => {

        // Check duplicates based on name and size
        const fileExists = await File.findOne({ 
            filename: req.file.originalname, 
            size: req.file.size 
        });

        if (fileExists) {
            console.log('WARNING: File with the same name and size already exists');
            // return res.status(400).json({ error: 'File with the same name and size already exists' });
        }

        // Error catch
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Log new filepath
        filepath = path.join(uploadPath, req.file.filename);
        console.log(`File uploaded to: ${filepath}`);

        // Log metadata
        try {
            const file = new File({
                filename: req.file.originalname,
                filetype: req.file.mimetype,
                size: req.file.size,
                filepath: filepath
                // upload_by: req.user._id
            });

            await file.save();
            res.status(200).json({ message: 'File uploaded successfully', file: file});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

module.exports.uploadFilePair = (req, res) => {
    upload.array('files', 2)(req, res, async (err) => {

        // Error catch
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Log metadata
        try {
            const files = req.files.map(file => ({
                filename: file.originalname,
                filetype: file.mimetype,
                size: file.size,
                paired: true,
                filepath: path.join(uploadPath, file.filename)
                // upload_by: req.user._id
            }));
            await File.insertMany(files);
            res.status(200).json({ message: 'Files uploaded successfully', files: files });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};
