import { useState, useEffect, useContext } from "react";
import NavCard from "./NavCard";
import '../styles/NavOptions.css';
import { PathContex } from "../App";
import { Fade } from 'react-awesome-reveal';

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories, pathController }) => {
    const [toggler, setToggler] = useState({
        miPhoneToggle: false,
        redmiPhoneToggle: false,
        tvToggle: false,
        laptopToggle: false,
        fitnessToggle: false,
        homeToggle: false,
        audioToggle: false,
        accessoriesToggle: false
    });

    const path = useContext(PathContex);

    useEffect(() => {
        switch (path) {
            case '/miphones':
                setToggler({
                    miPhoneToggle: true
                })
                break;
            case '/redmiphones':
                setToggler({
                    redmiPhoneToggle: true
                })
                break;
            case '/tv':
                setToggler({
                    tvToggle: true
                })
                break;
            case '/laptops':
                setToggler({
                    laptopToggle: true
                })
                break;
            case '/lifestyle':
                setToggler({
                    fitnessToggle: true
                })
                break;
            case '/home':
                setToggler({
                    homeToggle: true
                })
                break;
            case '/audio':
                setToggler({
                    audioToggle: true
                })
                break;
            case '/accessories':
                setToggler({
                    accessoriesToggle: true
                })
                break;


            default:
                setToggler({
                    homeToggle: true
                })
        }
    }, [path])

    return (
        <Fade>
            <div className="navOptions">
                {toggler.miPhoneToggle ? miPhones.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}


                {toggler.redmiPhoneToggle ? redmiPhones.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}


                {toggler.tvToggle ? tv.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}

                {toggler.laptopToggle ? laptop.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}



                {toggler.fitnessToggle ? fitnessAndLifeStyle.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}


                {toggler.homeToggle ? home.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}



                {toggler.audioToggle ? audio.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}


                {toggler.accessoriesToggle ? accessories.map((item) => (

                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}

            </div>
        </Fade>
    );
}

export default NavOptions;