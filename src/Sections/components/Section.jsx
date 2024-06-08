import React, { forwardRef } from 'react'

const Section = forwardRef(({ title, children }, ref) => {
 return (
    <section id='model' ref={ref}>
      <h3>{title}</h3>
      {children}
    </section>
  )
})


export default Section;