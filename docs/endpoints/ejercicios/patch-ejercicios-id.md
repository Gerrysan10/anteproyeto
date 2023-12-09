# Endpoint: `PATCH /ejercicios/{id}`

Permite actualizar la información de un ejercicio específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del ejercicio que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /ejercicios/1
Content-Type: application/json

{
    "Nombre": "extensiones",
    "GrupoMuscular": "pantorrilla",
    "Descripcion": "Ejercicio para pantorrilla"
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información de un ejercicio en específico.