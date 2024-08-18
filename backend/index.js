import express from "express";
import cors from "cors";
import multer from "multer";
import jwt from "jsonwebtoken";
import path from "path";
import mongoose from "mongoose";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;

//Api create

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

//Image upload

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating Upload Endpoint for images

app.use("./images", express.static("./upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type:Number,
    required:true,
  },
  old_price: {
    type:Number,
    required:true,
  },
  date: {
    type:Date,
    default:Date.now,
  },
  available: {
    type:Boolean,
    default:true,
  }
});


app.post('/addproduct', async (req, res) => {
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("save");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Database Conection

mongoose.connect(
  "mongodb+srv://akilapiyumal11:Apdjp1010@cluster0.aof71.mongodb.net/e-commerce"
);

app.listen(port, (error) => {
  if (!error) {
    console.log("Server runinnimg " + port);
  } else {
    console.log(error);
  }
});
