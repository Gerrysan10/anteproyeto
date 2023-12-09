# Endpoint: `PATCH /registrocorporal/{id}`

Permite actualizar la información de un registro corporal específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la rutina que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /registrocorporal/4
Content-Type: application/json

{
    "IDRegistro": 2,
    "IDUsuario": 1,
    "Fecha": "2023-07-03",
    "Peso": 50.2,
    "GrasaCorporal": 20,
    "MedidaBrazo": 29
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información de un registro corporal en específico.