package com.politecnico.operacionales.api.exception;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

import com.politecnico.operacionales.api.service.ChatGPTService.impl.OperationSystemServiceimpl;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class OperationSystemServiceimplTest {

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private OperationSystemServiceimpl operationSystemService;

    @Test
    void getOperationSystem_shouldThrowExceptionWhenApiFails() {
        when(restTemplate.exchange(anyString(), eq(HttpMethod.POST), any(), eq(String.class)))
                .thenThrow(new RuntimeException("API request failed"));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            operationSystemService.getOperationSystem("Intel i7", "16", "512GB SSD", "NVIDIA GTX 1650", "Gaming");
        });

        assertEquals("API request failed", exception.getMessage());
    }
}
