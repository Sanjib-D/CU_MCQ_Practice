const syllabusData = {
    "MCA": {
        "semesters": [
            // --- SEMESTER I (CORE) ---
            {
                "id": "sem1",
                "title": "Semester I",
                "type": "core",
                "subjects": [
                    {
                        "code": "24ONMCH601",
                        "name": "Advanced Database Management System",
                        "syllabus": [
                            { "module": "Module 1: Basics of DBMS", "topics": ["Introduction to DBLC", "Phases of DBLC", "DDBMS: Introduction & Types", "Levels of Data & Process Distribution (SPSD, MPSD, MPMD)"] },
                            { "module": "Module 2: Object Oriented Databases", "topics": ["OO Concepts & Identity", "Object Structure & Type Constructors", "Encapsulation & Persistence", "Active Database Concepts & Triggers", "Temporal & Spatial Database Concepts"] },
                            { "module": "Module 3: Database Security", "topics": ["Database Security Issues", "Discretionary vs Mandatory Access Control", "Encryption & PKI", "Role-Based Access Control", "Locking Protocols (2PL, 3PL)"] }
                        ]
                    },
                    {
                        "code": "24ONMCT602",
                        "name": "Advanced Computer Networks",
                        "syllabus": [
                            { "module": "Module 1: Introduction to Network", "topics": ["Components (mode, medium, media)", "OSI & TCP/IP Models", "Physical Layer (Signals, Ethernet, IEEE standards)"] },
                            { "module": "Module 2: Network & Transport Layer", "topics": ["IP Addressing (IPv4, IPv6, CIDR)", "Routing Protocols (RIP, OSPF, BGP)", "Transport Layer: TCP & UDP", "Mobile Computing Architecture"] },
                            { "module": "Module 3: Wireless Communication", "topics": ["WLAN, Wi-Fi, WiMAX", "Ad-hoc Networks (MANET, VANET)", "Software Defined Network (SDN) Architecture"] }
                        ]
                    },
                    {
                        "code": "24ONMCH603",
                        "name": "Web Programming",
                        "syllabus": [
                            { "module": "Module 1: Introduction, Array, Forms", "topics": ["PHP Intro & Installation (XAMPP/LAMP)", "Arrays (Numeric, Associative, Multi-Dimensional)", "PHP Forms & Validation", "Regular Expressions"] },
                            { "module": "Module 2: Objects, File Handling, MySQL", "topics": ["Classes & Objects", "File Handling (Upload/Download)", "Sessions & Cookies", "MySQL CRUD Operations", "AJAX Implementation"] },
                            { "module": "Module 3: Framework, Themes, WordPress", "topics": ["WordPress Features & Dashboard", "Pages vs Posts", "Working with Themes & Widgets", "Plugins & Menus", "Web Deployment (CPanel)"] }
                        ]
                    },
                    {
                        "code": "24ONMCH604",
                        "name": "Python Programming",
                        "syllabus": [
                            { "module": "Module 1: Introduction to Python", "topics": ["Tokens, Variables, Data Types", "Lists, Tuples, Sets, Dictionaries", "Conditional Statements & Loops", "Functions & Modules", "Classes & Inheritance"] },
                            { "module": "Module 2: Data Analytics", "topics": ["Numpy (Ndarray, Operations)", "Matplotlib (Line, Bar, Pie, Scatter Plots)", "File Handling", "Exception Handling"] },
                            { "module": "Module 3: Statistics", "topics": ["Central Tendency & Dispersion", "Pandas DataFrames", "Data Visualization (Seaborn & Plotly)", "Correlation & Regression"] }
                        ]
                    },
                    {
                        "code": "24ONMCH605",
                        "name": "Network Security and Cryptography",
                        "syllabus": [
                            { "module": "Module 1: Intro to Network Security", "topics": ["Security Policies & Attacks", "Encryption Techniques (Substitution, Transposition)", "Symmetric & Asymmetric Keys", "Authentication (Biometric, Certificates)"] },
                            { "module": "Module 2: Authentication", "topics": ["Conventional Encryption Algorithms", "Kerberos & KDC", "Public Key Cryptography (RSA)", "Digital Signatures & Hash Functions (MD5, SHA)"] },
                            { "module": "Module 3: Firewalls & Web Security", "topics": ["Packet Filters & Gateways", "Encrypted Tunnels & Cookies", "Email Security (PGP)", "Viruses & Malware"] }
                        ]
                    }
                ]
            },

            // --- SEMESTER II (CORE) ---
            {
                "id": "sem2",
                "title": "Semester II",
                "type": "core",
                "subjects": [
                    {
                        "code": "24ONMCH651",
                        "name": "Advanced Internet Programming",
                        "syllabus": [
                            { "module": "Module 1: Client Server & Servlet", "topics": ["Static vs Dynamic Pages", "Servlet Architecture & Life Cycle", "HttpServletRequest & Response", "Servlet Collaboration"] },
                            { "module": "Module 2: JSP and JDBC", "topics": ["JSP Architecture & Elements", "Custom Tags & Implicit Objects", "JDBC Drivers & Connections", "CRUD Operations with JSP"] },
                            { "module": "Module 3: Hibernate and NodeJS", "topics": ["Hibernate Architecture", "NodeJS Intro (V8, NPM, REPL)", "NodeJS File System & Events", "Creating HTTP Server"] }
                        ]
                    },
                    {
                        "code": "24ONMCH652",
                        "name": "Design and Analysis of Algorithms",
                        "syllabus": [
                            { "module": "Module 1: Introduction", "topics": ["Space & Time Complexity", "Asymptotic Notations (Big-Oh, Omega, Theta)", "Fundamental Data Structures (AVL, B-Trees)"] },
                            { "module": "Module 2: Algorithm Design Paradigm", "topics": ["Divide & Conquer (Merge/Quick Sort)", "Greedy Method (Knapsack, Prim's, Kruskal's)", "Transform & Conquer (Heaps)"] },
                            { "module": "Module 3: Dynamic Programming", "topics": ["Multistage Graphs", "Warshall's & Floyd's Algorithm", "Backtracking (N-Queens)", "Branch & Bound (TSP)"] }
                        ]
                    },
                    {
                        "code": "24ONMCT653",
                        "name": "Software Testing",
                        "syllabus": [
                            { "module": "Module 1: Fundamentals of Testing", "topics": ["SDLC Models (Waterfall, Agile)", "STLC & Test Plans", "Test Levels (Unit, Integration, System)", "Traceability Matrix"] },
                            { "module": "Module 2: Approaches to Testing", "topics": ["Static vs Dynamic Testing", "Black Box (Equivalence, Boundary Value)", "White Box (Path Coverage)", "Performance Testing"] },
                            { "module": "Module 3: Test Management using JIRA", "topics": ["JIRA Dashboard & Issues", "Bug Life Cycle", "Creating Epics & Stories", "Agile Reports in JIRA"] }
                        ]
                    },
                    {
                        "code": "24ONMCH654",
                        "name": "Web Application Development",
                        "syllabus": [
                            { "module": "Module 1: Overview of .NET", "topics": ["CLR, CTS, CLS", "C# Basics (Boxing/Unboxing)", "Assemblies (DLLs, GAC)", "File Handling"] },
                            { "module": "Module 2: Windows Forms & Connections", "topics": ["Windows Controls (Buttons, Lists)", "MDI Applications", "ADO.NET Connection Objects", "Command & DataReader"] },
                            { "module": "Module 3: Data & N-Tier Architecture", "topics": ["Disconnected Architecture (DataSet, DataAdapter)", "XML Parsing", "N-Tier Architecture", "Setup & Deployment"] }
                        ]
                    },
                    {
                        "code": "24ONMCT655",
                        "name": "Cyber Security",
                        "syllabus": [
                            { "module": "Module 1: Cyber Security Fundamentals", "topics": ["CIA Triad", "Cyber Crimes & Criminals", "Anti-forensics & Phishing", "Botnets & Fast Flux"] },
                            { "module": "Module 2: IT Act 2000", "topics": ["Attacks (SQL Injection, DoS)", "Digital Signatures", "IT Act Amendments", "Certifying Authorities"] },
                            { "module": "Module 3: Cyber Law", "topics": ["Patent & Copyright Law", "Domain Name Disputes", "Indian Evidence Act", "Online Dispute Resolution"] }
                        ]
                    }
                ]
            },

            // --- SEMESTER III (SPECIALIZATION) ---
            {
                "id": "sem3",
                "title": "Semester III",
                "type": "specialization",
                "groups": [
                    // Track 1: Cloud Computing
                    {
                        "name": "Cloud Computing",
                        "subjects": [
                            {
                                "code": "24ONMCT701",
                                "name": "Introduction to Cloud Computing",
                                "syllabus": [
                                    { "module": "Module 1: Introduction", "topics": ["Cloud History & Roots", "Features & Properties", "Cloud Models (Public, Private, Hybrid)", "SaaS, PaaS, IaaS"] },
                                    { "module": "Module 2: Virtualization", "topics": ["Characteristics of Virtualization", "Hardware vs Software Virtualization", "OS-Level Virtualization", "Pros & Cons"] },
                                    { "module": "Module 3: Advanced Architectures", "topics": ["Cloud Architecture Boundaries", "Service Oriented Architecture (SOA)", "Cloud Platforms (AWS, Azure, Google App Engine)"] }
                                ]
                            },
                            {
                                "code": "24ONMCT702",
                                "name": "Introduction to Amazon Web Services",
                                "syllabus": [
                                    { "module": "Module 1: Intro to AWS", "topics": ["Benefits of AWS", "Billing & Cost Management", "WordPress on AWS"] },
                                    { "module": "Module 2: Virtual Infrastructure", "topics": ["EC2 Virtual Machines", "Infrastructure as Code", "Automating Deployment (CI/CD)"] },
                                    { "module": "Module 3: Storage & Security", "topics": ["S3 Objects & Archiving", "EBS vs Instance Store", "AWS Lambda", "RDS & ElastiCache"] },
                                    { "module": "Module 4: Sharing Data", "topics": ["EFS (Elastic File System)", "Sharing Data Volumes"] }
                                ]
                            },
                            {
                                "code": "24ONMCT703",
                                "name": "Introduction to Microsoft Azure services",
                                "syllabus": [
                                    { "module": "Module 1: Getting Started", "topics": ["Azure Architecture", "Resource Groups", "Virtual Networks (VNet)", "Azure Virtual Machines"] },
                                    { "module": "Module 2: Advanced Configuration", "topics": ["Azure SQL Database", "Azure Storage (Blob, File)", "Web Apps & App Service Plans"] },
                                    { "module": "Module 3: Specialized Services", "topics": ["Azure AI & IoT", "Azure Active Directory", "PowerShell Management", "IaaS vs PaaS vs SaaS"] }
                                ]
                            },
                            {
                                "code": "24ONMCT704",
                                "name": "Cloud Programming",
                                "syllabus": [
                                    { "module": "Module 1: Intro to Cloud Prog", "topics": ["Cloud Standards & Architectures", "Parallel & Distributed Programming", "Map-Reduce Concept"] },
                                    { "module": "Module 2: Models & Platforms", "topics": ["Spark & Hadoop Ecosystem", "Google App Engine (Python/Java)", "Cloud SDKs"] },
                                    { "module": "Module 3: AWS & Azure Prog", "topics": ["Programming on EC2 & S3", "Azure Programming Support", "Docker & Kubernetes", "Cloud Deployment"] }
                                ]
                            },
                            {
                                "code": "24ONMCT705",
                                "name": "Cloud Virtualization",
                                "syllabus": [
                                    { "module": "Module 1: Fundamentals", "topics": ["Need for Virtualization", "Types (Hardware, OS, Storage)", "Hypervisors (Type 1 & 2)", "Server Consolidation"] },
                                    { "module": "Module 2: Advanced Concepts", "topics": ["Network & Memory Virtualization", "Storage Virtualization (SAN, NAS)", "Virtualization Security Issues"] },
                                    { "module": "Module 3: Security & Case Studies", "topics": ["VM Migration Attacks", "Hyperjacking", "Hardware-Assisted Virtualization", "Case Studies (VMware, Hyper-V)"] }
                                ]
                            }
                        ]
                    },
                    // Track 2: Full Stack
                    {
                        "name": "Full Stack Development",
                        "subjects": [
                            {
                                "code": "24ONMCT706",
                                "name": "HTML, CSS and Javascript",
                                "syllabus": [
                                    { "module": "Module 1: Foundations", "topics": ["Web vs Internet", "HTML Structure & Tags", "Tables & Forms", "HTML5 Features"] },
                                    { "module": "Module 2: Advanced Markup", "topics": ["Image Maps", "CSS Selectors & Properties", "Box Model", "Responsive Design"] },
                                    { "module": "Module 3: JavaScript", "topics": ["Variables & Data Types", "DOM Manipulation", "Event Handling", "Functions & Arrays", "Website Creation Steps"] }
                                ]
                            },
                            {
                                "code": "24ONMCT707",
                                "name": "User Interface, Experience, Design",
                                "syllabus": [
                                    { "module": "Module 1: Basics of UI", "topics": ["HCI Principles", "GUI vs Web Interface", "User Research Methods", "Design Goals"] },
                                    { "module": "Module 2: Advanced Concepts", "topics": ["Menus & Navigation Schemes", "Windows & Layouts", "Device-Based Controls", "Feedback & Guidance"] },
                                    { "module": "Module 3: Specialized Topics", "topics": ["Accessibility & Internationalization", "Icons, Images & Color Theory", "Usability Testing"] }
                                ]
                            },
                            {
                                "code": "24ONMCT708",
                                "name": "DevOps -1 (GIT, Jenkins, Docker)",
                                "syllabus": [
                                    { "module": "Module 1: Intro to DevOps", "topics": ["DevOps vs Agile", "SDLC Models", "Testing Lifecycle", "Scrum Methodology"] },
                                    { "module": "Module 2: Git & CI", "topics": ["Git Basics (Commit, Branch, Merge)", "Remote Repositories", "Continuous Integration Concepts"] },
                                    { "module": "Module 3: Jenkins & Docker", "topics": ["Jenkins Installation & Plugins", "Docker Fundamentals", "Docker Architecture", "Containers vs Virtualization"] }
                                ]
                            },
                            {
                                "code": "24ONMCT709",
                                "name": "Software Architecture",
                                "syllabus": [
                                    { "module": "Module 1: Core Concepts", "topics": ["Architectural Patterns", "Quality Attributes", "Tactics for Quality", "Layered Architecture"] },
                                    { "module": "Module 2: Advanced Concepts", "topics": ["MVC Pattern", "Broker Architecture", "Microkernel", "Design Patterns"] },
                                    { "module": "Module 3: Specialized Knowledge", "topics": ["Formal Models (Z-Notation)", "ADL (Architecture Description Language)", "CASE Tools", "Documenting Architecture"] }
                                ]
                            },
                            {
                                "code": "24ONMCT710",
                                "name": "Prototyping",
                                "syllabus": [
                                    { "module": "Module 1: Fundamentals", "topics": ["Design Thinking", "Rapid vs Evolutionary Prototyping", "Prototype Evaluation", "Fidelity & Functionality"] },
                                    { "module": "Module 2: Advanced Techniques", "topics": ["Paper Prototypes", "Digital Prototyping Tools", "Usability Testing", "Wireframing"] },
                                    { "module": "Module 3: Modern Dev", "topics": ["Interactive Prototypes (Photoshop/Sketch)", "Animations & Interactions", "Object-Oriented Frameworks"] }
                                ]
                            }
                        ]
                    },
                    // Track 3: Data Analytics
                    {
                        "name": "Data Analytics",
                        "subjects": [
                            {
                                "code": "24ONMCT711",
                                "name": "Data Analytics Using Python",
                                "syllabus": [
                                    { "module": "Module 1: Statistical Foundations", "topics": ["Probability Distributions", "Sampling", "Hypothesis Testing"] },
                                    { "module": "Module 2: Advanced Techniques", "topics": ["ANOVA", "Linear & Multiple Regression", "Logistic Regression"] },
                                    { "module": "Module 3: Visualization & ML", "topics": ["Chi-Square Test", "Matplotlib & Seaborn", "Pandas Manipulation", "K-Means Clustering", "CART"] }
                                ]
                            },
                            {
                                "code": "24ONMCT712",
                                "name": "SQL for Data Analytics",
                                "syllabus": [
                                    { "module": "Module 1: Intro to SQL", "topics": ["DDL, DML, DQL", "Managing Tables", "Filtering Data", "Subqueries"] },
                                    { "module": "Module 2: Advanced Concepts", "topics": ["Aggregate Functions", "Joins (Inner, Outer, Cross)", "Views & Indexes"] },
                                    { "module": "Module 3: Optimization", "topics": ["Data Cleaning", "Window Functions (RANK, LEAD)", "JSON/XML Data", "Query Optimization"] }
                                ]
                            },
                            {
                                "code": "24ONMCT713",
                                "name": "Web Analytics",
                                "syllabus": [
                                    { "module": "Module 1: Fundamentals", "topics": ["Web Analytics Process", "Heuristic Evaluation", "Key Metrics & Dashboards", "Conversion Funnels", "Data Sources"] },
                                    { "module": "Module 2: Advanced Analytics", "topics": ["A/B Testing", "Mobile Analytics", "Social Media Sentiment Analysis", "Competitive Intelligence"] },
                                    { "module": "Module 3: Practice", "topics": ["Traffic Analysis", "Google Analytics", "Privacy Issues", "Measuring ROI"] }
                                ]
                            },
                            {
                                "code": "24ONMCT714",
                                "name": "Digital Media Analytics",
                                "syllabus": [
                                    { "module": "Module 1: Intro & Research", "topics": ["Competitive Analysis", "Website Planning", "SEO & SEM", "Social Media Marketing"] },
                                    { "module": "Module 2: Earned & Paid Media", "topics": ["Content Strategy", "Email Marketing", "Mobile Marketing (ASO)", "Digital Media Purchasing"] },
                                    { "module": "Module 3: Management", "topics": ["Ecommerce Management", "Online Reputation Management (ORM)", "Social Media Audits"] }
                                ]
                            },
                            {
                                "code": "24ONMCT715",
                                "name": "IOT and Data Analytics",
                                "syllabus": [
                                    { "module": "Module 1: Intro to IoT", "topics": ["IoT Pillars & Components", "IoT Standards", "Applications (Smart Cities)", "IoT in India"] },
                                    { "module": "Module 2: Challenges", "topics": ["Big Data Management", "Sensor Analytics", "Device Management", "Edge Analytics"] },
                                    { "module": "Module 3: Data Analytics for IoT", "topics": ["Regression on IoT Data", "Single Value Decomposition (SVD)", "Time Series Modeling (ARIMA)", "Machine Learning for IoT"] }
                                ]
                            }
                        ]
                    },
                    // Track 4: AI & ML
                    {
                        "name": "Artificial Intelligence and Machine Learning",
                        "subjects": [
                            {
                                "code": "24ONMCT716",
                                "name": "Machine Learning in Python",
                                "syllabus": [
                                    { "module": "Module 1: Intro & Preprocessing", "topics": ["Perceptron & Adaptive Linear Neurons", "Classification (SVM, KNN, Decision Trees)", "Data Preprocessing"] },
                                    { "module": "Module 2: Dim Reduction", "topics": ["PCA & LDA", "Kernel PCA", "Ensemble Learning (Bagging, Boosting)"] },
                                    { "module": "Module 3: Analysis", "topics": ["Sentiment Analysis", "Regression Analysis", "Clustering (K-Means, Hierarchical)"] }
                                ]
                            },
                            {
                                "code": "24ONMCT717",
                                "name": "Statistics and Python in Machine Learning",
                                "syllabus": [
                                    { "module": "Module 1: Python Basics", "topics": ["Data Types & Operators", "File Handling", "Exception Handling"] },
                                    { "module": "Module 2: Data Manipulation", "topics": ["Numpy Arrays", "Pandas DataFrames", "Probability Distributions", "Hypothesis Testing"] },
                                    { "module": "Module 3: Visualization", "topics": ["Histograms & Box Plots", "Scatter Plots", "Advanced Visualization Methods"] }
                                ]
                            },
                            {
                                "code": "24ONMCT718",
                                "name": "Business Application of Machine Learning",
                                "syllabus": [
                                    { "module": "Module 1: Customer Service", "topics": ["AI Hype vs Reality", "Chatbots", "Call Center Automation"] },
                                    { "module": "Module 2: Hospitality & Finance", "topics": ["Dynamic Pricing", "Robo-Advisers", "Fraud Detection", "Loan Underwriting"] },
                                    { "module": "Module 3: Retail", "topics": ["Recommendation Systems", "Inventory Optimization", "Future of ML"] }
                                ]
                            },
                            {
                                "code": "24ONMCT719",
                                "name": "Deep Learning and NLP",
                                "syllabus": [
                                    { "module": "Module 1: Fundamentals", "topics": ["Math for DL (Linear Algebra, Calculus)", "ANN Concepts", "Neurons & Activation Functions"] },
                                    { "module": "Module 2: Algorithms", "topics": ["Back Propagation", "CNN, DBN, DBM", "TensorFlow & Keras", "Transfer Learning"] },
                                    { "module": "Module 3: NLP", "topics": ["Text Pre-processing", "Feature Engineering", "NLP Use Cases", "NLTK"] }
                                ]
                            },
                            {
                                "code": "24ONMCT720",
                                "name": "Web, Social Analytics and Visualization",
                                "syllabus": [
                                    { "module": "Module 1: Web Analytics", "topics": ["KPIs", "Web Analytics Tools (Google Analytics)", "A/B Testing"] },
                                    { "module": "Module 2: Social Media", "topics": ["Unstructured Data", "Platform Analytics (Facebook, Twitter)", "Sentiment Analysis"] },
                                    { "module": "Module 3: Metrics & ROI", "topics": ["Social Media ROI", "Risk Management", "Benchmarking", "Data Visualization"] }
                                ]
                            }
                        ]
                    }
                ]
            },

            // --- SEMESTER IV (SPECIALIZATION) ---
            {
                "id": "sem4",
                "title": "Semester IV",
                "type": "specialization",
                "groups": [
                    // Track 1: Cloud Computing
                    {
                        "name": "Cloud Computing",
                        "subjects": [
                            {
                                "code": "24ONMCT751",
                                "name": "Introduction to Google Cloud Services",
                                "syllabus": [
                                    { "module": "Module 1: Intro & Storage", "topics": ["Cloud SQL & Spanner", "Data Centers", "IaaS/PaaS/SaaS"] },
                                    { "module": "Module 2: Computing", "topics": ["Bigtable", "Google Compute Engine (GCE)", "Serverless (Cloud Functions)", "Cloud DNS"] },
                                    { "module": "Module 3: ML & Analytics", "topics": ["Cloud Vision & Speech API", "BigQuery", "Cloud Dataflow", "Pub/Sub"] }
                                ]
                            },
                            {
                                "code": "24ONMCT752",
                                "name": "Introduction to IBM Cloud Services",
                                "syllabus": [
                                    { "module": "Module 1: Fundamentals", "topics": ["IBM Platform LSF", "Symphony", "Cloud Continuum"] },
                                    { "module": "Module 2: Platform Solutions", "topics": ["MapReduce", "Cluster Manager", "GPFS (Parallel File System)", "Engineering Workloads"] },
                                    { "module": "Module 3: Workloads", "topics": ["Life Sciences & Financial Workloads", "IaaS vs PaaS", "Security & Governance"] }
                                ]
                            },
                            {
                                "code": "24ONMCT759",
                                "name": "IOT Cloud and Watson Analytics",
                                "syllabus": [
                                    { "module": "Module 1: Intro", "topics": ["IoT Architecture", "RFID & Sensors", "Edge Computing"] },
                                    { "module": "Module 2: Cloud & Watson", "topics": ["Watson IoT Platform", "Cognitive Computing", "Resource Management", "Identity Management"] },
                                    { "module": "Module 3: Security", "topics": ["IoT Vulnerabilities", "Threat Analysis", "Smart City Case Studies", "Industrial IoT"] }
                                ]
                            }
                        ]
                    },
                    // Track 2: Full Stack
                    {
                        "name": "Full Stack Development",
                        "subjects": [
                            {
                                "code": "24ONMCT754",
                                "name": "Web Services - Rest API, ReactJS, NodeJS",
                                "syllabus": [
                                    { "module": "Module 1: Web Services", "topics": ["SOAP vs REST", "SOA Architecture", "Java Web Services"] },
                                    { "module": "Module 2: REST API", "topics": ["HTTP Methods", "Serialization", "Database Integration", "Caching Strategies"] },
                                    { "module": "Module 3: Node.js", "topics": ["Node.js Globals & Modules", "Express.js", "MySQL & MongoDB Integration"] }
                                ]
                            },
                            {
                                "code": "24ONMCT755",
                                "name": "DevOps - 2 (Ansible, Puppet, Nagios)",
                                "syllabus": [
                                    { "module": "Module 1: Agile & DevOps", "topics": ["DevOps Ecosystem", "Scrum Flow", "Testing Lifecycle"] },
                                    { "module": "Module 2: Configuration Mgmt", "topics": ["Ansible Playbooks & Modules", "Puppet Architecture", "Puppet Manifests"] },
                                    { "module": "Module 3: Monitoring", "topics": ["Nagios Architecture", "Nagios Installation", "Continuous Monitoring"] }
                                ]
                            }
                        ]
                    },
                    // Track 3: Data Analytics
                    {
                        "name": "Data Analytics",
                        "subjects": [
                            {
                                "code": "24ONMCT756",
                                "name": "Data Analytics using R",
                                "syllabus": [
                                    { "module": "Module 1: Intro to R", "topics": ["R Studio", "Data Types & Structures", "R Packages"] },
                                    { "module": "Module 2: Manipulation", "topics": ["Control Structures", "Data Import (ODBC/SQL)", "Exploratory Data Analysis"] },
                                    { "module": "Module 3: Mining & Viz", "topics": ["ggplot2", "K-Means Clustering", "Association Rules", "Decision Trees & Random Forest"] }
                                ]
                            },
                            {
                                "code": "24ONMCT757",
                                "name": "Data Analytics for Decision Making",
                                "syllabus": [
                                    { "module": "Module 1: Python & SQL", "topics": ["Pandas & NumPy", "SQL Joins & Queries", "Data Preprocessing"] },
                                    { "module": "Module 2: Statistics & ML", "topics": ["Descriptive vs Inferential Stats", "Probability Distributions", "Supervised vs Unsupervised Learning"] },
                                    { "module": "Module 3: Wrangling & Viz", "topics": ["Data Cleaning", "Matplotlib & Seaborn", "Tableau Dashboards"] }
                                ]
                            }
                        ]
                    },
                    // Track 4: AI & ML
                    {
                        "name": "Artificial Intelligence and Machine Learning",
                        "subjects": [
                            {
                                "code": "24ONMCT758",
                                "name": "Big Data Hadoop",
                                "syllabus": [
                                    { "module": "Module 1: Basics", "topics": ["4 V's of Big Data", "Hadoop Ecosystem", "Big Data Applications"] },
                                    { "module": "Module 2: HDFS & MapReduce", "topics": ["HDFS Architecture", "Replication", "MapReduce Programming Model"] },
                                    { "module": "Module 3: Tools", "topics": ["Pig Latin", "HiveQL", "HBase Architecture"] }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};