package com.politecnico.operacionales.api.constants;

public class ChatGPTConstants {

        public static final String PROMPT_INICIO = """
                        Tengo un equipo con las siguientes especificaciones:
                        Procesador: %s
                        RAM: %s GB
                        Almacenamiento: %s
                        Tarjeta Gráfica: %s
                        Uso del equipo: %s

                        Por favor, devuélveme la recomendación de sistemas operativos en el siguiente formato JSON:
                        """;

        public static final String PROMPT_FORMATO_JSON = """
                        {
                          "choices": [
                            {
                              "so": "[Nombre del Sistema Operativo]",
                              "description": "[Descripción de la recomendación]",
                              "steps": [
                                { "id": 1, "description": "[Paso 1]" },
                                { "id": 2, "description": "[Paso 2]" },
                                ...
                              ]
                            }
                          ]
                        }
                        Genera la respuesta en este formato exacto.
                        """;
}
