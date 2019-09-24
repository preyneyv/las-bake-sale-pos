const {
  Product,
  Balance
} = require('./database');

exports.listProducts = async (req, res) => {
  const products = await Product.find({});
  return res.send({
    products
  });
}

exports.makeSale = async (req, res) => {
  const {
    products,
    name,
    grade,
    balance
  } = req.body // get info from post data.

  // update all products
  const updatePromises = products.map(productId =>
    Product.findByIdAndUpdate(productId, {
      $inc: {
        sold: 1
      }
    })
  )
  await Promise.all(updatePromises);

  if (balance) {
    const bal = new Balance({
      name,
      grade,
      balance,
      products
    });
    await bal.save();
  }

  return res.send({
    success: true
  })
}