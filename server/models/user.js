import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
    username: { type: 'String', required: true, unique: true, index: 'text' },
    avatar: { type: 'String', required: true },
  slug: { type: 'String', required: true, unique: true, index: 'hashed' },
  cuid: { type: 'String', required: true, unique: true, index: 'hashed' },
  dateAdded: { type: 'Date', default: Date.now, required: true, index: -1 },
  lastLogin: { type: 'Date', default: Date.now, required: true, index: -1 },
  moderator: { type: 'Boolean', default: false }
});

const model = mongoose.model('User', schema);

export default model;
