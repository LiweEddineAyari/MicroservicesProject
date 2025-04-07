# Microservices Project

## Overview

This project demonstrates the implementation of a microservices architecture designed to handle multiple services in a distributed environment. It utilizes various technologies, including Docker, Spring Boot, and Keycloak, orchestrated using Docker Compose.

## Technologies Used

- **Docker Compose**: For orchestrating multi-container Docker applications.
- **Spring Boot**: To build stand-alone, production-grade Spring-based applications.
- **Keycloak**: For authentication and authorization services.
- **Eureka**: As a service registry for service discovery.
- **JWT**: For secure communication between services.
- **Spring Cloud Config**: For centralized configuration management.

## Project Structure

The system comprises several microservices, each responsible for specific functionalities:

1. **ApiGateway**: Routes requests to appropriate microservices.
2. **Config-Server**: Manages configuration properties for all services.
3. **Discovery Server (Eureka)**: Enables services to discover each other.
4. **BlocService**: Handles business logic related to blocks.
5. **ChambreService**: Manages operations related to rooms.
6. **EtudiantService**: Manages student data and operations.
7. **Foyer**: Manages accommodation data.
8. **Reservation**: Handles booking and reservation functionalities.

## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/LiweEddineAyari/MicroservicesProject.git
