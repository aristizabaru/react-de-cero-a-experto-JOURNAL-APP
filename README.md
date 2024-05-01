# React: De cero a experto (JOURNAL APP)

## Acerca de

Este es un repositorio personal para ejecución del proyecto del curso **React: De cero a experto (JOURNAL APP)** de **Fernando Herrera** en la plataforma Udemy. Para acceder al curso completo puede hacer [clic aquí](https://www.udemy.com/course/react-cero-experto/)

El proyecto desarrollado a continuación se explora conceptos de desarrollo de interfaces basadas [en Material UI](https://mui.com/). Dentro de los conceptos abordados además del uso de los componentes de Material UI se ejecuta una estructuración del proyecto donde se divide conceptualmente de la siguiente manera:
- Módulo
    - Layout: base de interfaz reusable
    - Pages
    - Routes: gestión de rutas
    - Components: componentes aplicables a diferentes interfaces
    - Views: vistas de un estado en particular de la aplicación dentro de una página

Adicional al desarrollo del UI se implementa Redux para la gestión del estado global de la aplicación y se implementa un modelo de autenticación con [Firebase](https://console.firebase.google.com/). La persistencia de datos a su vez se implementa también con [Firebase](https://console.firebase.google.com/) y como storage se usa [Cloudinary](https://cloudinary.com/).


Dentro de la configuración y desarrollo del proyecto se usa [Vite](https://vitejs.dev/) como bundler.

## Requerimientos

- Node 20.9.0 LTS
- REACT 18.2.0

## Instalación del proyecto

Para instalar el proyecto siga los siguientes pasos

Instalar módulos o dependencias

```
npm install
```

## Ejecución del proyecto

Para ejecutar el proyecto se deben seguir los siguientes pasos:
1. Actualice las variables de entorno (.env) usando el archivo .env.template como base, pase esto deberá crear un proyecto nuevo en [Firebase](https://console.firebase.google.com/)

2. Ejecutar entorno de desarrollo

```
npm run dev
```

3. Generar build de producción

```
npm build
```