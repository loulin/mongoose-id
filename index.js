var util = require('util');

module.exports = function(schema, _options) {
	var options = {
		toJSON: true,
		toObject: true,
		remove: false
	};
	var transform = function(doc, ret) {
		if (!options.remove) {
			ret.id = ret._id;
		}

		delete ret._id;
		delete ret.__v;
	};

	util._extend(options, _options);

	if (options.toJSON) {
		schema.options.toJSON = schema.options.toJSON || {};
		schema.options.toJSON.transform = transform;
		schema.set('toJSON', schema.options.toJSON);
	}

	if (options.toObject) {
		schema.options.toObject = schema.options.toObject || {};
		schema.options.toObject.transform = transform;
		schema.set('toObject', schema.options.toObject);
	}
}
