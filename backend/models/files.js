const { Schema, model } = require('mongoose');
const fs = require('fs');
const path = require('path');

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    upload_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    upload_at: {
        type: Date,
        default: Date.now
    },
    paired: {
        type: Boolean,
        default: false
    },
    filepath: {
        type: String,
        required: false
    }
    /* ADD NEXT
    hashkey: {
      type: String,
      required: true
    }
    */
});

// Post hook to delete file from uploads directory
fileSchema.post('findOneAndDelete', async function(doc) {
    if (doc && doc.filepath) {
        const filePath = path.join(__dirname, '../', doc.filepath);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Failed to delete file: ${filePath}`, err);
            } else {
                console.log(`Successfully deleted file: ${filePath}`);
            }
        });
    }
});

// Model and export
const File = model('File', fileSchema);
module.exports = File;

