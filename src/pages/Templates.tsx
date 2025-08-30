
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import { useSecureDownload } from '@/hooks/useSecureDownload';
import { toast } from 'sonner';

const Templates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { downloadFile, downloading } = useSecureDownload();
  
  const categories = ['all', 'social-media', 'posters', 'brochures', 'banners', 'flyers', 'business-cards'];
  const categoryLabels = {
    'all': 'All Templates',
    'social-media': 'Social Media',
    'posters': 'Posters',
    'brochures': 'Brochures',
    'banners': 'Banners',
    'flyers': 'Flyers',
    'business-cards': 'Business Cards'
  };

  const templates = [
    {
      id: 1,
      title: "Christmas Winter Sale Flyer",
      category: "flyers",
      image: "/lovable-uploads/23104240-bd09-4e57-97c2-474c5461e861.png",
      downloads: 2150,
      format: "PSD",
      fileName: "Christmas-Winter-Sale-Flyer-PSD.zip",
      filePath: "Christmas-Winter-Sale-Flyer-PSD (1).zip"
    },
    {
      id: 2,
      title: "Food Restaurant Business Card Design",
      category: "business-cards",
      image: "/lovable-uploads/e42994b8-e753-4c7d-a9e0-3f056cefbf47.png",
      downloads: 1850,
      format: "PSD",
      fileName: "Food-Restaurant-Business-Card-Design-PSD.zip",
      filePath: "Food-Restaurant-Business-Card-Design-PSD.zip"
    },
    {
      id: 3,
      title: "Instagram Story Template",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      downloads: 1250,
      format: "PSD"
    },
    {
      id: 4,
      title: "Event Poster Template",
      category: "posters",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      downloads: 890,
      format: "PSD"
    },
    {
      id: 5,
      title: "Business Brochure",
      category: "brochures",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
      downloads: 567,
      format: "INDD"
    },
    {
      id: 6,
      title: "Facebook Cover Template",
      category: "social-media",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      downloads: 723,
      format: "PSD"
    },
    {
      id: 7,
      title: "Sale Banner Template",
      category: "banners",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      downloads: 445,
      format: "PSD"
    },
    {
      id: 8,
      title: "Product Poster",
      category: "posters",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      downloads: 312,
      format: "PSD"
    }
  ];

  const filteredTemplates = activeFilter === 'all' ? templates : templates.filter(template => template.category === activeFilter);

  const handleDownload = async (template) => {
    if (template.filePath && template.fileName) {
      await downloadFile(template.filePath, template.fileName, 'user-files');
    } else {
      toast.info(`${template.title} will be available for download soon!`);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Free Templates
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Download Free Design Templates</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            High-quality design templates for Photoshop and InDesign. Perfect for businesses, 
            personal projects, or learning purposes. All completely free to download and use.
          </p>
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

      {/* Templates Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <Card
                key={template.id}
                className="group hover-lift border-0 shadow-lg animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary">{template.format}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        className="bg-white text-primary hover:bg-gray-100"
                        onClick={() => handleDownload(template)}
                        disabled={downloading}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {downloading ? 'Preparing...' : 'Download Now'}
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{categoryLabels[template.category]}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {template.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                    <Button
                      className="w-full mt-4 hover-scale"
                      onClick={() => handleDownload(template)}
                      disabled={downloading}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {downloading ? 'Preparing...' : 'Free Download'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Design?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? I create custom designs tailored to your specific needs.
          </p>
          <Button size="lg" className="hover-scale">
            Request Custom Design
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Templates;
