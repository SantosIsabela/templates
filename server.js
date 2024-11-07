const express = require('express');
const app = express();
const port = 3000;

// Configurando o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota para renderizar a página
app.get('/', (req, res) => {
  res.render('ata_defesa', { nome_alunos: ['Isabela Fonseca', 'Cesar Augusto'], nome_projeto: 'GradMate', dia: '11', mes: '07', ano: '2024', nome_orientador: 'Pablo', nome_professores: ['Piva', 'Thalita', 'Davi']});
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
