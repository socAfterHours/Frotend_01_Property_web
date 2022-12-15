type CardProps = {
    picture?: string;
    title?: string;
    description?: string;
    price?: number;
    rooms?: number;
    
    className?: string;
    id?: number;
};


const ContentCard = (props: CardProps) => {
    const { picture, title, description, price, rooms, id } = props;
    return (
    
         <div className="card">

            <div className="card__image">
                <img src={picture} alt={title} />
            </div>

            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
                <h5 className="card__price">{price}</h5>
                <h5 className="card__rooms">{rooms}</h5>
            </div>
        </div>
     
    )
}

export default ContentCard