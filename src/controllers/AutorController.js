import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(201).send(listaAutores);
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - falha na requisição!`
            });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).send(autorEncontrado);
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - falha na requisição do autor!`
            });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).send({
                message: "Autor cadastrado com sucesso!", 
                autor: novoAutor
            });
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - falha ao cadastrar autor!`
            });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).send({
                message: "Autor atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - falha na atualização do autor!`
            });
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).send({
                message: "Autor deletado com sucesso!"});
        } catch (erro) {
            res.status(500).send({
                message: `${erro.message} - falha ao deletar autor!`
            });
        }
    }
};

export default AutorController;