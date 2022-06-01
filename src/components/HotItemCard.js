import '../styles/HotItemCard.css';

const HotItemCard = ({ name, price, image, index }) => {
    return (
        <div className="HotItemCard">
            <img src={image} alt={"product " + index} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    );
}

export default HotItemCard;