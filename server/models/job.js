import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: 'String', required: true, index: 'text' },
  description: { type: 'String', required: true, index: 'text' },
  type: { type: 'String', required: true, index: 'text' },
  slug: { type: 'String', required: true, unique: true, index: 'hashed' },
  cuid: { type: 'String', required: true, unique: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', index: -1 },
  duration: { type: 'Number' },
  startDate: { type: 'Date', index: -1 }
});

const model = mongoose.model('Job', schema);

export default model;
