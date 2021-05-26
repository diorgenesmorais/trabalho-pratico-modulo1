import { promises as fs } from 'fs';

function handlerError(res, error) {
    console.log(error);
    res.send({error: 'Ocorreu um erro'});
}

async function list(req, res) {
    try {
        const data = JSON.parse(await fs.readFile('car-list.json'));
        res.send(data);
    } catch (error) {
        handlerError(res, error);
    }
}

export {
    list
}
