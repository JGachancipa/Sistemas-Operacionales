package com.politecnico.operacionales.api.integration;

import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemResponse;
import com.politecnico.operacionales.api.service.ChatGPTService.impl.OperationSystemServiceimpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OperationSystemServiceIntegrationTest {

    @Autowired
    private OperationSystemServiceimpl operationSystemService;

    @Test
    void getOperationSystem_shouldReturnValidResponse() {
        OperationSystemResponse result = operationSystemService.getOperationSystem("Intel i7", "16", "512GB SSD", "NVIDIA GTX 1650", "Gaming");
        assertNotNull(result);
        assertFalse(result.getChoices().isEmpty());
        assertEquals("Windows", result.getChoices().get(0).getSo());
        assertEquals("Recommended for gaming and productivity.", result.getChoices().get(0).getDescription());
    }
}
