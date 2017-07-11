import Model from '../models/solution';

import preSave from './utils';

preSave(Model, 'name', () => {
    this.themes.forEach(
        (theme) => {
            theme.name = sanitizeHtml(theme.name);
            theme.img = sanitizeHtml(theme.img);
        }
    )
    this.resources.forEach(
        (resource) => {
            resource.type = sanitizeHtml(resource.type);
            resource.url = sanitizeHtml(resource.url);
        }
    )
});
