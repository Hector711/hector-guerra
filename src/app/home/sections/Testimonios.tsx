import Section from '@/components/Section';
import testimoniosData from '@/json/testimonios.json';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { TestimoniosTypes } from '@/types';

const testimonios: Array<TestimoniosTypes> = testimoniosData;

export default function Testimonios() {
  return (
    <Section title='Testimonios' id='testimonios'>
      <ul id='testimoinos-container'>
        {testimonios.map((testimonio, index) => (
          <li key={index}>
            <article>
                <Stack direction='row' spacing={2}>
                  <Avatar
                    alt={testimonio.name}
                    src={testimonio.avatar}
                    sx={{ width: 70, height: 70 }}
                  />
                </Stack>
                <h3>{testimonio.name}</h3>
                <p>{testimonio.quote}</p>
                <a href={testimonio.link} target='_blank'>
                  {testimonio.business}
                </a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
