
import {
  Education,
  Credential
} from '../models/credential.model';

export const EDUCATION: Education = {
  degree: 'B.Tech in Computer Engineering',
  institution: 'Government College of Engineering, Yavatmal',
  university: 'Dr. Babasaheb Ambedkar Technological University',
  period: 'June 2018 - June 2022',
  cgpa: '9.5/10'
};

export const CREDENTIALS: Credential[] = [
  {
    id: 3,
    title: 'GitHub Copilot',
    issuer: 'GitHub',
    category: 'Certification',
    logo: '/images/certifications/github-copilot.svg'
  },
  {
    id: 4,
    title: 'GitHub Certified: Agentic AI Developer',
    issuer: 'GitHub',
    category: 'Certification',
    logo: '/images/certifications/github.svg'
  },
  {
    id: 5,
    title: 'Claude Certified Developer - Foundations',
    issuer: 'Anthropic',
    category: 'Certification',
    logo: '/images/certifications/claude.svg'
  },
  {
    id: 1,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'Certification',
    logo: '/images/certifications/aws.svg'
  },
  {
    id: 6,
    title: 'Certificate of Appreciation - Infosys Insta Award',
    issuer: 'Infosys',
    category: 'Achievement',
    year: '2026',
    description:
      'Recognized for hard work and dedication on the ' +
      'CIMS Azure migration project.'
  },
  {
    id: 2,
    title: 'Best Team Award',
    issuer: 'Tata Consultancy Services',
    category: 'Achievement',
    year: '2023, 2024',
    description:
      'Recognized for outstanding project support, ' +
      'teamwork and delivery excellence.'
  }
];
