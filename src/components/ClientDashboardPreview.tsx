import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  Monitor, 
  Download, 
  MessageCircle, 
  Calendar, 
  CheckCircle, 
  Clock, 
  FileText,
  Star,
  User,
  Bell
} from 'lucide-react';

export const ClientDashboardPreview = () => {
  const [activeProject, setActiveProject] = useState('logo-redesign');

  const projects = {
    'logo-redesign': {
      name: 'Logo Redesign Project',
      status: 'In Progress',
      progress: 75,
      client: 'Tech Startup Inc.',
      deadline: '2024-02-15',
      budget: '$1,200',
      statusColor: 'bg-blue-500'
    },
    'website-development': {
      name: 'Website Development',
      status: 'Review',
      progress: 90,
      client: 'Fashion Store',
      deadline: '2024-02-20',
      budget: '$2,800',
      statusColor: 'bg-orange-500'
    },
    'branding-package': {
      name: 'Complete Branding',
      status: 'Completed',
      progress: 100,
      client: 'Restaurant Chain',
      deadline: '2024-01-30',
      budget: '$1,800',
      statusColor: 'bg-green-500'
    }
  };

  const projectUpdates = [
    {
      id: 1,
      type: 'file',
      title: 'Logo Concepts v2.0',
      description: 'Updated logo concepts with color variations',
      time: '2 hours ago',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: 2,
      type: 'message',
      title: 'Designer Message',
      description: 'Please review the latest concepts and provide feedback',
      time: '4 hours ago',
      icon: <MessageCircle className="w-4 h-4" />
    },
    {
      id: 3,
      type: 'milestone',
      title: 'Milestone Completed',
      description: 'Initial concept phase completed',
      time: '1 day ago',
      icon: <CheckCircle className="w-4 h-4" />
    }
  ];

  const files = [
    { name: 'Logo_Final_v3.ai', type: 'Adobe Illustrator', size: '2.3 MB', date: '2024-02-10' },
    { name: 'Logo_Variations.png', type: 'PNG Image', size: '1.8 MB', date: '2024-02-10' },
    { name: 'Brand_Guidelines.pdf', type: 'PDF Document', size: '5.2 MB', date: '2024-02-08' },
    { name: 'Logo_Mockups.jpg', type: 'JPEG Image', size: '3.1 MB', date: '2024-02-08' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-background to-primary/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-responsive-xl font-bold mb-4 text-gradient">Client Dashboard Experience</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            See how clients track their projects, communicate, and access files through our intuitive dashboard
          </p>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <AnimatedSection animation="slide-up" delay={0.1}>
            <Card className="glass-card border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Welcome back, Sarah!</h3>
                      <p className="text-muted-foreground">Here's your project overview</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="hover-scale">
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                    </Button>
                    <Button variant="outline" size="sm" className="hover-scale">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Project List */}
            <AnimatedSection animation="slide-left" delay={0.2}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-primary" />
                    My Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(projects).map(([key, project]) => (
                    <div
                      key={key}
                      onClick={() => setActiveProject(key)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all hover-scale ${
                        activeProject === key ? 'border-primary bg-primary/5' : 'border-border hover:bg-accent/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{project.name}</h4>
                        <div className={`w-2 h-2 rounded-full ${project.statusColor}`}></div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={project.progress} className="h-1" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{project.progress}% Complete</span>
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Details */}
              <AnimatedSection animation="fade-in" delay={0.3}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{projects[activeProject].name}</span>
                      <Badge className={`${projects[activeProject].statusColor} text-white`}>
                        {projects[activeProject].status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-accent/50 rounded-lg">
                        <div className="font-bold text-lg">{projects[activeProject].progress}%</div>
                        <div className="text-xs text-muted-foreground">Progress</div>
                      </div>
                      <div className="text-center p-3 bg-accent/50 rounded-lg">
                        <div className="font-bold text-lg">{projects[activeProject].budget}</div>
                        <div className="text-xs text-muted-foreground">Budget</div>
                      </div>
                      <div className="text-center p-3 bg-accent/50 rounded-lg">
                        <div className="font-bold text-lg">5</div>
                        <div className="text-xs text-muted-foreground">Days Left</div>
                      </div>
                      <div className="text-center p-3 bg-accent/50 rounded-lg">
                        <div className="font-bold text-lg">12</div>
                        <div className="text-xs text-muted-foreground">Files</div>
                      </div>
                    </div>

                    <Progress value={projects[activeProject].progress} className="h-2 mb-4" />
                    
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="hover-scale">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale">
                        <Star className="w-4 h-4 mr-2" />
                        Rate Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Recent Files */}
              <AnimatedSection animation="slide-up" delay={0.4}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Project Files
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                              <FileText className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{file.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {file.type} • {file.size} • {file.date}
                              </div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="hover-scale">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Activity Feed */}
            <AnimatedSection animation="slide-right" delay={0.5}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projectUpdates.map((update) => (
                    <div key={update.id} className="flex items-start space-x-3 p-3 bg-accent/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        {update.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{update.title}</div>
                        <div className="text-xs text-muted-foreground mb-1">
                          {update.description}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {update.time}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" size="sm" className="w-full hover-scale">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Feature Highlights */}
          <AnimatedSection animation="fade-in" delay={0.6} className="mt-12">
            <Card className="glass-card border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Why Clients Love Our Dashboard</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Real-Time Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Track project progress and receive instant notifications
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Direct Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Message designer directly and schedule video calls
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Easy File Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Download files instantly and access project history
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};