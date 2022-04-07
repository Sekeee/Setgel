import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

// GET - Get / List
// POST - Create
// PUT - Replace / edit (update)
// PATCH - Edit (update)
// DELETE - Delete

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send([
        {
            name: 'Banana',
            quantity: '2',
            price: '4.99'
        }, {
            name: 'Apple',
            quantity: '3',
            price: '7.99'
        }
    ]);
});

app.post('/addProduct', (req, res) => {
    console.log(req.body)
    res.send([
        {
            name: 'Banana',
            quantity: '2',
            price: '4.99'
        }, {
            name: 'Apple',
            quantity: '3',
            price: '7.99'
        }
    ]);
});

app.get('/products/:id', (req, res) => {
    console.log(req.query);
    console.log(req.params);

    res.send({
        name: "Banana",
    })
})

app.get('/category', (req, res) => {
    console.log(req.params);
    req.query.category1 === 'food',
        req.query.category2 === 'drinks'
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

