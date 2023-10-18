import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="cars" className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <div className="flex justify-around items-center">
            <div>
              <p>
                <strong>Brand: </strong>
                {brand}
              </p>
              <p>
                <strong>Type of vehicle: </strong>
                {type}
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <strong>Price: </strong>
                <FaDollarSign></FaDollarSign>
                {price}
              </p>
              <p>
                <strong>Rating: </strong>
                {rating}
              </p>
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/product/${_id}`}>
              <button className="btn btn-info">Details</button>
            </Link>
            <Link to={`/edit/${_id}`}>
              <button className="btn btn-success">Update</button>
            </Link>
          </div>
          <div className="card-actions justify-center"></div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
