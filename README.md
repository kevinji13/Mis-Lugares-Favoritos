# Mis Lugares Favoritos

Aplicación móvil desarrollada con React Native, Expo Router y TypeScript para registrar, visualizar, consultar y eliminar lugares favoritos.

## Descripción

Mis Lugares Favoritos permite gestionar una lista de lugares que el usuario desea visitar o recordar. La aplicación almacena la información únicamente en memoria utilizando estados de React, sin emplear bases de datos ni servicios externos.

## Características

- Listado de lugares registrados.
- Registro de nuevos lugares mediante formulario.
- Validación de campos obligatorios.
- Visualización detallada de cada lugar.
- Eliminación de lugares con confirmación previa.
- Navegación entre pantallas utilizando Expo Router.
- Interfaz adaptada para dispositivos móviles.
- Desarrollo utilizando TypeScript con interfaces y tipado de estados.

## Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- TypeScript

## Estructura de datos

```typescript
export interface Lugar {
  id: number;
  nombre: string;
  ciudad: string;
  categoria: string;
  descripcion: string;
}
```

## Pantallas

### Pantalla principal

- Muestra la lista de lugares registrados.
- Permite acceder al detalle de cada lugar.
- Permite eliminar lugares.
- Incluye acceso al formulario de registro.

### Nuevo lugar

- Formulario para registrar:
  - Nombre
  - Ciudad
  - Categoría
  - Descripción

- Validación de campos obligatorios.

### Detalle del lugar

- Muestra toda la información registrada:
  - Nombre
  - Ciudad
  - Categoría
  - Descripción

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd mis-lugares-favoritos
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npx expo start
```

## Desarrollado por

Kevin Jiménez
