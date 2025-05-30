# pre-entrega

## Proyecto NodeJS - TT Comisión: 25024

---

### Descripción

Este es un cliente de línea de comandos desarrollado en Node.js que permite interactuar con la [FakeStoreAPI](https://fakestoreapi.com/) para realizar operaciones de tipo GET, POST y DELETE sobre recursos de productos. Es una herramienta sencilla para demostrar el consumo de APIs externas desde la terminal.

### Tecnologías Utilizadas

* **Node.js**
* **Fetch API** (implementada en Node.js)

### Cómo Ejecutar el Programa

Sigue estos pasos para poner en marcha y probar la aplicación:

### Pre-requisitos

Asegúrate de tener [Node.js](https://nodejs.org/es/download/) instalado en tu sistema (22 o superior si es posible)

### Instalación

1. Clona este repositorio:

    ```bash
    git clone [https://github.com/Reynold82/pre-entrega.git](https://github.com/Reynold82/pre-entrega.git)
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd pre-entrega
    ```

3. Instala las dependencias (aunque para este proyecto pueden no ser necesarias, es una buena práctica):

    ```bash
    npm install
    ```

### Uso

El programa se ejecuta utilizando `npm run start` seguido de la `solicitud` (GET, POST, DELETE) y el `recurso`, junto con los argumentos necesarios para POST.

#### Ejemplos de Comandos

* **Obtener todos los productos:**

    ```bash
    npm run start GET products
    ```

* **Obtener un producto específico por ID:**

    ```bash
    npm run start GET products/15
    ```

* **Crear un nuevo producto:**

    ```bash
    npm run start POST products "Nuevo Producto de Prueba" 25.50 "Electrónica"
    ```

    (Nota: la descripción y la imagen se establecen por defecto en el código.)

* **Eliminar un producto por ID:**

    ```bash
    npm run start DELETE products/7
    ```

    (Nota: La FakeStoreAPI simula la eliminación, no borrará el producto de forma permanente.)

## Funcionalidades Implementadas

* **GET /products**: Lista todos los productos.
* **GET /products/:id**: Obtiene un producto específico por su ID.
* **POST /products**: Crea un nuevo producto con título, precio y categoría.
* **DELETE /products/:id**: Elimina un producto por su ID.

## Manejo de Errores

El programa incluye manejo de errores para:

* Falta de argumentos en los comandos.
* Errores de red o de la API (códigos de estado HTTP no exitosos).

---
