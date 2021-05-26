import pkg from 'express';
const { Router } = pkg;
import { list, moreModels } from './controller.js';

const router = Router();

router.get('/marcas', list);

router.get('/marcas/maisModelos', moreModels);

export default router;