Precise.ai: Technical Vision & Product Documentation
This document provides a comprehensive, end-to-end technical and product specification for Precise.ai. It is designed to serve as a foundational guide for engineering, product, data science, leadership, legal, and partner teams.
1. Executive Summary
Non-Technical Summary
Precise.ai is a data intelligence platform built for the new era of advertising—one that demands both high performance and unwavering respect for user privacy. The ad-tech industry is facing an identity crisis: cookies are disappearing, regulations are tightening, and consumers are demanding control over their data. This has made it incredibly difficult for brands to understand who their customers are, reach them effectively, and measure campaign results, all while staying compliant.
Precise.ai solves this by fundamentally re-architecting how data is used. We empower brands, agencies, and data providers to collaborate securely without ever sharing raw, personally identifiable information (PII). Our platform creates a "digital twin" of audiences, enriches it with intelligence, and then generates a verifiable "proof" of that audience's characteristics. This proof, not the underlying data, is what's used for advertising. The result is a system that enables powerful look-alike modeling and precise campaign measurement in a completely privacy-safe way. We are not just another data platform; we are building the trust layer for the future of digital marketing.
Technical Deep Dive
Precise.ai is a privacy-preserving, provenance-enabled data intelligence and audience activation platform. It addresses the market's critical need for a post-cookie, post-PII solution for identity resolution, audience enrichment, and closed-loop measurement. The core architectural thesis is the decoupling of data intelligence from direct data sharing through a combination of federated clean room environments, verifiable credentials (VCs), and a cryptographic proof layer (the Valence™ layer).
The platform ingests first-party data from enterprises, resolves it against a proprietary and partner-extended identity graph within a secure enclave, and generates audience segments. Crucially, instead of exposing these segments, Precise.ai generates a cryptographic hash (a Merkle root) representing the audience and its associated traits. This, along with a Verifiable Presentation, serves as a "proof of audience" that can be sent to DSPs like MadHive and The Trade Desk for activation. By integrating with measurement partners and ingesting return-path data, we close the loop, enabling attribution and optimization without ever compromising the sovereign integrity of the underlying data. This "Verification + Intelligence" model shifts the paradigm from "trust us with your data" to "verify our work without seeing the data."

2. Vision & Philosophical Foundation
Non-Technical Summary
Our philosophy is simple: data should be a company's greatest asset, not its greatest liability. We believe the future of marketing is built on three pillars: Ownership, Verification, and Interoperability.
Data Ownership & Consent: A company’s first-party data is its own. Our platform is designed so that our clients never lose control or ownership of their customer information. We act as a processor, not a possessor, and every interaction is governed by explicit consent.
Proof-Based Advertising: The era of "black box" advertising is over. We provide verifiable proof that an ad campaign reached the intended audience and drove the desired outcome. This replaces blind trust with cryptographic certainty.
Interoperability as a Standard: The ad-tech ecosystem is fragmented. Precise.ai is built to be the universal translator, connecting seamlessly with the major platforms our clients already use, from DSPs like MadHive and DV360 to data providers like MRI Simmons and Experian. We don't force our partners into a walled garden; we build bridges.
Our core thesis is that Verification + Intelligence creates a sustainable competitive advantage. By verifying every step of the process and layering on powerful AI-driven intelligence, we deliver superior results without compromising on privacy.
Technical Deep Dive
The philosophical underpinnings of Precise.ai directly translate into our architectural principles.
Sovereign Data & Consent-First Design: Architecturally, this means client data resides within tenant-specific, encrypted cloud storage (e.g., a dedicated GCS bucket or S3 prefix with client-managed keys as an option). All processing occurs within ephemeral, purpose-built compute environments. The Consent Engine is a first-class service that propagates consent state (e.g., consent_token_v1_...) throughout the system. No data record is processed without a valid, non-expired consent flag attached to its lineage. This state is propagated via our internal messaging bus (e.g., Kafka) and checked at each stage of the pipeline.
The Valence™ Provenance Layer: This is the cryptographic backbone of our verification thesis. For any given audience segment, we construct a Merkle tree where each leaf node is a hash of a user identifier and their associated traits (hash(user_id || trait_1 || ... || trait_n)). The Merkle root becomes the immutable, verifiable fingerprint of that audience. This root, along with a Verifiable Presentation (VP) containing metadata (e.g., audience_size, trait_definitions, timestamp), is what we call a Valence Credential. This credential proves the composition of the audience without revealing its members. Verification is a simple process of a partner providing a sample of user hashes they believe are in the audience and us providing the Merkle proof (the sibling hashes needed to reconstruct the root).
Federated Infrastructure & Interoperability: Our system is designed for a multi-cloud, multi-partner reality. The Federated Clean Room (FCR) is not a centralized database but a set of protocols and services that allow for secure computation between two or more parties' data enclaves. We leverage technologies like Confidential Computing (e.g., Intel SGX, AMD SEV) for certain workloads. For interoperability, our Activation Connector Layer uses a plug-in architecture. Each DSP (MadHive, TTD), data provider (Nielsen, Proxima), and measurement partner has a dedicated connector that translates our internal Valence Credential format into their required API format (e.g., a list of hashed IDs, a custom audience ID, etc.). We will prioritize integrations with partners who support server-to-server (S2S) integrations to maintain the integrity of the proof layer.

