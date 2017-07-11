import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: 'String', required: true, unique: true },
    img: { type: 'String', required: true, unique: true },
});

const model = mongoose.model('ResourceType', schema);

export default model;
