const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    // Rota para retornar todos os produtos
});

router.post('/', (req, res, next)=>{
    // rota para criar produto
});

router.get('/:id', (req, res, next)=>{
    // rota para pegar produto pelo o id
});

router.put(':id', (req, res, next) => {
    // rota para atualizar produto
});

router.delete('/:id', (req, res, next) => {
    // rota para deletar produto
})
module.exports = router;