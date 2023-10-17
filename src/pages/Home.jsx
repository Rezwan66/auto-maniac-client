import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BrandCard from '../components/BrandCard';

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner></Banner>
      {/* our brands */}
      <div className="mt-10">
        <h2 className="text-4xl font-semibold text-error text-center mb-10">
          Our Featured Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands?.map(brand => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
