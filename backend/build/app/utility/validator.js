"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = exports.validator = void 0;
const validator = (source, schema, passthrough = false) => (req, res, next) => {
    try {
        if (passthrough) {
            req[source] = schema.passthrough().parse(req[source]);
        }
        else {
            req[source] = schema.parse(req[source]);
        }
        next();
    }
    catch (e) {
        next({
            statusCOde: 400,
            message: "BAD REQUEST",
            error: e
        });
    }
};
exports.validator = validator;
const body = (schema, passthrough = false) => (0, exports.validator)("body", schema);
exports.body = body;
