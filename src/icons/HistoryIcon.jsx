import * as React from "react"

function HistoryIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M12 8v4l2 2" />
      <path d="M3.05 11a9 9 0 11.5 4m-.5 5v-5h5" />
    </svg>
  )
}

export default HistoryIcon
