const ArticuloDAO = require('../daos/ArticuloDAO'),
Mail = require('../mail/Mail'),
eliminarArticulo = require('../casosDeUso/eliminarArticulo'),
articulosPorAutor = require('../casosDeUso/articulosPorAutor'),
options = require('../config/options'),
express = require('express'),
bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

var dao = new ArticuloDAO(),
mail = new Mail(options.mail)

router.delete('/', function(req, res){
  try{
    eliminarArticulo(dao, req.body.id)
    res.status(200)
  }catch(e){
    res.status(e)
  }
  res.end()
})

router.get('/', function(req, res) {
	res.send(dao.getAll())
})

router.get('/articulos-por-autor', function(req, res){
  try{
    articulosPorAutor(dao.getAll(), mail, req.body.autor, req.body.direccion)
    res.status(200)
  }catch(e){
    res.status(400)
  }
  res.end()
})


module.exports = router
