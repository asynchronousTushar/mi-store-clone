import '../styles/ProductReviews.css';
import ProductReviewsCard from './ProductReviewsCard';

const ProductReviews = ({productReviews}) => {
    return ( 
        <div className="ProductReviews">
            {productReviews.map((item, index) => (
                <ProductReviewsCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={index} />
            ))}
        </div>
     );
}
 
export default ProductReviews;