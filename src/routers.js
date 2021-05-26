import pkg from 'express';
const { Router } = pkg;
import { list } from './controller.js';

const router = Router();

router.get('/marcas', list);

export default router;