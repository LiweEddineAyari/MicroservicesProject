Microservices Architecture Project
This project demonstrates the implementation of a microservices architecture designed to handle multiple services in a distributed environment. It utilizes various technologies, including Docker, Spring Boot, and Keycloak, orchestrated using Docker Compose.

🚀 Technologies Used
Docker Compose: For orchestrating multi-container Docker applications.

Spring Boot: To build stand-alone, production-grade Spring-based applications.

Node.js: Used to implement the Reservation service for more flexibility and performance with asynchronous operations.

Angular: Used to build the front-end of the entire application, offering a responsive and dynamic user interface.

Keycloak: For authentication and authorization services.

Eureka: As a service registry for service discovery.

JWT (JSON Web Token): For secure communication between services.

Spring Cloud Config: For centralized configuration management.

📁 Project Structure
The system comprises several microservices, each responsible for specific functionalities:

ApiGateway: Routes requests to appropriate microservices.

Config-Server: Manages configuration properties for all services.

Discovery Server (Eureka): Enables services to discover each other.

BlocService (Spring Boot): Handles business logic related to blocks.

ChambreService (Spring Boot): Manages operations related to rooms.

EtudiantService (Spring Boot): Manages student data and operations.

FoyerService (Spring Boot): Manages accommodation data.

ReservationService (Node.js): Handles booking and reservation functionalities with a modern JavaScript runtime.

Front-End (Angular): Provides the user interface for interacting with the entire system.

## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/LiweEddineAyari/MicroservicesProject.git
