import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    author: { type: 'String', required: true },
    type: { type: 'String', required: true, index: 'text' },
    question: { type: 'String', required: true, unique: true, index: 'text' },
    answer: { type: 'String', index: 'text' },
  slug: { type: 'String', required: true, unique: true, index: 'hashed' },
  cuid: { type: 'String', required: true, unique: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', required: false },
});

const model = mongoose.model('FAQ', schema);

export default model;
