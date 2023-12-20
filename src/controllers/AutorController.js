import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(201).send(listaAutores);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if(autorEncontrado !== null) {
        res.status(200).send(autorEncontrado);
      } else {
        res.status(400).send({
          message: "ID do Autor não localizado!"
        });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(200).send({
        message: "Autor cadastrado com sucesso!", 
        autor: novoAutor
      });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).send({
        message: "Autor atualizado com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).send({
        message: "Autor deletado com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;