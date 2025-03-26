# EdgeBio Compute Node
![Python](https://img.shields.io/badge/Python-3.9-blue)
![Node.js](https://img.shields.io/badge/Node.js-v16.0-green)
![MongoDB](https://img.shields.io/badge/MongoDB-v5.0-green)
![Docker](https://img.shields.io/badge/Docker-enabled-blue)

![EdgeBio Logo](docs/img/logo_placeholder.png)

> **Development Status :: - Alpha**

## Description: 
A local edge computing application for running bioinformatics pipelines. This system processes sequencing data using a queue-based architecture with a broker, integrating a Next.js frontend, an Express.js backend, and Python processing scripts. 

**Minimum viable product:** 
1. User must be able to upload files to a set location on the server
2. User must be able to run a bioinformatics pipeline on server-side files
3. User must be able to see the progress of the pipeline 

## Documentation
- [About](docs/about.md) - Overview of the project, its purpose, and key features.
- [API Reference](docs/api_reference.md) - Details on API endpoints and WebSocket communication.
- [Architecture Overview](docs/architecture.md) - System architecture, component diagrams.
- [Bioinformatics](docs/bioinformatics.md) - Description of the sequencing pipeline and what steps are performed.
- [Changelog](docs/changelog.md) - Record of major changes, updates, and improvements.
- [Deployment Guide](docs/deployment.md) - How to set up and run the application.
- [Development](docs/development.md) - Guidelines for contributing, coding standards, and environment setup.
- [User Manual](docs/user_manual.md) - How to use the application, including workflows and examples.

## Stakeholders
| Name                    | Stakeholder Type             | Role / Description |
|-------------------------|------------------------------|--------------------|
| **Joshua Iszatt**       | System Developer             | Developer |
| **[Institution name]**  | Company / Collaboration      | Primary research institution |
| **[Partner / Collabs]** | Company / Collaboration      | External collaborations, funding sources |
| **[Consultant Name]**   | Consultant                   | Specialised support for [e.g., bioinformatics, database optimisation] |

## Features
- **Real-time bioinformatics processing** via a queue system and broker.  
- **Local execution** on an SBC NUC with Linux.  
- **Web-based interface** built with Next.js.  
- **Express.js API** for handling data, queue management, and pipeline execution.  
- **Python processing backend** for sequencing data.  
- **WebSocket-based live updates** on pipeline execution.
