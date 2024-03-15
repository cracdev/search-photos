import { Frame, Hero, Search, PhotoList, Loader} from '@/components'
import useUnsplashSearchApi from '@/hooks/useUnsplashSearchApi';

export const Home: React.FC = () => {
  const [{photos, isLoading, isError , setParams}] = useUnsplashSearchApi({initialQuery:'query=cats'});

  return (
    <main className="flex flex-col gap-6">
      <Frame>
        <Hero />
        <Search setParams={setParams} isError={isError}  />
        <div className="m-2 text-center">
          {isLoading && <Loader /> }
        </div>
        <PhotoList list={photos} />
      </Frame>
    </main>
  )
}

