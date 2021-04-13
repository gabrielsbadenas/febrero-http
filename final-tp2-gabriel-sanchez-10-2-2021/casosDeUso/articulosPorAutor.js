function articulosPorAutor(dao, mail, autor, direccion){
  var i, listado = []
  for(i = 0; i<dao.length; i++){
    if(dao[i].autor == autor){
      listado.push(dao[i].titulo)
    }
  }
  var subject = "listado de articulos de "+autor,
  text = listado.toString()
  mail.send(subject, text, direccion)
}

module.exports = articulosPorAutor
