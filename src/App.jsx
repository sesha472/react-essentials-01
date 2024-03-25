import Coreconcepts from "./Components/CoreConcepts";
import Header from "./Components/Headercomponent/Header";
import TabButton from "./Components/TabButton";
// import reactImg from './assets/react-core-concepts.png';
// import reactIMg2 from './assets/components.png';
import { CORE_CONCEPTS } from "./data";
import { Fragment, useState } from "react";

import CoreConcept from "./Components/CoreConcept";
import Examples from "./Components/Examples";

function App() {
 

  return (
    <>
      <Header />
     
      <main>
        <CoreConcept />
        <Examples/>
      </main>
    
    </>
  );
}

export default App;
