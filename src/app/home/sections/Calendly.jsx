import React, { useEffect, useRef } from 'react';
import calendlyData from '@/json/calendly.json';
import Section from '@/components/Section';
export default function Calendly() {
  const calendlyRef = useRef(null);
  const { eventName, backgroundColor, textColor, primaryColor, cookiesBanner } =
    calendlyData;

  const calendlyUrl = `https://calendly.com/hector-guerra/${eventName}?hide_gdpr_banner=${cookiesBanner}&background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section id='calendly-section'>
      <div
        className='calendly-inline-widget '
        id='calendly-widget'
        data-url={calendlyUrl}
        // style={{ minWidth: '100%', height: 'max-content' }}
        ref={calendlyRef}
      ></div>
    </Section>
  );
}
