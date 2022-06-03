import { Carousel } from 'react-bootstrap';

const Banner = ({ banner }) => {
    return (
        <Carousel fade>
            {banner.map((item, index) => (
                <Carousel.Item key={index} interval={1000} keyboard={true} id="banner" >
                    <img src={item.image} alt={'banner ' + index} className="d-block w-100" id="bannerImage" />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>read more</u>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Banner;