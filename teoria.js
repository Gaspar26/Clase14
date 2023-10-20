/*
 Primer clase de backend 

 backend : es la parte de un sitio o app que se encarga de la logica, la gestion de datos y a la comunicacion del servidor

 --> JS Tambien se puede utilizar en backen y lo haremos gracias a node.js que permite ejecutar este lenguaje en el servidor

 Objetivos:

 --> protocolo http
 --> modelo cliente-servidor
 --> base de datos - servidor
 --> node.js 
 --> git - github

 
 !Protocolo http

 Modelo cliente-servidor:

 --> cliente: es un programa o dispositivo que solicita y consume servicios o recursos proporcionados por otro programama llamado servidor
 --> cliente hace un pedido (request) al servidor de lo que necesita y el servidor (programa que recibe solicitudes y proporciona servicios o recursos) las escucha y responde esos pedidos (response)

 --> protocolo http --> hypertext tranfer protocol

 !es el protocolo de comunicacioin que se utiliza para transferir informacion en la www.
 !conexion entre cliente y servidor (request - response)
!-> http vs https:
    - con s : hyper text transfer protocol secure (una version segura de http que utiliza una capa de seguridad adicional para proteger la informacion que se transmite)

!Estructura request y response

!-> request (pedido)
    1- metodos: get, post, put ,delete 
    2- url: a donde se va a enviar el request
    3- headers: traen informacion acerca del request. Por ejemplo, content-type, header le dice al servidor el formato de la data de la informacion contenida en el body
    4- protocolo: http1 tambien http2 
    5- body: en algunos casos dependiendo del metodo puede tambien haber un body del request que contenga informacion a enviar al servidor


!-> response (respuesta)
    1- status code: un numero que nos da informacion acerca de que ocurrio en el proceso request-response
    2- status message: una descripcion que nos da informacion acerca de si la solicitud http fue satisfactoria o no
    3- headers: le ma mas informacion al cliente acerca de la respuesta
    4- protocolo: http1 como http2
    5- body: opcional, contiene la informacion correspondiente a la respuesta del servidor

!Metodos http

    -->GET: es utilizado para solicitar datos o recursos del servidor
    -->POST: es utilizado para enviar datos o recursos al servidor 
    -->PUT: es utilizado para actualizar completamnte un recursos en elservidor
    -->DELETE: es utilizado para eliminar recursos en el servidor

!Status code --> un numero de 3 digitos que nos da informacion acerca de que ocurrio en el proceso request-response

    categorias:
    -1xx : codigos de estado informativos (indican que la solicitud a sido recibida y se esta procesando)
    
    -2xx : codigos de estados satisfactorios (200 = ok, la solicitud a sido exitosa y devuelve la respuesta) -->

    --> Estos codigos indican que la solicitud del cliente a sido procesada con exito por el servidor

    -3xx : codigos de estados de redireccion (302 found, el recurso solicitado a sido movido temporalmente a una nueva url) -->

    --> Indican que el cliente necesita realizar mas acciones para completar la solicitud. Se utilizan cuando el recurso que queremos a sido movido o se encuentra en una ubicacion diferente. El cliente puede ser reedirigido a una nueva URL para obtener el recurso.

    -4xx : codigos de estado de error del cliente (404 not found, el recurso solicitado no se encuentra en el servidor)-->

    --> indican que a ocurrido un error por parte del cliente, ya sea que la solicitud realizada es incorrecta, no es valida, o no puede ser procesada por el servidor.

    -5xx : codigos de estado de error del servidor (500 internal server error: a ocurrido un error interno en el servidor al procesar la solicitud)


!CONEXION ENTRE BACKEND Y FRONTEND

    el protocolo http es el medio por el cual el forntend y el backend de una app web se comunican entre si permitiendo que el navegador del usuario y el servidor web interactuen para procesar solicitudes y enviar respuesta


!Servidores vs base de datos

    base de datos: almacena y organiza datos
    
    servidor : es el equipo, sistema o programa que permite que los usuarios accedan y manipulen la informacion almacenada en la base de datos



 Coomo es el examen
 Primer ejercicio : Dentro de un arreglo ver y separar los numero y mostrarlos en la consola
 Segundo ejercicio : Dentro de una palabra separar todas las letras que tiene y ver la cantidad de "O"   
