# Endpoint: `PATCH /rutinasejercicios/{id}`

Permite actualizar los datos de una relación entre una rutina y un ejercicio en especifico mediante un identificador único. 

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la relación que se desea actualizar.

## Ejemplo de Solicitud
```http
PATCH /rutinasejercicios/7
Content-Type: application/json

{
    "IDRutina": 4,
    "IDEjercicio": 5,
    "Repeticiones": 4,
    "Peso": 21
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

- Asegurate de incluir un ID válido en la solicitud para la actualización de la información sobre la relación entre una rutina y un ejercicio en específico.