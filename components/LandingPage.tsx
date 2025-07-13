'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Video, Heart, ArrowRight, Globe, MapPin, Clock, Target, CheckCircle, Star, School, Laptop, Facebook, Instagram } from 'lucide-react';
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
    <div className="min-h-screen" style={{ backgroundColor: '#F6F4F0' }}>
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
                <h1 className="text-2xl font-bold text-gray-900 font-big-john tracking-wide">Shaoor</h1>
                <p className="text-base font-bold font-noto-arabic" style={{ color: '#2C3838' }}>چلو ساتھ پڑھتے ہیں</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => openAuth('login')}
                className="text-gray-700 px-6 py-2 font-medium transition-all duration-200"
                style={{ 
                  '--hover-bg': '#F6F4F0',
                  '--hover-text': '#2C3838'
                } as any}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6F4F0';
                  e.currentTarget.style.color = '#2C3838';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => openAuth('register')}
                className="text-white px-6 py-2 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{ 
                  backgroundColor: '#2C3838',
                  '--hover-bg': '#1f2a2a'
                } as any}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2a2a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2C3838';
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#F6F4F0' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#2C3838', color: '#F6F4F0', opacity: 0.9 }}>
              <Heart className="w-4 h-4" />
              <span>Connecting Hearts Through Education</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-big-john">
              Virtual Classrooms for 
              <span style={{ color: '#2C3838' }}> Those</span> <span className="text-gray-900">Who</span> 
              <span style={{ color: '#2C3838' }}> Need It</span>
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
                className="text-white text-lg px-8 py-6 transition-all duration-200"
                style={{ backgroundColor: '#2C3838' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2a2a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2C3838';
                }}
              >
                Start Volunteering Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openAuth('register')}
                className="text-lg px-8 py-6 border-2 transition-all duration-200"
                style={{ 
                  borderColor: '#2C3838',
                  color: '#2C3838'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F6F4F0';
                  e.currentTarget.style.color = '#2C3838';
                  e.currentTarget.style.borderColor = '#2C3838';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2C3838';
                  e.currentTarget.style.borderColor = '#2C3838';
                }}
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
      <section className="py-20" style={{ backgroundColor: '#2C3838' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-big-john" style={{ color: '#F6F4F0' }}>
                Who We Are
              </h2>
              <p className="text-xl" style={{ color: '#F6F4F0' }}>
                Bridging the gap between willing hearts and eager minds
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-big-john" style={{ color: '#F6F4F0' }}>The Challenge</h3>
                <p className="mb-6 leading-relaxed" style={{ color: '#F6F4F0' }}>
                  Community service clubs and student volunteers typically visit orphanages and small schools 
                  only 1-2 times per month. Many remote orphanages and rural schools, especially those in 
                  far-away locations, struggle to access these valuable educational opportunities due to 
                  geographical constraints.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 font-big-john" style={{ color: '#F6F4F0' }}>Our Solution</h3>
                <p className="leading-relaxed" style={{ color: '#F6F4F0' }}>
                  Shaoor creates virtual classrooms that connect orphanages and rural schools (with special 
                  focus on female-only and remote institutions) with student volunteers from around the world. 
                  Through our platform, volunteers can teach and interact with children regularly, 
                  providing consistent educational support that transcends physical boundaries.
                </p>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(to bottom right, rgba(79, 102, 66, 0.15), rgba(79, 102, 66, 0.25))' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: '#2C3838' }} />
                      <div className="font-semibold text-gray-900">Remote Access</div>
                      <div className="text-sm text-gray-600">Reach any location</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Clock className="w-8 h-8 mx-auto mb-2" style={{ color: '#2C3838' }} />
                      <div className="font-semibold text-gray-900">Regular Classes</div>
                      <div className="text-sm text-gray-600">Beyond monthly visits</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Globe className="w-8 h-8 mx-auto mb-2" style={{ color: '#2C3838' }} />
                      <div className="font-semibold text-gray-900">Global Volunteers</div>
                      <div className="text-sm text-gray-600">Worldwide participation</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Target className="w-8 h-8 mx-auto mb-2" style={{ color: '#2C3838' }} />
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
      <section className="py-20" style={{ backgroundColor: '#F6F4F0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-big-john">
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
                  <School className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-big-john">Connect Institutions</CardTitle>
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-big-john">Recruit Volunteers</CardTitle>
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-big-john">Enable Virtual Learning</CardTitle>
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
      <section className="py-20" style={{ backgroundColor: '#2C3838' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-big-john" style={{ color: '#F6F4F0' }}>
              How It Works
            </h2>
            <p className="text-xl" style={{ color: '#F6F4F0' }}>
              Simple steps to make a lasting impact
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#2C3838' }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-big-john" style={{ color: '#F6F4F0' }}>Register & Verify</h3>
                  <p style={{ color: '#F6F4F0' }}>
                    Volunteers sign up through their community service clubs or universities. 
                    Institutions register to join our network of virtual classrooms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#2C3838' }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-big-john" style={{ color: '#F6F4F0' }}>Create Virtual Classrooms</h3>
                  <p style={{ color: '#F6F4F0' }}>
                    We set up dedicated virtual classrooms for each partnered institution, 
                    equipped with all necessary tools for interactive learning.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#2C3838' }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-big-john" style={{ color: '#F6F4F0' }}>Schedule & Teach</h3>
                  <p style={{ color: '#F6F4F0' }}>
                    Volunteers schedule classes and teach children across multiple institutions simultaneously, 
                    providing regular educational support beyond traditional monthly visits.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#2C3838' }}>
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-big-john" style={{ color: '#F6F4F0' }}>Track Impact</h3>
                  <p style={{ color: '#F6F4F0' }}>
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
      <section className="py-20" style={{ backgroundColor: '#F6F4F0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-big-john">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Transforming lives through accessible education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Countries Reached</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
                  <School className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">75%</div>
                <div className="text-gray-600">Female-Only Institutions</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2C3838' }}>
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
      <section className="py-20" style={{ backgroundColor: '#2C3838' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 font-big-john">
            Ready to Make a Difference?
          </h2>
                      <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F6F4F0' }}>
            Join our community of dedicated volunteers and help us bring quality education 
            to children who need it most, regardless of where they are in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => openAuth('register')}
              className="text-lg px-8 py-6 transition-all duration-200"
              style={{ 
                backgroundColor: '#F6F4F0',
                color: '#2C3838'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F0F0D0';
                e.currentTarget.style.color = '#2C3838';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F6F4F0';
                e.currentTarget.style.color = '#2C3838';
              }}
            >
              Become a Volunteer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => openAuth('register')}
              className="text-lg px-8 py-6 border-2 transition-all duration-200"
              style={{ 
                backgroundColor: '#2C3838',
                color: '#F6F4F0',
                borderColor: '#F6F4F0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F6F4F0';
                e.currentTarget.style.color = '#2C3838';
                e.currentTarget.style.borderColor = '#F6F4F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2C3838';
                e.currentTarget.style.color = '#F6F4F0';
                e.currentTarget.style.borderColor = '#F6F4F0';
              }}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#2C3838' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F6F4F0' }}>
                  <Image 
                    src="/images/shaoor_black.png" 
                    alt="Shaoor Logo" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold font-big-john">Shaoor</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting student volunteers with orphanages and rural schools through virtual classrooms, 
                breaking geographical barriers to education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-colors cursor-pointer" 
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F6F4F0'} 
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F6F4F0'} 
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F6F4F0'} 
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}>
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-big-john">For Volunteers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>How to Volunteer</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Community Service Clubs</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Teaching Resources</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Volunteer Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-big-john">For Institutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Register Your Institution</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Virtual Classroom Setup</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Technical Requirements</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-big-john">Support & Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Help Center</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Contact Us</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Privacy Policy</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#F6F4F0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Shaoor. All rights reserved. Empowering education through virtual classrooms.</p>
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