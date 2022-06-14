import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import data from './data/data.json';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';
import { createContext, useState } from 'react';

export const PathContex = createContext()

function App() {

    const [path, setPath] = useState('')

    const pathController = path => {
        setPath(path)
    }

    return (
        <Router >
            <PathContex.Provider value={path} >
                <PreNavbar />
                <Navbar pathController={pathController} />
                <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

                <Slider start={data.banner.start} />
                <Offers offer={data.offer} />
                <Heading text="STAR PRODUCTS" />
                <StarProduct products={data.starProduct} />
                <Heading text="HOT ACCESSORIES" />
                <HotAccessoriesMenu />

                <Routes>
                    <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
                    <Route path="/smartdevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
                    <Route path="/" element={<HotAccessories home={data.hotAccessories.music} homeCover={data.hotAccessoriesCover.home} />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
                    <Route path="/mobileaccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
                </Routes>

                <Heading text="PRODUCT REVIEWS" />
                <ProductReviews productReviews={data.productReviews} />
                <Heading text="VIDEOS" />
                <Videos videos={data.videos} />
                <Heading text="IN THE PRESS" />
                <Banner banner={data.banner.end} />
                <Footer footer={data.footer} />
            </PathContex.Provider>
        </Router >
    );
}

export default App;
