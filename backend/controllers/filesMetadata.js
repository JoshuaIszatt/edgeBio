const File = require('../models/files');

module.exports.getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json({ files: files });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.deleteFile = async (req, res) => {
    try {
        const id = req.params.id;
        const file = await File.findByIdAndDelete(id);
        res.status(200).json({ message: "File removed" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
