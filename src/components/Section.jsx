import React, { forwardRef } from 'react';

const Section = forwardRef(({ title, children, id }, ref) => {
  return (
    <section className='model' ref={ref} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
});

export default Section;
