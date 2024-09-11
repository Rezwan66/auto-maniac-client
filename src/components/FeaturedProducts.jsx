import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ products }) => {
  //   console.log(products);
  const featured = products?.filter(product => product.rating > '4.6');
  console.log(featured);
  return (
    <>
      <div className="my-20 mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold underline text-center mb-10">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* {featured?.map(item => (
            <ProductCard key={item._id} product={item}></ProductCard>
          ))} */}
        </div>
        <Swiper
          slidesPerView={4}
          rewind={true}
          spaceBetween={30}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds (2 seconds here)
            disableOnInteraction: true, // Autoplay continues after user interaction
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSwiper={swiper => {
            swiper.el.onmouseenter = () => swiper.autoplay.stop();
            swiper.el.onmouseleave = () => swiper.autoplay.start();
          }}
        >
          {featured?.map(item => (
            <SwiperSlide key={item._id}>
              <Link to={`/product/${item._id}`} className="flex-1">
                <ProductCard product={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default FeaturedProducts;
