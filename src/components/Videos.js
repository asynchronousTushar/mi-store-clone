import '../styles/Videos.css';
import VideoCard from './VideoCard';

const Videos = ({videos}) => {
    return ( 
        <div className="Videos">
            {videos.map((item, index) => (
                <VideoCard name={item.name}  image={item.image} index={index} key={index} />
            ))}
        </div>
     );
}
 
export default Videos;