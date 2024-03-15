import { Frame, Hero, Search, PhotoList, Loader} from '@/components'
import useUnsplashSearchApi from '@/hooks/useUnsplashSearchApi';

export const Home: React.FC = () => {
  const [{photos, isLoading, isError , setParams}] = useUnsplashSearchApi({initialQuery:'query=cats'});

  return (
    <main className="flex flex-col gap-8">
      <Frame>
        <Hero />
        <Search setParams={setParams} isError={isError}  />
        {isLoading && <Loader /> }
        <PhotoList list={photos} />
      </Frame>
    </main>
  )
}

