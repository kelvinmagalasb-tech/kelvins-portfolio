
import React from 'react';
import { MessageCircle, Star, User } from 'lucide-react';

export const LiveChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Enhanced Floating Animation Rings */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
      <div className="absolute inset-2 rounded-full bg-green-500 animate-pulse opacity-90"></div>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-spin opacity-30"></div>
      
      {/* Small Profile Image */}
      <div className="absolute -top-16 -left-16 animate-bounce">
        <div className="relative">
          <img 
            src="/lovable-uploads/5659ebec-1220-4e8a-8001-5242f0105af7.jpg" 
            alt="Kelvin Profile" 
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
      
      {/* Simple Description about Kelvin */}
      <div className="absolute -top-12 -left-8 bg-blue-600 text-white text-xs px-3 py-2 rounded-lg animate-bounce shadow-lg max-w-48">
        <div className="flex items-center gap-2">
          <User className="w-3 h-3" />
          <span>Professional Designer & Developer</span>
        </div>
      </div>
      
      {/* Main Chat Button */}
      <a 
        href="https://wa.me/255678469749" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50 group animate-pulse"
      >
        {/* WhatsApp Icon with chat indicator */}
        <div className="relative flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:rotate-12 transition-transform duration-300">
          <MessageCircle className="w-5 h-5 text-white" />
          {/* Small chat indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center animate-ping">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Chat Text */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-bold text-sm">Chat na Kelvin</span>
          <span className="text-xs opacity-90 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            Nipo sasa!
          </span>
        </div>
        
        {/* Mobile Text */}
        <span className="sm:hidden font-semibold text-sm">Chat Sasa!</span>
        
        {/* Enhanced Sparkle Effect */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
          <Star className="w-3 h-3 text-yellow-900" fill="currentColor" />
        </div>
        
        {/* Additional floating effect */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-green-300 rounded-full animate-pulse opacity-70"></div>
      </a>
    </div>
  );
};
