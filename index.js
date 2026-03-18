import express from "express";

const app = express();
const PORT = 2027;

let products = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/products", (req, res) => {

    const { name, price, size } = req.body;

    if (!name || !price || !size) {
        return res.status(400).send("All fields are required!");

    }
    const product = {name, price, size};

    products.push(product);

    res.status(200).send("Product created successfully")

});

app.put('products/:id', (req, res) => {
  
})

app.get('/all_products', (req, res) =>{
    res.json(products);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:", PORT);
});
