# Galería de Imágenes con Django y ReactJS
Este repositorio es sólo un ejemplo sencillo del potencial de crear un sitio web usando **Django** en el lado del servidor y **ReactJS** en el lado del cliente. 
Como ejemplo práctico construiremos una galería de imágenes donde mostraremos un trio de ofidios.

Primero se ha de crear un directorio de trabajo para el proyecto que llamaremos gallery-project.

`mkdir gallery-project`

## Sección 1: Servidor
Los pasos a seguir para iniciar un proyecto llamado **gallery** de cero son

`django-admin startproject gallery`

El directorio servirá para guardar la colección de aplicaciones de nuestro sitio web como blogs, foros, galerías.

Luego creamos una aplicación llamada **snakes_gallery**

`python manage.py startapp snakes_gallery`

Entonces agregamos está aplicación en el apartado **INSTALLED_APPS** en el fichero **settings.py**

Para dar un primer vistazo de está página en contrucción usamos

`python manage.py runserver`

![alt text](https://s3-us-west-2.amazonaws.com/py4hacaller/2017-08-29+11_07_28-Greenshot.png)

Un servidor local servirá nuestra aplicación en la dirrección **https://127.0.0.1:8000**

Luegos creamos dos modelos para nuestra aplicación en el fichero **models.py**.

El modelo **Snake** es un clase que permite distinguir los ofidios por nombre, id, foto.

El modelo **AboutSite** es una clase que permite distinguir sitios web por id, título, autor, email.

Luego enviaremos los detalles del sitio web y una lista de ofidios al cliente o usuario usando el protocolo HTTP. Para eso creamos dos funciones en el fichero **view.py**. La función **showSnakeList** servirá una lista de ofidios serializados en formato JSON. Los mismo hará la función **showInfoAboutSite** para los detalles del sitio.

El cliente puede requerir esta información haciendo peticiones al servidor con las rutas creadas en el fichero **urls.py**.

Esta lista de rutas que creamos para nuestra aplicación deben tambien ser incluídas en el folder del proyecto

Los resultados preliminares puder sen vistos en 
- **http://127.0.0.1:8000/**
- **http://127.0.0.1:8000/api/info**
- **http://127.0.0.1:8000/api/snakes**

![alt text](https://s3-us-west-2.amazonaws.com/py4hacaller/2017-08-29+16_06_52-Greenshot.png)

## Sección 2: Cliente

Primero habilitamos la funcionalidad **CORS** para jecutar llamadas con **AJAX** instalado este módulo

`pip install django-cors-headers`

Luego modificamos el fichero **settings.py** de este modo

```python
INSTALLED_APPS = (
  ...
  'pipeline',
  'corsheaders'
)
MIDDLEWARE_CLASSES = (
  'corsheaders.middleware.CorsMiddleware',
  'django.middleware.common.CommonMiddleware',
  ...
)
CORS_ORIGIN_WHITELIST = (
  'localhost:3000',
  '127.0.0.1:3000'
)
```
Nuestro cliente ReactJS tendrá como punto de entrado la dirección IP **127.0.0.1:3000**.

Para usar ReactJs instalamos el siguiente paquete de NodeJS

`npm install -g create-react-app`

Creamos una aplicación ReactJS llamada **gallery-client** con el comando 

`create-react-app gallery-client`

Para una vista preliminar de este proyecto se usará

`npm start`

Instalemos un paquete para gestionar las rutas que serán servidar por Django

`npm install react-router-dom`

La presentación de nuestra página web será desmontada en componetes que se encargaran de mostrar las galerías, el encabezado, la barra de menús, los detalles de autor y otros. Estas componentes serán las encargada de hacer las peticiones al servidor usando la rutina **componentDidMount** y luego procesar los datos servidos en la rutina **render**.

Para previsualizar el proyecto debemos también tener en ejecución el servidor local de Django.

![alt text](https://s3-us-west-2.amazonaws.com/py4hacaller/2017-08-31+18_22_56-Greenshot.png)

### Referencias
1. https://www.djangoproject.com/start
2. https://facebook.github.io/react
3. https://github.com/facebookincubator/create-react-app
4. http://bulma.io