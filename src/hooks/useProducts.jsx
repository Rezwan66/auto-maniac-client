import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://auto-maniac-server.vercel.app/products').then(res =>
        res.json()
      ),
  });

  return { isPending, error, products };
};
export default useProducts;
