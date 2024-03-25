import React from 'react'

const TabButton = ({children,isSlected,...props}) => {
  return (
    <li>
        <button className={ isSlected ? "active" : undefined} {...props}>{children}</button>
      
    </li>
  )
}

export default TabButton;
