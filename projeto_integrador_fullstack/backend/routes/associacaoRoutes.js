const router = require('express').Router();
const c = require('../controllers/associacaoController');
router.post('/', c.associar);
module.exports = router;
