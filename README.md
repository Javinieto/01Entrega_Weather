# My Weather App

"My weather app" es una página web la cual te permite ver el tiempo atmosférico tanto actual como de los próximos cuatro días de la ciudad que quieras

## Recursos

"My weather app" usa distintos recursos:

- Boostrap 5 que ayuda en el diseño de la página
- Jquery que se encarga del funcionamiento de la página
- HTML el cual realiza la estructura de la página
- SASS para personalizar la página

## HTML

- La estructura principal esta dividida en 2 partes, la barra de navegación de la izquierda y un contenedor principal
- El contenedor principal contiene un contenedor el cual establece una fila
- El contenedor que establece una fila contiene uno que consta de una columna
- El contenedor columna contiene el encabezado de la página, el cuerpo de la página y el formulario de búsqueda con su input y su botón
- Por último dentro del contenedor columna hay un nuevo div el cual está vacío y ahi se mostrarán las respuestas a la busqueda realizada por el usuario

## SASS

- El SASS consta de un archivo principal y dos secundarios
- El principal se encarga de reunir los secundarios y hacerlos funcionar en la página
- Uno de los secundarios es el encargado de recoger las variables 
- El otro de los secundarios se encarga de recoger los "mixins"
- Todas las variables y los mixins se implementan a la página mediante el scss principal mediante el cual se fijan las partes a las que afectan nuestros archivos secundarios

## Jquery

Hacemos uso de Jquery en nuestra página para realizar el funcionamiento de la página
Estas son las distintas funciones que usa la página:

| Cuando se ejecuta | Funcionamiento |
| ------ | ------ |
| Al cargar el documento  | oculta los elementos ineccesarios en ese momento como el formulario |
| Al darle al botón home del menú | Vuelve a la página de inicio, tal y como aparece al cargarse la página |
| AL darle al botón now | Abre el formulario de busqueda para buscar el tiempo de hoy |
| Al darle al botón future | Abre el formulario de busqueda para buscar el tiempo de los próximos 4 días |
| Al darle click al botón del formulario "now" | Llama al api, recoge la información necesaria y la muestra por pantalla según lo establecido |
| Al darle click al botón del formulario "future" | Llama al api, recoge la información necesaria y la muestra por pantalla según lo establecido |