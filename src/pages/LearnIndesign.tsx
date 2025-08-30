
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Youtube, Book } from 'lucide-react';

const LearnIndesign = () => {
  const lessons = [
    {
      id: 1,
      title: "What is InDesign?",
      description: "Understanding InDesign's purpose in publishing and how to start your first layout project.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
      duration: "20 min",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Pages, Margins & Grids",
      description: "Set up professional layouts using grids, guides, and master pages for consistent design.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      duration: "30 min",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Working with Text",
      description: "Typography fundamentals, text frames, character and paragraph styles for professional layouts.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      duration: "35 min",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Images & Graphics",
      description: "Placing, linking, and managing images. Working with graphics for print and digital media.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      duration: "25 min",
      level: "Intermediate"
    },
    {
      id: 5,
      title: "Colors & Effects",
      description: "Color management, swatches, gradients, and applying effects for stunning visual impact.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      duration: "30 min",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "Print & Export",
      description: "Preparing files for print, creating PDFs, and exporting for various media formats.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      duration: "40 min",
      level: "Advanced"
    }
  ];

  const projects = [
    "Business Brochure Design",
    "Magazine Layout",
    "Book Cover & Interior",
    "Newsletter Template",
    "Annual Report",
    "Packaging Design"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              InDesign Course
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Adobe InDesign
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Learn professional page layout and design with Adobe InDesign. From beginner concepts 
              to advanced publishing techniques for print and digital media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Download INDD Files
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
                <Youtube className="mr-2 h-4 w-4" />
                View Tutorials
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="opacity-90">Detailed Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="opacity-90">Hours of Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="opacity-90">Project Files</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Content</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive curriculum designed for aspiring layout designers
            </p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {lessons.map((lesson, index) => (
              <Card key={lesson.id} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={lesson.image}
                        alt={lesson.title}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">Lesson {lesson.id}</Badge>
                        <Badge className={
                          lesson.level === 'Beginner' ? 'bg-green-500' :
                          lesson.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                        }>
                          {lesson.level}
                        </Badge>
                        <Badge variant="outline">{lesson.duration}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{lesson.title}</h3>
                      <p className="text-muted-foreground mb-4">{lesson.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Book className="mr-2 h-4 w-4" />
                          Read Guide
                        </Button>
                        <Button size="sm" variant="outline">
                          <Youtube className="mr-2 h-4 w-4" />
                          Watch Demo
                        </Button>
                        <Button size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Get Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80"
                alt="InDesign Layout"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hands-On Projects</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Apply your skills with real-world projects that build your portfolio and confidence.
              </p>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg">{project}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Download Project Files
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Layout Fundamentals</h3>
                <p className="text-muted-foreground">Master grid systems, typography, and visual hierarchy</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Print Production</h3>
                <p className="text-muted-foreground">Learn print setup, color management, and prepress</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Publishing</h3>
                <p className="text-muted-foreground">Create interactive PDFs and digital publications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your InDesign Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Master professional page layout and join the ranks of skilled designers and publishers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
              Access Free Course
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
              Download Sample Files
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnIndesign;
