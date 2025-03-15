const upload = require('../helpers/fileUpload');
const File = require('../models/files');

module.exports.uploadFile = (req, res) => {

    // UPLOAD FILE
    upload.single('file')(req, res, async (err) => {

        // Check if file with the same filename and size has already been uploaded
        const fileExists = await File.findOne({ 
            filename: req.file.originalname, 
            size: req.file.size 
        });
        if (fileExists) {
            console.log('WARNING: File with the same name and size already exists');
            // return res.status(400).json({ error: 'File with the same name and size already exists' });
        }

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        try {
            const file = new File({
                filename: req.file.originalname,
                filetype: req.file.mimetype,
                size: req.file.size
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
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        try {
            const files = req.files.map(file => ({
                filename: file.originalname,
                filetype: file.mimetype,
                size: file.size,
                paired: true
                // upload_by: req.user._id
            }));
            await File.insertMany(files);
            res.status(200).json({ message: 'Files uploaded successfully', files: files });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};
