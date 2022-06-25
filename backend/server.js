import express from 'express';
import data from './data.js';
import path from 'path';

const app = express();

const __dirname = path.resolve();
console.log(__dirname);

/* app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
); */

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
