import React from 'react';
import Section from '@/components/Section';
import testimonios from '@/json/testimonios.json';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Testimonios() {
  return (
    <Section title='Testimonios' id='testimonios'>
      <div>
        {testimonios.map((testimonio, index) => (
          <div key={index}>
            <Stack direction='row' spacing={2}>
              <Avatar
                alt={testimonio.name}
                src={testimonio.image}
                sx={{ width: 100, height: 100 }}
              />
            </Stack>
            <h3>{testimonio.name}</h3>
            <p>{testimonio.quote}</p>
            <img />
          </div>
        ))}
      </div>
    </Section>
  );
}
