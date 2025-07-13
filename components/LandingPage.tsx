'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Video, Heart, ArrowRight, Globe, MapPin, Clock, Target, CheckCircle, Star, School, Laptop } from 'lucide-react';
import Image from 'next/image';
import AuthModal from '@/components/AuthModal';

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="relative z-10 bg-transparent">
        <div className="w-full px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image 
                src="/images/shaoor_black.png" 
                alt="Shaoor Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-wide">Shaoor</h1>
                <p className="text-base font-bold text-green-600">چلو ساتھ پڑھتے ہیں</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => openAuth('login')}
                className="text-gray-700 hover:bg-green-50 hover:text-green-700 px-6 py-2 font-medium transition-all duration-200"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => openAuth('register')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-300/20 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Connecting Hearts Through Education</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Virtual Classrooms for 
              <span className="text-green-500"> Those</span> <span className="text-gray-900">Who</span> 
              <span className="text-green-400"> Need It</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Breaking geographical barriers to bring quality education to children in orphanages and rural schools. 
              Student volunteers from around the world can now teach and interact with kids who need it most, 
              creating lasting impact beyond traditional monthly visits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openAuth('register')}
                className="bg-green-500 hover:bg-green-600 text-lg px-8 py-6"
              >
                Start Volunteering Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openAuth('register')}
                className="text-lg px-8 py-6 border-2 hover:bg-green-50 hover:text-green-600 hover:border-green-600"
              >
                <School className="w-5 h-5 mr-2" />
                Register Your Institution
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Student Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Partner Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1,200+</div>
                <div className="text-gray-600">Children Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600">
                Bridging the gap between willing hearts and eager minds
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Community service clubs and student volunteers typically visit orphanages and small schools 
                  only 1-2 times per month. Many remote orphanages and rural schools, especially those in 
                  far-away locations, struggle to access these valuable educational opportunities due to 
                  geographical constraints.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shaoor creates virtual classrooms that connect orphanages and rural schools (with special 
                  focus on female-only and remote institutions) with student volunteers from around the world. 
                  Through our platform, volunteers can teach and interact with children regularly, 
                  providing consistent educational support that transcends physical boundaries.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-300/30 to-green-400/30 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Remote Access</div>
                      <div className="text-sm text-gray-600">Reach any location</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Regular Classes</div>
                      <div className="text-sm text-gray-600">Beyond monthly visits</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Global Volunteers</div>
                      <div className="text-sm text-gray-600">Worldwide participation</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Focused Impact</div>
                      <div className="text-sm text-gray-600">Female & rural priority</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create virtual bridges between student volunteers and children in need, 
              making quality education accessible regardless of location
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Connect Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We partner with orphanages and rural schools, especially female-only institutions, 
                  to bring them into our virtual classroom network.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Recruit Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Student volunteers from community service clubs and universities worldwide 
                  join our platform to share their knowledge and time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Enable Virtual Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Through our virtual classrooms, volunteers can teach multiple institutions 
                  simultaneously, maximizing impact and educational reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
            <p className="text-xl text-gray-600">
              Simple steps to make a lasting impact
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Register & Verify</h3>
                  <p className="text-gray-600">
                    Volunteers sign up through their community service clubs or universities. 
                    Institutions register to join our network of virtual classrooms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-green-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create Virtual Classrooms</h3>
                  <p className="text-gray-600">
                    We set up dedicated virtual classrooms for each partnered institution, 
                    equipped with all necessary tools for interactive learning.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule & Teach</h3>
                  <p className="text-gray-600">
                    Volunteers schedule classes and teach children across multiple institutions simultaneously, 
                    providing regular educational support beyond traditional monthly visits.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track Impact</h3>
                  <p className="text-gray-600">
                    Monitor student progress, attendance, and learning outcomes to ensure 
                    every child receives quality education and meaningful interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
            <p className="text-xl text-gray-600">
              Transforming lives through accessible education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Countries Reached</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <School className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">75%</div>
                <div className="text-gray-600">Female-Only Institutions</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5x</div>
                <div className="text-gray-600">More Frequent Classes</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of dedicated volunteers and help us bring quality education 
            to children who need it most, regardless of where they are in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => openAuth('register')}
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Become a Volunteer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => openAuth('register')}
              className="bg-green-500 text-white hover:bg-white hover:text-green-600 border-2 border-white text-lg px-8 py-6"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Shaoor</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting student volunteers with orphanages and rural schools through virtual classrooms, 
                breaking geographical barriers to education.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Volunteers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">How to Volunteer</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Community Service Clubs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Teaching Resources</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Volunteer Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Institutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Register Your Institution</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Virtual Classroom Setup</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Technical Requirements</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support & Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Shaoor. All rights reserved. Empowering education through virtual classrooms.</p>
              </div>
              <div className="flex items-center space-x-6 text-gray-400">
                <span className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  15+ Countries
                </span>
                <span className="flex items-center">
                  <School className="w-4 h-4 mr-2" />
                  50+ Institutions
                </span>
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  1,200+ Children
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </div>
  );
}