import '../styles/StarProduct.css';

const StarProduct = ({ products }) => {
    return (
        <div className="starProduct">
            <div><a href={products[0].url} ><img src={products[0].image} alt="1st product" /></a></div>
            <div>
                <a href={products[1].url} ><img src={products[1].image} alt="1st product" /></a>
                <a href={products[2].url} ><img src={products[2].image} alt="1st product" /></a>
                <a href={products[3].url} ><img src={products[3].image} alt="1st product" /></a>
            </div>

        </div>
    );
}

export default StarProduct;