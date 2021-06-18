import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/DespesasRepository'

interface IDespesasCreate {
    id_responsavel: string;
    data_da_compra: Date;
    local_da_compra: string;
    valor: number;
}


interface IDespesasShow {
    id: string
}


interface IDespesasUpdate {
    id: string;
    id_responsavel: string;
    data_da_compra: Date;
    local_da_compra: string;
    valor: number;
}
class DespesasServices {
    async create({ id_responsavel, data_da_compra, local_da_compra, valor }: IDespesasCreate) {

        const despesasRepository = getCustomRepository(DespesasRepository)
        const despesas = despesasRepository.create({ 
            id_responsavel, 
            data_da_compra, 
            local_da_compra,
            valor
        })

        await despesasRepository.save(despesas)

        return despesas;
    }

    async index() {

        const despesasRepository = getCustomRepository(DespesasRepository) 


        const despesas = await despesasRepository.find({

            relations: ['responsavel']
        }) 


        return despesas;
    }

    async show({ id }: IDespesasShow) {

        const despesasRepository = getCustomRepository(DespesasRepository) 


        const despesas = await despesasRepository.findOne( id, 
            { relations: ['responsavel']}) 


      if (!despesas){
          throw new Error('ID da Despesa não existe!!') 
      }


        return despesas;
    }


    async delete({ id }: IDespesasShow) { 

        const despesasRepository = getCustomRepository(DespesasRepository) 

        const despesas = await despesasRepository.findOne({ id }) 

      
        if (!despesas){
      }
      
      return await despesasRepository.delete({ id })
    }


    async update({ id, id_responsavel, data_da_compra, local_da_compra, valor }: IDespesasUpdate) {
        

        const despesasRepository = getCustomRepository(DespesasRepository)
        
        let despesas = await despesasRepository.findOne({ id })
    
        
        if (!despesas) {
          throw new Error('ID da Despesa não existe!!')
        }

        await despesasRepository.update(
          id, {
          id_responsavel,
          data_da_compra,
          local_da_compra,
          valor
        })
        
        despesas = await despesasRepository.findOne({ id })
    
        return despesas
    
      }
}

export { DespesasServices }