function eliminarArticulo(dao, id){
  var error = {
    notFound: 404,
    notAllowed: 405
  }
  var encontrado = error.notFound, i = 0, tmp
  var listado = dao.getAll()
  while(i < listado.length && encontrado == error.notFound){
    tmp = listado[i]
    console.log(id)
    if(tmp.id === id){
      encontrado = tmp
    }else{
      i++
    }
  }
  if(encontrado != error.notFound){
    if(encontrado.año >= 2020){
      dao.delete(i)
    }else{
      throw error.notAllowed
    }
  }else{
    throw error.notFound
  }
  return encontrado
}

module.exports = eliminarArticulo
