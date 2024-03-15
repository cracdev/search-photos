import { Frame } from '@/components'
import useLocalStorage from '@/hooks/useLocalStorage'

export const PhotoDetail: React.FC = () => {
  const [photo] = useLocalStorage("photo", null);
  return (
    <main className="flex flex-col gap-8">
      <Frame>
        <div className="Photo">
            <figure className=" w-fit">
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </figure>
            <div className="flex mt-5">
            <h1 className="text-3xl my-5 mr-2">By {photo.user.username}</h1>
            <h2 className="font-semibold mb-5">❤️ {photo.likes}</h2>
            </div>
        </div>    
      </Frame>
    </main>
  )
}

