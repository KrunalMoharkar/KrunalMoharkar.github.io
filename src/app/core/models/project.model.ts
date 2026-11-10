
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  status: 'Completed' | 'In Progress';
  githubUrl?: string;
  liveUrl?: string;
}
