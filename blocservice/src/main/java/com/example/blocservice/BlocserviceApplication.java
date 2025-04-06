package com.example.blocservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BlocserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlocserviceApplication.class, args);
    }

}
