const Job = require('../models/jobs');

// Get path from environment variables
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const uploadPath = process.env.UPLOAD_PATH;

// Import job worker
const sendJobData = require('../helpers/jobWorker');

// Set plugin host and port
host = process.env.test_plugin_HOST || '127.0.0.1';
port = process.env.test_plugin_PORT || 5000;

/*
Job control
*/

module.exports.create_job = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();

        // Send job data after job is created
        try {
            const response = await sendJobData(job, host, port);
            console.log('Job data sent successfully:', response);
        } catch (error) {
            console.error('Error sending job data:', error);
        }

        res.status(201).json({ message: 'Job created', job });
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
}

module.exports.get_jobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ jobs: jobs });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
}

module.exports.delete_job = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (deletedJob) {
            res.status(200).json({ message: 'Job deleted' });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
}
