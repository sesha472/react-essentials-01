import React, { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from './TabButton';
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setselectedTopic] = useState(null);
  function onClickhandler(selctedbutton) {
    setselectedTopic(selctedbutton);
  }

  let tabcontent=<><p>{selectedTopic}</p>

  <div id="tab-content">
    {selectedTopic === null ? (
      <h3>please selct the topic</h3>
    ) : (
      <>
        <h3> {EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    )}
  </div></>
  return (
    <Section  id="examples" title="Examples">
      <Tabs 
      // ButtonContainer={Section}//we can use any custom identifier tag 
      // ButtonContainer="menu"
      buttons={<>
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
        </>} 
        >
       

      </Tabs>



     {tabcontent}

     
      

      

   </Section>
  );
};

export default Examples;
