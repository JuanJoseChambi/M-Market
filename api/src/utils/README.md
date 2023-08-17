**Pasos para ingresar datos y sequerir datos segun las tablas relacionales**

**1** terner usuarios guardados en la BD, post en "http://localhost:3001/user/",
       desde el boby llega, name, lastname, email, password

**2** para logear un usuario "http://localhost:3001/user/login",
      desde el boby manda email y password

**3** para crear una orden de compra relacionada a unn usuario, que tenga el monto de lo gastado, el userID del usuario en cuestion, y un array con los productos que compro el usuario...
   **nota** hacemos post en "http://localhost:3001/purchase

necesitamos enviar por body, 
**el monto de la comora** : cuanto salio la compra total, 
**userId**: id del usuario que hizo la compra, 
**prodId**: id de los productos comprados

**ejemplo de como se deberia ver el body**
{
  "monto": 10,
  "userId":"1e9204cf-77ae-4068-81cd-6a2f1c757221",
  "prodId":["f76b6b7d-9ced-4805-a8c2-bb025dc1191b","3c1f1a3e-394a-4223-a446-89630ab7f0f5"]
}

**como deberia verse si hago un get en la misma ruta**
para poder ver las compras, quien compro, y que compro
[
  {
    "id": 2,
    "monto": 10,
    "createdAt": "2023-08-12T14:13:37.187Z",
    "updatedAt": "2023-08-12T14:13:37.193Z",
    "userPurchase": "1e9204cf-77ae-4068-81cd-6a2f1c757221",
    "Prods": [
      {
        "name": "Aceite De Girasol Natura 1.5 L"
      }
    ]
  }
]

**para trael info del usuario con la/las compra que haya hecho**

get en http://localhost:3001/user/

trae todo


**para capturar el email que viene de google**
haciend un post en http://localhost:3001/user

y mandando por boby

{
  "email":"jonnytapias55@hotmail.com",  
  "userGoogle": true
}

**ruta de estadisticas-> prod mas vendidos**
hacer un get en http://localhost:3001/stadistics


## **rutas para el login de usuadios o administradores 🦍**
en la carpeta utils de back, encontraran un archivo llamado userAdmin, en cual en la linea 5 econtraran un array en donde deveran poner sus respectivos email de adminstradores y guardar...
ruta post en http://localhost:3001/user/login
##  **desde el body**

 - "email": "jonny@hotmail.com",
 - "password": "code123"


## **para logearte... admin/noAdmin**

- **Admin** tendras esta response:

 - "access": true,
 - "admin": true,
 - "adminId": "4bc638a0-2244-4610-9db4-7679bfaf617b"


**no Admin** tendras esta response:

- "access": true,
- "admin": false,
-  "userId": "a58b92a6-452a-424f-bfa2-3ac581e938d9"


## **como agregar datos para hacer delivery**

- tenemos que hacer un post en la ruta "http://localhost:3001/delivery"
-y enviarle los parametros de esta manera:
- el user id debe ser de un usuario ya registrado
<br/>

{ <br/>
  "receives": "Blade", <br/>
  "address": "cazador de vampiritos", <br/>
  "phone": "5047788", <br/>
  "pickUp": "No", <br/>
  "delivery": "yes", <br/>
  "userID":"e74161a1-28ca-4b80-a184-508d4e337dc4"<br/>
}<br/>


## **Podemos traer todos los usuarios y veriamos el modelo Delivery incluido**
- haremos una peticion a la siguiente get en url -> http://localhost:3001/user
- podemos buscar por id ej: http://localhost:3001/user/6d221ecd-4049-4cae-bd67-c02a9ad61022