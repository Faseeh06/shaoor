'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import OrphanageDashboard from '@/components/OrphanageDashboard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function OrphanageDashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'orphanage')) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading || !user || user.role !== 'orphanage') {
    return <LoadingSpinner />;
  }

  return <OrphanageDashboard />;
}