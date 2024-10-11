import React from 'react';
import Section from '@/components/Section';
import equipo from '@/json/equipo.json';
import hectorImg from '@/assets/hector_img.jpg';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const IMAGES = {
  hector_img: hectorImg,
  // alvaro_img: alvaroImg,
};

export default function Equipo() {
  return (
    <Section id='equipo' title='Equipo'>
      <ul className='equipo-container'>
        {equipo.map(item => (
          <li key={item.id}>
            <article className='equipo-card'>
              <header>


                  <Stack direction='row' spacing={2}>
                    <Avatar
                      alt='Remy Sharp'
                    src={IMAGES[item.img]}
                    sx={{ width: 75, height: 75 }}
                  />
                </Stack>

                <div className='header-container'>
                  <div className='title-container'>
                    <h3>{item.name} </h3>
                    <span className='label'>{item.label}</span>
                  </div>
                  <p>{item.rol}</p>
                </div>
              </header>
              <hr />
              <p>{item.description}</p>
              <a href={item.link} target='_blank'>Conoce más...</a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
