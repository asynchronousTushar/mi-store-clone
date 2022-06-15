import '../styles/NavCard.css';
import { Fade } from 'react-awesome-reveal';


const NavCard = ({ image, index, name, price }) => {
    return (
        <Fade>
            <div className="NavCard">
                <img src={image} alt={`${index} phone`} />
                <p>{name}</p>
                <span>{price}</span>
            </div>
        </Fade>

    );
}

export default NavCard;