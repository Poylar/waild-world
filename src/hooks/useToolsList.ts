import useSwr from 'swr';

import fetcher from '@/lib/fetcher';
// http://localhost:1337/api/tools?filters[categories][Name][$eq]=Design&populate=*
const useTools = () => {
  const { data, error, isLoading } = useSwr(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tools`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useTools;
