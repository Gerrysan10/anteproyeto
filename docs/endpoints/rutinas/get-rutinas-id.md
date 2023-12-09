# Endpoint: `GET /rutinas/{id}`

Permite obtener información detallada sobre una rutina específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la rutina que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /rutinas/3
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "IDRutina": 3,
  "Nombre": "Rutina de Cardio",
  "Descripcion": "Enfocada en ejercicios cardiovasculares",
  "IDUsuario": 5
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información sobre una rutina en específico.