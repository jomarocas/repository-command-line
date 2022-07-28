
## Description

Buen dia, como aborde el desarrollo? 
de la siguiente manera
para empezar el lenguaje use typescript, porque php no es tan lenguaje de tipado estricto
typescript si es mas estricto en ese sentido, asi que opte por usar este lenguaje
use un framework llamado nestjs, enfocado en backend y puedo usar opciones con linea de comandos
para abordar el tema, use un mapa conceptual, y un mapa de procesos para entender el algoritmo que debia usar
diria que empece por saber que linea de comandos iba a utilizar, como iba a lograr esto, este fue mi primer reto, tratar de hacer esa parte, el cual se complico bastante, por una y otras razones
para entender mas el codigo use, el main.ts para el bootstrap de la aplicacion, hace llamados directamente al codigo que hace el servicio
dentro de la carpeta repository, estan module, service, controller y command
command lo use para crear el codigo del llamado linea de comandos, ahi esta la logica que llama al service
el service se encarga de comunicarse con el back y hacer la logica detras de leer el repositorio
en module se encarga de hacer modular la aplicacion y llamar las diferentes clases y que se intercomuniquen
entity, esta la definicion del guardado de las entidades en la base de datos, opte por usar 2 tablas, una para guardar el nombre del repositorio y otra para guardar la jerarquia y desde el primer llamado llamar a las otras con un id, bueno esto falta por terminar
en controller en teoria no hace nada, lo use para hacer algo por llamados urls que al final lo descarte
opte por usar mysql, pero tambien pense en usar algo nosql, aunque esto ultimo no lo he terminado por tratar de terminar el desarrollo principal
aun no esta terminado solo es algo preliminar, no me ha quedado mucho tiempo


## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npx ts-node ./src/main.ts repository -r 'https://github.com/Azure-Samples/basic-php-composer' -b 'master' -c 'commithash'

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


