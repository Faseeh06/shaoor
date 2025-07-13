'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BookOpen, Link, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { createClassroom } from '@/services/classroomService';

interface CreateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subjects = [
  'Mathematics',
  'English',
  'Science',
  'History',
  'Geography',
  'Art',
  'Music',
  'Physical Education'
];

export default function CreateClassModal({ isOpen, onClose }: CreateClassModalProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    date: '',
    time: '',
    duration: '60',
    description: '',
    googleMeetLink: '',
    maxParticipants: '30'
  });

  const [classLink, setClassLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('You must be logged in to create a class');
      return;
    }

    if (!formData.googleMeetLink.trim()) {
      toast.error('Please provide a Google Meet link');
      return;
    }

    setIsLoading(true);
    
    try {
      const classroomData = {
        title: formData.title,
        subject: formData.subject,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        duration: parseInt(formData.duration),
        googleMeetLink: formData.googleMeetLink.trim(),
        maxParticipants: parseInt(formData.maxParticipants),
        teacherId: user.id,
        teacherName: user.name,
        status: 'scheduled' as const,
        participants: []
      };

      const classId = await createClassroom(classroomData);
      
      // Create the class link
      const link = `${window.location.origin}/classroom/${classId}`;
      setClassLink(link);
      
      toast.success('Class created successfully!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          title: '',
          subject: '',
          date: '',
          time: '',
          duration: '60',
          description: '',
          googleMeetLink: '',
          maxParticipants: '30'
        });
        setClassLink(null);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error creating class:', error);
      toast.error('Failed to create class. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (classLink) {
      navigator.clipboard.writeText(classLink);
      toast.success('Class link copied to clipboard!');
    }
  };

  const openGoogleMeet = () => {
    if (formData.googleMeetLink) {
      window.open(formData.googleMeetLink, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center font-slim-joe">
            <BookOpen className="w-6 h-6 mr-2 text-primary" />
            Schedule New Class
          </DialogTitle>
        </DialogHeader>

        {classLink ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Class Created Successfully!</h3>
              <p className="text-sm text-green-700 mb-4">Share this link with your students to join the class:</p>
              <div className="flex items-center space-x-2">
                <Input
                  value={classLink}
                  readOnly
                  className="flex-1"
                />
                <Button onClick={copyToClipboard} variant="outline">
                  <Link className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Class Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Basic Mathematics for Grade 3"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map(subject => (
                        <SelectItem key={subject} value={subject.toLowerCase()}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="15"
                    max="180"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Enter class description..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="googleMeetLink">Google Meet Link *</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="googleMeetLink"
                    type="url"
                    placeholder="https://meet.google.com/xxx-xxxx-xxx"
                    value={formData.googleMeetLink}
                    onChange={(e) => setFormData(prev => ({ ...prev, googleMeetLink: e.target.value }))}
                    required
                  />
                  {formData.googleMeetLink && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={openGoogleMeet}
                      className="flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Create a Google Meet link and paste it here. Students will use this link to join the class.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxParticipants">Maximum Participants</Label>
                <Input
                  id="maxParticipants"
                  type="number"
                  min="1"
                  max="100"
                  value={formData.maxParticipants}
                  onChange={(e) => setFormData(prev => ({ ...prev, maxParticipants: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? 'Creating...' : 'Create Class'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}