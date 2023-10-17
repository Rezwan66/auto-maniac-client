import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { brand: name, image } = brand;
  return (
    <div>
      <Link to={`/brand/${name}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="h-40 w-1/2" src={image} alt="brands" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl justify-center">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
