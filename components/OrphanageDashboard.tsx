'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, BookOpen, Video, Download, Play, FileText, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/DashboardHeader';
import { toast } from 'sonner';

// Mock data
const liveClasses = [
  {
    id: 1,
    title: 'English Reading',
    teacher: 'Ms. Sarah Johnson',
    time: '2:00 PM - 2:45 PM',
    students: 8,
    status: 'live',
    googleMeetLink: 'https://meet.google.com/abc-defg-hij'
  }
];

const upcomingClasses = [
  {
    id: 2,
    title: 'Basic Mathematics',
    teacher: 'Mr. John Davis',
    date: '2025-01-15',
    time: '10:00 AM',
    duration: '60 mins',
    students: 15,
    status: 'scheduled',
    googleMeetLink: 'https://meet.google.com/xyz-uvw-rst'
  },
  {
    id: 3,
    title: 'Science Basics',
    teacher: 'Dr. Emily Chen',
    date: '2025-01-16',
    time: '11:00 AM',
    duration: '50 mins',
    students: 22,
    status: 'scheduled',
    googleMeetLink: 'https://meet.google.com/mno-pqr-uvw'
  }
];

const resources = [
  {
    id: 1,
    title: 'Mathematics Workbook Grade 3',
    teacher: 'Mr. John Davis',
    type: 'PDF',
    size: '2.4 MB',
    uploadDate: '2025-01-10',
    category: 'Mathematics'
  },
  {
    id: 2,
    title: 'English Alphabet Song',
    teacher: 'Ms. Sarah Johnson',
    type: 'Video',
    size: '15.2 MB',
    uploadDate: '2025-01-08',
    category: 'English'
  },
  {
    id: 3,
    title: 'Science Experiment Guide',
    teacher: 'Dr. Emily Chen',
    type: 'PDF',
    size: '1.8 MB',
    uploadDate: '2025-01-05',
    category: 'Science'
  }
];

export default function OrphanageDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'audio': return '🎵';
      default: return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mathematics': return 'bg-blue-100 text-blue-800';
      case 'english': return 'bg-green-100 text-green-800';
      case 'science': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleJoinClass = (classId: number) => {
    const class_ = liveClasses.find(c => c.id === classId) || upcomingClasses.find(c => c.id === classId);
    if (class_?.googleMeetLink) {
      window.open(class_.googleMeetLink, '_blank');
    } else {
      toast.error('Google Meet link not available for this class');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user!} onLogout={logout} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Students</p>
                  <p className="text-3xl font-bold text-gray-900">45</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">All enrolled</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Classes This Week</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+3 from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Teachers</p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-sm text-blue-600 mt-2">Available now</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resources</p>
                  <p className="text-3xl font-bold text-gray-900">56</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+4 this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Classes Alert */}
        {liveClasses.length > 0 && (
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <CardTitle className="text-green-800 font-slim-joe">Live Classes Now</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {liveClasses.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{class_.title}</h4>
                    <p className="text-sm text-gray-600">with {class_.teacher}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {class_.time}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {class_.students} students joined
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleJoinClass(class_.id)}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Join Class
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs defaultValue="classes" className="space-y-6">
          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="classes">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-slim-joe">Scheduled Classes</CardTitle>
                <CardDescription>Upcoming teaching sessions for your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <h4 className="font-semibold text-gray-900">{class_.title}</h4>
                        <p className="text-sm text-gray-600">with {class_.teacher}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {class_.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {class_.time} ({class_.duration})
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {class_.students} students expected
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Bell className="w-4 h-4 mr-2" />
                          Remind Students
                        </Button>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-slim-joe">Educational Resources</CardTitle>
                <CardDescription>Materials shared by volunteer teachers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getFileIcon(resource.type)}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                          <p className="text-sm text-gray-600">by {resource.teacher}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{resource.type}</span>
                            <span>{resource.size}</span>
                            <span>Uploaded {resource.uploadDate}</span>
                          </div>
                          <div className="mt-2">
                            <Badge className={getCategoryColor(resource.category)}>
                              {resource.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-slim-joe">Student Management</CardTitle>
                <CardDescription>Manage students attending online classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Student management features coming soon</p>
                  <p className="text-sm">You can view student attendance in individual class reports</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}