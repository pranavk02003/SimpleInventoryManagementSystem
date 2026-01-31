import express from "express";
import productRoute from "./routes/productsRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Inventory Management System API");
});

// Product routes
app.use("/", productRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});