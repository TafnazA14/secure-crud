# Secure-CRUD

A production-style **multi-container CRUD application** built using Docker, Node.js, MongoDB, and Nginx, with full CI/CD automation using GitHub Actions.

---

## Project Overview

Secure-CRUD demonstrates a **secure and isolated container architecture** where:
- Only a reverse proxy (Nginx) is exposed to the host
- The application and database run in a private Docker network
- Data persists across container restarts
- Deployment is fully automated

---

## Architecture

Client → Nginx (Port 80) → Node.js App → MongoDB

yaml
Copy code

- **Nginx**: Reverse proxy (only exposed service)
- **Node.js (Express)**: CRUD API
- **MongoDB**: Persistent database
- **Docker Compose**: Orchestration
- **GitHub Actions**: CI/CD pipeline

---

## Features

- Create, Read, Update, Delete (CRUD) operations
- Secure container networking
- Persistent database storage using Docker volumes
- Non-root container execution
- Automated Docker image build & push

---

## Tech Stack

- Node.js + Express
- MongoDB
- Nginx
- Docker & Docker Compose
- GitHub Actions
- Docker Hub

---

## Setup & Run (One Command)

### Prerequisites
- Docker
- Docker Compose

### Start the application
```bash
./deploy.sh
Application will be live at:

arduino
Copy code
http://localhost
CI/CD Pipeline
Triggered on every push to main

Builds Docker image

Tags image as latest and <commit-sha>

Pushes image to Docker Hub

Docker Hub Repository:
https://hub.docker.com/r/tafnaz12/secure-crud

Project Structure
bash
Copy code
.
├── src/                # Application source code
├── nginx/              # Nginx configuration
├── docker-compose.yml  # Multi-container orchestration
├── Dockerfile          # App container instructions
├── deploy.sh           # Automation script
└── README.md           # Documentation
Author
Tafnaz A