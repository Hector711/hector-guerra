import Section from '@/components/Section';
import hectorImg from '@/assets/hector_img.jpg';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { EquipoTypes } from '@/types';
import equipoData from '@/json/equipo.json';

// Define un tipo para las claves de IMAGES
type ImageKeys = keyof typeof IMAGES;

const IMAGES = {
  hector_img: hectorImg,
  alvaro_img: 'alvaroImg',
};
const equipo = equipoData as EquipoTypes[];

export default function Equipo() {
  return (
    <Section id='equipo' title='Equipo'>
      <ul className='equipo-container'>
        {equipo.map((item, i) => (
          <li key={i}>
            <article className='equipo-card'>
              <header>


                  <Stack direction='row' spacing={2}>
                    <Avatar
                      alt='Remy Sharp'
                    src={IMAGES[item.img as ImageKeys]}
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
