## Students routes

1. Clonar el repositorio desde Github.
2. Ejecutar desde la terminal de VisualStudioCode dentro de la ruta del proyecto.
    - sudo docker build -t <name_images> .
3. Dirigirse a la terminal de Docker y ejecutar. El contenedor se levanta después de este comando:
    - docker run -d -p 3007:3000 --name <name_container> <name_images>
        + 3007 - puerto del cliente 
        + 3000 - puerto de docker
4. Verificar que funciona desde algún cliente (postman):
    - http://localhost:3007/v1/students/students
