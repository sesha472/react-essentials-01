import React, { useState } from "react";
import { EXAMPLES } from "../data";

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
       selectedTopic={selectedTopic} 
       onClickhandler={onClickhandler}
       setselectedTopic={setselectedTopic} >
       
     {tabcontent}

      </Tabs>
     
      

      

    </Section>
  );
};

export default Examples;
