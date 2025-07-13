import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import ClassroomClient from './ClassroomClient';

export async function generateStaticParams() {
  // Return an empty array since we're handling dynamic routes
  return [];
}

export default function ClassroomPage({ params }: { params: { classId: string } }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClassroomClient />
    </Suspense>
  );
}