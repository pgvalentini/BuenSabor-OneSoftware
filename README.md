# BuenSabor-OneSoftware

Instrucciones:
1. Crear en MySql una base de datos llamada "elbuensaborini"
2. Descomprimir Backend
3. Abrirlo en Visual Studio Code
4. Abrir el archivo "db.js" alojado en la base del proyecto.
   En la línea 10, donde dice 'root' 'root' cambiar por el user (el primer root) y el password (en el segundo root) que se utilice para la base de datos.
5. En la línea 17 y 18 hacer lo mismo.
6. Correr el comando "node index.js"
Esto creará las tablas automáticamente y las rutas estarán disponibles para su uso.
El backend se ejecutará en localhost:3002 según lo especificado en línea 22 del archivo "index.js", para evitar conflictos con otras tecnologías frontend que corren por defecto en puerto 3000.
7. Bajar y correr Frontend con las siguientes instrucciones:
npm install (para instalar los módulos)
ng serve -o (para levantar)


COMENTARIOS
Se presenta el primer entregable con los siguientes módulos funcionales:
*Insumos
*Productos
*Rubro Insumo
*Rubro Producto

Se presenta una vista del componente con un adelanto de los otros módulos que se irán implementando en la parte de administración, ya que es la parte del proyecto que más funcionalidades tiene (prestar atención a la NavBar, la cual puede que se cambie a una vista lateral izquierda, pero la funcionalidad será la misma, poder acceder a todos los módulos de administración desde la misma, facilitando la navegación).

Se adelanta el modelo final de la base de datos (en la carpeta BBDD), junto a los scripts para la creación de todas las tablas, el llenado de tablas mediante datos para ir probando su correcta funcionalidad conforme se vaya avanzando en los módulos desde el Frontend y el Backend y la imagen para una correcta interpretación de la misma.
