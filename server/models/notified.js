import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  notification: { type: 'String', required: true, index: 'hashed' },
  user: { type: 'String', required: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true, index: -1 },
});

schema.index({notification: 'hashed', author: 'hashed'}, { unique: true});

const model = mongoose.model('Notified', schema);

export default model;
