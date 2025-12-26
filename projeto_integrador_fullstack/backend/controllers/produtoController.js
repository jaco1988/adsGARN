const db = require('../database/sqlite');
exports.criar = (req,res)=>{db.run('INSERT INTO produto(nome) VALUES(?)',[req.body.nome]);res.sendStatus(201);};
exports.listar = (req,res)=>{db.all('SELECT * FROM produto',[],(e,r)=>res.json(r));};
