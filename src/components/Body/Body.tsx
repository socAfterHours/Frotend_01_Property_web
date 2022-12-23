import React from 'react'

type BodyProps = {
  children: React.ReactNode;
}

const Body = (props: BodyProps) => {
  return (
    <div className='bg-light min-h-[100vh]'>{props.children}</div>
  )
}

export default Body