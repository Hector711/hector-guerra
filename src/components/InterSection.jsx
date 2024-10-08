import React, { forwardRef } from 'react';

const InterSection = forwardRef(({ quote, children, id }, ref) => {
  return (
    <section className='model-intersection' ref={ref} id={id}>
      {quote && <h5>{quote}</h5>}
      {children}
    </section>
  );
});

export default InterSection;
