import React from 'react'

type BodyProps = {
  children?: React.ReactNode;
}

const Body = (props: BodyProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Body