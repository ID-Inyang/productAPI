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

app.put('/products/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;   // { name, email, age, ... }

  // TODO: Add your database logic here (Mongo, SQL, etc.)
  // Example with fake in-memory data:
  // const user = users.find(u => u.id === userId);
  // if (!user) return res.status(404).json({ error: 'User not found' });

  // user.name = updatedData.name;
  // ... etc

  console.log(`Updating user ${userId} with:`, updatedData);

  res.status(200).json({
    message: 'User updated successfully',
    updatedUser: { id: userId, ...updatedData }
  });
});

app.get('/all_products', (req, res) =>{
    res.json(products);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:", PORT);
});
