import express from "express";
import {getProducts,addProduct, deleteProduct,updateProduct} from "../controllers/productController.js";

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;