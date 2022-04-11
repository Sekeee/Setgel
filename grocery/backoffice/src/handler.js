export const addProduct = async (req, res) => {
  console.log(req.body);
  // create item in firestore using request body TODO

  res.status(200).send({
    success: true,
    itemcreated: true,
  });
};
