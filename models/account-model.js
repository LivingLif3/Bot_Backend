const { Schema, model } = require('mongoose');

const AccountSchema = new Schema({
  accountLogin: {
    type: String,
    required: true,
  },
  accountSubscribers: {
    type: Array,
    default: [],
  },
  accountPosts: {
    type: Array,
    default: [],
  },
});

module.exports = model('Account', AccountSchema);
