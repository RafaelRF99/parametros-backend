import Parametro from '../database/schemas/Parametro'
import { Request, Response } from 'express'

class Ygcontroller {

    async getAll(req: Request, res: Response) {
        try {
            const parametro = await Parametro.find();

            return res.json(parametro);

        } catch (error) {
            return res.status(500).send({ error: "Algo errado aconteceu!", message: error });
        }
    }

    async create(req: Request, res: Response) {
        const {
            partNumber,
            linha,
            nomeProgramaCorte,
            anguloVidea,
            maquina,
            dataRevisao,
            tempoEnvio1,
            tempoEnvio2,
            atrasoEntradaBraco,
            retardoVentosa,
            atrasoSaidaBracoDianteira,
            atrasoSaidaBracoTraseira,
            tempoGiroDianteira,
            tempoGiroTraseira,
            velocidadeLixEsq,
            velocidadeLapDireita,
            qtdVoltasFrontal,
            qtdVoltasTraseira,
            pressaoLixado,
            pressaoLapidado,
            velocidadeSalto,
            velocidadeProcessamento,
            intensidade,
            frequencia,
            temperaturaLavadora,
            superficie,
            metal,
            raio,
            tipo,
            gravacao,
            atrasarAvanco,
            atrasarLeituraEspelho,
            p1,
            rvm,
            rvmRaio,
            rvmMin,
            rvmMax,
            createAt
        } = req.body;

        try {
            const partNumberExists = await Parametro.findOne({ partNumber });

            if (!partNumber || !linha || !nomeProgramaCorte || !maquina || !createAt) {
                return res.status(400).json({
                    error: "Informações inválidas enviadas",
                    message: "Algum valor não foi identificado"
                })
            }

            if (partNumberExists) {
                return res.status(400).json({
                    error: "Algo de errado aconteceu",
                    message: "Parâmetro já existe!"
                });
            }

            const parametro = await Parametro.create({
                partNumber,
                linha,
                nomeProgramaCorte,
                anguloVidea,
                maquina,
                dataRevisao,
                tempoEnvio1,
                tempoEnvio2,
                atrasoEntradaBraco,
                retardoVentosa,
                atrasoSaidaBracoDianteira,
                atrasoSaidaBracoTraseira,
                tempoGiroDianteira,
                tempoGiroTraseira,
                velocidadeLixEsq,
                velocidadeLapDireita,
                qtdVoltasFrontal,
                qtdVoltasTraseira,
                pressaoLixado,
                pressaoLapidado,
                velocidadeSalto,
                velocidadeProcessamento,
                intensidade,
                frequencia,
                temperaturaLavadora,
                superficie,
                metal,
                raio,
                tipo,
                gravacao,
                atrasarAvanco,
                atrasarLeituraEspelho,
                p1,
                rvm,
                rvmRaio,
                rvmMin,
                rvmMax,
                createAt
            });
            return res.json(parametro);

        } catch (error) {
            return res.status(500).send({ error: "Falha no registrar", message: error });
        }
    }

    async edit(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedLivro = await Parametro.findByIdAndUpdate(id, { $set: req.body }, { new: true });

            if (!updatedLivro) {
                return res.status(404).json({
                    error: "Parâmetro não encontrada",
                    message: "Parâmetro com o ID fornecido não foi encontrado no banco de dados."
                });
            }

            return res.json(updatedLivro);
        } catch (error) {
            return res.status(500).send({ error: "Falha ao atualizar parâmetro", message: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const deletedLivro = await Parametro.findByIdAndDelete(id);

            if (!deletedLivro) {
                return res.status(404).json({
                    error: "Parâmetro não encontrado",
                    message: "Parâmetro com o ID fornecido não foi encontrado no banco de dados."
                });
            }

            return res.json({
                message: "Parâmetro excluído com sucesso",
                deletedLivro
            });
        } catch (error) {
            return res.status(500).send({ error: "Falha ao excluir parâmetro", message: error });
        }
    }

}
export default new Ygcontroller;