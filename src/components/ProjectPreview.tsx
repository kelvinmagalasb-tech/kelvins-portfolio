import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, User, Tag } from 'lucide-react';

interface ProjectPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    client: string;
    year: string;
    tags: string[];
    description?: string;
    liveUrl?: string;
  };
}

export const ProjectPreview = ({ open, onOpenChange, project }: ProjectPreviewProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Project Image */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <p className="text-muted-foreground">
                {project.description || 
                  "This is a detailed view of the project showcasing the design process, challenges faced, and solutions implemented. The project demonstrates creative problem-solving and technical expertise."}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-medium">Client:</span>
                <span className="text-muted-foreground">{project.client}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">Year:</span>
                <span className="text-muted-foreground">{project.year}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="font-medium">Category:</span>
                <span className="text-muted-foreground capitalize">{project.category.replace('-', ' ')}</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {project.liveUrl && (
              <Button 
                variant="default" 
                className="mt-4 w-full"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live Site
              </Button>
            )}
          </div>
        </div>
        
        {/* Additional Project Images or Content could be added here */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-muted rounded-md overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/random/300x200?design&sig=${project.id}${item}`}
                  alt={`${project.title} gallery ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};