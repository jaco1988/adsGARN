const db = require('../database/sqlite');
exports.criar = (req,res)=>{db.run('INSERT INTO fornecedor(nome) VALUES(?)',[req.body.nome]);res.sendStatus(201);};
exports.listar = (req,res)=>{db.all('SELECT * FROM fornecedor',[],(e,r)=>res.json(r));};
