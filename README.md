<div align="center">

# NexusFlow
### Manufacturer-Centric Distribution Management System

Connecting distribution, from manufacturer to retailer.

![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)
![Project](https://img.shields.io/badge/University-Level_2_Project-blue?style=for-the-badge)
![Team](https://img.shields.io/badge/Team-Nexus-purple?style=for-the-badge)

**Faculty of Information Technology · University of Moratuwa · 2026**

</div>

---

## Overview

Nexus is a distribution management platform designed to improve coordination, monitoring, and information flow across manufacturer-to-retailer operations.

The platform operates alongside existing ERP processes and connects manufacturers, independent distributor agencies, warehouses, supervisors, and delivery agents through web and mobile applications backed by a shared backend and database.

> **Development status:** The features and technologies below represent the proposed project scope. Implementation details may change as requirements are refined.

## The Problem

Distribution activities after ERP-based order processing often rely on manual communication, paper records, and disconnected systems.

This can lead to:

- Limited visibility into shipment and delivery progress
- Delays in warehouse and dispatch coordination
- Inconsistent delivery, return, and complaint records
- Difficulties consolidating operational information and reports

Nexus aims to bring these activities into one coordinated platform.

## Planned Applications

| Application | Users | Main Responsibilities |
|---|---|---|
| Company Admin Web | Manufacturer personnel | Products, agencies, shipments, reporting, and operational visibility |
| Warehouse Admin Web | Warehouse administrators | Inventory and warehouse operations |
| Agency Admin Web | Distributor agency administrators | Dispatch planning, fleet coordination, and agent assignment |
| Supervisor Mobile | Warehouse supervisors | Support day-to-day warehouse activities |
| Agent Mobile | Sales and delivery agents | Deliveries, proof of delivery, retail orders, and feedback |

All applications will communicate with a shared backend and centralized database.

## Technology Stack

### Web Applications

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Role-based web interfaces for manufacturer, warehouse, and agency operations.

### Mobile Applications

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

Mobile interfaces for supervisors and agents, including planned GPS, camera, and offline delivery support.

### Backend

![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

A shared backend for business logic, authentication, role-based access, and application APIs.

### Data Storage

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

PostgreSQL for persistent data storage and Redis for caching.

### Development and Delivery

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)

Planned tools for version control, containerization, and CI/CD.

### Testing

![JUnit](https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white)
![REST Assured](https://img.shields.io/badge/REST_Assured-43A047?style=for-the-badge)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-EE376D?style=for-the-badge&logo=appium&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

Planned coverage includes backend unit tests, API testing, web testing, and mobile testing.

### External Integrations

![ERP](https://img.shields.io/badge/ERP-Compatible_Data_Exchange-455A64?style=for-the-badge)
![Maps](https://img.shields.io/badge/Maps_%26_Routing-4285F4?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-Assisted_Insights-8E44AD?style=for-the-badge)

Mapping, routing, and AI service providers will be selected during implementation.

## Planned Features

### Manufacturer and ERP Integration

- Product and distributor agency management
- ERP-compatible shipment data exchange
- Shipment coordination and progress monitoring
- Authentication and role-based access management

### Warehouse and Inventory

- Warehouse stock visibility
- Incoming and outgoing inventory handling
- Mobile support for warehouse supervisors

### Dispatch and Fleet

- Vehicle and delivery-agent assignment
- Dispatch planning
- Route optimization and map integration
- Real-time operational monitoring

### Delivery Execution

- Assigned delivery details and status updates
- GPS-based tracking
- Electronic proof of delivery
- Offline delivery support
- Operational notifications

### Retail Orders and Feedback

- Retail order collection
- Returns and damaged-product recording
- Complaint management

### Reporting and AI-Assisted Insights

- Operational reports and summaries
- Natural-language access to relevant operational information for authorized manufacturer personnel

## ERP Integration Approach

Nexus will operate alongside existing ERP processes using defined ERP-compatible data formats.

Development and evaluation will use simulated operational data and sample documents. The proposed project does not require access to confidential company data or a live ERP environment.

## Team Nexus

| Index Number | Member | Primary Responsibilities |
|---|---|---|
| 244005R | Abeywickrama L.H.K | Warehouse and inventory; supervisor application; retail orders, returns, and complaints; AI-assisted analytics |
| 244014T | Amarasinghe W.M.A.G.E.V | Agent mobile application; offline delivery support; delivery and proof of delivery; notifications |
| 244031R | Bandara H.M.A.S.C | Manufacturer operations; ERP integration; shipment, product, and agency management; authentication |
| 244177T | Rathnasiri S.M.D | Dispatch and fleet management; route optimization; maps; real-time monitoring |

**Academic Supervisor:** Ms. Nipuni Premadasa

The team will collaborate on architecture, database design, integration, testing, and documentation.

## Getting Started

Setup instructions will be added as the initial applications become available.

Each application will document:

1. Required software and versions
2. Dependency installation
3. Environment configuration
4. Local execution commands
5. Relevant test commands

Use `.env.example` files to document configuration placeholders. Keep real passwords, API keys, and credentials outside version control.

## Contributing

### Branch Naming

Create a branch for each feature, fix, or documentation task.

Examples:

- `feature/manufacturer-dashboard`
- `feature/warehouse-inventory`
- `feature/agent-delivery`
- `feature/dispatch-planning`
- `fix/delivery-status`
- `docs/update-requirements`

### Pull Request Workflow

1. Get the latest changes from `main`.
2. Create a task branch.
3. Implement and verify your changes.
4. Push the branch and open a pull request.
5. Request a teammate review.
6. Merge after review and resolve integration issues.

Keep commits focused and use clear messages, such as:

- `feat: add warehouse inventory screen`
- `fix: correct delivery status update`
- `docs: add database design notes`

Discuss shared API contracts, database changes, and authentication changes with the team before implementation.

## Documentation

Project documentation will be maintained in `docs/`, including:

- Project proposal
- Software requirements specification
- Use case diagrams and descriptions
- Activity diagrams
- Entity relationship diagram
- Architecture and API documentation
- Testing and evaluation records

## Project Timeline

| Phase | Planned Period |
|---|---|
| Project understanding and industry consultation | July–August 2026 |
| Requirements analysis and system modelling | August–September 2026 |
| Proposal preparation and system design | August–October 2026 |
| Database design and SRS finalization | September–October 2026 |
| System implementation | November 2026–February 2027 |
| Integration and system testing | February–March 2027 |
| Industry validation and evaluation | March 2027 |
| Final documentation and presentation | March 2027 |

---

<div align="center">

**Nexus · Group 08**  
Faculty of Information Technology  
University of Moratuwa

</div>
