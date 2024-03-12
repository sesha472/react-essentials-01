
  import reactImg from './assets/react-core-concepts.png';
  // import reactIMg2 from './assets/components.png';
  import { CORE_CONCEPTS } from './data';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core','importent'];
function genrateRandomnumbers(max){
  let num = Math.floor(Math.random ()*(max));
  return num;
}
 
 const Header = () => {
  const dynamicgenaraatoe=reactDescriptions[genrateRandomnumbers(reactDescriptions.length)]
   return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicgenaraatoe} React concepts you will need for almost any app you are
          going to build!
        </p>
                   
      </header>
   )
 }
 

 function Coreconcepts(props){
  return(
    <li>
    <img src={props.img} alt={props.title}></img>
    <h1>{props.title}</h1>
    <p>{props.discrption}</p>
    </li>
    )
 }
 
 
function App() {
  return (
    <div>
      <Header/>
      <main>
       <section id='core-concepts'>
        <h2> Core concepts </h2>
        <ul>
          <Coreconcepts title={CORE_CONCEPTS[0].title} 
          discrption={CORE_CONCEPTS[0].description}
          img={CORE_CONCEPTS[0].image}/>

          <Coreconcepts title={CORE_CONCEPTS[1].title} 
          discrption={CORE_CONCEPTS[1].description}
          img={CORE_CONCEPTS[1].image}/>

          <Coreconcepts title={CORE_CONCEPTS[2].title} 
          discrption={CORE_CONCEPTS[2].description}
          img={CORE_CONCEPTS[3].image}/>
          
          <Coreconcepts title={CORE_CONCEPTS[3].title} 
          discrption={CORE_CONCEPTS[3].description}
          img={CORE_CONCEPTS[3].image}/>
          
          
        </ul>

       </section>
      </main>
    </div>
  );
}

export default App;
