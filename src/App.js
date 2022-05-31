import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './data/data.json';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';

function App() {
    return (
        <Router >
            <PreNavbar />
            <Navbar />
            <Slider start={data.banner.start} />
            <Offers offer={data.offer} />
            <Heading text="STAR PRODUCTS" />
            <StarProduct products={data.starProduct}/>
            <Heading text="HOT ACCESSORIES" />
        </Router>
    );
}

export default App;
