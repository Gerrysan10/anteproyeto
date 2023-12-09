# Endpoint: `GET /progresocargas/{id}`

Permite obtener información detallada sobre un progreso en carga específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del progreso en carga que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /progresocargas/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "IDProgreso": 3,
    "IDUsuario": 3,
    "Fecha": "2023-11-30T00:00:00.000Z",
    "Repeticiones": 10,
    "Peso": 75
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre un progreso en carga en específico.