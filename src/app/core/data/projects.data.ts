
import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Employee Management System',
    category: 'Full Stack Application',
    description:
      'Employee management platform with JWT authentication, ' +
      'role-based authorization, CRUD operations, ' +
      'pagination and sorting.',
    techStack: [
      'Java',
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'JWT'
    ],
    image: 'images/projects/ems.svg',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'IncidentIQ AI',
    category: 'AI Engineering',
    description:
      'AI-powered production incident investigator designed ' +
      'to retrieve similar incidents and recommend ' +
      'evidence-backed troubleshooting steps.',
    techStack: [
      'OpenAI API',
      'RAG',
      'Incident Retrieval'
    ],
    image: 'images/projects/incidentiq.svg',
    status: 'In Progress'
  }
];
