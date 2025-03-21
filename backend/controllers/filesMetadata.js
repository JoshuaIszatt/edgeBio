const File = require('../models/files');

module.exports.getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json({ files: files });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
