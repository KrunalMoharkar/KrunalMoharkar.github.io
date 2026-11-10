
import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Infosys',
    role: 'Associate Consultant | Java Developer',
    employmentPeriod: 'Sep 2025 - Present',
    project: 'Transactional Tax Reporting System',
    description:
      'Worked on financial reporting applications involving ' +
      'trade data processing, tax calculations and ' +
      'report generation.',
    achievements: [
      'Developed and deployed 10+ RESTful APIs.',
      'Modernized 5+ legacy APIs to improve performance.',
      'Designed APIs that automated tax reporting workflows.',
      'Migrated services to Java 17 and Spring Boot 3.0+.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'JUnit',
      'Mockito',
      'SQL',
      'AWS'
    ]
  },
  {
    id: 2,
    company: 'Tata Consultancy Services',
    role: 'Systems Engineer | Java Developer',
    employmentPeriod: 'Aug 2022 - Aug 2025',
    project: 'Enterprise Training & Compliance Platform',
    description:
      'Developed backend features for an enterprise training ' +
      'platform supporting role-based training assignments, ' +
      'progress tracking and compliance reporting.',
    achievements: [
      'Developed microservice features using Spring Boot.',
      'Implemented JWT-based role authentication and authorization.',
      'Designed REST APIs documented with Swagger/OpenAPI.',
      'Built unit and integration tests using JUnit and Mockito.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JUnit',
      'Mockito',
      'SQL'
    ]
  }
];
