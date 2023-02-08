//Note slightly different props syntax: we pass props
//explicitly here by naming them

interface CatImageProps {
    image: string;
    altText: string;
    licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}


//TS function using React library with a React-type interace
const CatImage : React.FC<CatImageProps> = ( 
    
    //JS parameters passed to an arrow function: these
    // define recognised props of the React FC

    {image, altText}) => (

    <>

    <img
        className='card__image' src={image} alt={altText}
    /> 

    </>   


);

export default CatImage;