# Endpoint: `GET /comunidad/{id}`

Permite obtener información detallada sobre una comunidad específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la comunidad que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /comunidad/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "IDComunidad": 1,
    "IDUsuario": 1,
    "Mensaje": "¡Logré mi primera semana completa de            entrenamiento!",
    "FechaPublicacion": "2023-11-30T08:45:00.000Z"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre una comunidad en específico.