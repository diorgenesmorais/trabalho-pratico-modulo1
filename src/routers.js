import pkg from 'express';
const { Router } = pkg;
import { list, moreModels, lessModels, listMoreModels } from './controller.js';

const router = Router();

router.get('/marcas', list);

router.get('/marcas/maisModelos', moreModels);

router.get('/marcas/menosModelos', lessModels);

router.get('/marcas/listaMaisModelos/:amount', listMoreModels);

export default router;