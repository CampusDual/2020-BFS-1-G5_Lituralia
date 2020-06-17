# Lituralia 📖

### Campus Dual

#### Proyecto en desarrollo

## Comenzando 🚀

En la rama [master](https://github.com/CampusDual/lituralia-2020/tree/master) conseguiras la ultima version "estable".

En la rama [develop](https://github.com/CampusDual/lituralia-2020/tree/develop) conseguiras los ultimos cambios realizados.

## Pre-requisitos 📋

_Que cosas necesitas para ejecutar el software_

```
Java 8
```

## Descarga ⏬

Descarga el ejecutable (jar) en: [Releases](https://github.com/CampusDual/lituralia-2020/releases)

Ultima Version: [0.0.3-SNAPSHOT](https://github.com/CampusDual/lituralia-2020/releases/tag/0.0.3)

## Despliegue 📦

_Ejecutamos el siguiente comando en la ruta del archivo: lituralia-0.0.3-SNAPSHOT.jar_

Ejemplo:

```
java -jar lituralia-0.0.3-SNAPSHOT.jar
```

## Build 🔧

_Requisitos:_

```
Java 8
Maven 3.6+
```
_Descarga el proyecto_

```
git clone https://github.com/CampusDual/lituralia-2020.git
```

_Entra en la carpeta del proyecto_

```
cd lituralia-2020
```

_Instala dependencias con maven_

```
mvn clean install
```

El empaquetado del proyecto estara en la ruta: 

```
lituralia-2020/boot/target/lituralia-[version].jar
```

Este paquete despliega el backend y el frontend en el puerto 33333

```
http://localhost:33333
```

El build del frontend lo encontraremos en:

```
lituralia-2020/boot/src/main/resources/static
```

Los datos de inicio de sesión son:

```
Usuario    : demo
Contraseña : demouser
```

## Changelog 𝌡

Entra [aqui](CHANGELOG.md) para ver los cambios recientes.

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](tags/).

Usamos [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) Herramienta de flujo de trabajo en equipo. 

## Desarrollado con 🛠️

#### Back-end: 🖧

* [OpenJDK 8](https://adoptopenjdk.net/) - Open Java
* [Maven](https://maven.apache.org/) - Dependencies Management
* [Spring](https://spring.io/) - Framework
* [Ontimize Boot](https://github.com/ontimize/basicproject) - Framework

#### Front-end: 🖥

* [Node.js](http://nodejs.org/) - Runtime Environment
* [Npm](https://www.npmjs.com/) - Package Management
* [Angular](https://angular.io/) - Framework
* [Ontimize Web](https://github.com/ontimize/basicproject) - Framework

## Autores ✒️

* **Lara Vazquez** - [LaraVazquezDorna](https://github.com/LaraVazquezDorna)
* **Nico Fernandes** - [NicoFernandes](https://github.com/NicoFernandes)
* **Francisco Sanchez** - [franciscosanchezt](https://github.com/franciscosanchezt)

