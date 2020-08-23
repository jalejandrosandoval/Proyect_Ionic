<p>
    <h1 align="center"> Proyecto en Ionic </h1>
</p>

Proyecto de desarrollo de una app en Ionic

## Tecnologías, Lenguajes de Desarrollo y SGBD

A grandes rasgos se utilizan las siguientes tecnologías de desarrollo.

- AngularJS 9.1.9.
- C#
- MVC5.
- EntityFrameworkCore.
- APIRest.
- NET.CORE 3.
- JSON.
- JWT.
- CORS.
- Endpoints.
- Ionic 6.11.1.
- Cordova 0.15.1.
- <b> SGB: </b> SQL SERVER.

## Herramientas de Desarrollo E IDES

- VSCODE.
- Visual Studio 2019.
- POSTMAN.
- SSMS.
- GitHub.

<hr>

## Requisitos Previos

* Se debe instalar el NodeJS.

### Instalar NodeJs

* Descargar el instalador de [NodeJS](https://nodejs.org/es/).
* Ejecutar el instalador.

<b> NOTA: </b> el utilizar la instrucción "-g" implica que se instalará de forma global en el equipo la tecnología y/o dependencia actual; si se desea se retira ese comando y se instala de forma especifica en la ruta donde se desee.

### Instalar Ionic y Dependencias como Cordova

Más Información de [Ionic](https://ionicframework.com/docs/).

```bash
npm i -g @angular/cli -n
```

### Instalar Angular de Forma Individual

* Instalar Angular en su ultima versión:
```bash
npm i -g @angular/cli
```

* Si se desea, instalar angular en una versión especifica se debe utilizar el siguiente comando:
```bash
npm i -g @angular/cli@'N°. Version'
```

* Para verificar la versión de angular instalada:

```bash
ng --version
```

### Crear Poryecto en Ionic

* Primero se debe seleccionar el nombre y el tipo de aplicación que se desea.

```bash
ionic start 'NameProyect' 'Type =>  tabs, blank, side'
```

* Seguido a ello se debe configurar el lenguaje o tecnología en el que se deseea ya sea Angular o React. Para ello si se desea, se puede hacer todo en la misma linea o seleccionar de forma particular cuando la consola lo pregunte. Instrucción de una sola linea:

```bash
ionic start 'NameProyect' 'Type =>  tabs, blank, side' --type='angular - react' --capacitor
```



