# Endpoint: `GET /ejercicios/{id}`

Permite obtener información detallada sobre un ejercicio específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del ejercicio que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /ejercicios/5
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "IDEjercicio": 5,
  "Nombre": "Burpees",
  "GrupoMuscular": "Cuerpo Completo",
  "Descripcion": "Ejercicio cardiovascular y de resistencia"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre un ejercicio en específico.