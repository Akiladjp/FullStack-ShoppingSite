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
    let products = await product.find({}); 
    let id;

    if(products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id+1;
    }
    else {
      id = 1;
    }

    const product = new Product({
        id:id,
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



//Creating API for deleting

app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log('Successfully romoved');
  res.json({
    success:true,
    name:req.body.name,
  })
})


//getting all products

app.get('/allProducts', async(req, res) => {
  let products = await Product.find({})
  console.log("All Products Fetched");
  res.send(products);
})


// Database Conection

mongoose.connect("mongodb+srv://akilapiyumal11:Apdjp1010@cluster0.aof71.mongodb.net/e-commerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err))

app.listen(port, (error) => {
  if (!error) {
    console.log("Server runinning " + port);
  } else {
    console.log(error);
  }
});
