import React from 'react';
import { MessageSquare } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "94768118491"; // Formatted for WhatsApp URL
  const message = "Hello! I'm interested in importing a vehicle with RR MasterKey Motors.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={28} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
