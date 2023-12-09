# Endpoint: `POST /progresocargas`

Permite crear un nuevo progreso en cargas con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /progresocargas
Content-Type: application/json

{
    "IDUsuario": 3,
    "Fecha": "2023-05-15",
    "Repeticiones": 10,
    "Peso": 23
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
- El servidor asignará automáticamente un identificador único al nuevo progreso en cargas creado.