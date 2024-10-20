import { forwardRef } from 'react';
import { PropsTypes } from '@/types';

const Section = forwardRef<HTMLDivElement, PropsTypes>(({ title, children, id }, ref) => {
  return (
    <section className='model' ref={ref} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
});

export default Section;
