import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BrandCard from '../components/BrandCard';
import OurPrices from '../components/OurPrices';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner></Banner>
      {/* our brands */}
      <div className="my-10">
        <h2 className="text-4xl font-semibold text-error text-center mb-10">
          Our Featured Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands?.map(brand => (
            <BrandCard key={brand.id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
      {/* our prices */}
      <OurPrices></OurPrices>
      {/* our newsletter */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
