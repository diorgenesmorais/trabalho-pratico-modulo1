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

async function list(req, res, next) {
    try {
        const data = await readJson();
        res.send(getOrderedList(data));
    } catch (error) {
        next(error);
    }
}

async function moreModels(req, res, next) {
    try {
        const data = await readJson();
        const result = getOrderedList(data);
        res.send(result[result.length - 1]);
    } catch (error) {
        next(error);
    }
}

async function lessModels(req, res, next) {
    try {
        const data = await readJson();
        const result = getOrderedList(data);
        res.send(result[0]);
    } catch (error) {
        next(error);
    }
}

async function listMoreModels(req, res, next) {
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
        next(error);
    }
}

async function listLessModels(req, res, next) {
    try {
        const { amount } = req.params;
        const data = await readJson();
        const result = getOrderedList(data);
        const reducer = result
                            .filter((item, i) => i < amount)
                            .map(({brand, total}) => {
                                return `${brand} - ${total}`;
                            });
        res.send(reducer);
    } catch (error) {
        next(error);
    }
}

async function listModels(req, res, next) {
    try {
        const { brand } = req.body;
        const data = await readJson();
        const list = getOrderedList(data);
        const [ car ] = list
                            .filter(car => {
                                return car.brand.toLowerCase() === brand.toLowerCase();
                            });
        const result = car ? car.models : [];
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export {
    list,
    moreModels,
    lessModels,
    listMoreModels,
    listLessModels,
    listModels
}
