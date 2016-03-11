module.exports = function(schema, options) {
	var methods = options;
	var option = {
		transform: function(doc, ret) {
			ret.id = ret._id;

			delete ret._id;
			delete ret.__v;
		}
	};

	if (!options) {
		methods = ['toJSON', 'toObject'];
	} else if (typeof options === 'string') {
		methods = [options];
	}

	if (methods.indexOf('toJSON') !== -1) {
		schema.set('toJSON', option);
	}

	if (methods.indexOf('toObject') !== -1) {
		schema.set('toObject', option);
	}
}
