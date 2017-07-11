import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  target: { type: 'String', required: true, index: 'hashed' },
  action: { type: 'String', required: true, index: true },
  message: { type: 'String', required: true, index: 'text' },
  author: { type: 'String', required: true },
  slug: { type: 'String', required: true, unique: true, index: 'hashed' },
  cuid: { type: 'String', required: true, unique: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true, index: -1 },
});

const model = mongoose.model('Notification', schema);

export default model;
