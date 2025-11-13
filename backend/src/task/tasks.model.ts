export class Task {
  id: number;
  title: string;
  description: string | null;
  status: 'pending' | 'in_progress' | 'done';
  createdAt: Date;
}