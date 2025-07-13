export interface Classroom {
  id: string;
  title: string;
  subject: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  googleMeetLink?: string;
  maxParticipants: number;
  teacherId: string;
  teacherName: string;
  status: 'scheduled' | 'live' | 'completed';
  participants: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
  type: 'text' | 'file' | 'image';
}