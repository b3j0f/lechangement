import Model from '../models/user';

import preSave from './utils';

preSave(Model, 'username');
