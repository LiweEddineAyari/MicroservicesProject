package com.example.apigateway.controller;


import com.example.apigateway.dto.Tokenreq;
import com.example.apigateway.dto.UserRequest;
import com.example.apigateway.services.KeycloakService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final KeycloakService keycloakService;


    public AuthController(KeycloakService keycloakService) {
        this.keycloakService = keycloakService;
    }

    @PostMapping("/register")
    public String register(@RequestBody UserRequest userRequest) {
        return keycloakService.registerUser(userRequest);
    }



    @PostMapping("/login")
    public Mono<String> login(@RequestBody UserRequest userRequest) {
        return keycloakService.loginUser(userRequest.getUsername(), userRequest.getPassword());
    }

    @PostMapping("/logout")
    public Mono<Void> logout(@RequestBody Tokenreq tokenreq) {
        return keycloakService.logoutUser(tokenreq);
    }
}
