class Articulo{
  constructor(id, titulo, autor, texto, año){
    this.setId(id)
    this.setTitulo(titulo)
    this.setAutor(autor)
    this.setTexto(texto)
    this.setAño(año)
  }

  setId(id){
    if(id){
      this.id = id
    }else{
      throw "id no valida"
    }
  }

  setTitulo(titulo){
    if(titulo){
      this.titulo = titulo
    }else{
      throw "titulo no valido"
    }
  }

  setAutor(autor){
    var regex = /^[a-zA-Z\s]*$/;
    if(autor){
      if(regex.test(autor)){
        this.autor = autor
      }else{
        throw "el nombre del autor solo puede contener letras y espacios"
      }
    }else{
      throw "nombre de autor no valido"
    }
  }

  setTexto(texto){
    if(texto){
      if(texto.length<1000){
        this.texto = texto
      }else{
        throw "mucho texto, maximo 1000 caracteres"
      }
    }else{
      throw "el texto no puede estar vacio"
    }
  }

  setAño(año){
    if(año>0){
      this.año = año
    }else{
      throw "el año no puede ser negativo"
    }
  }
}

module.exports = Articulo
