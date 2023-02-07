//Note slightly different props syntax: we pass props
//explicitly here by naming them

const CatImage : React.FC<CatImageProps> = ({catImg,altText}) => 
(
    <img className="card__image" src={catImg} alt={altText}></img>
)


interface CatImageProps {
    catImg: string;
    altText: string;
}

export default CatImage;