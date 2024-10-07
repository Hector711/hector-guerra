import React from 'react';
import Section from '@/components/Section';
import productos from '@/json/productos.json';
import RobotIcon from '@/icons/RobotIcon';
import WhatsAppIcon from '@/icons/social/WhatsAppIcon';
import InstagramIcon from '@/icons/social/InstagramIcon';
import FacebookIcon from '@/icons/social/FacebookIcon';
import OpenAIIcon from '@/icons/OpenAIIcon';
import NotionIcon from '@/icons/NotionIcon';
// import TelegramIcon from '@/icons/TelegramIcon'
import whatsappImage from '@/assets/whatsappImage.jpg';

export default function Productos() {
  const chatbot = productos[0];
  const crm = productos[1];
  const menus = productos[2];
  return (
    <Section title='Productos Estrella' id='productos-estrella'>
      <ul id='productos-container'>
        {chatbot && (
          <li key={0}>
            <article className='products-card'>
              <header>
                <RobotIcon />
                <h4>{chatbot.title}</h4>
              </header>
              <hr />
              <p>{chatbot.description}</p>
              <div className='icons-container'>
                <div className='item-center' id='openai-icon'>
                  <OpenAIIcon />
                  OpenAI
                </div>
                <div className='items-circle ' id='whatsapp-icon'>
                  <WhatsAppIcon />
                </div>
                <div className='items-circle ' id='instagram-icon'>
                  <InstagramIcon />
                </div>
                <div className='items-circle ' id='facebook-icon'>
                  <FacebookIcon />
                </div>
              </div>

                <a href={chatbot.url} target='_blank'>
                  Ver más
                </a>
            </article>
          </li>
        )}

        {crm && (
          <li key={0}>
            <article className='products-card'>
              <header>
                <RobotIcon />
                <h4>{crm.title}</h4>
              </header>
              <hr />
              <p>{crm.description}</p>
              <div className='icons-container'>
                <div className='item-center' id='openai-icon'>
                  <NotionIcon />
                </div>
                <div className='items-circle ' id='whatsapp-icon'>
                  <WhatsAppIcon />
                </div>
                <div className='items-circle ' id='instagram-icon'>
                  <InstagramIcon />
                </div>
                <div className='items-circle ' id='facebook-icon'>
                  <FacebookIcon />
                </div>
              </div>
              <figure>
                <img src={crm.image} alt={crm.title} />
              </figure>
            </article>
          </li>
        )}
      </ul>
    </Section>
  );
}
