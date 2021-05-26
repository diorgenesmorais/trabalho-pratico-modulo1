import { promises as fs } from 'fs';

function handlerError(res, error) {
    console.log(error);
    res.send({error: 'Ocorreu um erro'});
}

async function readJson() {
    return JSON.parse(await fs.readFile('car-list.json'));
}

async function list(req, res) {
    try {
        const data = await readJson();
        res.send(data);
    } catch (error) {
        handlerError(res, error);
    }
}

async function moreModels(req, res) {
    try {
        const data = await readJson();
        const result = data
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
        res.send(result[result.length - 1]);
    } catch (error) {
        handlerError(res, error);
    }
}

export {
    list,
    moreModels
}
