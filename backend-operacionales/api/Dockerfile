# Usa una imagen base de Amazon Corretto JDK 21
FROM amazoncorretto:21

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR generado por Spring Boot a la imagen
COPY target/api-0.0.1-SNAPSHOT.jar app.jar

# Exponemos el puerto en el que la aplicación Spring Boot escucha (puerto por defecto: 8080)
EXPOSE 8080

# Configura el comando de inicio para la aplicación
CMD ["java", "-jar", "app.jar"]
