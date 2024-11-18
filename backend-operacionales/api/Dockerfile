# Usa una imagen base de Amazon Corretto JDK 21
FROM openjdk:21-jdk-slim
COPY target/api-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "app.jar"]
