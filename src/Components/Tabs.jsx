import React, { useState } from 'react';
import TabButton from './TabButton';




export default function Tabs({selectedTopic,onClickhandler,setselectedTopic,children}) {
    
  return (
    <>
    <menu>
        <TabButton
          isSlected={selectedTopic === "components"}
          onClick={() => onClickhandler("components")}
        >
          
          components
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "jsx"}
          onClick={() => onClickhandler("jsx")}
        >
          
          jsx
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "props"}
          onClick={() => onClickhandler("props")}
        >
          props
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "state"}
          onClick={() => onClickhandler("state")}
        >
          state
        </TabButton>
        <TabButton
          isSlected={selectedTopic === "reset"}
          onClick={() => setselectedTopic(null)}
        >
          reset
        </TabButton>
      </menu>
      {children}
    
      
    </>
  )
}
