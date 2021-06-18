import { getCustomRepository } from 'typeorm'
import {  ResponsavelRepository  } from '../repositories/ResponsavelRepository'

//interface do create
interface IResponsavelCreate {
    nome_do_responsavel: string;
    telefone: string
}

//interface do show
interface IResponsavelShow {
    id: string
}

//interface do update
interface IResponsavelUpdate {
    id: string;
    nome_do_responsavel: string;
    telefone: string
}

class ResponsavelServices {
    async create({ nome_do_responsavel, telefone }: IResponsavelCreate) {

        const responsavelRepository = getCustomRepository(ResponsavelRepository)

        const responsavel = responsavelRepository.create({ 
            nome_do_responsavel, 
            telefone
        })

        await responsavelRepository.save(responsavel)

        return responsavel;
    }

    async index() {

        const responsavelRepository = getCustomRepository( ResponsavelRepository ) 

        const responsavel = await responsavelRepository.find() 


        return responsavel;
    }


    async show({ id }: IResponsavelShow) {

        const responsavelRepository = getCustomRepository( ResponsavelRepository ) 

        const responsavel = await responsavelRepository.findOne({ id }) 

      if (!responsavel){
          throw new Error('Id do cliente não existe!!')
      }

        return responsavel;
    }


    async delete({ id }: IResponsavelShow) {

        const responsavelRepository = getCustomRepository( ResponsavelRepository ) 

        const responsavel = await responsavelRepository.findOne({ id }) 
      
        if (!responsavel){
          throw new Error('Id do Responsavel não existe!') 
      }
      
      return await responsavelRepository.delete({ id })
    }


    async update({ id, nome_do_responsavel, telefone }: IResponsavelUpdate) {
        
        const responsavelRepository = getCustomRepository( ResponsavelRepository )
        
        let responsavel = await responsavelRepository.findOne({ id })
    
        

        if (!responsavel) {
          throw new Error('Id do Responsavel não existe!') 
        }

        await responsavelRepository.update(
          id, {
          nome_do_responsavel,
          telefone
        })
        
        responsavel = await responsavelRepository.findOne({ id })
    
        return responsavel
    
      }

}

export { ResponsavelServices }