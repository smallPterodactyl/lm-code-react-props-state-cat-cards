
const DogImage : React.FC <DogImageIDProp> = ({imageID})=> {

    const imageSource = require (`../assets/images/dogs/${ imageID }.png`);

    
    return (
        <>
            <img 
                className= "card__image"
                src= { imageSource } 
                alt={"A cat in disguise"}/>
            <p className="card__text__small">
              Teeny weeny letters on photos with attribution details  
            </p>   
        </> 
    )
  
}

interface DogImageIDProp {
    imageID: string;
}

export default DogImage

