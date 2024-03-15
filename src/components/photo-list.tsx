import { Thumbnail } from './thumbnail';

type props = {
  list: Photo[];
};

export const PhotoList: React.FC<props> = ({ list }) => {
  return (
    <div id="photos" className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
      {list.map((photo: Photo) => (
        <Thumbnail key={photo.id} photo={photo} />
      ))}
    </div>
  );
};