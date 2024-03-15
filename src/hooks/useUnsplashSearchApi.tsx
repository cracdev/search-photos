import * as React from 'react';
import axiosInstance from '$services/axios/api';
import { API_KEY, IMAGES_PER_PAGE, OFFSET_SPACE } from '$constants/api';

type Props = {
  initialQuery: string;
};

export default function useUnsplashSearchApi({ initialQuery }: Props) {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [page, setPage] = React.useState<number>(2);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [params, setParams] = React.useState('');
  const [totalPages, setTotalPages] = React.useState<number>(0);
  
  const fetchData = React.useCallback(async () => {
    if (isLoading || isError) return;
    setIsLoading(true); //Set loading state upfront
    if (page <= totalPages){
      try {
          const query = params || initialQuery
          const { data } = await axiosInstance.get(`search/photos/?page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}&${query}`);  
          setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
          setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsError(true);
      }
    }
    setIsLoading(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, page]);
  

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true); // Set loading state upfront
      try {
        const query = params || initialQuery
        const { data } = await axiosInstance.get(`search/photos/?page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}&${query}`);
        setPhotos(data.results);
        setTotalPages(data["total_pages"])
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  // Handle infinite scroll and request more images
  React.useLayoutEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - OFFSET_SPACE) {
        fetchData()
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchData]);

  return [{photos, isLoading, isError, setParams}];
}