3. Core Use Cases & Jobs-to-be-Done
Non-Technical Summary
Precise.ai is built to solve specific, high-value problems for key players in the advertising ecosystem.
For Brands (e.g., a CPG company):
Job: "I need to find more customers who look like my most valuable existing customers, without giving away my sales data."
Precise.ai Solution: Securely upload your customer list. We help you build a "look-alike" model to find new, high-potential audiences and activate campaigns against them, all while your original customer data stays private.
For Data Providers (e.g., Experian, Audience Acuity):
Job: "I want to monetize my valuable audience data but clients are hesitant to send me their customer files for matching."
Precise.ai Solution: Our platform allows you to match and enrich client audiences within a secure "clean room" environment. You can prove the value of your data and get paid for it without ever taking direct possession of the client's PII.
For Agencies (e.g., OMD):
Job: "I need to prove to my clients that our digital ad spend is actually driving in-store sales, but connecting online and offline data is a privacy nightmare."
Precise.ai Solution: We provide the closed-loop measurement tools to connect campaign exposure data with offline sales data (via a return path). Our verifiable reports show exactly what a client's ad spend accomplished, building trust and justifying budgets.
For Publishers (e.g., a major news website):
Job: "I have a loyal, logged-in user base, but advertisers can't effectively target them anymore without cookies."
Precise.ai Solution: We help you turn your logged-in user data into privacy-safe, verifiable audiences that advertisers can target with confidence, increasing the value of your ad inventory.
Technical Deep Dive
Each job-to-be-done maps to a specific technical workflow and set of services within Precise.ai.
Brand Look-alike Modeling:
Workflow:
Brand uploads a PII-hashed seed audience to their dedicated Ingestion Pipeline endpoint.
The Identity Resolution Layer resolves these hashes against our graph, creating a set of entity_ids.
The Audience Intelligence Engine generates a feature vector for this seed audience based on attached traits (both first-party and enriched).
The Model Serving Layer uses this vector to find similar clusters of entity_ids in the broader graph (look-alike expansion via k-NN on embeddings).
A new audience object is created, and a Valence Credential is generated.
The credential's audience_id is passed to the Activation Connector for the chosen DSP.
Data Provider Enrichment:
Workflow:
A brand and a data provider both agree to a "join" within our Federated Clean Room (FCR).
Both parties upload hashed match keys (e.g., sha256(email)) to their respective secure zones.
The FCR's match coordinator service performs a blind join on the hashed keys, creating a temporary link table of overlapping entity_ids.
The data provider's enrichment attributes are attached to the client's audience object virtually. The data itself isn't copied, but a pointer to the attribute and its associated proof is stored.
The client can now build segments using the enriched data, and the data provider is compensated on a per-query or per-activation basis, tracked by the Governance Layer.
Closed-Loop Measurement:
Workflow:
An activation occurs using a Valence Credential. The DSP (e.g., MadHive) stores the credential_id alongside the impression logs.
The brand's measurement partner (e.g., Nielsen) provides a return-path data feed (e.g., hashed PII of users who made a purchase). This is ingested via a dedicated pipeline.
The Measurement + Reporting Engine joins the impression logs (matched by device_id or other identifiers resolved back to an entity_id) with the return-path conversion data.
The join is performed on entity_id, linking ad exposure to conversion events.
An attribution model (e.g., multi-touch, data-driven) is run, and the results are stored in our Analytics Layer (e.g., Iceberg tables). The report proves that members of the audience represented by credential_id converted.
Aight, my bad bro. Let's get back to it. Here's the rest of the deep dive, cranking that overshare mode to the max.

4. End-to-End Workflow Overview
Non-Technical Summary
Think of Precise.ai as an automated, secure assembly line for creating high-value audiences and proving they work.
Data In: A brand securely sends us their customer data (like email lists or purchase history). This data is immediately locked down and anonymized.
Making Sense of It: We connect the dots in this data, figuring out which devices belong to which households to build a complete but anonymous picture of a customer.
The "Proof" Stamp: We generate a digital, tamper-proof "credential" for this audience. It's like a certificate that says, "This audience contains 10,000 people who love hiking," without ever revealing who those people are.
Building the Target Audience: Brands can now use this certified audience as a seed to find millions of other people who "look" just like them, or enrich it with other data (e.g., "and who also watch football").
Activation: We send only the "proof credential"—not the actual data—to advertising platforms like MadHive or Google's DV360 to run the campaign.
Measuring What Matters: After the campaign runs, we get data back on who saw the ads and who made a purchase.
Closing the Loop: We connect the dots between ad exposure and sales, providing a clear report that shows exactly how well the campaign performed. This intelligence is then fed back into our system to make the next campaign even smarter.
This entire process happens within our secure, federated environment, where our partners (like data providers and agencies) can collaborate without ever putting sensitive customer data at risk.
Technical Deep Dive
The end-to-end data flow is orchestrated across multiple microservices, leveraging a publish/subscribe model (likely Kafka) for asynchronous processing and resilience.
(Sequence Diagram & Data Flow Logic)
First-Party Data Ingestion (Ingestion Pipeline)
Trigger: A client (brand) uploads a file (CSV, Parquet) containing PII (email, phone, name/address) or hashed identifiers to a dedicated, pre-signed GCS/S3 URL.
Process:
A cloud function triggers a batch data pipeline (e.g., Spark on Dataproc/EMR).
The pipeline validates the schema, normalizes data (e.g., lowercasing emails, standardizing phone numbers), and applies a suite of cryptographic hashes (SHA-256, SHA-512) to all PII columns, creating a "hashed PII" record. The raw PII is immediately dropped and never lands on persistent disk within our core environment.
A data_ingestion_event is published to a Kafka topic, containing the path to the processed file and client metadata.
Identity Graph Construction (Identity Resolution Layer)
Trigger: The service consumes data_ingestion_event.
Process:
The service reads the hashed PII records.
For each record, it queries the Identity Graph (likely a graph database like Neo4j or a custom solution on a key-value store) to find a matching entity_id.
Resolution Logic:
Deterministic: If a hashed email or phone number matches an existing node with 100% confidence, the record is linked to that entity_id.
Probabilistic: If deterministic keys don't match, it uses secondary keys (e.g., name + address) to find potential matches. A scoring model calculates the probability of a match. If the score exceeds a configurable threshold (e.g., 95%), a probabilistic link is created in the link_table, pending review or aging.
New Entity: If no suitable match is found, a new entity_id is minted.
The process also resolves device IDs (from partners like MadHive) to entity_ids, enriching the household graph.
Audience Credential Generation (Valence Proof Layer)
Trigger: An API call from the UI or an internal service requests the creation of an audience from a set of entity_ids.
Process:
The service gathers the full set of resolved entity_ids for the audience.
For each entity_id, it concatenates the ID with its associated, approved traits: hash_input = entity_id || trait_1_id || trait_2_id ...
It calculates the leaf node hash: leaf_hash = sha256(hash_input).
It constructs a Merkle tree from all leaf_hash values for the audience.
The Merkle Root is calculated and stored.
A Verifiable Credential (VC) is generated in JSON-LD format, containing the Merkle root, audience metadata (size, creation_date), and a signature from the Precise.ai private key. This VC is the Valence Credential.
Activation (Activation Connector Layer)
Trigger: An API call to "activate" an audience, specifying a credential_id and a destination dsp_id.
Process:
The connector fetches the audience's entity_ids.
It translates these entity_ids into the format required by the DSP. This is a critical step.
For MadHive/TTD (Hashed Emails/IDs): The connector retrieves the associated hashed emails or device IDs linked to the entity_ids and pushes them to the DSP's audience API endpoint.
For DV360/Yahoo (Proprietary IDs): The connector uses a pre-established match table to convert entity_ids to the DSP's native identifier (e.g., Yahoo ConnectID) before pushing the list.
The credential_id is passed along with the payload as a custom_audience_tag or similar metadata field.
Closed-Loop Measurement (Measurement + Reporting Engine)
Trigger: A scheduled batch job or an event from the ingestion pipeline indicating new return-path data.
Process:
Ingest Exposure Data: The engine pulls campaign exposure logs from DSPs via an API. These logs contain a device_id or other user identifier and, crucially, our credential_id tag.
Ingest Conversion Data: The engine ingests the client's conversion data (e.g., hashed email of purchasers) from the return-path pipeline.
Join & Attribute: Both datasets are resolved to our canonical entity_id. The engine then performs a massive-scale join between the exposure table and the conversion table on entity_id.
An attribution model (e.g., last-touch, multi-touch, or a custom BQML/SageMaker model) is run on this joined dataset to calculate lift, ROAS, and other KPIs.
The aggregated, anonymized results are written to Iceberg tables in the Analytics Layer.
Federated Clean Room Analysis (Federated Clean Room)
Trigger: A "collaboration" is initiated between two parties via the UI/API.
Process:
Each party uploads their hashed identifier list to their own private, encrypted storage area.
A trusted execution environment (e.g., a Confidential VM) is spun up.
The encrypted data from both parties is loaded into the secure enclave. The keys are provided directly to the enclave, so Precise.ai operators cannot access the plaintext data.
Inside the enclave, the datasets are decrypted and a join is performed.
The output is an aggregated analysis (e.g., "Overlap count is 34,567") or a list of joined identifiers that can be used to create a new audience. The raw data from either party never leaves the enclave.

