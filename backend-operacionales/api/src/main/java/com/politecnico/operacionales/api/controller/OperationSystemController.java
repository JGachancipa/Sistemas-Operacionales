package com.politecnico.operacionales.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemResponse;
import com.politecnico.operacionales.api.model.Equipments.EquipmentSpecs;
import com.politecnico.operacionales.api.service.ChatGPTService.OperationSystemService;

@RestController
public class OperationSystemController {
    private final OperationSystemService opService;

    public OperationSystemController(OperationSystemService opService) {
        this.opService = opService;
    }

    @PostMapping("/api/system-recommendation")
    public OperationSystemResponse getRecommendations(@RequestBody EquipmentSpecs equipmentSpecs) {
        return opService.getOperationSystem(
                equipmentSpecs.getProcessor(),
                equipmentSpecs.getRam(),
                equipmentSpecs.getStorage(),
                equipmentSpecs.getGpu(),
                equipmentSpecs.getUsage());
    }
}
