import '../styles/HotAccessories.css';
import HotItemCard from './HotItemCard.js';

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="cover" />
            </div>

            {/* ------------2nd----------- */}

            <div>
                {music && music.map((item, index) => (
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))}
                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))}
                {home && home.map((item, index) => (
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))}
                {lifestyle && lifestyle.map((item, index) => (
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))}
                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={item.index} />
                ))}

                <HotItemCard image={"https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"}  />
            </div>
        </div>
    );
}

export default HotAccessories;