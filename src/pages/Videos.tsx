
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Youtube } from 'lucide-react';

const Videos = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'photoshop', 'indesign', 'canva', 'tutorials'];
  
  const categoryLabels = {
    'all': 'All Videos',
    'photoshop': 'Photoshop',
    'indesign': 'InDesign',
    'canva': 'Canva',
    'tutorials': 'General Tutorials'
  };

  const videos = [
    {
      id: 1,
      title: "Photoshop Basics: Getting Started",
      category: "photoshop",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      duration: "15:32",
      views: "12.5K",
      description: "Learn the fundamentals of Photoshop interface and basic tools"
    },
    {
      id: 2,
      title: "InDesign Layout Design Masterclass",
      category: "indesign",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
      duration: "22:45",
      views: "8.9K",
      description: "Professional magazine layout design from start to finish"
    },
    {
      id: 3,
      title: "Canva Pro Tips & Tricks",
      category: "canva",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      duration: "18:20",
      views: "15.2K",
      description: "Advanced Canva techniques for professional designs"
    },
    {
      id: 4,
      title: "Advanced Photo Retouching",
      category: "photoshop",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      duration: "28:15",
      views: "9.7K",
      description: "Professional portrait retouching techniques"
    },
    {
      id: 5,
      title: "Typography in Design",
      category: "tutorials",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      duration: "12:30",
      views: "6.8K",
      description: "How to choose and use typography effectively"
    },
    {
      id: 6,
      title: "Creating Print-Ready Files",
      category: "indesign",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      duration: "20:10",
      views: "7.3K",
      description: "Prepare your designs for professional printing"
    }
  ];

  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Video Tutorials
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn Through Video</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Watch comprehensive video tutorials covering Photoshop, InDesign, Canva, and general design principles. 
            All tutorials are available on my YouTube channel.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white hover-scale"
            onClick={() => window.open('https://www.youtube.com/@KelvinMagalas', '_blank')}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Subscribe to YouTube Channel
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="hover-scale"
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <Card 
                key={video.id} 
                className="group hover-lift cursor-pointer border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open('https://www.youtube.com/@KelvinMagalas', '_blank')}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Youtube className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{categoryLabels[video.category]}</Badge>
                      <span className="text-sm text-muted-foreground">{video.views} views</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                      <Youtube className="mr-2 h-4 w-4" />
                      Watch on YouTube
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">YouTube Channel Stats</h2>
            <p className="text-xl text-muted-foreground">
              Growing community of design enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Videos</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Subscribers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Total Views</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Comments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to my YouTube channel for weekly design tutorials, tips, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white hover-scale"
              onClick={() => window.open('https://www.youtube.com/@KelvinMagalas', '_blank')}
            >
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 hover-scale"
              onClick={() => window.open('https://www.instagram.com/kelvinmagalas', '_blank')}
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
