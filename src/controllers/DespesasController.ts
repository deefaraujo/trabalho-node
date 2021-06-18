import { Request, Response } from 'express'

import { DespesasServices } from '../services/DespesasServices'

class DespesasController {

    async create(request: Request, response: Response) { 
        let { id_responsavel, data_da_compra, local_da_compra, valor } = request.body 
        const despesasServices = new DespesasServices();
        data_da_compra = new Date(data_da_compra)
        try { 
            const despesas = await despesasServices.create({ id_responsavel, data_da_compra, local_da_compra, valor })
            return response.json(despesas)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message}) 
            }

    }

    async index(request: Request, response: Response) {

        const despesasServices = new DespesasServices();

        try {

            const despesas = await despesasServices.index()
            return response.json(despesas)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async show(request: Request, response: Response) {

        const despesasServices = new DespesasServices();

        const { id } = request.params

        try {
            const despesas = await despesasServices.show({ id })
            return response.json(despesas) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async delete(request: Request, response: Response) {

        const despesasServices = new DespesasServices();

        const { id } = request.params

        try {
            await despesasServices.delete({ id })
            return response.json({ message: 'Despesa foi deletada com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async update(request: Request, response: Response) {

        const despesasServices = new DespesasServices();

        let { id_responsavel, data_da_compra, local_da_compra, valor } = request.body 
        data_da_compra = new Date(data_da_compra)

        const { id } = request.params

        try { 
            const despesas = await despesasServices.update({id, id_responsavel, data_da_compra, local_da_compra, valor})
            return response.json(despesas)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }

}


export { DespesasController }
