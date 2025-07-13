'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import VolunteerDashboard from '@/components/VolunteerDashboard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function VolunteerDashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'volunteer')) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading || !user || user.role !== 'volunteer') {
    return <LoadingSpinner />;
  }

  return <VolunteerDashboard />;
}