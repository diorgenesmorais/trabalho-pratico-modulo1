import pkg from 'express';
const { Router } = pkg;

const router = Router();

router.get('/marcas', (req, res) => {
    res.send('hello router');
});

export default router;