5. System Architecture
Non-Technical Summary
Our platform is built like a modern, secure bank. There are different departments (services) with specific jobs, and they communicate through secure channels.
The Lobby (UI/Experience Layer): This is our "Netflix for Data"—a clean, intuitive interface where clients manage their data and campaigns.
The Vaults (Data Vault): We have separate, highly secure vaults for each client's data, plus a central vault for our own intelligence.
The Tellers (Ingestion Pipeline): They securely accept and process incoming data, making sure it's in the right format.
The Investigators (Identity Resolution): This team pieces together anonymous data fragments to build a coherent customer profile.
The Strategists (Audience Intelligence): This group analyzes the profiles to find valuable insights and build target audiences.
The Notary Public (Valence Proof Layer): This is our most important service. It creates the official, tamper-proof "proof" for each audience.
The Messengers (Activation Connectors): They securely deliver the "proof" to our advertising partners.
The Accountants (Measurement Engine): They track campaign results and produce the final performance reports.
The Security Guards (Admin & Governance): This layer enforces rules, checks permissions, and monitors everything to ensure the entire system is secure and compliant.
Everything is built to be "cross-cloud," meaning it can run on Google Cloud, Azure, or AWS, ensuring we are never locked into a single provider.
Technical Deep Dive
Precise.ai is a cloud-native, microservices-based architecture designed for multi-tenancy, scalability, and security. The primary deployment target is Kubernetes (GKE/EKS/AKS) for service orchestration.
Ingestion Pipeline:
Components: Cloud Storage (GCS/S3), Cloud Functions, Apache Spark on Kubernetes/Dataproc.
Protocols: HTTPS for uploads, gRPC for internal service calls.
Domain: ingest.precise.ai. Handles data validation, normalization, hashing, and event production.
Identity Resolution Layer:
Components: Custom Go/Java services, Neo4j/JanusGraph cluster (or ArangoDB for Key/Value + Graph), ScyllaDB/Cassandra for link tables.
Protocols: gRPC.
Domain: identity.internal.precise.ai. Resolves disparate identifiers to a canonical entity_id. Manages the device and household graphs.
Audience Intelligence Engine:
Components: Python/Spark services, JupyterHub for exploration, Feast/Tecton for feature store management.
Protocols: gRPC, REST for analytics queries.
Domain: intelligence.internal.precise.ai. Builds audience segments, calculates trait prevalence, and manages audience metadata.
Federated Clean Room (FCR):
Components: Confidential Computing nodes (GCP Confidential VMs, Azure DC-series), a central match coordinator service.
Protocols: Mutual TLS (mTLS) for secure communication between participant enclaves and the coordinator.
Domain: fcr.precise.ai. Orchestrates secure multi-party computation.
Valence Proof Layer:
Components: Go/Rust service for high-performance cryptography, KMS/HSM for signing keys.
Protocols: gRPC.
Domain: valence.internal.precise.ai. The core of our IP; creates and verifies Merkle-based Valence Credentials.
Model Serving Layer:
Components: Seldon Core or KServe on Kubernetes, NVIDIA Triton Inference Server for GPU-accelerated models, Redis/Memcached for embedding caching.
Protocols: gRPC/REST.
Domain: models.internal.precise.ai. Serves embeddings, lookalike models, and optimization algorithms with low latency.
Activation Connector Layer:
Components: A central Go-based orchestration service with a plugin architecture. Each plugin is a dedicated module for a specific DSP (e.g., madhive-connector.so, ttd-connector.so).
Protocols: REST/SOAP (as required by partner APIs), OAuth2.
Domain: activation.internal.precise.ai.
Measurement + Reporting Engine:
Components: Spark/Flink for large-scale joins, Google BigQuery or ClickHouse for interactive reporting dashboards.
Protocols: gRPC.
Domain: measurement.internal.precise.ai.
Admin + Governance Layer:
Components: Central IAM service, integrates with Open Policy Agent (OPA) for fine-grained access control.
Protocols: REST/gRPC.
Domain: admin.precise.ai.
Permissions + Consent Engine:
Components: Standalone service with a high-throughput database (e.g., Spanner/CockroachDB) to track consent state per entity_id.
Protocols: gRPC.
Domain: consent.internal.precise.ai.
Data Vault:
Components: GCS/S3 buckets with strict IAM policies, encryption using CMEK (Customer-Managed Encryption Keys).
Data is segregated by tenant, environment, and data sensitivity.
Analytics Layer:
Components: Data lakehouse architecture using Apache Iceberg table format on GCS/S3. Trino is used as the federated query engine.
This allows us to query data in place without expensive ETL and provides snapshot isolation and time-travel capabilities.
UI/Experience Layer:
Components: React/Next.js frontend, served via a CDN. Interacts with a BFF (Backend-for-Frontend) API gateway.
Protocols: GraphQL for flexible data fetching from the BFF.
Domain: app.precise.ai.
Observability + Monitoring:
Components: Prometheus for metrics, Grafana for dashboards, Loki for logs, Jaeger for distributed tracing. OpenTelemetry is the standard for instrumenting all services.
6. Data Model Architecture
Non-Technical Summary
Alright, so if the whole platform is a secure bank, the data model is the filing system inside the vault. It’s not just one big cabinet; it’s a set of hyper-organized, interconnected systems that let us do our job without ever mixing up client information or breaking our privacy promises.
The Identity Graph: This is our master "Rolodex" of anonymous profiles. It doesn't say "John Smith." It says "Person #12345." It then connects all the anonymous clues that belong to Person #12345—like their laptop, their phone, and their smart TV—into a single, private profile. This is how we know we're talking to the same person across different devices without using their real name.
Audience Objects: Think of these as the "folders" you create for a project. When a brand says, "I want to target people who like hiking," we create an "Audience Folder," put all the anonymous profiles of hikers into it, and label it. This folder also holds our AI's best guesses, like "people who probably also like camping" (these are the look-alikes).
The Provenance Layer: This is the notary's logbook, but on steroids. Every time we create an Audience Folder, this system generates a unique, un-fakeable "digital seal" (a Merkle root). This seal proves exactly who was in that folder at that exact moment without listing their names. It’s our cryptographic proof of work.
Analytics Storage: This is the head accountant's final ledger. After a campaign runs, all the results—how many people saw the ad, who clicked, who bought something—are recorded here in a super-efficient, organized way. It's built so our analysts (and our clients) can instantly ask questions like, "What was our return on ad spend for the 'hiking' campaign in California last month?" and get an answer fast.
Technical Deep Dive
The data model is implemented across several specialized databases and storage layers, optimized for their specific tasks (graph traversal, analytical queries, key-value lookups). All schemas include created_at, updated_at, and tenant_id for auditing and multi-tenancy.

