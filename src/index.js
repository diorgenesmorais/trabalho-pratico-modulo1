import express from 'express';
import router from './routers.js';

const app = express();
app.use(express.json());
app.use('/marcas', router);

/**
 * Tratamento de erro
 */
app.use((err, req, res, next) => {
    const { method, url } = req;
    const message = {
        method,
        url,
        message: 'Ocorreu um error. Detalhes na stack do console'
    };
    console.log(err.stack);
    res.status(500).send(message);
})

app.listen(3000, () => {
    console.log('API initialized on port 3000');
});
