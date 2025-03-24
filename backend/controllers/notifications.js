const Notification = require('../models/notifications');

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

module.exports.create_notification = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.status(201).json({ message: 'Notification created', notification });
    } catch (error) {
        res.status(500).json({ message: 'Error creating notification', error });
    }
}
