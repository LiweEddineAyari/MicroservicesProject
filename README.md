# 🧱 Microservices Architecture Project

This project demonstrates the implementation of a **microservices architecture** designed to handle multiple services in a distributed environment. It utilizes various technologies, including Docker, Spring Boot, and Keycloak, orchestrated using Docker Compose.

---

## 🚀 Technologies Used

- **Docker Compose**: For orchestrating multi-container Docker applications.  
- **Spring Boot**: To build stand-alone, production-grade Spring-based applications.  
- **Node.js**: Used to implement the *Reservation* service, providing flexibility and efficient asynchronous processing.  
- **Angular**: Front-end framework used to build the UI for the entire application.  
- **Keycloak**: Provides authentication and authorization services.  
- **Eureka (Netflix OSS)**: Acts as a service registry for enabling service discovery.  
- **JWT (JSON Web Token)**: Used for secure communication between services.  
- **Spring Cloud Config**: Centralized configuration management across all services.

---

## 🧱 Project Structure

The system is composed of several microservices, each responsible for specific functionality:

- **ApiGateway**:  
  Acts as the entry point to route external requests to the appropriate microservices.

- **Config-Server**:  
  Manages and serves configuration properties for all microservices from a central location.

- **Discovery Server (Eureka)**:  
  Allows services to register and discover each other dynamically.

- **BlocService (Spring Boot)**:  
  Handles business logic related to housing blocks.

- **ChambreService (Spring Boot)**:  
  Manages room-related data and operations.

- **EtudiantService (Spring Boot)**:  
  Handles student-related information and actions.

- **FoyerService (Spring Boot)**:  
  Manages accommodation structures and related operations.

- **ReservationService (Node.js)**:  
  Implements the booking and reservation logic using Node.js for modern, event-driven capabilities.

- **Front-End (Angular)**:  
  A user-friendly front-end built with Angular that interacts with the backend services through the API Gateway.

---

## 🛠️ Getting Started

To get started with the project:

### Prerequisites

- Docker  
- Docker Compose  
- Node.js (for local development of the reservation service)  
- Angular CLI (if you want to run the front-end separately)

### Run the application

1. Clone the repository:

```bash
git clone https://github.com/your-repo/microservices-project.git
cd microservices-project
