
  import Coreconcepts from './Components/CoreConcepts';
import Header from './Components/Headercomponent/Header';
import TabButton from './Components/TabButton';
// import reactImg from './assets/react-core-concepts.png';
  // import reactIMg2 from './assets/components.png';
  import { CORE_CONCEPTS } from './data';
  import { useState } from 'react';
  import { EXAMPLES } from './data';

 

  
 
function App() {
  const [selectedTopic, setselectedTopic] = useState(null);

  function onClickhandler(selctedbutton){
    setselectedTopic(selctedbutton);
  }


  return (
    <div>

      <Header/>
      <main>
       <section id='core-concepts'>
             <h2> Core concepts </h2>

      <ul>
        {CORE_CONCEPTS.map((item)=>(
              <Coreconcepts key={item.title}  {...item}/>)
                          )

        }
          </ul>
          
          
        

       </section>
       <section id="examples">
        <h2>examples</h2>
        <menu>
        <TabButton isSlected={ selectedTopic === 'components'} handlerfunction={()=>onClickhandler('components')}> components</TabButton>
        <TabButton isSlected={ selectedTopic === 'jsx'} handlerfunction={()=>onClickhandler('jsx')}> jsx</TabButton>
        <TabButton  isSlected = {selectedTopic ==='props'}handlerfunction={()=>onClickhandler('props')}> props</TabButton>
        <TabButton isSlected={selectedTopic === 'state'} handlerfunction={()=>onClickhandler('state')}> state</TabButton>
        <TabButton isSlected={selectedTopic === 'reset'} handlerfunction={()=>setselectedTopic(null)}> reset</TabButton>


        </menu>

        
          <p>
            {selectedTopic}
          </p>
          
          <div id='tab-content'>
            {(selectedTopic ===null )? <h3>please selct the topic</h3>:( <>
            <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}

              </code>
            </pre>
            </>)}
           

          </div>

        
 

        
       </section>
      </main>
    </div>
  );
}

export default App;
