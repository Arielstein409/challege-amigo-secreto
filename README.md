# Challenge Amigo Secreto

## Descripción

**Amigo Secreto** es una aplicación web sencilla que permite a los usuarios agregar nombres a una lista y luego sortear aleatoriamente un "amigo secreto". Este proyecto fue realizado con JavaScript puro y tiene como objetivo aplicar y reforzar los conceptos aprendidos en un curso de programación para principiantes.

El proyecto incluye las siguientes funcionalidades:
- Los usuarios pueden agregar nombres a la lista.
- Realiza un sorteo aleatorio para asignar un amigo secreto.
- Muestra el nombre sorteado en la interfaz.
- Si no hay amigos en la lista, muestra un mensaje indicando que se debe agregar al menos un nombre.

Este proyecto tiene como principal objetivo fortalecer los conocimientos adquiridos durante el curso de programación para principiantes, especialmente en JavaScript, como el manejo de arrays, manipulación del DOM, eventos y la lógica de programación básica.

## Tecnologías Utilizadas

- **HTML**: Para la estructura del proyecto.
- **CSS**: Para la presentación básica (estilos mínimos).
- **JavaScript**: Para la lógica de la aplicación, incluyendo la manipulación del DOM y la generación del sorteo aleatorio.

## Instalación

Este proyecto es completamente estático y no requiere ningún servidor o entorno de desarrollo especial. Para ejecutar el proyecto, simplemente sigue estos pasos:

### Requisitos

- Un navegador web moderno (Google Chrome, Firefox, Safari, etc.)

### Pasos para Ejecutar

1. **Clonar el Repositorio**:

   Si aún no has clonado el proyecto, puedes hacerlo con el siguiente comando:

   ```bash
   git clone https://github.com/Arielstein409/challege-amigo-secreto.git


2. Dentro de la carpeta del proyecto, abre el archivo `index.html` en tu navegador web preferido.

## Ejecutar el Proyecto:

Una vez que hayas abierto el archivo `index.html`, podrás interactuar con la aplicación de inmediato.

## Uso

- **Agregar Amigos**: Los usuarios pueden ingresar el nombre de un amigo en el campo de texto y hacer clic en el botón "Añadir" para agregarlo a la lista de amigos.
- **Sorteo**: Cuando haya al menos un amigo en la lista, el botón "Sortear amigo" podrá ser presionado para seleccionar un amigo secreto aleatorio.
- **Resultado**: El nombre del amigo secreto sorteado se muestra dinámicamente en la interfaz.

## Posibles Problemas y Soluciones

- **Problema: No puedo hacer el sorteo si no hay amigos agregados**:
  - **Solución**: Asegúrate de haber agregado al menos un amigo antes de intentar realizar el sorteo. Si no hay amigos, un mensaje informará que se debe agregar al menos uno.

- **Problema: Los nombres duplicados no son prevenidos**:
  - **Solución**: Actualmente no se verifica si el nombre ya ha sido agregado. Una mejora futura sería implementar una validación para evitar duplicados en la lista de amigos.

- **Problema: El mensaje de "No hay amigos para sortear" no desaparece**:
  - **Solución**: Este problema puede surgir si la lista de amigos no se actualiza correctamente al agregar nuevos amigos. Asegúrate de que la función `recorrerLista()` se ejecuta cada vez que un nuevo amigo es agregado.

## Mejoras Futuras

- **Validación de duplicados**: Implementar una validación para evitar que se agreguen nombres duplicados a la lista.
- **Mejoras en la interfaz de usuario**: Se podrían mejorar los estilos con herramientas como CSS avanzado o frameworks como Bootstrap.
- **Eliminar amigos**: Añadir la funcionalidad de eliminar amigos de la lista antes de hacer el sorteo.
- **Almacenamiento persistente**: Usar `localStorage` para guardar la lista de amigos incluso después de cerrar el navegador.
- **Asignación de múltiples amigos secretos**: Hacer que cada persona sea asignada a un amigo secreto diferente, en lugar de un único sorteo global.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas realizar mejoras o corregir errores, por favor sigue estos pasos:

1. Haz un *fork* del repositorio.
2. Crea una rama con tu mejora o corrección.
3. Realiza un *pull request* detallando los cambios realizados.



