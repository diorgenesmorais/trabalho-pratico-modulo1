import { promises as fs } from 'fs';

function handlerError(res, error) {
    console.log(error);
    res.send({error: 'Ocorreu um erro'});
}

async function readJson() {
    return JSON.parse(await fs.readFile('car-list.json'));
}

function getOrderedList(data) {
    return data
            .map(({brand, models}) => {
                return {brand, models, total: models.length}
            })
            .sort((a, b) => {
                if (a.total < b.total)
                    return -1;
                if (a.total > b.total)
                    return 1
                return 0
            });
}

async function list(req, res) {
    try {
        const data = await readJson();
        res.send(getOrderedList(data));
    } catch (error) {
        handlerError(res, error);
    }
}

async function moreModels(req, res) {
    try {
        const data = await readJson();
        const result = getOrderedList(data);
        res.send(result[result.length - 1]);
    } catch (error) {
        handlerError(res, error);
    }
}

async function lessModels(req, res) {
    try {
        const data = await readJson();
        const result = getOrderedList(data);
        res.send(result[0]);
    } catch (error) {
        handlerError(res, error);
    }
}

async function listMoreModels(req, res) {
    try {
        const { amount } = req.params;
        const data = await readJson();
        const result = getOrderedList(data).reverse();
        const reducer = result
                            .filter((item, i) => i < amount)
                            .map(({brand, total}) => {
                                return `${brand} - ${total}`;
                            });
        res.send(reducer);
    } catch (error) {
        handlerError(res, error);
    }
}

export {
    list,
    moreModels,
    lessModels,
    listMoreModels
}
