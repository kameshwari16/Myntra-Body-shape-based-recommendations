const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/body-shape-recommendations', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the product schema and model
const productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productImage: String,
  productColor: String,
  suitableForBodyShape: [{ type: String }],
  suitableForSkinTone: [{ type: String }],
  productPrice: Number,
  productBrand: String,
});

const Product = mongoose.model('Product', productSchema);

// Middleware
app.use(express.json());
app.use(cors());


// Prediction function
function predictBodyShape(height, bustSize, waistSize, hipsSize) {
  const bustToWaistRatio = bustSize / waistSize;
  const waistToHipRatio = waistSize / hipsSize;
  const bustToHipRatio = bustSize / hipsSize;

  if (bustToWaistRatio > 1.25 && waistToHipRatio < 0.8) {
    return 'Hourglass';
  } else if (bustToWaistRatio > 1.25 && hipsSize > bustSize) {
    return 'Top Hourglass';
  } else if (waistToHipRatio < 0.8 && hipsSize > bustSize) {
    return 'Pear';
  } else if (bustToWaistRatio <= 1.25 && bustToHipRatio <= 1.25 && waistToHipRatio >= 0.8 && waistToHipRatio <= 1.0) {
    return 'Rectangle';
  } else if (bustSize > hipsSize && bustSize > waistSize) {
    return 'Apple';
  } else if (bustSize > hipsSize && bustSize < waistSize) {
    return 'Inverted Triangle';
  } else if (waistSize > bustSize && waistSize > hipsSize) {
    return 'Diamond';
  } else if (waistSize > bustSize && hipsSize > bustSize && waistSize > hipsSize) {
    return 'Oval';
  } else {
    return 'Undefined';
  }
}

//fetching all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Route to get recommendations
app.post('/recommendations', async (req, res) => {
  const { height, bustSize, waistSize, hipsSize, skinTone } = req.body;
  const bodyShape = predictBodyShape(height, bustSize, waistSize, hipsSize);
  try {
    const products = await Product.find({
      suitableForBodyShape: { $in: [bodyShape] },
      suitableForSkinTone: { $in: [skinTone] },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/body-shape-recommendations', { useNewUrlParser: true, useUnifiedTopology: true });

// const productSchema = new mongoose.Schema({
//   productId: String,
//   productName: String,
//   productImage: String,
//   productColor: String,
//   suitableForBodyShape: [{ type: String }],
//   suitableForSkinTone: [{ type: String }],
//   productPrice: Number,
//   productBrand: String
// });

// const Product = mongoose.model('Product', productSchema);

// app.use(express.json());

// app.post('/recommendations', (req, res) => {
//      const { height, bustSize, waistSize, hipsSize, skinTone } = req.body;
//      const bodyShape = predictBodyShape(height, bustSize, waistSize, hipsSize);
//      const products = Product.find({
//        suitableForBodyShape: { $in: [bodyShape] },
//        suitableForSkinTone: { $in: [skinTone] }
//      });
//      res.json(products);
//    });

// app.listen(3001, () => {
//   console.log('Server listening on port 3001');
// });

// function predictBodyShape(height, bustSize, waistSize, hipsSize) {
//   // Implement your body shape prediction algorithm here
//   // For example, you can use a simple algorithm like this:
//   if (bustSize > waistSize && hipsSize > waistSize) {
//     return 'Hourglass';
//   } else if (bustSize < waistSize && hipsSize < waistSize) {
//     return 'Rectangle';
//   } else {
//     return 'Triangle';
//   }
// }