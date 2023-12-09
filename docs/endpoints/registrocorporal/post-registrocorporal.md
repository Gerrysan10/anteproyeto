# Endpoint: `POST /registrocorporal`

Permite crear un nuevo registro corporal con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /registrocorporal
Content-Type: application/json

{
    "IDRegistro": 1,
    "IDUsuario": 1,
    "Fecha": "2023-06-03",
    "Peso": 55.2,
    "GrasaCorporal": 20,
    "MedidaBrazo": 29
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
- El servidor asignará automáticamente un identificador único al nuevo registro corporal creado.