import React, { useState } from 'react';




export default function Tabs({buttons,children ,ButtonContainer}) {
    
  return (
    <>
    <ButtonContainer>
       {buttons}
      </ButtonContainer>
      {children}
    
      
    </>
  )
}
