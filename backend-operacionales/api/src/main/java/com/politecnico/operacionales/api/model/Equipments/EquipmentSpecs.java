package com.politecnico.operacionales.api.model.Equipments;

import lombok.Data;

@Data
public class EquipmentSpecs {
    private String processor;
    private String ram;
    private String storage;
    private String gpu;
    private String usage;

    public EquipmentSpecs() {
    }

    public EquipmentSpecs(String processor, String ram, String storage, String gpu, String usage) {
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
        this.usage = usage;
    }
}
