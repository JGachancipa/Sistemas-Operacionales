package com.politecnico.operacionales.api.service.ChatGPTService;

import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemResponse;

public interface OperationSystemService {
    /**
     * Obtiene las recomendaciones de los diferentes sistemas operativos
     * 
     * @param processor Procesador del equipo
     * @param ram Cantidad de RAM en GB
     * @param storage Tipo y capacidad del almacenamiento
     * @param gpu Tarjeta gráfica (opcional)
     * @param usage Uso del equipo (oficina, gaming, etc.)
     * @return Operación recomendada
     * @throws IllegalArgumentException Si los datos no son válidos
     */
    OperationSystemResponse getOperationSystem(String processor, String ram, String storage, String gpu, String usage);
}
