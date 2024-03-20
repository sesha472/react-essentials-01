
 import reactImg from '../../assets/react-core-concepts.png';
 import './Header.css';

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
        <h1>SESHA SAI React Essentials</h1>
        <p>
          {dynamicgenaraatoe} React concepts you will need for almost any app you are
          going to build!
        </p>
                   
      </header>
   )
 }


 export default Header;
       

