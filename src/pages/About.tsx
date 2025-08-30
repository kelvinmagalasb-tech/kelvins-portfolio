import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Download, Award, Users, BookOpen, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe InDesign", level: 90 },
    { name: "Adobe Illustrator", level: 88 },
    { name: "Web Development", level: 85 },
    { name: "UI/UX Design", level: 82 },
    { name: "Figma", level: 90 }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "1000+", label: "Projects Completed" },
    { icon: <BookOpen className="w-6 h-6" />, number: "300+", label: "Students Taught" },
    { icon: <Heart className="w-6 h-6" />, number: "5+", label: "Years Experience" }
  ];

  const services = [
    {
      title: "Graphics Design",
      description: "Creating stunning visual designs for print and digital media",
      features: ["Logo Design", "Branding", "Print Materials", "Digital Graphics"]
    },
    {
      title: "Web Development",
      description: "Building modern, responsive websites and web applications",
      features: ["Frontend Development", "Backend Systems", "E-commerce", "CMS Development"]
    },
    {
      title: "Education & Training",
      description: "Teaching design skills through comprehensive courses",
      features: ["Photoshop Training", "InDesign Courses", "One-on-One Mentoring", "Workshop Sessions"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                About Kelvin Magalas
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Creative Designer & <span className="text-yellow-300">Developer</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating beautiful designs and building amazing digital experiences. 
                I help businesses grow through strategic design and development solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
                  <Download className="mr-2 h-4 w-4" />
                  Download Portfolio
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
                  Get In Touch
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-up">
              <h2 className="text-4xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey into design began in 2018 when I discovered the power of visual communication. 
                  What started as curiosity quickly became a passion that has shaped my career and life.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working with diverse clients, 
                  from small startups to established businesses, helping them tell their stories through design.
                </p>
                <p>
                  Beyond client work, I'm deeply committed to education. Teaching design has become one of my 
                  greatest joys, watching students transform their ideas into professional creations.
                </p>
                <p>
                  Today, I continue to push boundaries in both design and development, constantly learning 
                  new technologies and techniques to deliver exceptional results.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in">
              <div className="relative">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8">
                  <img 
                    src="/lovable-uploads/5659ebec-1220-4e8a-8001-5242f0105af7.jpg" 
                    alt="Kelvin Magalas" 
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Creating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect my commitment to excellence
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-xl text-muted-foreground">
                Expertise in industry-leading tools and technologies
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive services to bring your vision to life
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in">
              <h2 className="text-4xl font-bold mb-8">My Design Philosophy</h2>
              <Card className="p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
                <CardContent className="p-0">
                  <blockquote className="text-2xl font-medium italic mb-6 leading-relaxed">
                    "Design is not just about making things look beautiful. It's about solving problems, 
                    telling stories, and creating experiences that connect with people on a deeper level."
                  </blockquote>
                  <div className="text-muted-foreground text-lg">
                    — Kelvin Magalas
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="font-bold text-xl mb-4">Purpose-Driven</h3>
                  <p className="text-muted-foreground">
                    Every design decision serves a purpose and contributes to the overall goal.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">User-Centered</h3>
                  <p className="text-muted-foreground">
                    Understanding the audience is key to creating designs that truly resonate.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4">Innovation</h3>
                  <p className="text-muted-foreground">
                    Constantly exploring new techniques and pushing creative boundaries.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover-scale">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-scale">
                View My Work
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;