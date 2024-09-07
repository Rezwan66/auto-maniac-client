import { Link, useLoaderData } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  // console.log(currentUserEmail);

  const loadedCartProducts = useLoaderData();
  const currentUserCart = loadedCartProducts.filter(
    product => product.email === currentUserEmail
  );
  const [cartProducts, setCartProducts] = useState(currentUserCart);
  // console.log(cartProducts);
  // subtotal calculation
  let subtotal = 0;
  cartProducts.forEach(p => {
    subtotal = subtotal + parseFloat(p.price);
  });
  // console.log(subtotal);

  // get cart products using tanstack query
  // const { data, isError, isFetching, isLoading, refetch } = useQuery({
  //   queryKey: ['cartData'],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       'https://auto-maniac-server.vercel.app/cartProducts'
  //     );
  //     const data = res.json();
  //     return data;
  //   },
  // });
  // console.log(data);

  const handleCheckout = () => {
    // console.log(subtotal + 1000);
    Swal.fire({
      title: 'Checkout?',
      text: `Pay $${subtotal + 1000} and confirm order?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, pay now!',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Paid!',
          text: 'Your order has been confirmed.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="my-10">
      <div className="min-h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Cart Items of {user.displayName}
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {cartProducts.length ? (
            <div className="rounded-lg md:w-2/3">
              {/* map here */}
              {cartProducts?.map(product => (
                <CartProductCard
                  key={product._id}
                  product={product}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                ></CartProductCard>
              ))}
            </div>
          ) : (
            <div className="rounded-lg md:w-2/3">
              <h2 className="text-4xl mb-6">No products selected</h2>
              <p>
                Add some products to your cart: 👉{' '}
                <Link to="/" className="btn btn-error text-white">
                  Home
                </Link>
              </p>
            </div>
          )}
          {/* right side total */}
          <div className="mt-6 h-full rounded-lg border border-gray-400 bg-transparent p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="">Subtotal</p>
              <p className="">${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="">Shipping</p>
              <p className="">${cartProducts.length ? 1000 : 0}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold ">Total</p>
              <div className="">
                <p className="mb-1 text-lg text-right font-bold ">
                  ${subtotal + (cartProducts.length ? 1000 : 0)} USD
                </p>
                <p className="text-sm ">including VAT</p>
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              onClick={() => handleCheckout()}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
