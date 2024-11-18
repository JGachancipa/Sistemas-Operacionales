package com.politecnico.operacionales.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private static final String ALLOWED_ORIGIN = "http://localhost:3000";
    private static final String[] ALLOWED_METHODS = {"GET", "POST", "OPTIONS"};
    private static final String[] ALLOWED_HEADERS = {"Authorization", "Content-Type", "Accept"};

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(ALLOWED_ORIGIN)
                .allowedMethods(ALLOWED_METHODS)
                .allowedHeaders(ALLOWED_HEADERS)
                .allowCredentials(true);
    }
}