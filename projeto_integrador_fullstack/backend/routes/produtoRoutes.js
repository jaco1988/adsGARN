const router = require('express').Router();
const c = require('../controllers/produtoController');
router.post('/', c.criar);
router.get('/', c.listar);
module.exports = router;
