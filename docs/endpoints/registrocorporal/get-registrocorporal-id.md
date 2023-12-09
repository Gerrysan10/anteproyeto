# Endpoint: `GET /registrocorporal/{id}`

Permite obtener información detallada sobre un registro corporal en específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del registro corporal que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /registrocorporal/2
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "IDRegistro": 2,
    "IDUsuario": 2,
    "Fecha": "2023-11-30T00:00:00.000Z",
    "Peso": 65,
    "GrasaCorporal": 22,
    "MedidaBrazo": 28.5
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre un registro corporal en específico.