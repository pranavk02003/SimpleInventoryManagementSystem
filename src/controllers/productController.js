import { products } from "../constants/products.js";

// GET all products
export const getProducts = (req, res) => {
  res.json(products);
};

// ADD product
export const addProduct = (req, res) => {
  const { productId, productName, description, Stock } = req.body;

  products.push({ productId, productName, description, Stock });

  res.status(201).json({
    message: "Product added successfully"
  });
};

// DELETE product
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex(p => p.productId === id);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// UPDATE product
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);

  products.forEach(product => {
    if (product.productId === id) {
      product.description =
        "Preferred by Both Vegetarians and Non Vegetarians";
    }
  });

  res.json({ message: "Product updated successfully" });
};