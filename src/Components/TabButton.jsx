import React from 'react'

const TabButton = ({children,handlerfunction,isSlected}) => {
  return (
    <li>
        <button className={ isSlected ? "active" : undefined} onClick={handlerfunction}>{children}</button>
      
    </li>
  )
}

export default TabButton;
