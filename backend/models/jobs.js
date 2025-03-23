const { Schema, model } = require('mongoose');
const path = require('path');
const { finished } = require('stream');

const jobSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    priority: {
        type: Boolean,
        default: false
    },
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
        required: true,
        default: 'pending'
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
    },
    finished_at: {
        type: Date,
        default: null
    }
});

jobSchema.pre('save', function(next) {
    if (this.isNew) {
        console.log('A new job has been created:', this._id);
    }
    next();
});

jobSchema.pre('save', function(next) {
    if (this.isModified('status') && this.status === 'finished') {
        this.finished_at = Date.now();
    }
    next();
});

// Model and export
const Job = model('Job', jobSchema);
module.exports = Job;
