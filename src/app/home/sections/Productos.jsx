import React from 'react';
import Section from '@/components/Section';
import productos from '@/json/productos.json';
import RobotIcon from '@/icons/RobotIcon';
import WhatsAppIcon from '@/icons/social/WhatsAppIcon';
import InstagramIcon from '@/icons/social/InstagramIcon';
import FacebookIcon from '@/icons/social/FacebookIcon';
import OpenAIIcon from '@/icons/OpenAIIcon';
import NotionIcon from '@/icons/NotionIcon';
import CalendlyIcon from '@/icons/CalendlyIcon';
import ArrowDownLeftIcon from '@/icons/ArrowDownLeftIcon';
import ArrowDownRightIcon from '@/icons/ArrowDownRightIcon';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ClientsIcon from '@/icons/ClientsIcon';
import PhoneIcon from '@/icons/PhoneIcon';

export default function Productos() {
  const chatbot = productos[0];
  const crm = productos[1];
  const menu = productos[2];
  return (
    <Section title='Productos Estrella' id='productos-estrella'>
      <ul id='productos-container'>
        {chatbot && (
          <li key={0} id='chatbots'>
            <article className='products-card'>
              <header>
                <RobotIcon />
                <h3>{chatbot.title}</h3>
              </header>
              <hr />
              <p>{chatbot.description}</p>
              <ChatbotSchema />
              {chatbot.url && (
                <a href={chatbot.url} target='_blank'>
                  Ver más
                </a>
              )}
            </article>
          </li>
        )}

        {crm && (
          <li key={0} id='crm'>
            <article className='products-card'>
              <header>
                <RobotIcon />
                <h3>{crm.title}</h3>
              </header>
              <hr />
              <p>{crm.description}</p>
              <CRMSchema />
              {chatbot.url && (
                <a href={chatbot.url} target='_blank'>
                  Ver más
                </a>
              )}
            </article>
          </li>
        )}

        {menu && (
          <li key={0} id='hosteleria'>
            <article className='products-card'>
              <header>
                <RobotIcon />
                <h3>{menu.title}</h3>
              </header>
              <hr />
              <p>{menu.description}</p>
              <HosteleriaSchema />
              {menu.url && (
                <a href={menu.url} target='_blank'>
                  Ver más
                </a>
              )}
            </article>
          </li>
        )}

        <li id='mas'>
          <article className='products-card'>
            <header>
              <h3>Y muchos más...</h3>
            </header>
            <hr />
            <p>
              Si no encuentras lo que buscas, contáctanos y te asesoraremos
              sobre la mejor opción para tu negocio.
            </p>
          </article>
        </li>
      </ul>
    </Section>
  );
}

function IconsCircleContainer() {
  return (
    <div className='icons-circle-container'>
      <div className='item-center' id='openai-icon'>
        <OpenAIIcon />
        IA Asistente
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
  );
}

function ChatbotSchema() {
  return (
    <div id='chatbot-schema'>
      <div className='box' id='assistant'>
        <OpenAIIcon />
        <p>Asistente IA</p>
      </div>
      <div id='arrows-container'>
        <ArrowDownLeftIcon />
        <ArrowDownIcon />
        <ArrowDownRightIcon />
      </div>
      <div id='apps-container'>
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
    </div>
  );
}

function CRMSchema() {
  return (
    <div id='crm-schema'>
      <div id='llamadas' className='box'>
        <CalendlyIcon />
        <p>Calendly</p>
      </div>
      <ArrowDownIcon />
      <div id='dashboard' className='box'>
        <NotionIcon />
        <p>Notion ( Dashboard )</p>
      </div>
      <ArrowDownIcon />
      <div id='ia'>
        <div className='box'>
          <OpenAIIcon />
          <p>IA</p>
        </div>
      </div>
      <div id='arrows-container'>
        <ArrowDownLeftIcon />
        <ArrowDownRightIcon />
      </div>
      <div id='apps-container'>
        <div className='items'>
          <ClientsIcon />
          <p>Clientes Cualificados</p>
        </div>
        <div className='items'>
          <WhatsAppIcon />
          <p>Mensajes automatizados</p>
        </div>
      </div>
    </div>
  );
}

function HosteleriaSchema() {
  return (
    <div id='hosteleria-schema'>
      <div id='apps-container'>
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
      <div id='arrows-container'>
        <ArrowDownRightIcon />
        <ArrowDownIcon />
        <ArrowDownLeftIcon />
      </div>
      <div className='box' id='assistant'>
        <OpenAIIcon />
        <p>Asistente IA</p>
      </div>
      <ArrowDownIcon />
      <div id='dashboard'>
        <p>Reservas</p>
      </div>
      <ArrowDownIcon />
      <div id='dashboard' className='box'>
        <NotionIcon />
        <p>Notion ( Dashboard )</p>
      </div>
      <ArrowDownIcon />
      <div id='dashboard' className='box'>
        <PhoneIcon />
        <p>Carta (Menú QR)</p>
      </div>
    </div>
  );
}
