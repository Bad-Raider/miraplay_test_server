const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    console.log('email', email);
    console.log('password', password);
    
  });
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
