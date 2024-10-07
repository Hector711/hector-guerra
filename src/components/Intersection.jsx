import React, { forwardRef } from 'react';

const Intersection = forwardRef(({ title, children, id }, ref) => {
  return (
    <section className='model-intersection' ref={ref} id={id}>
      <h4>{title}</h4>
      {children}
    </section>
  );
});

export default Intersection;
