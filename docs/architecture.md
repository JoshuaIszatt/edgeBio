# Architecture

## System Overview
* High-level depiction of the system, its layout, and key components. 
* This section provides an overview of how data flows between the user and the system.

<img src="img/image_placeholder.png" width="300" />

## Application diagram
* This diagram provides a top-level view of the software architecture, showing the core application and where the plugin extensions sit.
* The core application is version controlled separately from the plugins, which must also version controlled for usage.

<img src="img/image_placeholder.png" width="300" />

## Deployment diagram
* Useful if the system will be distributed (e.g., frontend on a different server from the backend or database).
* The diagram will explicitly show server-side and client-side architecture

<img src="img/image_placeholder.png" width="300" />

## Data processing A: File handling and pipeline events 
- Step-by-step flow for the file upload and pipeline execution.
- Shows interactions between frontend, backend, and processing components.

<img src="img/image_placeholder.png" width="300" />

## Data processing B: Bioinformatics pipeline
- Step-by-step flow for the processing of raw sequencing data through the bioinformatics pipeline.
- This section describes the bioinformatics workflow (e.g., sequence analysis, data filtering, and processing) and generates results.

<img src="img/image_placeholder.png" width="300" />

## Data processing C: Database entry and report generation
- Step-by-step flow for retrieving the processed data from the bioinformatics pipeline and generating reports.
- Results are saved in a database and then queried to retreive data that is processed into a report.

<img src="img/image_placeholder.png" width="300" />
