import { useEffect } from 'react';

export default function CalendlyButton({ children }) {
  const eventName = 'asesoria-gratuita-1-a-1';
  const backgroundColor = '101010';
  const textColor = 'ffffff';
  const primaryColor = '33c4ec';
  const cookiesBanner = 1;

  const calendlyUrl = `https://calendly.com/hector-guerra/${eventName}?hide_gdpr_banner=${cookiesBanner}&background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`;

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: calendlyUrl,
    });
    return false;
  };
  return (
    <a id='calendly-btn' href='#' onClick={handleClick}>
      {children}
    </a>
  );
}

{
  /* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/hector-guerra/asesoria-gratuita-1-a-1?text_color=5d3737&primary_color=3771c4'});return false;">Programe una reunión conmigo</a>
</link> */
}
