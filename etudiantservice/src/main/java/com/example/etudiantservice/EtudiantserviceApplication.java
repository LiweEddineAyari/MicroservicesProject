package com.example.etudiantservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EtudiantserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EtudiantserviceApplication.class, args);
    }

}
