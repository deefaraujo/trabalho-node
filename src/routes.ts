import { Router } from 'express'

import { ResponsavelController } from './controllers/ResponsavelController'
import { DespesasController } from './controllers/DespesasController'

const routes = Router();

const responsavelController = new ResponsavelController();
const despesasController = new DespesasController();


routes.post('/responsavel', responsavelController.create)
routes.get('/responsavel', responsavelController.index)
routes.get('/responsavel/:id', responsavelController.show)
routes.delete('/responsavel/:id', responsavelController.delete)
routes.put('/responsavel/:id', responsavelController.update)

routes.post('/despesas', despesasController.create)
routes.get('/despesas', despesasController.index)
routes.get('/despesas/:id', despesasController.show)
routes.delete('/despesas/:id', despesasController.delete)
routes.put('/despesas/:id', despesasController.update)

export { routes }