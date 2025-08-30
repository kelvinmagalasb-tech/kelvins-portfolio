import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Download, Youtube, Book, Play, Clock, Star } from 'lucide-react';

const LearnPhotoshop = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Photoshop",
      description: "Learn Photoshop interface and create your first canvas. Understanding the workspace, tools panel, and basic navigation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      duration: "15 min",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Tools & Layers",
      description: "Explore essential tools like Move, Lasso, Magic Wand, and master working with layers for professional results.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      duration: "25 min",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Selections & Masks",
      description: "Master selection tools and layer masks to create precise edits and professional composites.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      duration: "30 min",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Color Correction & Adjustment",
      description: "Learn professional color grading, exposure correction, and artistic color effects.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
      duration: "35 min",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Text & Typography",
      description: "Create stunning text effects, work with fonts, and design eye-catching typography.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      duration: "20 min",
      level: "Beginner"
    },
    {
      id: 6,
      title: "Professional Retouching",
      description: "Advanced techniques for portrait retouching, object removal, and photo restoration.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      duration: "45 min",
      level: "Advanced"
    }
  ];

  const features = [
    "6+ Comprehensive Video Lessons",
    "Downloadable Practice Files",
    "Step-by-Step Written Guides",
    "Real Project Examples",
    "Lifetime Access to Updates",
    "Community Support Forum"
  ];

  const tools = [
    "Adobe Photoshop CC",
    "Layer Management",
    "Selection Tools",
    "Color Correction",
    "Text Effects",
    "Photo Retouching"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Star className="w-4 h-4 mr-2" />
                Premium Photoshop Course
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Master <span className="text-yellow-300">Photoshop</span> Like a Pro
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
                From complete beginner to professional designer. Learn Photoshop with hands-on projects, 
                real-world examples, and step-by-step guidance from industry expert Kelvin Magalas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
                  <Download className="mr-2 h-4 w-4" />
                  Download Course Materials
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Free Preview
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="scale-in" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="opacity-90">Video Lessons</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="opacity-90">Hours Content</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Practice Files</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="opacity-90">Lifetime Access</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-up">
              <h2 className="text-4xl font-bold mb-6">Why Learn Photoshop?</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Photoshop is the industry standard for digital image editing and graphic design. 
                  Whether you're a photographer, designer, or creative professional, mastering Photoshop opens endless possibilities.
                </p>
                <p>
                  This comprehensive course takes you from complete beginner to confident user, 
                  covering everything from basic tools to advanced techniques used by professionals worldwide.
                </p>
                <p>
                  Learn at your own pace with lifetime access to all materials, updates, and community support.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                  alt="Photoshop Interface"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-xl text-muted-foreground">
              Structured learning path from basics to advanced techniques
            </p>
          </AnimatedSection>
          
          <div className="grid gap-6 max-w-5xl mx-auto">
            {lessons.map((lesson, index) => (
              <AnimatedSection key={lesson.id} animation="slide-up" delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img 
                          src={lesson.image}
                          alt={lesson.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="bg-white text-primary hover:bg-gray-100">
                            <Play className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">Lesson {lesson.id}</Badge>
                          <Badge className={
                            lesson.level === 'Beginner' ? 'bg-green-500 hover:bg-green-600' :
                            lesson.level === 'Intermediate' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                            'bg-red-500 hover:bg-red-600'
                          }>
                            {lesson.level}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lesson.duration}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{lesson.title}</h3>
                        <p className="text-muted-foreground mb-4">{lesson.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" className="hover-scale">
                            <Book className="mr-2 h-4 w-4" />
                            Study Guide
                          </Button>
                          <Button size="sm" variant="outline" className="hover-scale">
                            <Youtube className="mr-2 h-4 w-4" />
                            Video Lesson
                          </Button>
                          <Button size="sm" className="hover-scale">
                            <Download className="mr-2 h-4 w-4" />
                            Practice Files
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Topics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You'll Master</h2>
            <p className="text-xl text-muted-foreground">
              Essential Photoshop tools and techniques covered in this course
            </p>
          </AnimatedSection>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 0.1}>
                <Badge 
                  variant="secondary" 
                  className="text-lg px-6 py-3 hover-scale bg-primary/10 text-primary border-primary/20"
                >
                  {tool}
                </Badge>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Photoshop Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students who have transformed their creative skills with this comprehensive Photoshop course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Get Full Course Access
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
                <Play className="mr-2 h-4 w-4" />
                Try Free Lessons
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-2 text-sm opacity-75">
              <Star className="w-4 h-4 fill-current" />
              <span>Lifetime access • No subscription • Learn at your pace</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LearnPhotoshop;