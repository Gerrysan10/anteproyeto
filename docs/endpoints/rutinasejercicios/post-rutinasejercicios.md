# Endpoint: `POST /rutinasejercicios`

Permite crear una nueva relación entre una rutina y un ejercicio.

## Ejemplo de Solicitud
```http
POST /rutinasejercicios
Content-Type: application/json

{
    "IDRutina": 3,
    "IDEjercicio": 1,
    "Repeticiones": 3,
    "Peso": 43
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
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

- Asegúrate de proporcionar todos los campos obligatorios en el cuerpo de la solicitud.
- El servidor asignará automáticamente un identificador único a la nueva relación creada.
