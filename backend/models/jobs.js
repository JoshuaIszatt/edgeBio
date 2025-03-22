const { Schema, model } = require('mongoose');
const path = require('path');

const jobSchema = new Schema({
    /*
    submit_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    */
    files: {
        type: Array,
        ref: 'File',
        required: true
    },
    pipeline: {
        type: String,
        enum: ['phanta', 'phunky', 'test'],
        ref: 'Pipeline',
        required: true
    },
    /*
    configuration: {
        type: Schema.Types.ObjectId,
        ref: 'Configuration',
        required: true
    },
    */
    status: {
        type: String,
        enum: ['pending', 'processing', 'finished'],
        required: true
    },
    /*
    log: [{
        type: Schema.Types.ObjectId,
        ref: 'Notification'
    }],
    */
    created_at: {
        type: Date,
        default: Date.now
    }
});

jobSchema.pre('save', function(next) {
    if (this.isNew) {
        console.log('A new job has been created:', this._id);
    }
    next();
});

// Model and export
const Job = model('Job', jobSchema);
module.exports = Job;
