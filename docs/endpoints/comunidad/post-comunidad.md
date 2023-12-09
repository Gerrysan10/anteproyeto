# Endpoint: `POST /comunidad`

Permite crear una nueva comunidad con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /comunidad
Content-Type: application/json

{
    "IDUsuario": 4,
    "Mensaje": "¿Algún consejo amigos?",
    "FechaPublicacion": "2023-07-25"
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
- El servidor asignará automáticamente un identificador único a la nueva comunidad creada.