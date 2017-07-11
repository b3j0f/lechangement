import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  message: { type: 'String', required: true, index: 'text' },
  username: { type: 'String', required: true, index: 'text' },
  dateAdded: { type: 'Date', default: Date.now, required: true, index: -1 },
});

const model = mongoose.model('Reason', schema);

export default model;
