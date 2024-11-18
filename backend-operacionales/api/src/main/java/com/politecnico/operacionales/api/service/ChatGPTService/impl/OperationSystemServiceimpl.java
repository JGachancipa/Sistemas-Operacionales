package com.politecnico.operacionales.api.service.ChatGPTService.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.politecnico.operacionales.api.constants.ChatGPTConstants;
import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemRequest;
import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemResponse;
import com.politecnico.operacionales.api.service.ChatGPTService.OperationSystemService;

import java.util.ArrayList;
import java.util.List;

@Service
public class OperationSystemServiceimpl implements OperationSystemService {
    private static final Logger logger = LoggerFactory.getLogger(OperationSystemServiceimpl.class);

    private final RestTemplate restTemplate;

    @Value("${chatgpt.api.url}")
    private String apiURL;

    @Value("${chatgpt.api.model}")
    private String model;

    public OperationSystemServiceimpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public OperationSystemResponse getOperationSystem(String processor, String ram, String storage, String gpu, String usage) {
        String prompt = createPrompt(processor, ram, storage, gpu, usage);
        System.out.println("Generated prompt: " + prompt);
        OperationSystemRequest req = new OperationSystemRequest(model, prompt);

        try {
            OperationSystemResponse response = restTemplate.postForObject(apiURL, req, OperationSystemResponse.class);
            if (response == null || response.getChoices().isEmpty()) {
                logger.warn("La respuesta de la API es nula o no contiene elecciones. Retornando valor por defecto.");
                return getDefaultResponse();
            }
            return response;
        } catch (HttpClientErrorException e) {
            logger.error("Error en la llamada a la API: {}", e.getMessage());
            logger.error("Detalles de la respuesta de error: {}", e.getResponseBodyAsString());
        } catch (HttpServerErrorException e) {
            logger.error("Error en el servidor de la API: {}", e.getMessage());
            logger.error("Detalles de la respuesta de error: {}", e.getResponseBodyAsString());
        } catch (RuntimeException e) {
            logger.error("Error desconocido: {}", e.getMessage());
        }

        logger.warn("Ocurrió un error durante la llamada a la API. Retornando respuesta predeterminada.");
        return getDefaultResponse();
    }

    private String createPrompt(String processor, String ram, String storage, String gpu, String usage) {
        return String.format(ChatGPTConstants.PROMPT_INICIO, processor, ram, storage,
                (gpu != null ? gpu : "No especificado"), usage) + ChatGPTConstants.PROMPT_FORMATO_JSON;
    }

    private OperationSystemResponse getDefaultResponse() {
        OperationSystemResponse defaultResponse = new OperationSystemResponse();
    
        OperationSystemResponse.Choice windowsChoice = new OperationSystemResponse.Choice();
        windowsChoice.setSo("Windows 11 Pro");
        windowsChoice.setDescription("Recomendamos Windows 11 Pro debido a su excelente soporte para juegos, compatibilidad con hardware moderno y características optimizadas para gaming.");
        
        List<OperationSystemResponse.Step> windowsSteps = new ArrayList<>();
        windowsSteps.add(new OperationSystemResponse.Step(1, "Instala Windows 11 desde un medio de instalación oficial."));
        windowsSteps.add(new OperationSystemResponse.Step(2, "Asegúrate de instalar los controladores más recientes para tu GPU NVIDIA GTX 1650."));
        windowsSteps.add(new OperationSystemResponse.Step(3, "Habilita el 'Modo de juego' desde la configuración de Windows para optimizar el rendimiento."));
        windowsSteps.add(new OperationSystemResponse.Step(4, "Descarga e instala herramientas como DirectX y NVIDIA GeForce Experience para una experiencia de juego mejorada."));
        windowsChoice.setSteps(windowsSteps);
    
        OperationSystemResponse.Choice ubuntuChoice = new OperationSystemResponse.Choice();
        ubuntuChoice.setSo("Ubuntu 22.04 LTS");
        ubuntuChoice.setDescription("Ubuntu 22.04 LTS es una excelente opción para usuarios que prefieren software libre y desean una experiencia optimizada para gaming en Linux.");
        
        List<OperationSystemResponse.Step> ubuntuSteps = new ArrayList<>();
        ubuntuSteps.add(new OperationSystemResponse.Step(1, "Descarga la imagen ISO de Ubuntu 22.04 desde el sitio oficial."));
        ubuntuSteps.add(new OperationSystemResponse.Step(2, "Crea un medio de instalación (USB o DVD) utilizando herramientas como Rufus o Etcher."));
        ubuntuSteps.add(new OperationSystemResponse.Step(3, "Instala los controladores de NVIDIA para la GPU GTX 1650 utilizando el repositorio oficial de controladores."));
        ubuntuSteps.add(new OperationSystemResponse.Step(4, "Instala herramientas como Steam y Lutris para optimizar la experiencia de juego en Linux."));
        ubuntuChoice.setSteps(ubuntuSteps);
    
        OperationSystemResponse.Choice steamOsChoice = new OperationSystemResponse.Choice();
        steamOsChoice.setSo("SteamOS");
        steamOsChoice.setDescription("SteamOS es ideal para usuarios enfocados únicamente en gaming, con optimizaciones específicas para juegos de Steam y hardware moderno.");
        
        List<OperationSystemResponse.Step> steamOsSteps = new ArrayList<>();
        steamOsSteps.add(new OperationSystemResponse.Step(1, "Descarga la imagen de SteamOS desde el sitio oficial."));
        steamOsSteps.add(new OperationSystemResponse.Step(2, "Crea un USB booteable utilizando herramientas como Rufus."));
        steamOsSteps.add(new OperationSystemResponse.Step(3, "Instala SteamOS en tu equipo y realiza las actualizaciones iniciales del sistema."));
        steamOsSteps.add(new OperationSystemResponse.Step(4, "Configura tu cuenta de Steam y descarga los juegos directamente desde la plataforma."));
        steamOsChoice.setSteps(steamOsSteps);
    
        List<OperationSystemResponse.Choice> choices = new ArrayList<>();
        choices.add(windowsChoice);
        choices.add(ubuntuChoice);
        choices.add(steamOsChoice);
    
        defaultResponse.setChoices(choices);
    
        return defaultResponse;
    }
    
}
