package com.politecnico.operacionales.api.unit;

import com.politecnico.operacionales.api.model.ChatGPT.OperationSystemResponse;
import com.politecnico.operacionales.api.service.ChatGPTService.impl.OperationSystemServiceimpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class OperationSystemServiceimplTest {

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private OperationSystemServiceimpl operationSystemService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getOperationSystem_shouldReturnValidResponse() {
        String mockResponseBody = "{\n" +
                "  \"choices\": [{\n" +
                "    \"so\": \"Windows\",\n" +
                "    \"description\": \"Recommended for gaming and productivity.\",\n" +
                "    \"steps\": [{\n" +
                "      \"id\": 1,\n" +
                "      \"description\": \"Download the Windows installer.\"\n" +
                "    }]\n" +
                "  }]\n" +
                "}";

        ResponseEntity<String> responseEntity = ResponseEntity.ok(mockResponseBody);
        when(restTemplate.exchange(anyString(), eq(HttpMethod.POST), any(HttpEntity.class), eq(String.class)))
                .thenReturn(responseEntity);
        OperationSystemResponse result = operationSystemService.getOperationSystem("Intel i7", "16", "512GB SSD",
                "NVIDIA GTX 1650", "Gaming");
        assertNotNull(result, "Result should not be null");
        assertFalse(result.getChoices().isEmpty(), "Choices should not be empty");
        assertEquals("Windows", result.getChoices().get(0).getSo(), "The OS should be Windows");
        assertEquals("Recommended for gaming and productivity.", result.getChoices().get(0).getDescription(),
                "The description should match");
    }

    @Test
    void getOperationSystem_shouldThrowExceptionWhenApiFails() {
        when(restTemplate.exchange(anyString(), eq(HttpMethod.POST), any(HttpEntity.class), eq(String.class)))
                .thenReturn(null);

        assertThrows(RuntimeException.class, () -> {
            operationSystemService.getOperationSystem("Intel i7", "16", "512GB SSD", "NVIDIA GTX 1650", "Gaming");
        });
    }
}
