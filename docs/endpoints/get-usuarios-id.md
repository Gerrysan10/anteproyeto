# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "IDUsuario": 1,
  "Nombre": "Juan",
  "Apellido": "Pérez",
  "Correo": "juan@example.com",
  "Contraseña": "contraseña123",
  "FechaNacimiento": "1990-05-15T00:00:00.000Z"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre un usuario en específico.