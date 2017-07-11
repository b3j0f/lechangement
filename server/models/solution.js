import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    admins: { type: 'Array', required: true },
    name: { type: 'String', required: true, unique: true, index: 'text' },
    description: { type: 'String', required: true, index: 'text' },
    themes: { type: 'Array', required: true },
    resources: { type: 'Array', required: true },
    slug: { type: 'String', required: true, unique: true, index: 'hashed' },
    cuid: { type: 'String', required: true, unique: true, index: 'hashed' },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    dateModified: { type: 'Date', default: Date.now, required: true },
});

schema.index({'themes.name': 'text'});
schema.index({'resources.type': -1});

const model = mongoose.model('Solution', schema);

export default model;
