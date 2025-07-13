export interface User {
  id: string;
  email: string;
  name: string;
  role: 'volunteer' | 'orphanage';
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: 'volunteer' | 'orphanage') => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}