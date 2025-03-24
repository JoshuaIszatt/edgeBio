const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  notification: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'finished'],
    required: true
  },
  logging_level: {
    type: String,
    enum: ['debug', 'info', 'warning', 'error', 'fatal'],
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Model and export
const Notification = model('Notification', notificationSchema);
module.exports = Notification;
