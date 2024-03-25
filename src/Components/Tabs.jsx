import React, { useState } from 'react';




export default function Tabs({buttons,children ,ButtonContainer="menu"}) {
    
  return (
    <>
    <ButtonContainer>
       {buttons}
      </ButtonContainer>
      {children}
    
      
    </>
  )
}
