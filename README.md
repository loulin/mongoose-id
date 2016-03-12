Mongoose id Plugin
==========================

Simple plugin for [Mongoose](https://github.com/LearnBoost/mongoose) which replaces document attribute _id with id.

## Installation

`npm install mongoose-id`

## Usage

```javascript
var mongoose = require('mongoose');
var idPlugin = require('mongoose-id');
var UserSchema = new mongoose.Schema({
    username: String
});
UserSchema.plugin(idPlugin);
mongoose.model('User', UserSchema);
```

By default, it will transform the document for both toJSON and toObject methods. You can disable any one by setting its option to false:

```javascript
mongoose.plugin(idPlugin, {
  toJSON: false
});
```
Don't transform document for toJSON() of all schemas.

Setting options.remove to true will remove the id attribute:

```javascript
UserSchema.plugin(idPlugin, {
  remove: true
});
```

## License

The MIT License
