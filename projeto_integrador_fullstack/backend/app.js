const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const associacaoRoutes = require('./routes/associacaoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/fornecedores', fornecedorRoutes);
app.use('/associacoes', associacaoRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
