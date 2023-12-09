# Endpoint: `PATCH /rutinas/{id}`

Permite actualizar la información de una rutina específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la rutina que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /rutinas/1
Content-Type: application/json

{
    "Nombre": "Rutina j",
    "Descripcion": "Rutina de fuerza y resistencia",
    "IDUsuario": 1
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información de una rutina en específico.