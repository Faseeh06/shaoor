import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';

export interface Classroom {
  id?: string;
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
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const createClassroom = async (classroomData: Omit<Classroom, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const classroomRef = await addDoc(collection(db, 'classrooms'), {
      ...classroomData,
      participants: [],
      status: 'scheduled',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return classroomRef.id;
  } catch (error) {
    console.error('Error creating classroom:', error);
    throw error;
  }
};

export const getClassroom = async (classroomId: string) => {
  try {
    const classroomRef = doc(db, 'classrooms', classroomId);
    const classroomSnap = await getDoc(classroomRef);
    
    if (classroomSnap.exists()) {
      return { id: classroomSnap.id, ...classroomSnap.data() } as Classroom;
    }
    return null;
  } catch (error) {
    console.error('Error getting classroom:', error);
    throw error;
  }
};

export const updateClassroom = async (classroomId: string, data: Partial<Classroom>) => {
  try {
    const classroomRef = doc(db, 'classrooms', classroomId);
    await updateDoc(classroomRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating classroom:', error);
    throw error;
  }
};

export const deleteClassroom = async (classroomId: string) => {
  try {
    const classroomRef = doc(db, 'classrooms', classroomId);
    await deleteDoc(classroomRef);
  } catch (error) {
    console.error('Error deleting classroom:', error);
    throw error;
  }
};

export const joinClassroom = async (classroomId: string, userId: string) => {
  try {
    const classroomRef = doc(db, 'classrooms', classroomId);
    const classroomSnap = await getDoc(classroomRef);
    
    if (classroomSnap.exists()) {
      const classroom = classroomSnap.data() as Classroom;
      if (classroom.participants.length >= classroom.maxParticipants) {
        throw new Error('Classroom is full');
      }
      
      await updateDoc(classroomRef, {
        participants: [...classroom.participants, userId],
        updatedAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Error joining classroom:', error);
    throw error;
  }
};

export const leaveClassroom = async (classroomId: string, userId: string) => {
  try {
    const classroomRef = doc(db, 'classrooms', classroomId);
    const classroomSnap = await getDoc(classroomRef);
    
    if (classroomSnap.exists()) {
      const classroom = classroomSnap.data() as Classroom;
      await updateDoc(classroomRef, {
        participants: classroom.participants.filter(id => id !== userId),
        updatedAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Error leaving classroom:', error);
    throw error;
  }
};

export const getUserClassrooms = async (userId: string) => {
  try {
    const classroomsRef = collection(db, 'classrooms');
    const q = query(classroomsRef, where('teacherId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Classroom[];
  } catch (error) {
    console.error('Error getting user classrooms:', error);
    throw error;
  }
}; 