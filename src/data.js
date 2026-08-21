// Prefix for static assets so paths work under the GitHub Pages base path
const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Dilip Saini',
  role: 'Software Engineer, Staff A',
  company: 'Blackbaud',
  location: 'Hyderabad, India',
  email: 'dilip.dotnet8@gmail.com',
  phone: '+91-7815806156',
  linkedin: 'https://www.linkedin.com/in/dilip-saini',
  github: 'https://github.com/dilip-saini',
  leetcode: 'https://leetcode.com/dilip-saini',
  summary:
    'Experienced Software Engineer with 4+ years building scalable enterprise applications and managing large-scale Azure cloud infrastructure. Strong programming skills, a keen problem-solving mindset, and a proven track record of delivering high-quality software solutions — from .NET microservices to multi-region cloud environments with 1,800+ Azure resources.',
  highlights: [
    { value: '4+', label: 'Years Experience' },
    { value: '1,800+', label: 'Azure Resources Managed' },
    { value: '200K+', label: 'Daily Transactions Handled' },
    { value: '150+', label: 'Resource Groups' },
  ],
}

export const experience = [
  {
    company: 'Blackbaud',
    logo: `${BASE}logos/blackbaud.png`,
    role: 'Software Engineer, Staff A',
    period: 'April 2025 — Present',
    location: 'Hyderabad, India',
    points: [
      'Managed 1,800+ Azure resources across 150+ resource groups supporting enterprise SaaS workloads in a multi-region cloud environment.',
      'Administered hybrid networking with Virtual WAN, ExpressRoute, Azure Firewall, NSGs, Private Endpoints, and zero-trust security controls.',
      'Supported data platforms including Azure SQL MI, Cosmos DB, Redis, Databricks, Data Factory, and Data Lake solutions.',
      'Managed application and compute services across App Services, AKS, VMs, and VMSS with backup and recovery automation.',
      'Implemented cloud security, identity, and compliance using Key Vault, Managed Identities, Microsoft Defender, and security automation.',
      'Leveraged Terraform, Azure Monitor, Log Analytics, Application Insights, and Automation Runbooks to drive Infrastructure as Code, observability, governance, and operational efficiency.',
    ],
    tags: ['Azure', 'Terraform', 'AKS', 'Virtual WAN', 'Key Vault', 'IaC'],
  },
  {
    company: 'Exceed Management Pvt Ltd',
    logo: `${BASE}logos/exceed.png`,
    role: 'Software Engineer',
    period: 'Jan 2024 — Feb 2025',
    location: 'Hyderabad, India',
    points: [
      'Developed multiple loosely coupled microservices by writing modular, secure, testable code and designed architecture for building scalable and reliable solutions.',
      'Implemented secure storage and retrieval of sensitive information using Azure Key Vault and App Configuration.',
      'Collaborated with cross-functional teams and internal stakeholders to refine system architecture, increasing developer productivity by 20% and reducing deployment cycles by 30%.',
      'Built RESTful APIs for a candidate management system — job postings, candidate tracking, and interview scheduling — using appropriate design patterns, handling high traffic efficiently.',
      'Integrated third-party APIs for seamless data exchange and process automation.',
      'Integrated Notification Service APIs (Twilio) for multiple channels of communication (SMS, Email, In-App).',
      'Built REST APIs using .NET Core and C#, implementing robust data models.',
    ],
    tags: ['.NET Core', 'C#', 'Microservices', 'Azure Key Vault', 'Twilio', 'REST APIs'],
  },
  {
    company: 'GoodSpace AI',
    logo: `${BASE}logos/goodspace.png`,
    role: 'Software Engineer',
    period: 'Jun 2019 — Aug 2021',
    location: 'Noida, India',
    points: [
      'Engineered and maintained high-performance REST APIs and microservices using .NET Core.',
      'Optimized candidate shortlisting workflows, reducing hiring time by 30% and saving 100+ recruiter hours per month.',
      'Enhanced candidate quality using AI-driven pre-screening and automated assessments, boosting hiring accuracy by 25%.',
    ],
    tags: ['.NET Core', 'REST APIs', 'Microservices', 'AI Automation'],
  },
]

