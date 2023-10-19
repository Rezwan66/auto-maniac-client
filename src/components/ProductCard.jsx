import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating } = product || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="cars" className="h-80 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl text-rose-500">
            {name}
          </h2>
          <div className="flex justify-between items-center text-gray-600 my-5">
            <div>
              <p>
                <strong>Brand: </strong>
                {brand}
              </p>
              <p>
                <strong>Type: </strong>
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
                {rating} stars
              </p>
            </div>
          </div>
          <div className="card-actions justify-center gap-2">
            <Link to={`/product/${_id}`} className="flex-1">
              <button className="btn btn-info text-white w-full">
                Details
              </button>
            </Link>
            <Link to={`/edit/${_id}`} className="flex-1">
              <button className="btn btn-success text-white w-full">
                Update
              </button>
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
