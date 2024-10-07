import * as React from "react"

function Category(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-category-2"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M14 4h6v6h-6zM4 14h6v6H4zM14 17a3 3 0 106 0 3 3 0 10-6 0M4 7a3 3 0 106 0 3 3 0 10-6 0" />
    </svg>
  )
}

export default Category
