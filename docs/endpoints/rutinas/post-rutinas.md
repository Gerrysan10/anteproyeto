# Endpoint: `POST /rutinas`

Permite crear una nueva rutina con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /rutinas
Content-Type: application/json

{
    "Nombre": "Rutina p",
    "Descripcion": "Rutina de fuerza y resistencia",
    "IDUsuario": 3
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error"
  }
  ``` 

## Notas Adicionales
- Asegúrate de proporcionar todos los campos obligatorios en el cuerpo de la solicitud.
- El servidor asignará automáticamente un identificador único a la nueva rutina creada.