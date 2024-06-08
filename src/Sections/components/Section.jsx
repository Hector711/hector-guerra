import React from 'react'

export default function Section({title, children}) {
  return (
    <section id='model'>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
