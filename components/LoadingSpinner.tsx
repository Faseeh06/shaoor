import { BookOpen } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 animate-pulse">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary/20 rounded-lg animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Shaoor</h2>
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    </div>
  );
}