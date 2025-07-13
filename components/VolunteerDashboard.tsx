'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, BookOpen, Video, Plus, Settings, LogOut, Bell, FileText, Play, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/DashboardHeader';
import CreateClassModal from '@/components/CreateClassModal';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

// Mock data
const upcomingClasses = [
  {
    id: 1,
    title: 'Basic Mathematics',
    date: '2025-01-15',
    time: '10:00 AM',
    duration: '60 mins',
    orphanages: ['Sunshine Orphanage', 'Hope Children Home'],
    students: 15,
    status: 'scheduled',
    googleMeetLink: 'https://meet.google.com/xyz-uvw-rst'
  },
  {
    id: 2,
    title: 'English Reading',
    date: '2025-01-15',
    time: '2:00 PM',
    duration: '45 mins',
    orphanages: ['Little Angels Home'],
    students: 8,
    status: 'live',
    googleMeetLink: 'https://meet.google.com/abc-defg-hij'
  },
  {
    id: 3,
    title: 'Science Basics',
    date: '2025-01-16',
    time: '11:00 AM',
    duration: '50 mins',
    orphanages: ['Future Stars', 'Rainbow Kids'],
    students: 22,
    status: 'scheduled',
    googleMeetLink: 'https://meet.google.com/mno-pqr-uvw'
  }
];

const resources = [
  {
    id: 1,
    title: 'Mathematics Workbook Grade 3',
    type: 'PDF',
    size: '2.4 MB',
    uploadDate: '2025-01-10',
    downloads: 45
  },
  {
    id: 2,
    title: 'English Alphabet Song',
    type: 'Video',
    size: '15.2 MB',
    uploadDate: '2025-01-08',
    downloads: 32
  },
  {
    id: 3,
    title: 'Science Experiment Guide',
    type: 'PDF',
    size: '1.8 MB',
    uploadDate: '2025-01-05',
    downloads: 28
  }
];

export default function VolunteerDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showCreateClass, setShowCreateClass] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'scheduled': return 'bg-blue-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'audio': return '🎵';
      default: return '📁';
    }
  };

  const handleJoinClass = (classId: number) => {
    const class_ = upcomingClasses.find(c => c.id === classId);
    if (class_?.googleMeetLink) {
      window.open(class_.googleMeetLink, '_blank');
    } else {
      toast.error('Google Meet link not available for this class');
    }
  };

  const handleStartClass = (classId: number) => {
    const class_ = upcomingClasses.find(c => c.id === classId);
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
                  <p className="text-sm font-medium text-gray-600">Total Classes</p>
                  <p className="text-3xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+3 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Students Reached</p>
                  <p className="text-3xl font-bold text-gray-900">156</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+12 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Teaching Hours</p>
                  <p className="text-3xl font-bold text-gray-900">48</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+6 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resources Shared</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">+2 this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="classes" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-fit grid-cols-3">
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
            
            <Button onClick={() => setShowCreateClass(true)} className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Class
            </Button>
          </div>

          <TabsContent value="classes" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-slim-joe">Upcoming Classes</CardTitle>
                  <CardDescription>Your scheduled teaching sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingClasses.map((class_) => (
                      <div key={class_.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(class_.status)}`}></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{class_.title}</h4>
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
                                {class_.students} students
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {class_.orphanages.map((orphanage, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {orphanage}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {class_.status === 'live' && (
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleJoinClass(class_.id)}
                            >
                              <Video className="w-4 h-4 mr-2" />
                              Join Live
                            </Button>
                          )}
                          {class_.status === 'scheduled' && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleStartClass(class_.id)}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Start Class
                            </Button>
                          )}
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Class
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Cancel Class
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-slim-joe">Resource Library</CardTitle>
                  <CardDescription>Educational materials you've shared</CardDescription>
                </div>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Resource
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getFileIcon(resource.type)}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{resource.type}</span>
                            <span>{resource.size}</span>
                            <span>Uploaded {resource.uploadDate}</span>
                            <span>{resource.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem>Share Link</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-slim-joe">Weekly Schedule</CardTitle>
                <CardDescription>Your teaching schedule for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Calendar view coming soon</p>
                  <p className="text-sm">For now, check your upcoming classes above</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <CreateClassModal 
        isOpen={showCreateClass}
        onClose={() => setShowCreateClass(false)}
      />
    </div>
  );
}