import express from "express";
import cors from "cors";
import { myHandler } from "../backoffice/src/handler";
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.post("/api/test", myHandler);

// List products
// Can be filtered by categoryId, userId
app.get("/api/get/products", async (req, res) => {
  // DB query mock
  const returnData = [
    {
      id: 1,
      name: "Coke",
      proce: "4",
    },
    {
      id: 2,
      name: "Burger",
      proce: "5",
    },
    {
      id: 3,
      name: "Fries",
      proce: "3",
    },
  ];

  res.status(200).send(returnData);
});
app.post("/api/add/product", async (req, res) => {
  console.log(req.body);
  // create item in firestore using request body TODO

  res.status(200).send({
    success: true,
    itemcreated: true,
  });
});

app.get("/api/add/product", async (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
