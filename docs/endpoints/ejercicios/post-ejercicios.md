# Endpoint: `POST /ejercicios`

Permite crear un nuevo ejercicio con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /ejercicios
Content-Type: application/json

{
    "Nombre": "dominadas",
    "GrupoMuscular": "espalda",
    "Descripcion": "Ejercicio para espalda"
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
- El servidor asignará automáticamente un identificador único al nuevo ejercicio creado.