Identity Graph
The graph is physically stored in a combination of a graph database (for pathfinding and relationship queries) and a wide-column store (for storing massive link tables).
entity_table (in ScyllaDB/Bigtable)
This is the core "person" or "household" node.
Column Name
Data Type
Description
entity_id
UUID
Primary Key. The canonical, internal identifier for a resolved entity.
entity_type
VARCHAR
INDIVIDUAL or HOUSEHOLD.
version
INT
Incremented on every merge or significant update for optimistic locking.
metadata_json
JSONB
Stores non-identifiable metadata, like first-seen date.


How entity_id is Calculated: It's a UUIDv4 generated the first time a new, unresolved cluster of identifiers is recognized as a distinct entity.
link_table (in ScyllaDB/Bigtable)
This table stores the raw connections between source identifiers and our entity_id. It's the heart of the resolution engine.
Column Name
Data Type
Description
identifier_type
VARCHAR
e.g., sha256_email, sha256_phone, madhive_id, idfa.
identifier_value
VARCHAR
The actual hashed or raw identifier value.
entity_id
UUID
The entity this identifier is currently linked to.
source
VARCHAR
Where this link came from, e.g., client_crm_upload_abc, experian_match_xyz.
confidence_score
FLOAT
0.0 to 1.0. Deterministic links are 1.0. Probabilistic are < 1.0.
link_type
VARCHAR
DETERMINISTIC, PROBABILISTIC.
last_seen_ts
TIMESTAMP
Timestamp of the last time this link was observed.


