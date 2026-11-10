
export interface Education {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
}

export interface Credential {
  id: number;
  title: string;
  issuer: string;
  category: 'Certification' | 'Achievement';
  year?: string;
  description?: string;
  verificationUrl?: string;
  logo?: string;
}
