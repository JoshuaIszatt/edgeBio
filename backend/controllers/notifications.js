const Notification = require('../models/notifications');
const Job = require('../models/jobs');
const mongoose = require('mongoose');

/*
Notification control
*/

module.exports.get_notifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error getting notifications', error });
    }
}

module.exports.handle_notification = async (req, res) => {
    // NOTIFICATION
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.status(201).json({ message: 'Notification created', notification });
    } catch (error) {
        res.status(500).json({ message: 'Error creating notification', error });
    }

    // JOB STATUS
    try {       
        // Get job by id
        job_id = String(req.body.job);
        const job = await Job.findById(job_id);

        // DEBUG
        // console.log(job_id);

        // DEBUG
        if (!job) {
            console.error('Job not found');
        }

        // DEBUG
        // console.log(job);

        // Change job status
        job.status = req.body.status;
        await job.save();
        console.log(`Job status updated: ${job.status}`);

    } catch (error) {
        console.error(`Could not update job status: ${error}`);
    }
}