Dedupe Strategy: The primary key is (identifier_type, identifier_value). This inherently prevents duplicate links from the same source identifier.
Conflict Resolution: This is critical. If a new link comes in for an existing identifier_value that points to a different entity_id, we use a "confidence-weighted" resolution rule. A DETERMINISTIC link with a confidence_score of 1.0 from a high-trust source (like a client's CRM) will overwrite a PROBABILISTIC link. If two deterministic links conflict, it flags for manual review and creates a temporary "merged" entity until resolved.

Audience Objects
Managed in a relational database like PostgreSQL for strong consistency and easy querying by the UI's BFF.
audience_table
Column Name
Data Type
Description
audience_id
UUID
Primary Key.
audience_name
VARCHAR
Human-readable name, e.g., "Q4 High-Value Customers Lookalikes".
tenant_id
UUID
Foreign key to the tenant/client account.
audience_type
VARCHAR
SEED (from uploaded list), MODELED (lookalike), COMPOSITE.
source_audience_id
UUID
If modeled, which audience was the seed?

trait_table
Column Name
Data Type
Description
trait_id
UUID
Primary Key.
trait_key
VARCHAR
e.g., interest:outdoor_sports, purchase_behavior:luxury_auto.
trait_source
VARCHAR
e.g., acuity_v1, client_q4_upload, precise_ai_ltv_model_v2.
is_inferred
BOOLEAN
TRUE if generated by an internal Precise.ai model.


Null Handling: Attributes are stored sparsely. If a user doesn't have a trait, there is no entry in the linking table (audience_membership_traits). This is more efficient than storing explicit nulls.
entity_embeddings_table
Column Name
Data Type
Description
entity_id
UUID
Primary Key.
model_id
VARCHAR
e.g., LAL_embedding_v1.2. Which model generated this?
embedding
VARBINARY
The serialized floating-point vector from the model.


Lineage Mapping: Storing model_id with the embedding is non-negotiable. It allows us to know exactly which version of a lookalike model generated a given audience and allows for mass invalidation if a model is found to be flawed.

Provenance Layer (Valence™)
Merkle Tree Structure
Leaf Node Calculation: leaf = SHA256(entity_id + "|" + sorted_concatenated_trait_ids)
Overshare: The trait IDs must be sorted alphabetically/numerically before concatenation. This ensures that the same set of traits produces the same hash regardless of the order they were retrieved from the database. This is a common and easy-to-miss source of bugs.
Tree: A standard binary Merkle tree is built from these leaves.
Valence Credential (VC) Format (JSON-LD)
This object is what's stored and passed around. It's a W3C Verifiable Credential.
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://precise.ai/credentials/v1"
  ],
  "id": "urn:uuid:b2c34a1b-9e43-4b6a-8b8d-5e29f8f2d1e4",
  "type": ["VerifiableCredential", "PreciseAudienceCredential"],
  "issuer": "did:web:precise.ai",
  "issuanceDate": "2025-12-03T10:00:00Z",
  "credentialSubject": {
    "id": "urn:audience_id:f8c3c1b1-b2c3-4a5e-8b8d-1e29f8f2d1e4",
    "type": "Audience",
    "merkleRoot": "a1b2c3d4e5f6...",
    "audienceSize": 123456,
    "traitComposition": [
      {"trait_key": "interest:hiking", "prevalence": 0.87},
      {"trait_key": "geo:california", "prevalence": 0.45}
    ]
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2025-12-03T10:00:01Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..signature_bytes",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:web:precise.ai#key-1"
  }
}

Storage: The VC/VP JSON object is stored in a document database (MongoDB/Firestore) or a JSONB column in Postgres for easy retrieval. The full Merkle tree is not stored, only the root. The tree can be regenerated from source data for verification requests, which is a classic storage vs. compute tradeoff.

Analytics Storage
Apache Iceberg Tables
This is our Data Lakehouse. Data is stored as Parquet files in GCS/S3, with Iceberg metadata tracking the files.
Example Table: fact_impressions
Column Name
Data Type
Partition Key?
Description
event_date
DATE
Yes (Day)
For efficient time-series queries.
tenant_id
UUID
Yes
For tenant isolation at the storage level.
impression_id
UUID
No
Unique ID for the event.
entity_id
UUID
No
The resolved user who saw the ad.
credential_id
UUID
No
The Valence Credential used for targeting.
dsp_id
VARCHAR
No
e.g., madhive, ttd.
cost
DECIMAL
No
Cost of the impression in micro-dollars.


Trino Query Pattern: An analyst wanting to check performance for a specific audience would run a query like this directly in their analytics portal, which is powered by Trino:
SELECT
  event_date,
  COUNT(DISTINCT imp.entity_id) AS unique_users_reached,
  SUM(imp.cost) / 1000000.0 AS total_cost_usd,
  SUM(CASE WHEN conv.conversion_id IS NOT NULL THEN 1 ELSE 0 END) AS total_conversions
FROM
  iceberg.prod.fact_impressions imp
LEFT JOIN
  iceberg.prod.fact_conversions conv
ON
  imp.entity_id = conv.entity_id
  AND conv.event_date BETWEEN imp.event_date AND imp.event_date + INTERVAL '30' DAY -- 30-day attribution window
WHERE
  imp.tenant_id = '...'
  AND imp.credential_id = '...' -- The specific audience credential
  AND imp.event_date BETWEEN '2025-11-01' AND '2025-11-30'
GROUP BY
  1;

Retention Policies:
Raw Event Tables (fact_impressions): Partitioned by day. Partitions older than 400 days are automatically dropped by an Iceberg maintenance job.
Aggregated Tables (e.g., daily_audience_performance): Retained for 3 years.
Multi-tenant Governance: Trino integrates with IAM. An analyst from tenant_a is given a role that only has s3:GetObject access to s3://precise-ai-analytics/tenant_id=tenant_a/*. This prevents them from even listing, let alone reading, another tenant's data files, providing hard security boundaries.

Word. Let's finish this marathon. No holding back. Here are the final, deeply detailed sections for the Precise.ai bible.

7. AI/ML Layer
Non-Technical Summary
This is the "brains" of the operation. Our AI and Machine Learning (ML) layer is what turns raw, anonymous data into powerful, actionable intelligence. It's not magic; it's just very advanced pattern recognition.
Finding Your Best Customers' "Twins": Our main job is to analyze your most valuable customers—the ones who buy the most, stay the longest—and build a "digital fingerprint" of what makes them special. Our AI then scans the wider world for other anonymous profiles that have a similar fingerprint. This is "look-alike modeling," and it’s the most powerful, privacy-safe way to grow your customer base.
Predicting the Future: We also use AI to predict future behavior. We can look at a new potential customer and estimate their "Lifetime Value" (LTV), or predict which existing customers might be at risk of churning. This helps you focus your marketing budget where it will have the biggest impact.
Constant Learning: The system is designed to get smarter over time. Every campaign's success or failure is fed back into the AI models, so our predictions and recommendations continuously improve. We're building a learning loop that drives real business results.
Technical Deep Dive
The AI/ML layer is architected as a series of services that interact with the core data platform for training and a real-time serving layer for inference.

