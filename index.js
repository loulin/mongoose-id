module.exports = function(schema, options) {
	var methods = options;
	var transform = function(doc, ret) {
		ret.id = ret._id;

		delete ret._id;
		delete ret.__v;
	};

	if (!options) {
		methods = ['toJSON', 'toObject'];
	} else if (typeof options === 'string') {
		methods = [options];
	}

	if (methods.indexOf('toJSON') !== -1) {
		schema.options.toJSON = schema.options.toJSON || {};
		schema.options.toJSON.transform = transform;
		schema.set('toJSON', schema.options.toJSON);
	}

	if (methods.indexOf('toObject') !== -1) {
		schema.options.toObject = schema.options.toObject || {};
		schema.options.toObject.transform = transform;
		schema.set('toObject', schema.options.toObject);
	}
}
