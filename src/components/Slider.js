import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
    return (
        <Carousel fade>
           {start.map((item , index) => (
                <Carousel.Item key={index}> 
                <img
                    className="d-block w-100"
                    src={item}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
           ))}
        </Carousel>
    );
}

export default Slider;