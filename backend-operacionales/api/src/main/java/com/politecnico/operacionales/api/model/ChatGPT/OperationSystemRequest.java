package com.politecnico.operacionales.api.model.ChatGPT;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class OperationSystemRequest {
    private String model;
    private List<Message> message;

    public OperationSystemRequest(String model, String prompt) {
        this.model = model;
        this.message = new ArrayList<>();
        this.message.add(new Message("user", prompt));
    }
}
