



 export default function Coreconcepts({image,title,description}){
    return(
      <li>
      <img src={image} alt={title}></img>
      <h1>{title}</h1>
      <p>{description}</p>
      </li>
      )
   }
   