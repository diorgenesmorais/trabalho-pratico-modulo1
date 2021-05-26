import pkg from 'express';
const { Router } = pkg;
import { list, moreModels, lessModels } from './controller.js';

const router = Router();

router.get('/marcas', list);

router.get('/marcas/maisModelos', moreModels);

router.get('/marcas/menosModelos', lessModels);

export default router;