export const projects = [
  {
    name: 'YourCause',
    org: 'Blackbaud',
    logo: `${BASE}logos/yourcause.png`,
    period: 'April 2025 — Present',
    description:
      'Enterprise CSR and employee engagement SaaS platform connecting corporations with nonprofits for giving, granting, and volunteering at global scale.',
    points: [
      'Managing cloud infrastructure spanning 1,800+ Azure resources across 150+ resource groups in a multi-region environment.',
      'Operating hybrid networking with Virtual WAN, ExpressRoute, Azure Firewall, Private Endpoints, and zero-trust security controls.',
      'Supporting data platforms including Azure SQL MI, Cosmos DB, Redis, Databricks, Data Factory, and Data Lake.',
      'Driving Infrastructure as Code, observability, and governance with Terraform, Azure Monitor, Log Analytics, and Automation Runbooks.',
    ],
    tags: ['Azure', 'Terraform', 'AKS', 'Cosmos DB', 'Databricks', 'IaC'],
  },
  {
    name: 'Optevus',
    org: 'Exceed Management Pvt Ltd',
    logo: `${BASE}logos/optevus.png`,
    period: 'Feb 2024 — Jan 2025',
    description:
      'High-performance recruitment platform handling 200K+ daily transactions with optimized data processing.',
    points: [
      'Developed high-performance REST APIs and microservices, optimizing data processing time by 40%.',
      'Implemented CQRS pattern to optimize read/write operations, enhancing data consistency and query performance.',
      'Integrated Azure services for secure authentication, data storage, and monitoring, ensuring compliance.',
      'Automated candidate engagement via multi-channel notifications (SMS, email, in-app), improving response time by 30%.',
    ],
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'CQRS', 'Azure'],
  },
  {
    name: 'AI-Powered Recruitment Automation',
    org: 'GoodSpace AI',
    logo: `${BASE}logos/goodspace.png`,
    period: 'Sep 2019 — Aug 2021',
    description:
      'Intelligent recruitment automation platform with AI-driven candidate screening and streamlined delivery pipelines.',
    points: [
      'Built CI/CD pipelines, cutting deployment time by 40%.',
      'Enhanced database performance by 50% via indexing, caching, and optimized queries.',
      'Boosted hiring accuracy by 25% through AI-driven pre-screening and automated assessments.',
    ],
    tags: ['.NET Core', 'CI/CD', 'SQL Optimization', 'AI Screening'],
  },
]

export const skills = [
  {
    category: 'Cloud Platforms',
    items: ['Microsoft Azure'],
  },
  {
    category: 'Compute',
    items: ['Azure Virtual Machines', 'VMSS', 'Azure Kubernetes Service (AKS)', 'Azure App Service', 'Azure Functions'],
  },
  {
    category: 'Data',
    items: ['Azure SQL Managed Instance', 'Cosmos DB', 'Redis', 'Databricks', 'Data Factory', 'Data Lake'],
  },
  {
    category: 'Networking',
    items: ['Virtual WAN', 'ExpressRoute', 'Azure Firewall', 'Bastion', 'NSG', 'Private Endpoints', 'Private DNS', 'VNet'],
  },
  {
    category: 'Security',
    items: ['Azure Key Vault', 'Managed Identity', 'Microsoft Defender for Cloud', 'RBAC'],
  },
  {
    category: 'Monitoring',
    items: ['Azure Monitor', 'Log Analytics', 'Application Insights', 'Azure Automation'],
  },
  {
    category: 'IaC & DevOps',
    items: ['Terraform', 'PowerShell', 'Azure CLI', 'Git', 'CI/CD'],
  },
  {
    category: 'Programming & Frameworks',
    items: ['C#', 'C++', '.NET Core', 'ASP.NET Core MVC', 'Entity Framework Core'],
  },
  {
    category: 'Databases',
    items: ['MS SQL Server', 'RDBMS', 'NoSQL'],
  },
  {
    category: 'Core CS',
    items: ['Problem Solving', 'Data Structures & Algorithms', 'OOPs Concepts', 'DBMS'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'Visual Studio', 'VS Code', 'Jira', 'Agile', 'Version Control'],
  },
]

export const education = [
  {
    degree: 'MCA — Computer Applications',
    institute: 'National Institute of Technology, Warangal',
    period: '2021 — 2024',
    score: 'GPA: 7.06 / 10.0',
  },
  {
    degree: 'B.Sc. — Computer Science',
    institute: 'College of Professional Studies, Indore',
    period: '2016 — 2019',
    score: 'GPA: 7.25 / 10.0',
  },
]
