import useLocalStorage from '@/hooks/useLocalStorage';
type thumbProps = {
  photo: Photo;
};

export const Thumbnail: React.FC<thumbProps> = ({ photo }) => {
  const [, setSelectedPhoto] = useLocalStorage('photo', null);
  const savePhoto = (currentPhoto: Photo) => () => {
    setSelectedPhoto(currentPhoto);
  };

  return (
    <div key="image.id">
      <a
        href="/photo/detail"
        onClick={savePhoto(photo)}
        className="hover:opacity-75 "
        target="_new"
      >
        <img
          className="w-full h-64 object-cover"
          src={photo.urls.small}
          alt={photo['alt_description']}
        />
      </a>
    </div>
  );
};