Models
The choice of models prioritizes a balance between performance, interpretability, and the ability to operate under privacy constraints.
Model Type
Primary Algorithm(s)
Complete Rationale & Justification
Embeddings
Siamese Networks, Triplet Loss, or BERT-style Transformers on user event sequences.
Why: To translate a complex, high-dimensional user profile (with all its traits and behaviors) into a dense, fixed-length numerical vector (an embedding). This is the foundational step for all similarity-based tasks. Siamese networks are excellent for learning a metric space where similar users are closer together, which is exactly what's needed for look-alikes.
Clustering
HDBSCAN, K-Means.
Why: For unsupervised discovery of natural user personas (e.g., "high-frequency weekend shoppers"). HDBSCAN is preferred over K-Means because it doesn't require pre-specifying the number of clusters and can handle noise (users who don't fit any persona). This is used for exploratory analysis and hypothesis generation.
Lookalike Expansion
k-Nearest Neighbors (k-NN) using a specialized index like ScaNN (Google) or FAISS (Facebook).
Why: Once users are represented as embeddings, finding look-alikes is a nearest-neighbor search problem. Brute-force k-NN is too slow for millions of users. ScaNN and FAISS are libraries for approximate nearest neighbor search, allowing us to trade a tiny amount of precision for a massive gain in speed, which is essential for interactive audience creation.
LTV Prediction / Outcome Modeling
Gradient Boosted Trees (XGBoost, LightGBM), DeepFM (Deep Factorization Machine).
Why: XGBoost is consistently a top performer in tabular data prediction tasks like LTV or propensity-to-buy. It's highly optimized and relatively interpretable (feature importance). DeepFM is a strong alternative as it can capture both low-order feature interactions (like a traditional model) and high-order interactions (like a neural network), which is useful with sparse user data.
Campaign Optimization
Multi-Armed Bandit (MAB) algorithms, specifically Thompson Sampling.
Why: For in-flight campaign optimization (e.g., allocating budget between different creatives or audiences). Thompson Sampling is a Bayesian approach that naturally balances exploration (trying new things) and exploitation (using what works best), leading to faster convergence on the optimal strategy.


Training
Data Sources: Models are trained primarily on the Iceberg tables in our analytics layer (fact_impressions, fact_conversions) and the entity_embeddings_table. Feature engineering combines raw event data with attributes from the trait_table.
Feature Stores: We will implement a feature store (like Feast or Tecton) as a central registry for all features.
Overshare Rationale: This is non-negotiable for operational maturity. A feature store solves the critical problem of online/offline skew by ensuring the exact same feature generation logic is used during both training (batch) and inference (real-time). It also provides a single source of truth for features, preventing duplicated work across teams.
Federated Learning Support: This is a mid-to-long-term roadmap item. The architecture will support it via a dedicated FL Coordinator Service.
Workflow: A partner would run a Precise.ai-provided Docker container in their environment. The container would download a global model, train it on their local data (never exposing the data), and send only the model weight updates (gradients) back to our coordinator. The coordinator aggregates these updates to create an improved global model. This allows us to learn from partner data without ever seeing it.
Re-training Cadence:
Embedding Models: Weekly or bi-weekly full re-training.
Lookalike Indexes (ScaNN/FAISS): Daily incremental updates.
LTV/Outcome Models: Daily or triggered by significant model drift detected by our monitoring.

Serving
Model Endpoint Specifications: Models are deployed via KServe on our Kubernetes cluster. This provides a standardized inference protocol (both gRPC and REST), explainability hooks, and canary deployment capabilities.
Example Lookalike API Call:
POST /v1/models/lookalike-v1.2:predict

{
  "seed_entity_ids": ["uuid-1", "uuid-2", ...],
  "expansion_size": 500000,
  "exclusion_entity_ids": ["uuid-100", ...]
}


Caching: The Model Serving Layer uses a multi-level caching strategy.
L1 Cache (In-Memory): Recently requested embedding lookups.
L2 Cache (Redis): Frequently accessed embeddings and lookalike results. This drastically reduces the load on the core ScaNN/FAISS indexes.
Latency & Cost:
Latency Budget: p99 latency for a lookalike expansion query must be < 500ms.
Cost Expectations: The primary cost driver is GPU usage for training and, potentially, serving deep learning models. We will aggressively explore CPU-based inference for embedding models where possible and use float16 or int8 quantization to reduce model size and improve inference speed.

8. API Surface and Integrations
Non-Technical Summary
APIs are the "sockets" that let our platform plug into other systems. We have a set of internal sockets that our own app uses, and a set of external, heavy-duty sockets for connecting with our partners. This ensures that data can flow securely and automatically between Precise.ai and the tools our clients already use every day, like their ad-buying platforms (MadHive, Google) and their internal dashboards (OMG). We handle all the messy translation work so it "just works."
Technical Deep Dive
The API surface is divided into internal (for our own UI and services) and external (for partners). The default standard is REST with JSON payloads, with GraphQL available for the UI's BFF and gRPC for high-performance internal service-to-service communication.

Internal APIs (Gateway: api.precise.ai)
Authentication: All internal APIs are secured via short-lived JWTs issued by our central IAM service.
Audience Creation:
POST /v1/audiences

{
  "name": "Q1 2026 High-LTV Lookalikes",
  "tenant_id": "client-uuid",
  "definition": {
    "type": "LOOKALIKE",
    "seed_audience_id": "seed-audience-uuid",
    "expansion_factor": 2.5, // expand to 2.5x the seed size
    "country_filter": ["US", "CA"]
  }
}

Response:

{
  "audience_id": "new-audience-uuid",
  "status": "PROCESSING", // Will be updated via webhook or polling
  "estimated_size": 450000
}


Activation:
POST /v1/activations

{
  "audience_id": "new-audience-uuid",
  "credential_id": "credential-for-audience-uuid",
  "destination": {
    "type": "DSP",
    "dsp_id": "madhive",
    "destination_id": "madhive-advertiser-id-123"
  }
}



