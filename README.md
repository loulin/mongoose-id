Mongoose id Plugin
==========================

Simple plugin for [Mongoose](https://github.com/LearnBoost/mongoose) which replace document attribute _id with id.

## Installation

`npm install mongoose-id`

## Usage

```javascript
var idPlugin = require('mongoose-id');
var UserSchema = new Schema({
    username: String
});
UserSchema.plugin(idPlugin);
mongoose.model('User', UserSchema);
var User = mongoose.model('User', UserSchema)
```

By default, it will transform the document for both toJSON and toObject methods. You can specify which method should be transformed:

```javascript
mongoose.plugin(idPlugin, 'toJSON');
```
Only transfrom document when call toJSON().

## License

The MIT License
