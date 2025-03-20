const { Schema, model } = require('mongoose');

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

// Model and export
const File = model('File', fileSchema);
module.exports = File;