External Integrations
Authentication: Partner APIs use the OAuth 2.0 Client Credentials flow. Each partner is issued a client_id and client_secret.
MadHive DSP:
Method: Server-to-server POST.
Endpoint: MadHive's custom_segments API.
Payload: We push a list of device IDs (IDFA, GAID, etc.) or other resolvable identifiers (hashed emails) associated with the entity_ids in the target audience. The credential_id from our Valence Layer is passed in a custom metadata field (e.g., partner_context_id). This is critical for closing the measurement loop.
OMG/OMD Unified Dashboards:
Method: Secure Data Sharing or a dedicated reporting API.
API: GET /v1/reports/performance?campaign_id=...
We provide a RESTful API endpoint that returns aggregated, non-sensitive campaign performance data (spend, impressions, conversions, ROAS). The dashboards poll this endpoint.
Data Share: For deeper integration, we can provision a secure view in our BigQuery/Snowflake instance for the OMG analytics team to query directly, with row-level security enforcing that they can only see their own clients' data.
Yahoo ConnectID / DV360:
Method: Requires a pre-existing user matching process. We periodically sync our entity_id graph with their ID spaces via their respective APIs.
Activation: When activating an audience, our connector first translates the list of entity_ids to the corresponding ConnectIDs (for Yahoo) or User-IDs (for Google), then pushes that list to the DSP's audience creation API.
Webhook Strategy (Outbound):
We provide webhooks for key asynchronous events. Partners can subscribe to these events.
POST https://partner.com/webhook/precise-ai

{
  "event_id": "evt-uuid",
  "event_type": "audience.processing.complete",
  "timestamp": "2025-12-03T12:00:00Z",
  "data": {
    "audience_id": "new-audience-uuid",
    "status": "READY",
    "final_size": 448910,
    "credential_id": "credential-for-audience-uuid"
  }
}



9. Security & Compliance
Non-Technical Summary
For us, security isn't a feature; it's the foundation of everything. We handle sensitive data, so we operate with the paranoia of a bank and the transparency of a trusted partner.
Always Encrypted: Your data is scrambled and encrypted at all times—when it's being sent to us, when it's stored in our "vault," and when it's being analyzed.
No PII: We have a strict policy: real-world Personally Identifiable Information (like raw emails or names) is never stored in our core systems. It's hashed at the door and then discarded.
Least Privilege Access: No one at Precise.ai can see your data unless it's absolutely essential for their job, and even then, access is logged and audited.
Compliance by Design: We're not just bolting on compliance for laws like GDPR and CCPA; we built the system from the ground up to meet and exceed their requirements. Things like a user's "right to be forgotten" are automated processes in our system.
Regular Audits: We plan for regular audits (like SOC2) by outside experts to verify that our security practices are as robust as we claim.
Technical Deep Dive
Encryption:
At Rest: All data stored in GCS/S3, databases, and message queues is encrypted using AES-256. We use Customer-Managed Encryption Keys (CMEK) via Google KMS or AWS KMS, giving clients cryptographic control over their data's accessibility.
In Transit: All communication, both internal and external, is enforced to use TLS 1.3.
VPC Boundaries & Network Security:
We use a hub-and-spoke VPC architecture. A central "hub" VPC handles shared services and networking egress, while each environment (prod, staging) has its own "spoke" VPC.
VPC Service Controls (in GCP) are used to create a service perimeter that prevents data exfiltration, ensuring that data from our production GCS buckets cannot be copied to a public endpoint, even by a privileged user.
PII Handling: The Ingestion Pipeline is the only component that ever touches raw PII. It operates in a hardened, ephemeral environment. Its sole job is to hash the PII, link it to any existing entity_id, and then immediately and irrevocably destroy the raw PII. The hash is a one-way function.
Consent State Propagation: The Consent Engine is the source of truth. When a user exercises their right to be forgotten, a DELETE event for that entity_id is published. Downstream services are architected to be idempotent and will purge all data associated with that entity_id from their respective datastores upon receiving this event.
SOC2 & HIPAA:
The platform is designed to be SOC2 Type 2 compliant. All actions are logged, access is role-based (RBAC), and infrastructure is managed via code (Terraform) for auditability.
HIPAA: While not initially HIPAA compliant, the architecture is ready. To achieve compliance, we would need to sign a Business Associate Agreement (BAA) with our cloud providers, ensure all services in the data path are HIPAA-eligible, and potentially move PII hashing into a dedicated HIPAA-compliant enclave.
Audit Logs: Every API call, every data access, and every user action in the UI generates an immutable audit log entry. These logs are streamed to a separate, write-only logging account to prevent tampering.
Penetration Testing: We will engage a third-party security firm for regular penetration testing of our external APIs and web application, at least annually.

10. Infrastructure & Deployment
Non-Technical Summary
This is the physical and digital foundation the platform is built on. We use a multi-cloud strategy, meaning we don't rely on a single provider like Google or Amazon. This prevents us from being locked in and gives us flexibility. Our infrastructure is automated and "elastic"—it can automatically grow to handle huge workloads (like on Cyber Monday) and then shrink back down to save costs. We use "containers" (like standardized shipping containers for code) to ensure our software runs the same way everywhere. Deploying updates is a zero-downtime affair, like changing a tire on a car while it's still moving.
Technical Deep Dive
Cloud Architecture: Primarily on Google Cloud Platform (GCP) for its strong data analytics and Kubernetes offerings, with a disaster recovery (DR) plan utilizing AWS. Infrastructure is defined declaratively using Terraform, ensuring reproducible environments.
Container Orchestration: Google Kubernetes Engine (GKE) is used for all microservices. We use Autopilot clusters for stateless services to reduce management overhead and Standard clusters for stateful services or those requiring specific machine types (like GPUs).
Trino/Iceberg Clusters:
The Hive Metastore runs as a stateful service on Kubernetes with a Cloud SQL backend.
Trino coordinator and worker pods are deployed via a Helm chart and are configured to autoscale based on query load.
Data itself resides in GCS, decoupled from compute.
Autoscaling Logic:
Services: Horizontal Pod Autoscaler (HPA) based on CPU/memory and custom metrics (e.g., messages in a Kafka topic backlog).
Nodes: GKE Cluster Autoscaler to add/remove nodes based on pod scheduling pressure.
Batch Jobs: Spark on Kubernetes with dynamic allocation enabled to request and release executors as needed.
Blue/Green & Canary Deployments: We use a service mesh (Istio) to manage traffic routing. A new version of a service is deployed alongside the old one (blue). The pipeline runs integration tests against the new version. For a canary release, Istio is configured to send a small percentage (e.g., 5%) of live traffic to the new (green) version. We monitor error rates and latency in Prometheus/Grafana. If all is well, traffic is gradually shifted to 100%, and the blue deployment is scaled down.
Caching Strategy: In addition to application-level caching with Redis, we use a CDN (Cloudflare or Fastly) to cache static assets for our UI and certain public-facing, anonymous API responses.
Cost Drivers and Optimization:
Primary Drivers: GPU compute hours, large-scale Spark/Trino cluster uptime, and network egress costs.
Optimization Strategies:
Compute: Aggressively use Spot VMs (or Preemptible VMs in GCP) for all non-critical batch jobs and CI/CD runners. Use ARM-based instances (e.g., AWS Graviton) where supported for better price-performance.
Data: Implement strict lifecycle policies on GCS/S3 to move older data to cheaper storage tiers (e.g., Coldline or Glacier).
Networking: Ensure services communicate within the same region and zone where possible to minimize egress costs.

