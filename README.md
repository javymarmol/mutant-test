# mutant-test
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Men.

Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.

Para eso te ha pedido crear un programa con un método o función con la siguiente firma (En alguno de los siguiente lenguajes: Java / Golang / C-C++ / Javascript (node) / Python / Ruby):

`boolean isMutant(String[] dna); // Ejemplo Java`

En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.

| A | T | G | C | G | A |   
|---|---|---|---|---|---|   
| C | A | G | T | G | C |   
| T | T | A | T | T | T |   
| A | G | A | C | G | G |   
| G | C | G | T | C | A |   
| T | C | A | C | T | G |   

##### No-Mutante 

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |

##### Mutante
Sabrás si un humano es mutante, si encuentras ​más de una secuencia de cuatro letras
iguales,​ de forma oblicua, horizontal o vertical.

####Ejemplo (Caso mutante):
`String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};` 
En este caso el llamado a la función isMutant(dna) devuelve “true”.
Desarrolla el algoritmo de la manera más eficiente posible.
                                                                                                                                                 
## Desafíos:
### Nivel 1:
Programa (en cualquier lenguaje de programación) que cumpla con el método pedido por Magneto.
### Nivel 2:
Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine, Amazon AWS, etc), crear el servicio “/mutant/” en donde se pueda detectar si un humano es mutante enviando la secuencia de ADN mediante un HTTP POST con un Json el cual tenga el siguiente formato:

```
POST → /mutant/
{
     “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] 
}
```
En caso de verificar un mutante, debería devolver un HTTP 200-OK, en caso contrario un 403-Forbidden
###Nivel 3:
Anexar una base de datos, la cual guarde los ADN’s verificados con la API.
Solo 1 registro por ADN.
Exponer un servicio extra “/stats” que devuelva un Json con las estadísticas de las verificaciones de ADN: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}
Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1 millón de peticiones por segundo).
## Entregar:
● Instrucciones de funcionamiento (Libre, todas las que quiera)
● Código Fuente (En el formato que quiera, lo más estándar posible). 
● URL de la API(Nivel 2 y 3).

## Primeros pasos
Para descargar el proyecto de forma local necesita ejecutar el siguiente comando: 

``$ git clone git@github.com:javymarmol/mutant-test.git`` 

Luego realizar la instalación de los paquetes con el comando yarn o npm:

`` $ yarn``
`` $ npm install``

#### Configuración

Para poder ejecutar el proyectoi debe primero configurar unas variables de entorno esto lo puede hacer clonando el archivo `.env.example` a `.env` y seteando los valores que va a utilizar.


#### Test

Elproyecto tiene una serie de pruebas unitarias realizadas con jest para ejecutarlas puede ejecutarlas con los comandos:

``$ yarn test``
o
``$ npm run test``

#### Ejecución

Puede ejecutar el proyecto en modo desarrollo con los comandos:

``$ npm run dev``
o
``$ yarn dev``

y el servidor se ejecutará sobre el puerto 3000.

Para acceder debera acceder a la url [http://localhost:3000](http://localhost:3000)


#### Documentación API

La documentación fue realizada con swagger y la puede encontrar en la raíz de la aplicación.


#### RUTAS DEL SERVIDOR

```
GET → / 
"response": {
    "200": description:'Documentation'
    HTML Page

```
```
POST → /mutant {
body:
    type: "object":
    {
        "dna": [
            "string"
        ]
    }
Example: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
Description:'DNA structure'
"responses": {
    "200": "description": "Is mutant"
    {
        
    },
    "400": "description": "Bad request"
    {
        
    },
    "403": "description": "Is not Mutant"
    {
        
    }
}

```
```
GET → /stats/
Parameters: No parameters,
description: "Get stats from test mutants"ratio'

responses: {
    "200": description: "successful operation"
    {
        "count_mutant_dna": 4,
        "count_human_dna": 2,
        "ratio": 0.5
    }
}
```

