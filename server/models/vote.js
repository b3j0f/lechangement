import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    author: { type: 'String', required: true, index: 'hashed' },
    value: { type: 'Number', required: true },
    solution: { type: 'String', required: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', required: false },
});

schema.index({'author': 1, 'solution': 1}, { unique: true, type: 'hashed' });

const model = mongoose.model('Vote', schema);

export default model;
