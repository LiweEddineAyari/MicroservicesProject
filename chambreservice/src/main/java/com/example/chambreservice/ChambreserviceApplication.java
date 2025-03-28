package com.example.chambreservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ChambreserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChambreserviceApplication.class, args);
    }

}
