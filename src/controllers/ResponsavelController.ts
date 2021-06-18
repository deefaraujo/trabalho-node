import { Request, Response } from 'express'

import { ResponsavelServices } from '../services/ResponsavelServices'

class ResponsavelController {


    async create(request: Request, response: Response) { 
        const { nome_do_responsavel, telefone } = request.body 
        
        const responsavelServices = new ResponsavelServices();
        
        try { 
            const responsavel = await responsavelServices.create({ nome_do_responsavel, telefone })
            return response.json(responsavel)

        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message}) 
            }

    }

    async index(request: Request, response: Response) { 
        const responsavelServices = new ResponsavelServices()

        try {

            const responsavel = await responsavelServices.index()
            return response.json(responsavel)
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async show(request: Request, response: Response) { 

        const responsavelServices = new ResponsavelServices()

        const { id } = request.params


        try {

            const responsavel = await responsavelServices.show({ id }) 
            return response.json(responsavel) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async delete(request: Request, response: Response) { 

        const responsavelServices = new ResponsavelServices()

        const { id } = request.params


        try {

            await responsavelServices.delete({ id }) 
            return response.json({ message: 'Cliente foi deletado com sucesso!'}) 
        }catch(err){
            return response
                .status(400)
                .json ({ message: err.message})
        }
    } 


    async update(request: Request, response: Response) { 

        const responsavelServices = new ResponsavelServices();
        

        const { nome_do_responsavel, telefone } = request.body
        

        const { id } = request.params
        
        

        try { 
            const responsavel = await responsavelServices.update({ id, nome_do_responsavel, telefone })
            return response.json(responsavel)
        }catch(err) {
            return response
                .status(400)
                .json ({ message: err.message})
            }

    }


}



export { ResponsavelController }