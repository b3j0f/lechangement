import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    author: { type: 'String', required: true, index: 'hashed' },
    target: { type: 'String', required: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

schema.index({author: 'hashed', target: 'hashed'}, { unique: true });

const model = mongoose.model('Agreement', schema);

export default model;
