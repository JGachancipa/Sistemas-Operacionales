package com.politecnico.operacionales.api.model.ChatGPT;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class OperationSystemResponse {

    private List<Choice> choices = new ArrayList<>();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Choice {
        private String so;
        private String description;
        private List<Step> steps = new ArrayList<>();
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Step {
        private int id;
        private String description;
    }
}
