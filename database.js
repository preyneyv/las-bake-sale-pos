const mongoose = require('mongoose');
const config = require('./config');

const {Schema} = mongoose;

mongoose.connect(config.dbUri);

const productSchema = new Schema({
  name: String,
  price: Number,
  sold: {
    type: Number,
    default: 0
  }
});

const balanceSchema = new Schema({
  name: String,
  grade: String,
  balance: Number,
  paid: {
    type: Boolean,
    default: false
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = {
  Product: mongoose.model('Product', productSchema),
  Balance: mongoose.model('Balance', balanceSchema),
}