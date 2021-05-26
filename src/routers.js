import pkg from 'express';
const { Router } = pkg;
import { list, moreModels, lessModels, listMoreModels, listLessModels } from './controller.js';

const router = Router();

router.get('/marcas', list);

router.get('/marcas/maisModelos', moreModels);

router.get('/marcas/menosModelos', lessModels);

router.get('/marcas/listaMaisModelos/:amount', listMoreModels);

router.get('/marcas/listaMenosModelos/:amount', listLessModels);

export default router;