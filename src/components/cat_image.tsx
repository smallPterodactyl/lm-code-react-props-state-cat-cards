
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

const CatImage : React.FC<CatImageProps> = ( 

    {image,
     altText,
     licenceUrl,
     licenceType,
     attributionName,
     attributionUrl
    }) => (
    <>

    <img className="card__image" src={image} alt={altText}
    />
    <p className="card__text__small">
        Image licensed under <a href={licenceUrl}>{licenceType}</a>
        {attributionName && (
            <>
                &nbsp;by <a href={attributionUrl}>
                    {attributionName} </a>
            </>
        )}
    </p>

    </>   


);

export default CatImage;