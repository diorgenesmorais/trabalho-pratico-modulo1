# Trabalho prático modulo 1

> API com leitura em arquivo json


Adicione na raiz do projeto o arquivo [car-list.json](https://github.com/matthlavacka/car-list)

Para executar o projeto:
```bash
node src
```

A API tem disponível os seguintes endpoints:

**GET** - Listar todas as marcas:
```
http://localhost:3000/marcas
```

**GET** - Menos modelos:
```
http://localhost:3000/marcas/menosModelos
```

**GET** - Mais modelos:
```
http://localhost:3000/marcas/maisModelos
```

**GET** - Listar mais modelos por quantidade (definindo a quantidade passando pelo parâmetro)
```
http://localhost:3000/marcas/ListaMaisModelos/5
```

**GET** - Listar menos modelos por quantidade (irá listar as marcas que tem menos modelos passando o parâmetro como quantidade)
```
http://localhost:3000/marcas/ListaMenosModelos/10
```

**POST** - Buscar modelos pela marca:
```
http://localhost:3000/marcas/listaModelos
```

body
```json
{
    "brand": "hummer"
}
```


* Author: **Diorgenes Morais**

