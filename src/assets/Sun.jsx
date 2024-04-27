import * as React from "react"

export default function Sun(props) {
  return (
    <svg
      width={30}
      height={30}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
    </svg>
  )
}