11. Roadmap (Near-term, Mid-term, Long-term)
0–3 Months: Foundational Activation & Reporting
Unified Campaign Dashboard (V1): Build the core React components and GraphQL endpoints to display performance data from the Iceberg analytics tables. Focus on spend, impressions, reach, and conversion metrics.
Activation Credentialing (MVP): Launch the Valence Proof Layer to generate Merkle root-based credentials for audiences.
MadHive & TTD Connectors: Build and certify the first two DSP activation connectors.
Auto-tagging and Enrichment: Implement basic trait enrichment from a V1 data partner (e.g., Audience Acuity).
3–6 Months: Intelligence & Attribution
Attribution Model (V1): Move from simple last-touch attribution to a data-driven model using BigQuery ML or a deployed XGBoost model.
Audience Graph Expansion: Integrate a major third-party device graph to increase the reach and accuracy of the Identity Layer.
VC-based Partner Proofs: Expose a secure API endpoint for partners to verify that a given user was part of an audience by submitting a hash and receiving a Merkle proof.
Recommendations Engine (V1): Launch a basic "you might also like" feature for audience traits in the UI.
6–18 Months: Federation & Self-Service
Cross-Partner Federated Clean Room: Expand the FCR to support multi-party joins, allowing a brand, an agency, and a data provider to collaborate in a single, secure analysis.
Multi-Cloud Data Mesh: Abstract the data layer so that a single Trino query can securely join data residing in both our GCP and a client's AWS environment.
Predictive Modeling Suite: Productize the LTV and Churn models into a self-service UI where clients can train and deploy these models on their own data.
Advertiser-Facing Intelligence Portal: A premium UI that allows advertisers to perform deep analysis, understand audience composition, and discover new segments without analyst intervention.

12. Risks & Mitigation
Tech Debt:
Risk: Moving fast will lead to suboptimal code and architectural decisions.
Mitigation: Maintain a public "tech debt registry." Allocate 15-20% of engineering capacity each quarter to explicitly paying down items from this registry. Foster a culture where good-enough-for-now is acceptable, but technical excellence is the long-term goal.
Cloud Costs:
Risk: Unchecked data processing and ML training costs could make our business model unprofitable.
Mitigation: A dedicated FinOps function. Implement mandatory cost allocation tagging for all resources. Set up automated budget alerts. Enforce the use of spot instances for non-production workloads.
Identity Resolution Uncertainty:
Risk: Our identity graph will never be 100% accurate, leading to off-target activations.
Mitigation: Radical transparency. Expose the confidence_score of our graph links in the UI. Continuously back-test against client-provided "truth sets." Build internal tools for visualizing and manually resolving low-confidence entity merges.
DSP / Partner Integration Volatility:
Risk: A partner (e.g., MadHive) could deprecate an API we rely on, breaking our activation workflow.
Mitigation: The Activation Connector Layer is an anti-corruption layer. A change only requires updating a single, isolated plugin. We will also actively diversify our key partnerships to reduce dependency on any single provider. Maintain strong partner engineering relationships.
Regulatory Risk:
Risk: A new privacy law (e.g., a US federal equivalent of GDPR) could fundamentally alter the rules.
Mitigation: Our "privacy-by-design" and "hash-and-drop" PII policy is designed to be more stringent than current US law. By building to the highest standard (GDPR), we are well-positioned to adapt to future changes. Our legal and product teams will continuously monitor the global regulatory landscape.

13. Glossary
Clean Room: A secure, neutral environment where two or more parties can join and analyze their sensitive datasets without either party having to expose their raw data to the other.
Embeddings: A dense numerical vector representation of a complex object, like a user. It captures the semantic meaning of the object, allowing for mathematical comparison.
Federated Learning: A machine learning technique where a model is trained across multiple decentralized devices or servers holding local data samples, without exchanging the data samples themselves. Only model updates (gradients) are shared.
Hashed Identifier: An identifier (like an email address) that has been transformed into a fixed-length string of characters using a one-way cryptographic function (like SHA-256). It cannot be reverse-engineered to get the original email.
LTV (Lifetime Value): A prediction of the net profit attributed to the entire future relationship with a customer.
Merkle Tree: A tree in which every leaf node is labelled with the cryptographic hash of a data block, and every non-leaf node is labelled with the hash of the labels of its child nodes. It allows for efficient and secure verification of the contents of a large body of data. The top hash is the Merkle Root.
PII (Personally Identifiable Information): Any data that can be used to identify a specific individual. Examples include name, email address, phone number, and street address.
Probabilistic Match: An identity resolution technique that uses non-unique attributes (like name and zip code) to determine that two or more records likely belong to the same person, based on a statistical score.
Seeds / Traits: A seed audience is an initial set of users (e.g., a brand's best customers). Traits are the individual attributes or characteristics associated with those users (e.g., interest:hiking).
VC (Verifiable Credential): A W3C standard for a tamper-evident digital credential that can be cryptographically verified. We use it to create our "proof of audience."



