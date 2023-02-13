
//import the images

import dachsund from '../assets/images/dogs/1519374 - dachsund.png'; 
import husky from '../assets/images/dogs/3380548 - husky.png'; 
import corgi from '../assets/images/dogs/3389729 - corgi.png'; 



const DogImage : React.FC <DogImageIDProp> = (imageID)=> {

    const dogImagePath : string = '../assets/images/dogs';
  
return (
   <>
   <img className= "card__image" src= {`dogImagePath${imageID}`} alt={"A cat in disguise"}/>
   </> 
)
  
}



interface DogImageIDProp {
    imageID: string;
}


export default DogImage

