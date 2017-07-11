import sanitizeHtml from 'sanitize-html';
import slug from 'limax';

export function getMany(model, req, res, sort) {
    // get vars
    const elt = model.schema.obj;
    const modelName = model.modelName.toLowerCase();
    const reqElt = req.body[modelName];

    // construct query
    const query = {};
    Object.keys(elt).forEach(
        (field) => {
            if (reqElt[field] !== undefined) {
                query[field] = reqElt[field];
            }
        }
    );

    // get documents
    let request = model.find(query);

    const defaultSort = elt.dateModified ? '-dateModified' : (elt.dateAdded ? '-dateAdded' : undefined);

    let finalSort = req.body.sort || sort || defaultSort;

    if (finalSort) {
        request = request.sort(finalSort);
    }

    request.exec((err, elts) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ elts });
    });
}

export function saveOrUpdate(model, req, res) {
    const obj = model.schema.obj;
    const elt = req.body[name];

    const name = model.constructor.name.toLowerCase();

    // check 403
    for(const field in obj) {
        if (obj.required) {
            if (! elt[field]) {
                res.status(403).end();
            }
        }
    }

    let modelElt;

    // get model elt
    if (req.params.cuid) {
        modelElt = model.findOne({cuid: req.params.cuid});
        for(const field in elt) {
            modelElt[field] = elt[field];
        }
    } else {
        modelElt = new model(elt);
    }

    modelElt.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        const json = {};
        json[`${name}`] = saved;
        res.json(json);
    });

}

export function getOne(model, req, res) {
    model.findOne({ cuid: req.params.cuid }).exec((err, elt) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ elt });
    });
}

export function removeOne(model, req, res) {
    model.findOneAndRemove({ cuid: req.params.cuid }).exec((err, elt) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).end();
    });
}
