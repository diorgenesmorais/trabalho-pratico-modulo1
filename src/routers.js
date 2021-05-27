import pkg from 'express';
const { Router } = pkg;
import { list, moreModels, lessModels, listMoreModels, listLessModels, listModels } from './controller.js';

const router = Router();

router.get('/', list);

router.get('/maisModelos', moreModels);

router.get('/menosModelos', lessModels);

router.get('/listaMaisModelos/:amount', listMoreModels);

router.get('/listaMenosModelos/:amount', listLessModels);

router.post('/listaModelos', listModels);

export default router;