# Endpoint: `PATCH /usuarios/{id}`

Permite actualizar la información de un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /usuarios/1
Content-Type: application/json

{
  "Nombre": "actualizado",
  "Apellido": "prueba",
  "Correo": "actualizado@email.com",
  "Contraseña": "clave123",
  "FechaNacimiento": "1990-05-15"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información sobre un usuario en específico.