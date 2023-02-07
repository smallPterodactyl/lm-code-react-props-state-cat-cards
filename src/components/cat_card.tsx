import Cat from '../data/cat';

//This is the interface used to render whatever is in
// props and CatCard. Props is the data, CatCard delivers it.
// Props is a single interface that could be called anything.

const CatCard : React.FC<CatCardProps> = (props) => (

  /*<div className="card">
    <h3 className= "card__text  card__header" >{props.name}</h3>
      <p className= "card__text" >{props.species}</p>
      <p className= "card__text">{props.favFoods}</p>
      <p className="card__text">{props.birthYear}</p>

  </div>
)

  interface CatCardProps {
    name: string;
    species: string;
    favFoods: Array <string>;
    birthYear: number;
  } 

  */

  <div className="card">
    <h3 className= "card__text  card__header" >{props.catObject.name}</h3>
      <p className= "card__text" >{props.catObject.species}</p>
      <p className= "card__text">{props.catObject.favFoods}</p>
      <p className="card__text">{props.catObject.birthYear}</p>

  </div>
)

  //This is a more concise interface to 'transport' Cat;
  // it doesn't duplicate prop naming here, and keeps Cat definition
  // in one file!
  interface CatCardProps {
    catObject:Cat;
  }
  

export default CatCard;