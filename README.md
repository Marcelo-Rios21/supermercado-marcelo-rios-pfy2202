# Supermercado React

Proyecto académico de la asignatura Desarrollo Frontend II (PFY2202).

## Descripción

Sitio web de gestión de inventario para un supermercado, desarrollado
con React, JavaScript, HTML y CSS.

La aplicación utiliza React Router para navegar entre siete páginas
y Context API para compartir el inventario y el carrito entre componentes.

## Páginas

- Inicio: página principal del supermercado.
- Quiénes somos: información general del supermercado.
- Contáctanos: información de contacto ilustrativa.
- Agregar artículo: formulario para registrar nombre, marca, tipo y cantidad disponible.
- Ver inventario: tabla con filtro por categoría y existencias.
- Detalle de artículo: información y opción de agregar al carrito.
- Carrito: permite modificar cantidades y actualizar existencias.

## Funcionalidades

- Navegación entre páginas mediante React Router.
- Menú inferior y menú de gestión de inventario.
- Estado global de inventario y carrito mediante Context API y useState.
- Registro de artículos y cantidades mediante un formulario.
- Visualización de artículos y filtro dinámico por categoría.
- Consulta de detalles y agregado de artículos al carrito.
- Actualización de existencias al modificar cantidades, sin stock negativo.

Los artículos y el carrito se almacenan temporalmente en el estado de React.
Al recargar la página, ambos vuelven a estar vacíos.

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

## Publicación

El proyecto se publica en GitHub Pages mediante
.github/workflows/deploy.yml (GitHub Actions, rama master).

Para habilitarlo, seleccionar GitHub Actions en Settings > Pages.
