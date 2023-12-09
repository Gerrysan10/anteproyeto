# Endpoint: `PATCH /progresocargas/{id}`

Permite actualizar la información de un progreso en cargas específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del progreso en cargas que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /progresocargas/1
Content-Type: application/json

{
    "IDUsuario": 7,
    "Fecha": "2023-06-15",
    "Repeticiones": 11,
    "Peso": 45
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información del progreso en cargas en específico.