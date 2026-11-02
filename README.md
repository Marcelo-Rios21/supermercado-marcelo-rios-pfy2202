# Supermercado React

Proyecto académico de la asignatura Desarrollo Frontend II (PFY2202).

## Descripción

Sitio web de gestión de inventario para un supermercado, desarrollado
con React, JavaScript, HTML y CSS.

La aplicación utiliza React Router para navegar entre cinco páginas
y Context API para compartir el inventario entre componentes.

## Páginas

- Inicio: página principal del supermercado.
- Quiénes somos: información general del supermercado.
- Contáctanos: información de contacto ilustrativa.
- Agregar artículo: formulario para registrar nombre, marca y tipo de producto.
- Ver inventario: tabla con los artículos registrados.

## Funcionalidades

- Navegación entre páginas mediante React Router.
- Menú inferior y menú de gestión de inventario.
- Estado global de artículos mediante Context API y useState.
- Registro de artículos mediante un formulario.
- Visualización de los artículos registrados en una tabla.

Los artículos se almacenan temporalmente en el estado de React.
Al recargar la página, la lista vuelve a estar vacía.

## Tecnologías utilizadas

- React
- React Router
- JavaScript
- HTML
- CSS
- Tailwind CSS
- Vite

## Requisitos

- Node.js compatible con Vite
- npm

## Instalación

Clonar el repositorio y acceder a la carpeta del proyecto.

Instalar las dependencias:

~~~bash
npm install
~~~

## Ejecución

Iniciar el servidor de desarrollo:

~~~bash
npm run dev
~~~

Abrir en el navegador la dirección local indicada por Vite.

## Verificación

Compilar el proyecto:

~~~bash
npm run build
~~~

Ejecutar el analizador de código:

~~~bash
npm run lint
~~~