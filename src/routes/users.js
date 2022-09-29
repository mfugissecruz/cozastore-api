const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    // Rota para retornar todos os usuários
});

router.post('/', (req, res, next)=>{
    // rota para criar usuário
});

router.get('/:id', (req, res, next)=>{
    // rota para pegar usuário pelo o id
});

router.put(':id', (req, res, next) => {
    // rota para atualizar usuário
});

router.delete('/:id', (req, res, next) => {
    // rota para deletar usuário
})
module.exports = router;