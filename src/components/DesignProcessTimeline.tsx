import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Clock, CheckCircle, ArrowRight, Users, Palette, Code, Rocket } from 'lucide-react';

export const DesignProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Research",
      duration: "1-2 days",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Understanding your business, target audience, and project goals through detailed consultation.",
      activities: [
        "Client consultation & brief review",
        "Market research & competitor analysis",
        "Target audience identification",
        "Project scope definition"
      ],
      deliverables: ["Project Brief", "Research Report", "Timeline Proposal"]
    },
    {
      id: 2,
      title: "Creative Concept",
      duration: "2-3 days",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Developing initial concepts and visual direction based on research insights.",
      activities: [
        "Mood board creation",
        "Concept sketches & wireframes",
        "Style exploration",
        "Initial design concepts"
      ],
      deliverables: ["Mood Boards", "Concept Sketches", "Style Guide Draft"]
    },
    {
      id: 3,
      title: "Design Development",
      duration: "3-5 days",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Refining concepts into polished designs with your feedback and collaboration.",
      activities: [
        "High-fidelity design creation",
        "Interactive prototypes",
        "Client feedback integration",
        "Design iterations & refinements"
      ],
      deliverables: ["Design Mockups", "Interactive Prototypes", "Revision Rounds"]
    },
    {
      id: 4,
      title: "Finalization & Delivery",
      duration: "1-2 days",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Final touches, quality assurance, and comprehensive project delivery.",
      activities: [
        "Final design polish",
        "Quality assurance checks",
        "File preparation & organization",
        "Launch support & handover"
      ],
      deliverables: ["Final Design Files", "Brand Guidelines", "Launch Support"]
    }
  ];

  const totalDuration = "7-12 days";
  const averageProjects = "2-3 projects simultaneously";

  return (
    <section className="section-padding bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-responsive-xl font-bold mb-4 text-gradient">My Design Process</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto mb-6">
            A proven 4-step process ensuring exceptional results and smooth collaboration
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Total Duration: {totalDuration}
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              {averageProjects}
            </Badge>
          </div>
        </AnimatedSection>

        {/* Timeline Navigation */}
        <AnimatedSection animation="slide-up" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-center mb-8 gap-2">
            {processSteps.map((step, index) => (
              <Button
                key={step.id}
                variant={activeStep === index ? "default" : "outline"}
                onClick={() => setActiveStep(index)}
                className="flex-1 max-w-xs h-auto p-4 flex flex-col items-center gap-2 hover-scale"
              >
                <div className={`p-2 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm">{step.title}</div>
                  <div className="text-xs opacity-70">{step.duration}</div>
                </div>
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active Step Details */}
        <AnimatedSection animation="fade-in" delay={0.4} key={activeStep}>
          <Card className="glass-card border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${processSteps[activeStep].color} text-white mr-6`}>
                  {processSteps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{processSteps[activeStep].title}</h3>
                  <p className="text-muted-foreground">{processSteps[activeStep].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    Key Activities
                  </h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="w-4 h-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Rocket className="w-5 h-5 mr-2 text-primary" />
                    Deliverables
                  </h4>
                  <div className="space-y-2">
                    {processSteps[activeStep].deliverables.map((deliverable, index) => (
                      <Badge key={index} variant="secondary" className="block w-fit mb-2 px-3 py-2">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="hover-scale"
                >
                  Previous Step
                </Button>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    Step {activeStep + 1} of {processSteps.length}
                  </div>
                  <div className="font-semibold">{processSteps[activeStep].duration}</div>
                </div>
                
                <Button
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === processSteps.length - 1}
                  className="hover-scale"
                >
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="scale-in" delay={0.6} className="text-center mt-12">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and create something amazing together
              </p>
              <Button size="lg" className="hover-scale">
                Start Your Project Today
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};