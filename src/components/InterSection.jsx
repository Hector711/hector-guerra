import React, { forwardRef } from 'react';

const InterSection = forwardRef(({ quote, children, id }, ref) => {
  return (
    <section className='model-intersection' ref={ref} id={id}>
      {quote && <h4>{quote}</h4>}
      {children}
    </section>
  );
});

export default InterSection;
