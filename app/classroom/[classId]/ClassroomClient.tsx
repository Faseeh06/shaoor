'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getClassroom, joinClassroom, leaveClassroom } from '@/services/classroomService';

export default function ClassroomClient() {
  const { classId } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [classroom, setClassroom] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        setLoading(true);
        const data = await getClassroom(classId as string);
        setClassroom(data);
      } catch (err) {
        setError('Failed to load classroom');
        toast({
          title: 'Error',
          description: 'Failed to load classroom. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    if (classId && user) {
      fetchClassroom();
    }
  }, [classId, user, toast]);

  const handleJoinClass = async () => {
    if (!user || !classroom) return;

    try {
      await joinClassroom(classId as string, user.id);
      
      if (classroom.googleMeetLink) {
        window.open(classroom.googleMeetLink, '_blank');
        toast({
          title: 'Success',
          description: 'Redirecting to Google Meet...',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Google Meet link not available for this class.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to join the class. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleLeaveClass = async () => {
    if (!user || !classroom) return;

    try {
      await leaveClassroom(classId as string, user.id);
      toast({
        title: 'Success',
        description: 'You have left the class.',
      });
      router.push('/');
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to leave the class. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error || !classroom) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-gray-600">{error || 'Classroom not found'}</p>
          <Button 
            onClick={() => router.push('/')} 
            className="mt-4"
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold font-slim-joe">{classroom.title}</CardTitle>
          <p className="text-gray-600">with {classroom.teacherName}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subject:</span>
              <span className="font-medium">{classroom.subject}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{classroom.date}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{classroom.time}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{classroom.duration} minutes</span>
            </div>
            {classroom.description && (
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">{classroom.description}</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {classroom.googleMeetLink ? (
              <Button 
                onClick={handleJoinClass}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Google Meet
              </Button>
            ) : (
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Google Meet link not available for this class.
                </p>
              </div>
            )}
            
            <Button 
              onClick={handleLeaveClass}
              variant="outline"
              className="w-full"
            >
              Leave Class
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 