import React from 'react';

function SocialIcons() {
  const socialLinks = [
    { name: 'Facebook', icon: '/images/meta-logo.svg', url: 'https://www.facebook.com/IkamvaYouth/' },
    { name: 'Twitter', icon: '/images/x-twitter-icon.svg', url: 'https://x.com/IkamvaYouthSA?mx=2' },
    { name: 'Instagram', icon: '/images/instagram-logo.svg', url: 'https://www.instagram.com/ikamvayouthsa/' },
    { name: 'LinkedIn', icon: '/images/linkedin-logo.svg', url: 'https://www.linkedin.com/company/ikamvayouth' },
    { name: 'YouTube', icon: '/images/youtube-logo.svg', url: 'https://www.youtube.com/channel/UCHSB_94cKlLQkZ9rP3TQ9gA/videos' },
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt={link.name} style={{width: '24px', height: '24px', marginRight: '8px'}} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;