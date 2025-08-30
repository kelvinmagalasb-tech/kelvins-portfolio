
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { UserMenu } from '@/components/UserMenu';
import logoImage from '@/assets/logo.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/my-designs', label: 'Portfolio' },
    { path: '/templates', label: 'Templates' },
    { path: '/videos', label: 'Videos' },
    { path: '/contact', label: 'Contact' }
  ];

  const servicesItems = [
    { path: '/services/graphics-design', label: 'Graphics Design' },
    { path: '/services/web-development', label: 'Web Development' },
    { path: '/services/system-development', label: 'System Development' }
  ];

  const learningItems = [
    { path: '/learn/photoshop', label: 'Photoshop' },
    { path: '/learn/indesign', label: 'InDesign' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center hover:scale-110 transition-all duration-500 hover-glow group">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Magalas Designer" 
                className="h-12 md:h-14 lg:h-16 w-auto object-contain rounded-xl shadow-lg border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="font-medium text-foreground hover:text-primary transition-colors duration-200">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {servicesItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Learning Dropdown */}
            <div className="relative group">
              <button className="font-medium text-foreground hover:text-primary transition-colors duration-200">
                Learn
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {learningItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Section */}
            {user ? (
              <UserMenu />
            ) : (
              <Button asChild variant="outline">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            {user ? (
              <UserMenu />
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-effect border-t border-border/50 animate-slide-down">
            <div className="container-padding py-4 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 min-h-[48px] flex items-center touch-manipulation ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10 border border-primary/20 shadow-lg' 
                      : 'text-foreground hover:text-primary hover:bg-accent/50 active:scale-95'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-4">
                <div className="text-sm font-bold text-primary mb-3 px-4">Our Services</div>
                <div className="space-y-2">
                  {servicesItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/30 transition-all duration-300 rounded-xl min-h-[44px] flex items-center touch-manipulation active:scale-95"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Learning Section */}
              <div className="pt-4">
                <div className="text-sm font-bold text-primary mb-3 px-4">Learn Design</div>
                <div className="space-y-2">
                  {learningItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/30 transition-all duration-300 rounded-xl min-h-[44px] flex items-center touch-manipulation active:scale-95"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 px-4">
                <Button asChild className="w-full min-h-[48px] rounded-xl text-base font-medium">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
