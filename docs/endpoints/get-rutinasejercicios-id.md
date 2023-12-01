# Endpoint: `GET /rutinasejercicios/{id}`

Permite obtener información detallada la relación específica de una rutina con un ejercicio mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del a relación específica de una rutina con un ejercicio que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /rutinasejercicios/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "IDRutinaEjercicio": 3,
  "IDRutina": 2,
  "IDEjercicio": 3,
  "Repeticiones": 20,
  "Peso": 0
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre la relación de una rutina con un ejercicio en específico.