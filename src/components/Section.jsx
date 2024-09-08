import React, { forwardRef } from 'react'

const Section = forwardRef(({ title, children, id }, ref) => {
 return (
    <section className='model' ref={ref} id={id}>
      <h3>{title}</h3>
      {children}
    </section>
  )
})


export default Section;