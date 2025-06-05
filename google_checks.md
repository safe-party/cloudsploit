| Seq | Title | Category | Domain | Description | Severity |
|----|-------|----------|--------|-------------|----------|
| 1 | API Key API Restriction | API | Identity and Access Management | Ensure there are no unrestricted API keys available within your GCP project. | Medium |
| 2 | API Key Active Services Only | API | Identity and Access Management | Ensure API Keys only exist for active services. | Low |
| 3 | API Key Application Restriction | API | Identity and Access Management | Ensure there are no unrestricted API keys available within your GCP project. | Medium |
| 4 | API Key Rotation | API | Identity and Access Management | Ensure that your Google Cloud API Keys are periodically regenerated. | Medium |
| 5 | Project API Keys | API | Identity and Access Management | Ensure there are no API keys created within GCP project. | Low |
| 6 | Dataset All Users Policy | BigQuery | Databases | Ensure that BigQuery datasets do not allow public read, write or delete access. | Medium |
| 7 | Dataset Labels Added | BigQuery | Databases | Ensure that all BigQuery datasets have labels added. | Low |
| 8 | Datasets CMK Encrypted | BigQuery | Databases | Ensure that BigQuery datasets are encrypted using desired encryption protection level. | High |
| 9 | Tables CMK Encrypted | BigQuery | Databases | Ensure that BigQuery dataset tables are encrypted using desired encryption protection level. | High |
| 10 | BigTable Instance Labels Added | BigTable | Databases | Ensure that all BigTable instances have labels added. | Low |
| 11 | CLB CDN Enabled | CLB | Availability | Ensures that Cloud CDN is enabled on all load balancers | Medium |
| 12 | CLB HTTPS Only | CLB | Availability | Ensures that HTTP(S) CLBs are configured to only accept connections on HTTPS ports. | High |
| 13 | CLB Logging Enabled | CLB | Management and Governance | Ensures that logging is enabled for all HTTP(s) load balancers | High |
| 14 | CLB No Instances | CLB | Availability | Detects CLBs that have no backend instances attached | Medium |
| 15 | Security Policy Enabled | CLB | Availability | Ensures all backend services have an attached security policy | Medium |
| 16 | Comment Control Enabled | CloudBuild | Application Integration | Ensure Comment Control is enabled for all cloud build triggers. | Medium |
| 17 | Specific Source Branch | CloudBuild | Application Integration | Ensure cloud build triggers are configured with specific source branch. | Medium |
| 18 | Trigger Has Tags | CloudBuild | Application Integration | Ensure cloud build triggers have tags. | Low |
| 19 | User Approval Enabled | CloudBuild | Application Integration | Ensure User Approval is enabled for all cloud build triggers. | Medium |
| 20 | Cloud Function Labels Added | Cloud Functions | Serverless | Ensure that all Cloud Functions have labels added. | Low |
| 21 | Internet Exposure | Cloud Functions | Serverless | Ensures Cloud Functions are not publicly exposed to all inbound traffic. | Info |
| 22 | Cloud Function Old Runtimes | Cloud Functions | Compute | Ensure Cloud Functions are not using deprecated runtime versions. | Medium |
| 23 | Cloud Function All Users Policy | Cloud Functions | Serverless | Ensure cloud functions are not anonymously or publicly accessible. | High |
| 24 | Cloud Function Default Service Account | Cloud Functions | Serverless | Ensures that Cloud Functions are not using the default service account. | Medium |
| 25 | HTTP Trigger require HTTPS | Cloud Functions | Serverless | Ensure that Cloud Functions are configured to require HTTPS for HTTP invocations. | Medium |
| 26 | Ingress All Traffic Disabled | Cloud Functions | Serverless | Ensure that Cloud Functions are configured to allow only internal traffic or traffic from Cloud Load Balancer. | Medium |
| 27 | Cloud Function Serverless VPC Access | Cloud Functions | Serverless | Ensure CloudFunctions are allowed to access only VPC resources. | High |
| 28 | Compute Allowed External IPs | Resource Manager | Management and Governance | Determine if "Define Allowed External IPs for VM Instances" constraint policy is enabled at the GCP organization level. | Medium |
| 29 | Detailed Audit Logging Mode | Resource Manager | Management and Governance | Determine if "Detailed Audit Logging Mode" policy is configured at the GCP organization level. | Medium |
| 30 | Disable Automatic IAM Grants | Resource Manager | Management and Governance | Determine if "Disable Automatic IAM Grants for Default Service Accounts" policy is enforced at the organization level. | Medium |
| 31 | Disable Default Encryption Creation | Resource Manager | Management and Governance | Determine if "Restrict Default Google-Managed Encryption for Cloud SQL Instances" is enforced on the GCP organization level. | Medium |
| 32 | Disable Guest Attributes | Resource Manager | Management and Governance | Determine if "Disable Guest Attributes of Compute Engine Metadata" constraint policy is enabled at the GCP organization level. | Medium |
| 33 | Disable Workload Identity Cluster Creation | Resource Manager | Management and Governance | Determine if "Disable Workload Identity Cluster Creation" policy is enforced at the GCP organization level. | Medium |
| 34 | Disable Service Account Key Creation | Resource Manager | Management and Governance | Determine if "Disable Service Account Key Creation" policy is enforced at the GCP organization level. | Medium |
| 35 | Disable Service Account Key Upload | Resource Manager | Management and Governance | Determine if "Disable Service Account Key Upload" policy is enforced at the GCP organization level. | Medium |
| 36 | Disable Serial Port Access | Resource Manager | Management and Governance | Determine if "Disable VM serial port access" policy is enforced at the GCP organization level. | Medium |
| 37 | Disable Service Account Creation | Resource Manager | Management and Governance | Determine if "Disable Service Account Creation" policy is enforced at the GCP organization level. | Medium |
| 38 | Disable VM IP Forwarding | Resource Manager | Management and Governance | Determine if "Restrict VM IP Forwarding" constraint policy is enforced at the GCP organization level. | Medium |
| 39 | Essential Contacts Configured | Resource Manager | Management and Governance | Ensure Essential Contacts is configured to designate email addresses for Google Cloud services to notify of important technical or security information. | Medium |
| 40 | Location-Based Service Restriction | Resource Manager | Management and Governance | Determine if "Resource Location Restriction" is enforced on the GCP organization level. | Medium |
| 41 | Enforce Require OS Login | Resource Manager | Management and Governance | Determine if "Require OS Login" policy is enforced at the GCP organization level. | Medium |
| 42 | Enforce Restrict Authorized Networks | Resource Manager | Management and Governance | Determine if "Restrict Authorized Networks on Cloud SQL instances" policy is enforced at the GCP organization level. | Medium |
| 43 | Restrict Load Balancer Creation | Resource Manager | Management and Governance | Determine if "Restrict Load Balancer Creation for Types" is enforced on the GCP organization level. | Medium |
| 44 | Restrict Shared VPC Subnetworks | Resource Manager | Management and Governance | Determine if "Restrict Shared VPC Subnetworks" is enforced on the GCP organization level. | Medium |
| 45 | Restrict VPC Peering | Resource Manager | Management and Governance | Determine if "Restrict VPC Peering" is enforced on the GCP organization level. | Medium |
| 46 | Restrict VPN Peer IPs | Resource Manager | Management and Governance | Determine if "Restrict VPN Peer IPs" is enforced on the GCP organization level. | Medium |
| 47 | Skip Default Network Creation | Resource Manager | Management and Governance | Determine if "Skip Default Network Creation" constraint policy is enforces at the GCP organization level. | Medium |
| 48 | Trusted Image Projects | Resource Manager | Management and Governance | Determine if "Define Trusted Image Projects" constraint policy is enforces at the GCP organization level. | Medium |
| 49 | Enforce Uniform Bucket-Level Access | Resource Manager | Management and Governance | Determine if "Enforce uniform bucket-level access" policy is enabled at the GCP organization level. | Medium |
| 50 | Environment Default Service Account | Cloud Composer | Content Delivery | Ensure Composer environment is not using the default compute engine service account | Low |
| 51 | Environment Encryption | Cloud Composer | Content Delivery | Ensure Composer environments have encryption enabled using desired protection level. | High |
| 52 | Environment Labels Added | Cloud Composer | Content Delivery | Ensures all Composer environments have labels added | Low |
| 53 | Airflow Web Server Public Access | Cloud Composer | Content Delivery | Ensure Composer Airflow web server is not open to the world | Medium |
| 54 | VM Disks CMK Encryption | Compute | Compute | Ensure that Virtual Machine instances are encrypted using customer-managed keys. | High |
| 55 | Application Consistent Snapshots | Compute | Compute | Ensure that application consistent snapshots feature is enabled for snapshot schedules. | Medium |
| 56 | Instance Automatic Restart Enabled | Compute | Compute | Ensure that Virtual Machine instances have automatic restart feature enabled. | Medium |
| 57 | Autoscale Enabled | Compute | Compute | Ensures instance groups have autoscale enabled for high availability | High |
| 58 | Autoscale Minimum CPU Utilization Target | Compute | Compute | Ensure that minimum CPU utilization target is greater or equal than set percentage. | High |
| 59 | Confidential Computing Enabled | Compute | Compute | Ensure that Virtual Machine instances have confidential computing enabled. | Medium |
| 60 | Connect Serial Ports Disabled | Compute | Compute | Ensures connecting to serial ports is not enabled for VM instances | Medium |
| 61 | CSEK Encryption Enabled | Compute | Compute | Ensures Customer Supplied Encryption Key Encryption is enabled on disks | High |
| 62 | Deprecated Images | Compute | Compute | Ensure that Compute instances are not created from deprecated images. | Medium |
| 63 | Disk Automatic Backup Enabled | Compute | Compute | Ensure that Google Compute disks have scheduled snapshots configured. | Medium |
| 64 | Disk In Use | Compute | Compute | Ensure that there are no unused Compute disks. | Medium |
| 65 | Disk Labels Added | Compute | Compute | Ensure that all Compute Disks have labels added. | Low |
| 66 | Disk MultiAz | Compute | Compute | Ensure that Compute disks have regional disk replication feature enabled for high availability. | Low |
| 67 | Disk Old Snapshots | Compute | Compute | Ensure that Compute disk snapshots are deleted after defined time period. | Low |
| 68 | Enable Usage Export | Compute | Compute | Ensure that setting is configured to export Compute instances usage to Cloud Storage bucket. | Medium |
| 69 | Frequently Used Snapshots | Compute | Compute | Ensure that frequently used disks are created from images instead of snapshots to save networking cost. | Low |
| 70 | Image Labels Added | Compute | Compute | Ensure that all VM disk images have labels added. | Low |
| 71 | Images CMK Encrypted | Compute | Compute | Ensure Compute Images are encrypted using Customer Managed or Supplied Keys | High |
| 72 | Instance Default Service Account | Compute | Compute | Ensures that compute instances are not configured to use the default service account. | Medium |
| 73 | VM Instance Deletion Protection | Compute | Compute | Ensure that Virtual Machine instances have deletion protection enabled. | Medium |
| 74 | Instance Desired Machine Type | Compute | Compute | Ensures that Virtual Machine instances are of given types. | High |
| 75 | Instance Group Auto Healing Enabled | Compute | Compute | Ensure that instance groups have auto-healing enabled for high availability. | High |
| 76 | Instance Labels Added | Compute | Compute | Ensure that all Virtual Machine instances have labels added. | Low |
| 77 | VM Instances Least Privilege | Compute | Compute | Ensures that instances are not configured to use the default service account with full access to all cloud APIs | Medium |
| 78 | Instance Level SSH Only | Compute | Compute | Ensures that instances are not configured to allow project-wide SSH keys | Medium |
| 79 | Instance Maintenance Behavior | Compute | Compute | Ensure that "On Host Maintenance" configuration is set to Migrate for VM instances. | Medium |
| 80 | VM Max Instances | Compute | Compute | Ensures the total number of VM instances does not exceed a set threshold | Medium |
| 81 | Internet Exposure | Compute | Compute | Check if GCP virtual machines are exposed to the internet. | Info |
| 82 | Instance Preemptibility Disabled | Compute | Compute | Ensure that preemptible Virtual Machine instances do not exist. | Medium |
| 83 | Instance Public Access Disabled | Compute | Compute | Ensures that compute instances are not configured to allow public access. | High |
| 84 | Instance Template Machine Type | Compute | Compute | Ensure that Cloud Virtual Machine instance templates are of given types. | Medium |
| 85 | Instances Multi AZ | Compute | Compute | Ensures managed instances are regional for availability purposes. | Medium |
| 86 | IP Forwarding Disabled | Compute | Compute | Ensures that IP forwarding is disabled on all instances | Medium |
| 87 | OS Login 2FA Enabled | Compute | Compute | Ensure that Virtual Machines instances have OS logic feature enabled and configured with Two-Factor Authentication. | High |
| 88 | OS Login Enabled | Compute | Compute | Ensures OS login is enabled for the project | Low |
| 89 | Persistent Disks Auto Delete | Compute | Compute | Ensure that auto-delete is disabled for attached persistent disks. | Medium |
| 90 | Public Disk Images | Compute | Compute | Ensure that your disk images are not being shared publicly. | Medium |
| 91 | Shielded VM Enabled | Compute | Compute | Ensures that instances are configured with the shielded VM enabled | Medium |
| 92 | Snapshot Encryption | Compute | Compute | Ensure Snapshots are encrypted using Customer Managed or Supplied Keys. | High |
| 93 | Snapshot Labels Added | Compute | Compute | Ensure that Compute disk snapshots have labels added. | Low |
| 94 | Key Protection Level | Cryptographic Keys | Application Integration | Ensure that cryptographic keys have protection level equal to or above desired protection level. | High |
| 95 | Key Rotation | Cryptographic Keys | Application Integration | Ensures cryptographic keys are set to rotate on a regular schedule | Low |
| 96 | KMS Public Access | Cryptographic Keys | Application Integration | Ensures cryptographic keys are not publicly accessible. | High |
| 97 | Dataflow Hanged Jobs | Dataflow | Content Delivery | Ensure that Cloud Dataflow jobs are not in same state for more than defined amount of time. | Medium |
| 98 | Dataflow Jobs Encryption | Dataflow | Content Delivery | Ensure that Google Dataflow jobs are encrypted with desired encryption level. | High |
| 99 | Dataproc Cluster Encryption | Dataproc | Compute | Ensure that Dataproc clusters have encryption enabled using desired protection level. | High |
| 100 | Dataproc Cluster Labels Added | Dataproc | Compute | Ensure that all Dataproc clusters have labels added. | Low |
| 101 | Hadoop Secure Mode Enabled | Dataproc | Compute | Ensure that all Dataproc clusters have hadoop secure mode enabled. | Medium |
| 102 | Delete Expired Deployments | Deployment Manager | Application Integration | Ensure that Cloud Deployment Manager deployment are deleted after desired number of days from their creation time. | Medium |
| 103 | DNS Security Enabled | DNS | Content Delivery | Ensures that DNS Security is enabled on all managed zones | Medium |
| 104 | DNS Security Signing Algorithm | DNS | Content Delivery | Ensures that DNS Security is not using the RSASHA1 algorithm for key or zone signing | Medium |
| 105 | DNS Zone Labels Added | DNS | Content Delivery | Ensure Cloud DNS zones have labels added. | Low |
| 106 | BigQuery Admin | IAM | Identity and Access Management | Ensure that there are no IAM Users with BigQuery Admin, BigQuery Data Owner or BigQuery Data Editor role at the project level. | Medium |
| 107 | Bigtable Admin | IAM | Identity and Access Management | Ensure that there are no IAM Users with Bigtable Administrator role at the project level. | Medium |
| 108 | Corporate Emails Only | IAM | Identity and Access Management | Ensures that no users are using their Gmail accounts for access to GCP. | Medium |
| 109 | KMS User Separation | IAM | Identity and Access Management | Ensures that no users have the KMS admin role and any one of the CryptoKey roles. | Medium |
| 110 | Member Admin | IAM | Identity and Access Management | Ensure that IAM members do not use primitive roles such as owner, editor or viewer. | Medium |
| 111 | Pub/Sub Admin | IAM | Identity and Access Management | Ensure that there are no IAM Users with Pub/Sub Administrator role at the project level. | Medium |
| 112 | Service Account Admin | IAM | Identity and Access Management | Ensures that user managed service accounts do not have any admin, owner, or write privileges. | Medium |
| 113 | Service Account Key Rotation | IAM | Identity and Access Management | Ensures that service account keys are rotated within desired number of days. | Medium |
| 114 | Service Account Managed Keys | IAM | Identity and Access Management | Ensures that service account keys are being managed by Google. | Medium |
| 115 | Service Account Role | IAM | Identity and Access Management | Ensure no Service Account exists without any associated role. | Medium |
| 116 | Service Account Separation | IAM | Identity and Access Management | Ensures that no users have both the Service Account User and Service Account Admin role. | Medium |
| 117 | Service Account Token Creator | IAM | Identity and Access Management | Ensures that no users have the Service Account Token Creator role. | Medium |
| 118 | Service Account User | IAM | Identity and Access Management | Ensures that no users have the Service Account User role. | High |
| 119 | Service Limits | IAM | Identity and Access Management | Determines if the number of resources is close to the per-account limit. | Medium |
| 120 | Alias IP Ranges Enabled | Kubernetes | Containers | Ensures all Kubernetes clusters have alias IP ranges enabled | Medium |
| 121 | Automatic Node Repair Enabled | Kubernetes | Containers | Ensures all Kubernetes cluster nodes have automatic repair enabled | Medium |
| 122 | Automatic Node Upgrades Enabled | Kubernetes | Containers | Ensures all Kubernetes cluster nodes have automatic upgrades enabled | Medium |
| 123 | Basic Authentication Disabled | Kubernetes | Containers | Ensure basic authentication is set to disabled on Kubernetes clusters. | Medium |
| 124 | Binary Authorization Enabled | Kubernetes | Containers | Ensure Binary Authorization is enabled on Kubernetes Clusters | Medium |
| 125 | Client Certificate Disabled | Kubernetes | Containers | Ensure client certificate authentication to Kubernetes clusters is disabled. | High |
| 126 | Cluster Encryption Enabled | Kubernetes | Containers | Ensure that GKE clusters have KMS encryption enabled to encrypt application-layer secrets. | High |
| 127 | Cluster Labels Added | Kubernetes | Containers | Ensures all Kubernetes clusters have labels added | Low |
| 128 | Cluster Least Privilege | Kubernetes | Containers | Ensures Kubernetes clusters using default service account are using minimal service account access scopes | Medium |
| 129 | Internet Exposure | Kubernetes | Containers | Check if GKE clusters are exposed to the internet. | Info |
| 130 | COS Image Enabled | Kubernetes | Containers | Ensures all Kubernetes cluster nodes have Container-Optimized OS enabled | High |
| 131 | Default Service Account | Kubernetes | Containers | Ensures all Kubernetes cluster nodes are not using the default service account. | High |
| 132 | Integrity Monitoring Enabled | Kubernetes | Containers | Ensures all Kubernetes shielded cluster node have integrity monitoring enabled | Medium |
| 133 | Kubernetes Alpha Disabled | Kubernetes | Containers | Ensure the GKE Cluster alpha cluster feature is disabled. | Medium |
| 134 | Legacy Authorization Disabled | Kubernetes | Containers | Ensure legacy authorization is set to disabled on Kubernetes clusters | High |
| 135 | Logging Enabled | Kubernetes | Containers | Ensures all Kubernetes clusters have logging enabled | Medium |
| 136 | Master Authorized Network | Kubernetes | Containers | Ensures master authorized networks is set to enabled on Kubernetes clusters | Medium |
| 137 | Monitoring Enabled | Kubernetes | Containers | Ensures all Kubernetes clusters have monitoring enabled | Medium |
| 138 | Network Policy Enabled | Kubernetes | Containers | Ensures all Kubernetes clusters have network policy enabled | Medium |
| 139 | Node Encryption Enabled | Kubernetes | Containers | Ensure that GKE cluster nodes are encrypted using desired encryption protection level.  | High |
| 140 | Pod Security Policy Enabled | Kubernetes | Containers | Ensures pod security policy is enabled for all Kubernetes clusters | Medium |
| 141 | Private Cluster Enabled | Kubernetes | Containers | Ensures private cluster is enabled for all Kubernetes clusters | High |
| 142 | Private Endpoint | Kubernetes | Containers | Ensures the private endpoint setting is enabled for kubernetes clusters | Medium |
| 143 | Secure Boot Enabled | Kubernetes | Containers | Ensures all Kubernetes cluster nodes have secure boot feature enabled. | Medium |
| 144 | Shielded Nodes | Kubernetes | Containers | Ensure that shielded nodes setting is enabled for all Kubernetes clusters. | Medium |
| 145 | Web Dashboard Disabled | Kubernetes | Containers | Ensures all Kubernetes clusters have the web dashboard disabled. | High |
| 146 | Audit Configuration Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for audit configuration changes. | Medium |
| 147 | Audit Logging Enabled | Logging | Management and Governance | Ensures that default audit logging is enabled on the organization or project. | Medium |
| 148 | Custom Role Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for custom role creation and changes | Medium |
| 149 | Log Sinks Enabled | Logging | Management and Governance | Ensures a log sink is enabled to export all logs | Medium |
| 150 | Project Ownership Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for project ownership assignments and changes | Medium |
| 151 | SQL Configuration Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for SQL configuration changes | Medium |
| 152 | Storage Permissions Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for storage permission changes | Medium |
| 153 | VPC Firewall Rule Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for firewall rule changes | Medium |
| 154 | VPC Network Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for VPC network changes | Medium |
| 155 | VPC Network Route Logging | Logging | Management and Governance | Ensures that logging and log alerts exist for VPC network route changes | Medium |
| 156 | Dead Lettering Enabled | Pub/Sub | Application Integration | Ensure that each Google Pub/Sub subscription is configured to use dead-letter topic. | Low |
| 157 | Topic All Users Policy | Pub/Sub | Application Integration | Ensure Pub/Sub Topics are not anonymously or publicly accessible | Medium |
| 158 | Topic Encryption Enabled | Pub/Sub | Application Integration | Ensure that Google Pub/Sub topics are encrypted with desired encryption level. | High |
| 159 | Topic Labels Added | Pub/Sub | Application Integration | Ensure that all Pub/Sub topics have labels added. | Low |
| 160 | Access Approval Enabled | Security | Management and Governance | Ensure that Access Approval is enabled for the project. | Medium |
| 161 | Asset Inventory Enabled | Service Usage | Management and Governance | Ensure that Asset Inventory service is enabled for the project. | Medium |
| 162 | Spanner Instance Node Count | Spanner | Databases | Ensure than node count for Spanner instances is not above allowed count. | Medium |
| 163 | Any Host Root Access | SQL | Databases | Ensures SQL instances root user cannot be accessed from any host | High |
| 164 | DB Automated Backups | SQL | Databases | Ensures automated backups are enabled for SQL instances | Medium |
| 165 | DB Multiple AZ | SQL | Databases | Ensures that SQL instances have a failover replica to be cross-AZ for high availability | Medium |
| 166 | DB Publicly Accessible | SQL | Databases | Ensures that SQL instances do not allow public access | Medium |
| 167 | DB Restorable | SQL | Databases | Ensures SQL instances can be restored to a recent point | Medium |
| 168 | Database SSL Enabled | SQL | Databases | Ensures SQL databases have SSL enabled | Medium |
| 169 | MySQL Latest Version | SQL | Databases | Ensure that MySQL database servers are using the latest major version of MySQL database. | Low |
| 170 | MySQL Local Infile Disabled | SQL | Databases | Ensures SQL instances for MySQL type does not have local infile flag enabled. | Medium |
| 171 | MySQL Skip Show Database Enabled | SQL | Databases | Ensures SQL instances for MySQL type have skip show database flag enabled. | Medium |
| 172 | MySQL Slow Query Log Enabled | SQL | Databases | Ensures that MySQL instances have slow query log flag enabled. | Medium |
| 173 | PostgreSQL Latest Version | SQL | Databases | Ensure that PostgreSQL database servers are using the latest major version of PostgreSQL database. | Low |
| 174 | PostgreSQL Log Checkpoints Enabled | SQL | Databases | Ensure that log_checkpoints flag is enabled for PostgreSQL instances. | Medium |
| 175 | PostgreSQL Log Connections Flag Enabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log connections flag enabled. | Medium |
| 176 | PostgreSQL Log Disconnections Flag Enabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log disconnections flag enabled. | Medium |
| 177 | PostgreSQL Log Error Verbosity | SQL | Databases | Ensure SQL instances for PostgreSQL type have log error verbosity flag set to default or stricter. | Medium |
| 178 | PostgreSQL Log Executor Stats Disabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log_executor_stats flag set to "off". | Medium |
| 179 | PostgreSQL Log Hostname Flag Enabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log hostname flag enabled. | Medium |
| 180 | PostgreSQL Log Lock Waits Flag Enabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log_lock_waits flag enabled. | Medium |
| 181 | PostgreSQL Log Min Duration Statement | SQL | Databases | Ensures SQL instances for PostgreSQL type have log min duration statement flag disabled. | Medium |
| 182 | PostgreSQL Log Min Error Statement | SQL | Databases | Ensures SQL instances for PostgreSQL type have log min error statement flag set to Error. | Medium |
| 183 | PostgreSQL Log Min Messages | SQL | Databases | Ensures SQL instances for PostgreSQL type have log min messages flag set to Warning or stricter. | Medium |
| 184 | PostgreSQL Log Parser Stats Disabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log_parser_stats flag set to "off". | Medium |
| 185 | PostgreSQL Log Planner Stats Disabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have log_planner_stats flag set to "off". | Medium |
| 186 | PostgreSQL Log Statement | SQL | Databases | Ensures SQL instances for PostgreSQL type have log statement flag set to desired value. | Medium |
| 187 | PostgreSQL Log Temp Files | SQL | Databases | Ensures SQL instances for PostgreSQL type have log temp files flag enabled. | Medium |
| 188 | PostgreSQL Max Connections | SQL | Databases | Ensure that max_connections is configured with optimal value for PostgreSQL instances. | Medium |
| 189 | PostgreSQL Pg Audit Flag Enabled | SQL | Databases | Ensures SQL instances for PostgreSQL type have cloudsql.enable_pgaudit flag enabled for centralized logging. | Medium |
| 190 | SSL Certificate Rotation | SQL | Databases | Ensure that server certificates configured for Cloud SQL are rotated before they expire. | Medium |
| 191 | SQL CMK Encryption | SQL | Databases | Ensure that Cloud SQL instances are encrypted using Customer Managed Keys (CMKs). | High |
| 192 | SQL Contained Database Authentication | SQL | Databases | Ensures SQL instances of SQL Server type have Contained Database Authentication flag disabled. | Medium |
| 193 | SQL Cross DB Ownership Chaining | SQL | Databases | Ensures SQL database instances of SQL Server type have cross db ownership chaining flag disabled. | Medium |
| 194 | SQL Instance Labels Added | SQL | Databases | Ensures SQL database instances have labels added. | Low |
| 195 | SQL No Public IPs | SQL | Databases | Ensure that SQL instances are using private IPs instead of public IPs. | Medium |
| 196 | SQL Server Contained Database Authentication Flag Disabled | SQL | Databases | Ensure that contained database authentication flag is disabled for SQL Server instances. | Medium |
| 197 | SQL Server External Scripts Flag Disabled | SQL | Databases | Ensure that external scripts enabled flag is disabled for SQL Server instances. | Medium |
| 198 | SQL Server Remote Access Flag Disabled | SQL | Databases | Ensure that remote access flag is disabled for SQL Server instances. | Medium |
| 199 | SQL Server Trace Flag Disabled | SQL | Databases | Ensure that 3625 (trace flag) database flag is disabled for SQL Server instances. | Medium |
| 200 | SQL Server User Connections Flag | SQL | Databases | Ensure that user connections database flag for Cloud SQL Server Instances is set to desired value. | Medium |
| 201 | SQL Server User Options Flag Disabled | SQL | Databases | Ensure user options database flag for Cloud SQL Server instances is not configured. | Medium |
| 202 | Storage Auto Increase Enabled | SQL | Databases | Ensure that Cloud SQL DB instances have Automatic Storage Increase feature enabled and desired limit is set for storage increases. | Medium |
| 203 | Storage Bucket All Users Policy | Storage | Storage | Ensures Storage bucket policies do not allow global write, delete, or read permissions | High |
| 204 | Bucket Encryption | Storage | Storage | Ensure that Cloud Storage buckets have encryption enabled using desired protection level. | High |
| 205 | Bucket Labels Added | Storage | Storage | Ensure that all Cloud Storage buckets have labels added. | Low |
| 206 | Bucket Lifecycle Configured | Storage | Storage | Ensure that Cloud Storage buckets are using lifecycle management rules to transition objects between storage classes. | Medium |
| 207 | Bucket Logging | Storage | Storage | Ensures object logging is enabled on storage buckets | Medium |
| 208 | Storage Bucket Retention Policy | Storage | Storage | Ensures bucket retention policy is set and locked to prevent deleting or updating of bucket objects or retention policy. | Medium |
| 209 | Bucket Uniform Level Access | Storage | Storage | Ensures that uniform level access is enabled on storage buckets. | Medium |
| 210 | Bucket Versioning | Storage | Storage | Ensures object versioning is enabled on storage buckets | Low |
| 211 | Vertex AI Model Encryption | AI & ML | Machine Learning | Ensure that Vertex AI models are encrypted using desired encryption protection level. | High |
| 212 | Vertex AI Model Labels Added | AI & ML | Machine Learning | Ensure that all Vertex AI models have labels added. | Low |
| 213 | Vertex AI Dataset Encryption | AI & ML | Machine Learning | Ensure that Vertex AI datasets are encrypted using desired encryption protection level. | High |
| 214 | Vertex AI Dataset Labels Added | AI & ML | Machine Learning | Ensure that all Vertex AI datasets have labels added. | Low |
| 215 | Default VPC Exists | VPC Network | Network Access Control | Ensures that your Google Cloud Project does not a default network. | Low |
| 216 | Default VPC In Use | VPC Network | Network Access Control | Determines whether the default VPC is being used for launching VM instances | High |
| 217 | VPC DNS Logging Enabled | VPC Network | Network Access Control | Ensure that All VPC Network has DNS logging enabled. | Medium |
| 218 | Excessive Firewall Rules | VPC Network | Network Access Control | Determines if there are an excessive number of firewall rules in the account | Medium |
| 219 | Firewall Logging Metadata | VPC Network | Network Access Control | Ensure that VPC Network firewall logging is configured to exclude logging metadata in order to reduce the size of the log files. | Medium |
| 220 | Flow Logs Enabled | VPC Network | Network Access Control | Ensures VPC flow logs are enabled for traffic logging | Medium |
| 221 | Instance Default Network | VPC Network | Network Access Control | Ensure no VM instances exist in default network. | Medium |
| 222 | Legacy Network Exists | VPC Network | Network Access Control | Ensures that your Google Cloud Project does not have legacy networks | Medium |
| 223 | Multiple Subnets | VPC Network | Network Access Control | Ensures that VPCs have multiple networks to provide a layered architecture | Medium |
| 224 | Open All Ports | VPC Network | Network Access Control | Determines if all ports are open to the public | High |
| 225 | Open All Ports Egress | VPC Network | Network Access Control | Ensure no firewall rules allow egress to all ports and protocols. | High |
| 226 | Open CIFS | VPC Network | Network Access Control | Determines if UDP port 445 for CIFS is open to the public | High |
| 227 | Open Cassandra | VPC Network | Network Access Control | Determines if TCP port 7001 for Cassandra is open to the public | High |
| 228 | Open Cassandra Client | VPC Network | Network Access Control | Determines if TCP port 9042 for Cassandra Client is open to the public | High |
| 229 | Open Cassandra Internode | VPC Network | Network Access Control | Determines if TCP port 7000 for Cassandra Internode is open to the public | High |
| 230 | Open Cassandra Monitoring | VPC Network | Network Access Control | Determines if TCP port 7199 for Cassandra Monitoring is open to the public | High |
| 231 | Open Cassandra Thrift | VPC Network | Network Access Control | Determines if TCP port 9160 for Cassandra Thrift is open to the public | High |
| 232 | Open Custom Ports | VPC Network | Network Access Control | Ensure that defined custom ports are not open to public. | High |
| 233 | Open DNS | VPC Network | Network Access Control | Determines if TCP or UDP port 53 for DNS is open to the public | High |
| 234 | Open Docker | VPC Network | Network Access Control | Determine if Docker port 2375 or 2376 is open to the public | High |
| 235 | Open Elasticsearch | VPC Network | Network Access Control | Determines if TCP ports 9200, 9300 for Elasticsearch are open to the public | High |
| 236 | Open FTP | VPC Network | Network Access Control | Determines if TCP port 20 or 21 for FTP is open to the public | High |
| 237 | Open HTTP | VPC Network | Network Access Control | Determines if TCP port 80 for HTTP is open to the public | High |
| 238 | Open Hadoop HDFS NameNode Metadata Service | VPC Network | Network Access Control | Determines if TCP port 8020 for HDFS NameNode metadata service is open to the public. | High |
| 239 | Open Hadoop HDFS NameNode WebUI | VPC Network | Network Access Control | Determines if TCP port 50070 and 50470 for Hadoop/HDFS NameNode WebUI service is open to the public | High |
| 240 | Open Internal web | VPC Network | Network Access Control | Determines if internal web port 8080 is open to the public | High |
| 241 | Open Kibana | VPC Network | Network Access Control | Determines if TCP port 5601 for Kibana is open to the public | High |
| 242 | Open LDAP | VPC Network | Network Access Control | Determines if TCP or UDP port 389 for LDAP is open to the public | High |
| 243 | Open LDAPS | VPC Network | Network Access Control | Determines if TCP port 636 for LDAP SSL is open to the public | High |
| 244 | Open Memcached | VPC Network | Network Access Control | Determines if TCP or UDP port 11211 for Memcached is open to the public | High |
| 245 | Open MongoDB | VPC Network | Network Access Control | Determines if TCP port 27017, 27018 or 27019 for MongoDB is open to the public | High |
| 246 | Open MSSQL | VPC Network | Network Access Control | Determines if TCP port 1433 for MSSQL is open to the public. | High |
| 247 | Open MySQL | VPC Network | Network Access Control | Determines if TCP port 4333 or 3306 for MySQL is open to the public | High |
| 248 | Open NetBIOS | VPC Network | Network Access Control | Determines if UDP port 137, 138 or 139 for NetBIOS is open to the public | High |
| 249 | Open Oracle | VPC Network | Network Access Control | Determines if TCP port 1521, 2483 for Oracle is open to the public | High |
| 250 | Open Oracle Auto Data Warehouse | VPC Network | Network Access Control | Determines if TCP port 1522 for Oracle Auto Data Warehouse is open to the public | High |
| 251 | Open PostgreSQL | VPC Network | Network Access Control | Determines if TCP port 5432 for PostgreSQL is open to the public | High |
| 252 | Open RDP | VPC Network | Network Access Control | Determines if TCP port 3389 for RDP is open to the public | High |
| 253 | Open RPC | VPC Network | Network Access Control | Determines if TCP port 135 for RPC is open to the public | High |
| 254 | Open Redis | VPC Network | Network Access Control | Determines if TCP port 6379 for Redis is open to the public | High |
| 255 | Open SMBoTCP | VPC Network | Network Access Control | Determines if TCP port 445 for Windows SMB over TCP is open to the public | High |
| 256 | Open SMTP | VPC Network | Network Access Control | Determines if TCP port 25 for SMTP is open to the public | High |
| 257 | Open SNMP | VPC Network | Network Access Control | Determines if UDP port 161 for SNMP is open to the public | High |
| 258 | Open SQLServer | VPC Network | Network Access Control | Determines if TCP port 1433 or UDP port 1434 for SQL Server is open to the public | High |
| 259 | Open SSH | VPC Network | Network Access Control | Determines if TCP port 22 for SSH is open to the public | High |
| 260 | Open Salt | VPC Network | Network Access Control | Determine if TCP ports 4505 or 4506 for the Salt master are open to the public | Critical |
| 261 | Open Telnet | VPC Network | Network Access Control | Determines if TCP port 23 for Telnet is open to the public | High |
| 262 | Open VNC Client | VPC Network | Network Access Control | Determines if TCP port 5500 for VNC Client is open to the public | High |
| 263 | Open VNC Server | VPC Network | Network Access Control | Determines if TCP port 5900 for VNC Server is open to the public | High |
| 264 | Private Access Enabled | VPC Network | Network Access Control | Ensures Private Google Access is enabled for all Subnets | Medium |
