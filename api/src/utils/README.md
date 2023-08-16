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

