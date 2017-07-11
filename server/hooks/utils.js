import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

function preSave(model, slugName, ext) {
    const schema = model.schema;
    schema.pre('save', () => {
        if (ext) {
            ext.call(this);
        }
        const elt = schema.elt;
        for (const field in elt) {
            if(elt[field].type === 'String') {
                this[field] = sanitizeHtml(this[field]);
            }
        }
        if (elt.cuid && !this.cuid) {
            const modelName = model.modelName.toLowerCase();
            this.cuid = `${modelName}-${cuid()}`;
        }
        if (slugName) {
            this.slug = slug(
                this[slugName].toLowerCase(),
                { lowercase: true }
            );
        }
        if (elt.dateModified) {
            this.dateModified = new Date();
        }
    });
}

export default preSave;
