class ArticuloDAO{
  constructor(){
    this.articulos = []
  }

  delete(index){
    this.articulos.splice(index, 1)
  }

  getAll(){
    return this.articulos
  }

  save(articulo){
    this.articulos.push(articulo)
  }
}

module.exports = ArticuloDAO
