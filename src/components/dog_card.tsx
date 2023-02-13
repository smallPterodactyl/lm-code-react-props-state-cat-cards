import Dog from "../data/dog"
import DogImageProps from "./dog_image"


const DogCard : React.FC<DogCardProps> = (dogProps) => {
 
    return (
        <div className="card">
            <h3 className= "card__text  card__header" >{dogProps.dogObject.name}</h3>
            <p className= "card__text" >{dogProps.dogObject.species}</p>
            <p className= "card__text">{dogProps.dogObject.favFoods}</p>
            <p className="card__text">{dogProps.dogObject.birthYear}</p>
        </div>
    )
}

interface DogCardProps {
    dogObject: Dog;
}

export default DogCard;