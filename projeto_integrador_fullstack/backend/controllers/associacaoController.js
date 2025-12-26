const db = require('../database/sqlite');
exports.associar = (req,res)=>{
db.run('INSERT INTO produto_fornecedor(produto_id, fornecedor_id) VALUES(?,?)',[req.body.produto_id, req.body.fornecedor_id]);
res.sendStatus(201);
};
