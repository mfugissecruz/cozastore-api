const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    // Rota para retornar todos os pedidos
});

router.post('/', (req, res, next)=>{
    // rota para criar pedido
});

router.get('/:id', (req, res, next)=>{
    // rota para pegar pedido pelo o id
});

router.put(':id', (req, res, next) => {
    // rota para atualizar pedido
});

router.delete('/:id', (req, res, next) => {
    // rota para deletar pedido
})
module.exports = router;