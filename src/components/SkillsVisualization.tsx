import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Code, Palette, Layers, Zap } from 'lucide-react';

export const SkillsVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      category: "Design Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
      items: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 82 }
      ]
    },
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      items: [
        { name: "React/Next.js", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 94 },
        { name: "Node.js", level: 80 },
        { name: "PHP/Laravel", level: 85 }
      ]
    },
    {
      category: "Creative Skills",
      icon: <Layers className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      items: [
        { name: "Brand Identity", level: 96 },
        { name: "UI/UX Design", level: 90 },
        { name: "Print Design", level: 88 },
        { name: "Motion Graphics", level: 75 },
        { name: "Photography", level: 80 }
      ]
    }
  ];

  const achievements = [
    { number: 150, label: "Projects Completed", icon: <Zap className="w-5 h-5" /> },
    { number: 98, label: "Client Satisfaction", suffix: "%", icon: <Palette className="w-5 h-5" /> },
    { number: 5, label: "Years Experience", icon: <Code className="w-5 h-5" /> },
    { number: 12, label: "Design Awards", icon: <Layers className="w-5 h-5" /> }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-responsive-xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Professional proficiency across design and development technologies
          </p>
        </AnimatedSection>

        {/* Achievements Stats */}
        <AnimatedSection animation="slide-up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    <AnimatedCounter 
                      end={achievement.number} 
                      suffix={achievement.suffix || ""} 
                      label=""
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <AnimatedSection key={groupIndex} animation="scale-in" delay={groupIndex * 0.2}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} text-white mr-4`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className="font-bold text-xl">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2"
                          style={{
                            transition: `all ${0.8 + skillIndex * 0.1}s ease-out ${0.5 + groupIndex * 0.2}s`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Radar Chart Placeholder */}
        <AnimatedSection animation="fade-in" delay={0.8} className="mt-12">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Overall Skill Assessment</h3>
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">A+</div>
                    <div className="text-sm text-muted-foreground">Overall Rating</div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Comprehensive skill set across design and development domains
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};