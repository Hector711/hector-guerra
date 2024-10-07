import React, { forwardRef } from 'react';

const InterSection = forwardRef(({ title, children, id }, ref) => {
  return (
    <section className='model-intersection' ref={ref} id={id}>
      {title && <h4>{title}</h4>}
      {children}
    </section>
  );
});

export default InterSection;
