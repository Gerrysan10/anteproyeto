# Endpoint: `POST /usuarios`

Permite crear un nuevo usuario con la información proporcionada.

## Ejemplo de Solicitud
```http
POST /usuarios
Content-Type: application/json

{
  "Nombre": "nuevo",
  "Apellido": "prueba",
  "Correo": "nuevo@email.com",
  "Contraseña": "clave123",
  "FechaNacimiento": "1990-05-15"
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
- La fecha de nacimiento debe estar en el formato 'YYYY-MM-DD'.
- El servidor asignará automáticamente un identificador único al nuevo usuario creado.
