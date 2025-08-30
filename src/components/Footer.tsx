import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Star, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GoogleAd } from '@/components/GoogleAd';
export const Footer = () => {
  return <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Magalas B
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Professional graphic design, web development, and creative education by Kelvin Magalas. 
                Transforming ideas into stunning visuals since 2020.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="border-blue-400 text-blue-400">100+ Designs Created</Badge>
                <Badge variant="outline" className="border-green-400 text-green-400">
                  100+ Happy Clients
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/my-designs" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">My Designs</Link></li>
                <li><Link to="/templates" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Free Templates</Link></li>
                <li><Link to="/learn/photoshop" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Learn Photoshop</Link></li>
                <li><Link to="/learn/indesign" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Learn InDesign</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">magalasdesigner@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-sm">+255 698 109 585</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span className="text-sm">Dar es Salaam, Tanzania</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="font-semibold text-white">Magalas B by Kelvin</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with ❤️ for creative excellence
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://instagram.com/kelvinmagalas" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/50" title="Follow on Instagram">
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://youtube.com/@KelvinMagalas" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50" title="Subscribe on YouTube">
                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://wa.me/255698109585" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/50" title="Chat on WhatsApp">
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Trusted by businesses across Tanzania</p>
              <div className="flex justify-center items-center gap-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                <span className="text-gray-300 text-sm ml-2">5.0 Client Rating</span>
              </div>
            </div>
          </div>
          
          {/* Google AdSense */}
          <div className="mt-8 w-full">
            <GoogleAd adSlot="6066759157273365" adFormat="auto" className="mx-auto max-w-4xl" />
          </div>
        </div>
      </div>
    </footer>;
};