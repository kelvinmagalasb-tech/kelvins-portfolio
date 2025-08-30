
import React, { useEffect } from 'react';
import { getSecurityHeaders } from '@/utils/security';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider = ({ children }: SecurityProviderProps) => {
  useEffect(() => {
    // Add security headers to meta tags for CSP
    const addMetaTag = (name: string, content: string) => {
      const existingMeta = document.querySelector(`meta[http-equiv="${name}"]`);
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.httpEquiv = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    const headers = getSecurityHeaders();
    
    // Add CSP header
    addMetaTag('Content-Security-Policy', headers['Content-Security-Policy']);
    
    // Add other security headers as meta tags where applicable
    addMetaTag('X-Content-Type-Options', headers['X-Content-Type-Options']);
    addMetaTag('Referrer-Policy', headers['Referrer-Policy']);

    // Set secure cookie settings
    if (document.cookie) {
      document.cookie = document.cookie.replace(/(?:^|;\s*)([^=]+)=([^;]*)/g, 
        '$1=$2; Secure; SameSite=Strict');
    }
  }, []);

  return <>{children}</>;
};
