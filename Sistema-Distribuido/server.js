const express = require('express');
const cors = require('cors');  // Importe o pacote cors
const app = express();
const port = 3000;

app.use(cors());  // Habilite o CORS para todas as rotas
app.use(express.json());
app.use(express.static('public'));

const products = [
    { id: 1, name: "Produto A", available: true },
    { id: 2, name: "Produto B", available: false },
    { id: 3, name: "Produto C", available: true },
];

app.get('/api/products', (req, res) => {
    const searchTerm = req.query.name.toLowerCase();
    const result = products.find(product => product.name.toLowerCase() === searchTerm);
    res.json(result || null);
});

app.post('/api/reserve', (req, res) => {
    const productId = req.body.id;
    const product = products.find(p => p.id === productId);

    if (product && product.available) {
        res.json({ success: true, message: "Produto reservado com sucesso!" });
    } else {
        res.json({ success: false, message: "Produto indisponível." });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
