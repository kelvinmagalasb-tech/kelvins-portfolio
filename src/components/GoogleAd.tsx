import React, { useEffect, useRef } from 'react';

interface GoogleAdProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export const GoogleAd: React.FC<GoogleAdProps> = ({
  slot = '6066759157273365',
  format = 'auto',
  responsive = true,
  className = '',
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading Google Ad:', error);
    }
  }, []);

  return (
    <div className={`google-ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6066759157273365"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        ref={adRef}
      />
    </div>
  );
};

export default GoogleAd;