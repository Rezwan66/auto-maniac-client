const ProductCard = ({ product }) => {
  const { _id, image, name, brand, type, price, rating, description } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="cars" className="h-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brand}</p>
          <p>{type}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
