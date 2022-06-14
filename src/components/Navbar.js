import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z" /></svg>;

const Navbar = ({pathController}) => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/"><img src={data.logo} alt="Not" id="logoImage" /></Link>
            </div>
            <li className="navlink" onClick={() => pathController('/miphones')}>Mi Phones</li>
            <li className="navlink" onClick={() => pathController('/redmiphones')}>Redmi Phones</li>
            <li className="navlink" onClick={() => pathController('/tv')}>TV</li>
            <li className="navlink" onClick={() => pathController('/Laptops')}>Laptops</li>
            <li className="navlink" onClick={() => pathController('/lifestyle')}>Fitness & Lifestyle</li>
            <li className="navlink" onClick={() => pathController('/home')}>Home</li>
            <li className="navlink" onClick={() => pathController('/audio')}>Radio</li>
            <li className="navlink" onClick={() => pathController('/accessories')}>Accessories</li>
            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Products" />
                {searchIcon}
            </div>
        </div>
    );
}

export default Navbar;