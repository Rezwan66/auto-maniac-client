import { useParams } from 'react-router-dom';

const BrandProducts = () => {
  const brand = useParams();
  console.log(brand);
  return (
    <div>
      <h2>products</h2>
    </div>
  );
};

export default BrandProducts;
